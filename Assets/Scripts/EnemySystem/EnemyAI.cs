using System;
using System.Collections;
using DG.Tweening;
using Pathfinding;
using UnityEngine;
using Random = UnityEngine.Random;

public class EnemyAI : Human
{
    [Header("Detection & Combat")]
    public float detectionRadius    = 4f;
    public float attackRange        = 1.1f;
    public float attackRate         = 1f;    // attacks per second
    public float attackDamage       = 5f;
    [Tooltip("Seconds before the hit actually lands (wind‑up)")]
    public float attackWindupTime   = 0.1f;
    [Tooltip("Total length of your attack clip (seconds)")]
    public float attackAnimDuration = 1f;

    [Header("References")]
    public Animator anim;

    [HideInInspector] public Transform player;
    public AIDestinationSetter dstSetter;
    [HideInInspector] public AIPath            aiPath;
    private            int               playerMask;
    [HideInInspector] public float           nextAttackTime;

    private IState currentState;
    [HideInInspector] public bool   isDie = false;
    [HideInInspector] public Transform spawnPoint;
    public static event Action<EnemyAI> OnEnemyDeath;
    
    [Header("Spawn & Scatter Settings")]
    [Tooltip("How many to spawn each burst")]
    public int spawnCount = 4;

    [Tooltip("Horizontal spread (XZ) when they scatter on the toss")]
    public float randomXZRange = 1f;

    [Tooltip("How high they fly up")]
    public float throwUpHeight = 2f;

    [Tooltip("Time to go up")]
    public float upDuration = 0.5f;

    [Tooltip("Time to come back down")]
    public float downDuration = 0.5f;
    void Start()
    {
        dstSetter     = GetComponent<AIDestinationSetter>();
        aiPath        = GetComponent<AIPath>();
        playerMask    = LayerMask.GetMask("Player");
        nextAttackTime = 0f;

        // start in Idle
        TransitionTo(new IdleState(this));
    }

  

    void Update()
    {
        if (isDie)
        {
            aiPath.canMove = false;
            return;
        }

        // refresh player reference each frame
        var hits = Physics.OverlapSphere(transform.position, detectionRadius, playerMask);
        player   = hits.Length > 0 ? hits[0].transform : null;
        // delegate all logic to current state
        currentState.Update();
    }

    public void TransitionTo(IState newState)
    {
        currentState?.Exit();
        currentState = newState;
        currentState.Enter();
    }

    public void OnDeath()
    {
        if (isDie) return;
        isDie = true;
        anim.SetTrigger("die");
        dstSetter.stopMe();

        for (int i = 0; i < spawnCount; i++)
        {
            // 1) Spawn
            var obj = PoolingManager.Instance.SpawnObject(
                "meat",
                transform.position,
                Quaternion.identity
            );

            obj.GetComponent<Collider>().enabled = false;
            // 2) Cache its start position
            Vector3 startPos = obj.transform.position;

            // 3) Pick a random XZ offset
            float rx = Random.Range(-randomXZRange, randomXZRange);
            float rz = Random.Range(-randomXZRange, randomXZRange);
            Vector3 scatterOffset = new Vector3(rx, 0f, rz);

            // 4) Compute apex/world positions
            Vector3 apexPos   = startPos + scatterOffset + Vector3.up * throwUpHeight;
            Vector3 settlePos = startPos + scatterOffset;

            // 5) Build the tween
            Sequence seq = DOTween.Sequence();
            seq.Append(obj.transform.DOMove(apexPos, upDuration)
                .SetEase(Ease.OutQuad));
            seq.Append(obj.transform.DOMove(settlePos, downDuration)
                .SetEase(Ease.OutBounce));

            seq.AppendCallback(() =>
            {
                obj.GetComponent<Collider>().enabled = true;

            });
            // (optional) if you want each spawn staggered:
            // seq.PrependInterval(i * 0.1f);
        }

        StartCoroutine(DeathSequence());

    }


    IEnumerator DeathSequence()
    {
        yield return new WaitForSeconds(2);
        transform.DOScale(0f, 0.5f);
        yield return new WaitForSeconds(0.5f);
        // let any spawner know “this guy died”
        OnEnemyDeath?.Invoke(this);

        // put this enemy back in its pool
        PoolingManager.Instance.PutObjBackInQueue("enemy", gameObject);
    }
    // —— State interface and implementations ——


    public interface IState
    {
        void Enter();
        void Update();
        void Exit();
    }


    class IdleState : IState
    {
        private readonly EnemyAI ai;
        public IdleState(EnemyAI ai) { this.ai = ai; }

        public void Enter()
        {
            ai.aiPath.canMove = false;
            
            if(ai.dstSetter.target != null)
                ai.dstSetter.RemoveTarget();
            
            ai.anim.ResetTrigger("walk");
            ai.anim.ResetTrigger("attack");
            ai.anim.SetTrigger("idle");
        }

        public void Update()
        {
            if (ai.player == null)
                return; // stay idle

            float dist = Vector3.Distance(ai.transform.position, ai.player.position);

            if (dist > ai.detectionRadius)
            {
                // still out of detection → remain idle
                return;
            }
            else if (dist > ai.attackRange)
            {
                ai.TransitionTo(new ChaseState(ai));
            }
            else if (Time.time >= ai.nextAttackTime)
            {
                ai.TransitionTo(new AttackState(ai));
            }
            // else: in range but waiting for cooldown, stay idle
        }

        public void Exit() { /* nothing to clean up */ }
    }


    class ChaseState : IState
    {
        private readonly EnemyAI ai;
        public ChaseState(EnemyAI ai) { this.ai = ai; }

        public void Enter()
        {
            ai.aiPath.canMove = true;
            ai.dstSetter.AddTarget(ai.player);
            ai.anim.ResetTrigger("idle");
            ai.anim.ResetTrigger("attack");
            ai.anim.SetTrigger("walk");
        }

        public void Update()
        {
            if (ai.player == null)
            {
                ai.TransitionTo(new IdleState(ai));
                return;
            }

            float dist = Vector3.Distance(ai.transform.position, ai.player.position);

            if (dist > ai.detectionRadius)
            {
                ai.TransitionTo(new IdleState(ai));
            }
            else if (dist <= ai.attackRange && Time.time >= ai.nextAttackTime)
            {
                ai.TransitionTo(new AttackState(ai));
            }
            // else: keep chasing
        }

        public void Exit()
        {
            if(ai.dstSetter.target != null)
                ai.dstSetter.RemoveTarget();
        }
    }


    class AttackState : IState
    {
        private readonly EnemyAI ai;
        private float            attackStartTime;
        private bool             hasHit;

        public AttackState(EnemyAI ai) { this.ai = ai; }

        public void Enter()
        {
            ai.aiPath.canMove = false;  
            if(ai.dstSetter.target != null)
                ai.dstSetter.RemoveTarget();
            ai.anim.ResetTrigger("walk");
            ai.anim.ResetTrigger("idle");
            ai.anim.SetTrigger("attack");

            attackStartTime = Time.time;
            hasHit         = false;
            // schedule next cooldown now
            ai.nextAttackTime = attackStartTime + 1f / ai.attackRate;
        }

        public void Update()
        {
            float elapsed = Time.time - attackStartTime;

            // 1) Wind‑up: apply damage once
            if (!hasHit && elapsed >= ai.attackWindupTime)
            {
                hasHit = true;
                var dmg = ai.player?.GetComponent<IDamageable>();
                if (dmg != null)
                    dmg.TakeDamage(ai.attackDamage);
            }

            // 2) End of attack anim: transition to next state
            if (elapsed >= ai.attackAnimDuration)
            {
                float dist = ai.player == null
                    ? float.MaxValue
                    : Vector3.Distance(ai.transform.position, ai.player.position);

                if (ai.player == null || dist > ai.detectionRadius)
                    ai.TransitionTo(new IdleState(ai));
                else if (dist > ai.attackRange)
                    ai.TransitionTo(new ChaseState(ai));
                else
                    ai.TransitionTo(new IdleState(ai));  // rest until cooldown
            }
        }

        public void Exit() { /* nothing special */ }
    }
    
}

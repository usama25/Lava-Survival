using System.Collections.Generic;
using DG.Tweening;
using GameAssets.GameSet.GameDevUtils.Managers;
using UnityEngine;

public class PlayerAttack : MonoBehaviour
{
    [Header("Detection")]
    [Tooltip("How far the player can ‘see’ enemies.")]
    public float detectionRadius = 10f;

    [Header("Arc Attack")]
    [Tooltip("Radius of your melee swing.")]
    public float attackArcRange = 3f;
    [Tooltip("Degrees of the swing cone (e.g. 360, 180, 90).")]
    [Range(0, 360)]
    public float attackArcAngle = 120f;
    [Tooltip("Damage dealt per swing.")]
    public float attackDamage = 10f;

    [Header("Knockback")]
    [Tooltip("How far to push enemies back.")]
    public float knockbackDistance = 3f;
    [Tooltip("How long the knockback tween lasts.")]
    public float knockbackDuration = 0.2f;

    [Header("Timing")]
    [Tooltip("Seconds between swings.")]
    public float fireRate = 1f;

    [Header("References")]
    [Tooltip("The Animator that has your swing animation trigger.")]
    public Animator animatorController;
    [Tooltip("What actually turns to face the target.")]
    public Transform playerModel;
    
    public ParticleSystem attackVfx;
   
    int    enemyMask;
    float  nextFireTime;
    bool   isEnemyInRange;
    Transform currentTarget;
   
    void Start()
    {
        enemyMask    = LayerMask.GetMask("Enemy");
        nextFireTime = 0f;
    }

    void Update()
    {
        if (GetComponent<PlayerController>().isDie)
            return;
        // 1) Collect all alive enemies in detection
        Collider[] hits = Physics.OverlapSphere(
            transform.position, detectionRadius, enemyMask
        );

        var alive = new List<Transform>();
        foreach (var c in hits)
        {
            var ai = c.GetComponent<EnemyAI>();
            if (ai != null && !ai.isDie)
                alive.Add(c.transform);
        }

        // 2) Update targeting & rotation
        if (alive.Count > 0)
        {
            isEnemyInRange = true;
            currentTarget  = GetClosest(alive);
        }
        else
        {
            isEnemyInRange = false;
            currentTarget  = null;
        }
        RotatePlayerModel();

        // 3) Swing if we can
        if (isEnemyInRange && Time.time >= nextFireTime)
        {
            nextFireTime = Time.time + fireRate;
            PerformArcAttack(alive);
        }
    }

    Transform GetClosest(List<Transform> list)
    {
        Transform best = null;
        float    minD = float.MaxValue;
        foreach (var t in list)
        {
            float d = Vector3.Distance(transform.position, t.position);
            if (d < minD)
            {
                minD = d;
                best = t;
            }
        }
        return best;
    }

    void RotatePlayerModel()
    {
        if (isEnemyInRange && currentTarget != null)
        {
            Vector3 dir = currentTarget.position - playerModel.position;
            dir.y = 0;
            if (dir.sqrMagnitude > 0.001f)
                playerModel.rotation = Quaternion.LookRotation(dir.normalized);
        }
        else
        {
            playerModel.rotation = transform.rotation;
        }
    }

    void PerformArcAttack(List<Transform> enemies)
    {
        animatorController.SetTrigger("shoot");
        attackVfx.Play();
        Vector3 origin  = playerModel.position;
        Vector3 forward = playerModel.forward;

        foreach (var e in enemies)
        {
            Vector3 toE = e.position - origin;
            toE.y = 0;

            if (toE.magnitude <= attackArcRange)
            {
                float angle = Vector3.Angle(forward, toE.normalized);
                if (angle <= attackArcAngle * 0.5f)
                {
                    // 1) Damage
                    var dmg = e.GetComponent<IDamageable>();
                    if (dmg != null)
                        dmg.TakeDamage(attackDamage);
                    
                    SoundManager.Instance.PlayOneShot(SoundManager.Instance.attackClip,1);
                    if(ArrowPointer.Instance.currentTargetIndex == 0)
                        ArrowPointer.Instance.MoveToNextTarget();
                    // 2) Knockback
                    Vector3 pushDir = toE.normalized;
                    Vector3 endPos  = e.position + pushDir * knockbackDistance;
                    e.DOMove(endPos, knockbackDuration)
                     .SetEase(Ease.OutQuad);
                }
            }
        }
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireSphere(transform.position, detectionRadius);

        if (playerModel != null)
        {
            Gizmos.color = Color.red;
            Vector3 orig = playerModel.position;
            Vector3 fwd  = playerModel.forward;
            float half   = attackArcAngle * 0.5f;
            Quaternion leftRot  = Quaternion.Euler(0, -half, 0);
            Quaternion rightRot = Quaternion.Euler(0,  half, 0);
            Vector3 leftDir  = leftRot  * fwd;
            Vector3 rightDir = rightRot * fwd;
            Gizmos.DrawLine(orig, orig + leftDir  * attackArcRange);
            Gizmos.DrawLine(orig, orig + rightDir * attackArcRange);
        }
    }
}

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class HeroAnimationControl : MonoBehaviour
{
    [SerializeField] private Animator animator;
    [SerializeField] private Animation anim;
    [Space(5)]
    [SerializeField] private bool combat;
    [Space(5)]
    [SerializeField] private float speed = 1;
    [Space(10)]
    [SerializeField] private AnimationInfo attackAnimation;
    [SerializeField] private AnimationInfo ability1Animation;
    [SerializeField] private AnimationInfo ability2Animation;
    [SerializeField] private AnimationInfo ability3Animation;
    [SerializeField] private AnimationInfo ability4Animation;

    [HideInInspector] public Action<string> AbilityEffectApply;
    [HideInInspector] public Action<string> AbilityAnimationEnd;

    private bool abilityPlaying = false;
    private bool _combat;
    private Coroutine coroutine;
    private string currAnim;
    private Dictionary<string, int> layerMaskDict = new Dictionary<string, int>();
    private Dictionary<string, GameObject> abilityObjectDicts = new Dictionary<string, GameObject>();

    [HideInInspector] public bool IsCombat { get { return combat; } set { combat = value; } }

    void Awake()
    {
        if (anim == null) anim = GetComponent<Animation>();

        layerMaskDict = new Dictionary<string, int>();
        abilityObjectDicts = new Dictionary<string, GameObject>();

        if (anim != null)
        {
            anim.playAutomatically = false;
            AddAnimation(attackAnimation, "Attack");
            AddAnimation(ability1Animation, "Ability1");
            AddAnimation(ability2Animation, "Ability2");
            AddAnimation(ability3Animation, "Ability3");
            AddAnimation(ability4Animation, "Ability4");
            animator.speed = speed;

            if (anim["Run"]) anim["Run"].wrapMode = WrapMode.Loop;
            if (anim["Celebrate"]) anim["Celebrate"].wrapMode = WrapMode.Loop;
        }
        _combat = !combat;
        LateUpdate();
    }


    private AnimationInfo GetAnimationInfo(string animName)
    {
        AnimationInfo animInfo = default;
        switch (animName)
        {
            case "Attack": animInfo = attackAnimation; break;
            case "Ability1": animInfo = ability1Animation; break;
            case "Ability2": animInfo = ability2Animation; break;
            case "Ability3": animInfo = ability3Animation; break;
            case "Ability4": animInfo = ability4Animation; break;
        }
        return animInfo;
    }

    void AddAnimation(AnimationInfo animInfo, string animName, bool loop = false)
    {
        if (animInfo.clip != null)
        {
            anim.AddClip(animInfo.clip, animName);

            if (anim[animName] != null)
                anim[animName].wrapMode = loop ? WrapMode.Loop : WrapMode.Once;
            else
                Debug.LogError("[ERR]:" + this.gameObject.name + "'s animoation has no " + animName);
        }
        Init(animInfo);
    }

#if UNITY_EDITOR
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.I)) PlayIdle();
        if (Input.GetKeyDown(KeyCode.R)) PlayRun();
        if (Input.GetKeyDown(KeyCode.C)) PlayCelebrate();
        if (Input.GetKeyDown(KeyCode.D)) PlayDeath();
        if (Input.GetKeyDown(KeyCode.Alpha1)) PlayAbility1();
        if (Input.GetKeyDown(KeyCode.Alpha2)) PlayAbility2();
        if (Input.GetKeyDown(KeyCode.Alpha3)) PlayAbility3();
        if (Input.GetKeyDown(KeyCode.Alpha4)) PlayAbility4();
        if (Input.GetKeyDown(KeyCode.A)) PlayAttack();
    }
#endif

    void LateUpdate()
    {
        if (combat != _combat)
        {
            _combat = combat;
            animator.SetBool("Combat", combat);
        }
    }

    public void PlayIdle() => Play("Idle");
    public void PlayAttack() => Play("Attack");
    public void PlayRun() => Play("Run");
    public void PlayCelebrate() => Play("Celebrate");
    public void PlayDeath() => Play("Death");
    public void PlayAbility1(int colliderWidth = -1) => PlayAbilityAnim("Ability1", colliderWidth);
    public void PlayAbility2(int colliderWidth = -1) => PlayAbilityAnim("Ability2", colliderWidth);
    public void PlayAbility3(int colliderWidth = -1) => PlayAbilityAnim("Ability3", colliderWidth);
    public void PlayAbility4() => Play("Ability4");

    public void StartAbility(float duration)
    {
        Debug.Log("Start ability " + duration);

        AnimationInfo animInfo = GetAnimationInfo(currAnim);
        StartCoroutine(ability(currAnim, animInfo, duration));
    }

    public bool hasPrefab(string animName) {
        if (animName == "Attack") return false;

        AnimationInfo animInfo = GetAnimationInfo(animName);
        return hasPrefab(animInfo);
    }

    private bool hasPrefab(AnimationInfo animInfo)
    {
        return animInfo.prefab != null;
    }

    private void AbilltyEffectStart(string animName) {
        Debug.Log(gameObject.name + ": " + animName + " effects apply right now!");

        if (AbilityEffectApply != null)
            AbilityEffectApply(animName);
    }

    public void ResetAbilityObjects() {
        foreach (var kv in abilityObjectDicts)
        {
            if (kv.Value != null) Destroy(kv.Value);
        }
        abilityObjectDicts.Clear();
    }

    IEnumerator ability(string animName,AnimationInfo animInfo, float delay)
    {
        yield return new WaitForSeconds(delay);
        
        AbilltyEffectStart(animName);
        
        if (hasPrefab(animInfo))
        {
            RemoveAbilityObj(animName);
            var obj = Instantiate(animInfo.prefab, transform);
            if (obj != null)
            {
                ParticleSystem ps = obj.GetComponent<ParticleSystem>();
                if (ps != null && layerMaskDict.ContainsKey(animName))
                {
                    ParticleSystem.CollisionModule  colModule = ps.collision;
                    colModule.enabled = true;
                    int colliesWith = layerMaskDict.GetValueOrDefault(animName, 0);
                    colModule.collidesWith = colliesWith;
                }
            }
            obj.SetActive(true);
            abilityObjectDicts.Add(animName, obj);

            Destroy(obj, 5);
        }
    }

    public void RemoveAbilityObj(string animName) {
        if (abilityObjectDicts.ContainsKey(animName))
        {
            GameObject animObj = abilityObjectDicts.GetValueOrDefault(animName, null);
            if (animObj != null)
            {
                Destroy(animObj);
            }
            abilityObjectDicts.Remove(animName);
        }
    }

    void Init(AnimationInfo animInfo)
    {
        animInfo.onInit?.Invoke();
        if (animInfo.prefab != null) animInfo.prefab.SetActive(false);
    }

    void PlayAbilityAnim(string animName, int colliderWidth, float crossFade = 0.2f) {

        if (colliderWidth != -1)
        {
            if (layerMaskDict.ContainsKey(animName))
                layerMaskDict[animName] = colliderWidth;
            else
                layerMaskDict.Add(animName, colliderWidth);
        }

        Play(animName, crossFade);
    }

    void Play(string animName, float crossFade = 0.25f)
    {
        // Prevent starting a new animation while an ability animation is playing
        if (abilityPlaying)
            return;
        if (coroutine != null) {
            InitAttackingAbilities(currAnim);
            StopCoroutine(coroutine);
        }
        coroutine = StartCoroutine(PlayAnimation(animName, crossFade));
    }


    public void SetSpeed(float speed) {
        if (speed != this.speed) { 
            this.speed = speed;
            Play(currAnim);
        }
    }
    public float GetSpeed()
    {
        return this.speed;
    }
    private void InitAttackingAbilities(string abilityName)
    {
        switch (abilityName)
        {
            case "Attack": Init(attackAnimation); break;
            case "Ability1": Init(ability1Animation); break;
            case "Ability2": Init(ability2Animation); break;
            case "Ability3": Init(ability3Animation); break;
            case "Ability4": Init(ability4Animation); break;
        }
    }

    IEnumerator PlayAnimation(string animName, float crossFade, int colliderWidth = -1)
    {
        if (animName == "Ability1" || animName == "Ability2" || animName == "Ability3" || animName == "Ability4")
        {
            abilityPlaying = true;
        }

        if (anim != null) anim.Stop();
        animator.ResetTrigger("Run");
        animator.ResetTrigger("Celebrate");
        animator.ResetTrigger("Death");
        animator.ResetTrigger("Ability1");
        animator.ResetTrigger("Ability2");
        animator.ResetTrigger("Ability3");
        animator.ResetTrigger("Ability4");
        animator.ResetTrigger("Attack");
        currAnim = combat ? "Combat Idle" : "Idle";
        animator.CrossFade(currAnim, crossFade);
        animator.speed = speed;
        if (animName == null) yield break;

        if ((anim == null) || (anim[animName] == null))
        {
            animator.SetTrigger(animName);
        }
        else
        {
            animator.Rebind();
            animator.Update(0);
            animator.SetBool("Combat", combat);
            animator.Play(animName, 0, 0);
        }
        AnimatorStateInfo stateInfo;
        do
        {
            stateInfo = animator.GetCurrentAnimatorStateInfo(0);
            yield return false;
        }
        while (!stateInfo.IsName(animName));

        InitAttackingAbilities(animName);
        currAnim = animName;

        var length = stateInfo.length;
        if ((anim != null) && (anim[animName] != null))
        {
            anim.Play(animName);
            anim[animName].normalizedTime = stateInfo.normalizedTime;
            anim[animName].speed = speed;
            length = Mathf.Max(anim[animName].length, length);
        }

        switch (animName)
        {
            case "Attack":
                yield return new WaitForSeconds(length/speed);
                Play(animName);
                break;
            case "Ability1": 
            case "Ability2": 
            case "Ability3": 
            case "Ability4": 
                if (!hasPrefab(animName)) AbilltyEffectStart(animName);
                yield return new WaitForSeconds(length/ speed);
                abilityPlaying = false;
                Play("Attack");
                if (AbilityAnimationEnd != null)
                    AbilityAnimationEnd(animName);
                break;
        }
    }
}

[System.Serializable]
public struct AnimationInfo
{
    public AnimationClip clip;
    public UnityEvent onInit;
    public GameObject prefab;
}
using System.Collections;
using DG.Tweening;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [Header("Setup")]
    [Tooltip("Drag in all of your empty GameObjects marking spawn positions.")]
    public Transform[] spawnPoints;

    [Tooltip("Name of the pool in your PoolingManager")]
    public string poolName = "enemy";

    [Tooltip("Optional delay before respawning")]
    public float respawnDelay = 0f;

    void OnEnable()
    {
        EnemyAI.OnEnemyDeath += HandleEnemyDeath;
    }

    void OnDisable()
    {
        EnemyAI.OnEnemyDeath -= HandleEnemyDeath;
    }

    void Start()
    {
        // initial spawn
        foreach (var sp in spawnPoints)
            SpawnAt(sp);
    }

    void HandleEnemyDeath(EnemyAI dead)
    {
        // grab the spawnPoint that was stored on the dying enemy
        Transform sp = dead.spawnPoint;
        if (sp != null)
            StartCoroutine(RespawnAt(sp));
    }

    IEnumerator RespawnAt(Transform sp)
    {
        if (respawnDelay > 0f)
            yield return new WaitForSeconds(respawnDelay);

        SpawnAt(sp);
    }

    void SpawnAt(Transform sp)
    {
        // pull from pool
        GameObject go = PoolingManager.Instance
            .SpawnObject(poolName, sp.position, sp.rotation);

        go.transform.DOScale(0.5f, 0.5f);

        // let the enemy know where it came from
        EnemyAI ai = go.GetComponent<EnemyAI>();
        if (ai != null)
            ai.spawnPoint = sp;

        ai.isDie = false;
        ai.anim.ResetTrigger("die");
        ai.anim.SetTrigger("idle");
        
    }
}
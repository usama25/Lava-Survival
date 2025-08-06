using System.Collections;
using System.Collections.Generic;
using UnityEngine;



#pragma warning disable 0414

[System.Serializable]
public class ParticlePool
{
    
    [Tooltip("If true Pool will be hidden in Hierarchy.")]
    public bool HideInHierarchy = true;
    
    [Tooltip("From this name the Particle will be called.")]
    public string ParticleName = "Name";
   
    [Tooltip("Size of Pool to make.")]
    public int        PoolSize       = 10;
   
    [Tooltip("Actual Prefab that will be Instantiated to make a pool.")]
    public GameObject ParticlePrefab = null;
   
    [Tooltip("If true the actual Parent and Queue will be avialable to see in Inspector.")]
    [SerializeField] bool Debug      = false;
   
    [Tooltip("Parent of Pool will be made at runtime.")]
    public GameObject PoolParent = null;
   
    [Tooltip("Queue will be instantiated at runtime.")]
    public Queue<GameObject> ParticleQueue = new Queue<GameObject>();
}//class end



public class PoolingManager : MonoBehaviour
{
   public static PoolingManager Instance {get; private set;}
   
    // [HideLabel]
    [SerializeField] List<ParticlePool> Pools = new List<ParticlePool>();

    private void Awake()
    {
        Initialize();
    }

    private void Initialize()
    {
        if(!Instance)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }//if end
        else
        {
            DestroyImmediate(gameObject);
            return;
        }//else end
        Startt();
    }//Awake() end

    private void Startt()
    {
        for(int i=0 ; i<Pools.Count ; i++)
            MakePool(Pools[i].ParticleName, Pools[i]);
    }//Start() end

    private void MakePool(string ParentName, ParticlePool Pool)
    {
        if(!Pool.ParticlePrefab)
            return;
        Pool.PoolParent = new GameObject(Pool.ParticleName);
        Pool.PoolParent.transform.SetParent(transform);
        if(Pool.HideInHierarchy)
            Pool.PoolParent.gameObject.hideFlags = HideFlags.HideInHierarchy;
        for(int i=0 ; i<Pool.PoolSize ; i++)
        {
            GameObject Temp = Instantiate(Pool.ParticlePrefab, Pool.PoolParent.transform);
            Temp.SetActive(false);
            Pool.ParticleQueue.Enqueue(Temp);
        }//loop end
    }//MakePool() end

   
    public GameObject SpawnObject(string enemyName, Vector3 Pos, Quaternion rot, float duration = 0) => EnemySpawn(Pools.Find(pool => pool.ParticleName.Equals(enemyName)), Pos , rot, duration);
    
    private GameObject EnemySpawn(ParticlePool Pool, Vector3 Pos,  Quaternion rot, float duration = 0)
    {
        if (Pool.ParticleQueue.Count <= 0)
        {
            return null;
        }

        GameObject PS = Pool.ParticleQueue.Dequeue();
        
        PS.transform.position = Pos; 
        PS.transform.rotation = rot; 
        PS.gameObject.SetActive(true); 
        Pool.ParticleQueue.Enqueue(PS);

        if(duration > 0)
         StartCoroutine(PutBackInQueue(Pool, PS, duration));

        return PS; //if end
    }
    
    
    public GameObject SpawnObject(string enemyName, Transform parent) => Obj(Pools.Find(pool => pool.ParticleName.Equals(enemyName)), parent);

    private GameObject Obj(ParticlePool Pool, Transform parent)
    {
        if (Pool.ParticleQueue.Count <= 0)
        {
            return null;
        }

        GameObject PS = Pool.ParticleQueue.Dequeue();
        
        PS.transform.SetParent(parent);
        PS.gameObject.SetActive(true); 
        Pool.ParticleQueue.Enqueue(PS);


        return PS; //if end
    }
    public GameObject PlayParticle(string ParticleName, Vector3 Pos, Transform parent) => Play(Pools.Find(pool => pool.ParticleName.Equals(ParticleName)), Pos , parent);

    private GameObject Play(ParticlePool Pool, Vector3 Pos, Transform parent)
    {
        if(Pool.ParticleQueue.Count > 0)
        {
            ParticleSystem PS = Pool.ParticleQueue.Dequeue().GetComponent<ParticleSystem>();
            PS.transform.SetParent(parent);
            PS.transform.position = Pos;
            PS.transform.rotation = PS.transform.localRotation;
            PS.gameObject.SetActive(true);
            StartCoroutine(PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
            PS.Play();
            return PS.gameObject;
        }//if end

        return null;
    }//PlayCollectable() end
    public void PlayParticle(string ParticleName, Transform Parent) => Play(Pools.Find(pool => pool.ParticleName.Equals(ParticleName)), Parent);
    
    private void Play(ParticlePool Pool, Transform Parent)
    {
        if(Pool.ParticleQueue.Count > 0)
        {
            ParticleSystem PS = Pool.ParticleQueue.Dequeue().GetComponent<ParticleSystem>();
            PS.transform.SetParent(Parent, true);
            PS.gameObject.SetActive(true);
            StartCoroutine(PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
            PS.Play();
        }//if end
    }//PlayCollectable() end`
    
    //timeBasedDeque
    public GameObject PlayParticle(string ParticleName, Vector3 pos ,  float dequeDuration, Transform Parent=null) => Play(Pools.Find(pool => pool.ParticleName.Equals(ParticleName)) ,pos , dequeDuration, Parent);
    
    private GameObject Play(ParticlePool Pool, Vector3 pos, float dequeDuration, Transform Parent = null)
    {
        if(Pool.ParticleQueue.Count > 0)
        {
            ParticleSystem PS = Pool.ParticleQueue.Dequeue().GetComponent<ParticleSystem>();
            PS.transform.SetParent(Parent, true);
            PS.gameObject.SetActive(true);
            StartCoroutine(PutBackInQueue(Pool, PS.gameObject,dequeDuration));
            PS.Play();
            return PS.gameObject;
        }//if end

        return null;
    }//PlayCollectable() end
    
    public void PlayParticle(string ParticleName, Vector3 pos) => Play(Pools.Find(pool => pool.ParticleName.Equals(ParticleName)), pos);
    
    private void Play(ParticlePool Pool, Vector3 pos)
    {
        if(Pool.ParticleQueue.Count > 0)
        {
            ParticleSystem PS = Pool.ParticleQueue.Dequeue().GetComponent<ParticleSystem>();
            PS.transform.position = pos;
            PS.gameObject.SetActive(true);
            StartCoroutine(PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
            PS.Play();
        }//if end
    }//PlayCollectable() end

    public void PutObjBackInQueue(string poolName, GameObject obj)
    {
        ParticlePool PS = Pools.Find(pool => pool.ParticleName.Equals(poolName)); 
        obj.SetActive(false);
        PS.ParticleQueue.Enqueue(obj);
    }

    private IEnumerator PutBackInQueue(ParticlePool Pool, GameObject Particle, float Duration)
    {
        yield return new WaitForSeconds(Duration);
        if (!Particle)
            yield return null;
        Particle.SetActive(false);
        Pool.ParticleQueue.Enqueue(Particle);
    }//Coroutine() end
}

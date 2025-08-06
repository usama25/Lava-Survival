using System;
using System.Linq;
using Pathfinding;using UnityEngine;

public class Worker :  Human
{
    public Transform productSpawnPoint;
    public GameObject currentProduct;
    public bool haveProduct;
    public bool isAbasdas;
    private void Start()
    {
        //Singleton_Controller.Instance.TaskAssigner.AddWorker(this);
    }

    private void Update()
    { 
        isAbasdas = AiComponent.isAvailable;
    }

    private void OnEnable()
    {
        Initialize();
    }
}

using System;
using Pathfinding;
using UnityEngine;

public class Customer :  Human
{
    private void Awake()
    {
       // Singleton_Controller.Instance.TaskAssigner.AddCustomer(this);
    }

    private void OnEnable()
    {
        Initialize();        
       // Singleton_Controller.Instance.TaskAssigner.taskData.currentCustomers++;
       // Singleton_Controller.Instance.TaskAssigner.SpawnCustomer();
    }

    private void OnDisable()
    {
        /*if (Singleton_Controller.Instance.TaskAssigner)
        {
            Singleton_Controller.Instance.TaskAssigner.taskData.currentCustomers--;
           // Singleton_Controller.Instance.TaskAssigner.SpawnCustomer();
        }*/
       
    }
}

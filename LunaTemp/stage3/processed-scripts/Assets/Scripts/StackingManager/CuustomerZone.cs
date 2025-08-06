using System;
using UnityEngine;

public class CuustomerZone : MonoBehaviour
{
   public ObjectQueueManager objectQueueManager;
   
   private void OnCollisionEnter(Collision other)
   {
      if (other.gameObject.CompareTag("Player"))
      {
         objectQueueManager.DequeueNext();
      }
   }
}

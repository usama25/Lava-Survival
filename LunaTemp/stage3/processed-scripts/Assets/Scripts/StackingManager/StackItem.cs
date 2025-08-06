using System;
using UnityEngine;

public class StackItem : MonoBehaviour
{
   public ItemType itemType;

   private void OnEnable()
   {
      if (itemType == ItemType.Cash)
      {
         ObjectQueueManager.Instance.cashCounter.GetItemsInStack(gameObject);
      }
   }
}



public enum ItemType
{
   Any,
   Meat,
   Cash
}

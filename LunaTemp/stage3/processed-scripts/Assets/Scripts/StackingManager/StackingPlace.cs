using System;
using System.Collections;
using GameAssets.GameSet.GameDevUtils.Managers;
using UnityEngine;

public class StackingPlace : MonoBehaviour
{
    [Header("Collision Transfer")]
    [Tooltip("Type of item this taker accepts.")]
    public ItemType acceptedType;

    [Tooltip("Delay in seconds between each transfer.")]
    public float transferInterval = 0.5f;

    [Header("Auto Transfer")]
    [Tooltip("Enable automatic transfer from a given giver.")]
    public bool autoStack = false;

    public bool isGiver;
    [Tooltip("Reference to the giver ObjectStacker for auto mode.")]
    public ObjectStacker autoGiverStacker;
    public float initialDelay;
    public int objectsRequired;

   [HideInInspector] public ObjectStacker takerStacker;
    private Coroutine transferRoutine;
    private ObjectStacker giver;
   
    private void Awake()
    {
        takerStacker = GetComponent<ObjectStacker>();
    }

    private void Start()
    {
        if (autoStack && autoGiverStacker != null)
            transferRoutine = StartCoroutine(AutoTransferLoop(autoGiverStacker));
    }

    public void StartAutoRoutine()
    {
        if (autoStack && autoGiverStacker != null && transferRoutine == null)
            transferRoutine = StartCoroutine(AutoTransferLoop(autoGiverStacker));
    }

    private void OnCollisionEnter(Collision other)
    {
        if (autoStack) return;

        if (!isGiver)
        {
            if (other.gameObject.CompareTag("Player"))
            {
                PlayerController pc = other.gameObject.GetComponent<PlayerController>();

                if (acceptedType == pc.meatStacker.itemType)
                    giver = pc.meatStacker;
                else
                    giver = pc.cashStacker;
            }
            else
            {
                giver = other.gameObject.GetComponent<ObjectStacker>();

            }
        }
        else
        {
            giver = GetComponent<ObjectStacker>();
            
            
            if (other.gameObject.CompareTag("Player"))
            {
                PlayerController pc = other.gameObject.GetComponent<PlayerController>();

                if (acceptedType == pc.meatStacker.itemType)
                    takerStacker = pc.meatStacker;
                else
                    takerStacker = pc.cashStacker;
            }
            else
            {
                takerStacker = other.gameObject.GetComponent<ObjectStacker>();

            }
        }

        if (takerStacker != null)
            transferRoutine = StartCoroutine(TransferItems(giver));
    }

    private void OnCollisionExit(Collision other)
    {
        if (autoStack) return;
        if (transferRoutine != null)
        {
            StopCoroutine(transferRoutine);
            transferRoutine = null;
        }
    }

    public void StopSequence()
    {
        if (transferRoutine != null)
        {
            StopCoroutine(AutoTransferLoop(giver));
        }
    }

    private IEnumerator TransferItems(ObjectStacker giver)
    {
        // keep running until we hit a wrong-type or you manually StopCoroutine
        while (giver != null)
        {
            // only try to pull if there's something in the queue
            if (giver.ItemCount > 0)
            {
                var items = giver.GetItemsOutOfStack(1);
                if (items.Count > 0)
                {
                    var item = items[0];
                    var stackItem = item.GetComponent<StackItem>();

                    if (stackItem != null && stackItem.itemType == acceptedType)
                    {
                        takerStacker.GetItemsInStack(item);
                    }
                    else
                    {
                        // wrong type: return it and bail out
                        giver.GetItemsInStack(item);
                        break;
                    }
                }
                // if items.Count == 0 we just wait and loop again
            }

            yield return new WaitForSeconds(transferInterval);
        }

        transferRoutine = null;
    }

    private IEnumerator AutoTransferLoop(ObjectStacker giver)
    {
        yield return new WaitForSeconds(initialDelay);

        // runs as long as autoStack stays true and giver exists
        while (autoStack && giver != null)
        {
            if (objectsRequired > 0 && giver.ItemCount > 0)
            {
                var items = giver.GetItemsOutOfStack(1);
                if (items.Count > 0)
                {
                    var item = items[0];
                    var stackItem = item.GetComponent<StackItem>();
                    if(item.GetComponent<StackItem>().itemType == ItemType.Meat)
                        CurrencyManager.Instance.SubtractCurrencyValue("meat",1);
                     
                    if (stackItem != null && stackItem.itemType == acceptedType)
                    {
                        takerStacker.GetItemsInStack(item);
                        objectsRequired--;
                    }
                    else
                    {
                        //giver.GetItemsInStack(item);
                    }
                }
            }

            // always wait and re-check, so new items or new objectsRequired will be picked up
            yield return new WaitForSeconds(transferInterval);
        }

        transferRoutine = null;
    }
}

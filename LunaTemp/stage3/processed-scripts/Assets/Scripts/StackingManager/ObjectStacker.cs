using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using GameAssets.GameSet.GameDevUtils.Managers;
using Random = UnityEngine.Random;


public class ObjectStacker : MonoBehaviour
{
    public enum StackMode { Vertical, Grid }


    [Header("Stack Settings")] public ItemType itemType;
    [Tooltip("Choose whether to stack vertically or in a grid.")]
    public StackMode stackMode = StackMode.Vertical;
    
    [Tooltip("Transform that marks the origin point for stacking.")]
    public Transform origin;

    [Tooltip("For vertical mode: Y offset between stacked items.")]
    public Vector3 verticalOffset = Vector3.up;

    [Tooltip("For grid mode: number of columns (X) and rows (Z) per layer.")]
    public int gridColumns = 3;
    public int gridRows = 3;

    [Tooltip("For grid mode: horizontal spacing between items (X,Z)." )]
    public Vector3 gridCellSize = new Vector3(1f, 0f, 1f);

    [Tooltip("For grid mode: vertical offset between layers.")]
    public Vector3 layerOffset = Vector3.up;

    [Header("Tween Settings")]
    [Tooltip("Height to throw the item up during animation.")]
    public float throwUpHeight = 1f;

    [Tooltip("Random range on X and Z axes during the toss.")]
    public float randomXZRange = 0.5f;

    [Tooltip("Max random rotation in degrees during the toss.")]
    public float rotationMagnitude = 30f;

    [Tooltip("Duration of the throw-up animation.")]
    public float upDuration = 0.5f;

    [Tooltip("Duration of the move to final position animation.")]
    public float moveDuration = 0.5f;

    private int offsetIndex;
    // Internal LIFO stack
    private Stack<GameObject> itemStack = new Stack<GameObject>();
    public int ItemCount => itemStack.Count;
    public bool isPlayer,isCashUtilizer;
    private void OnValidate()
    {
        if (origin == null)
            origin = transform;
    }

    private void Update()
    {
        UpdateAllItemPositions();
    }

    /// <summary>
    /// Push items onto the stack with a toss animation.
    /// </summary>
    public void GetItemsInStack(params GameObject[] items)
    {
        foreach (var item in items)
        {
            if (item == null || itemStack.Contains(item))
                continue;

            PushItemWithTween(item);
        }
    }

    /// <summary>
    /// Pop up to 'count' items. Returns them top-first.
    /// </summary>
    public List<GameObject> GetItemsOutOfStack(int count)
    {
        var removed = new List<GameObject>();
        offsetIndex -= count;
        for (int i = 0; i < count && itemStack.Count > 0; i++)
        {
            var go = itemStack.Pop();
            
            removed.Add(go);
           
            
            go.transform.SetParent(null, worldPositionStays: true);
            if (go.TryGetComponent<Collider>(out Collider col))
                col.enabled = true;
        }

        // Immediately reposition remaining stack
        //UpdateAllItemPositions(true);
        return removed;
    }

    private void PushItemWithTween(GameObject item)
    {
        if (isPlayer)
        {
            if (item.GetComponent<StackItem>().itemType == ItemType.Cash)
            {
                CurrencyManager.Instance.PlusCurrencyValue("coin",1);
                Debug.Log("cash");
            }
        }

        if (item.TryGetComponent<Collider>(out Collider col))
            col.enabled = false;

        // 2) Figure out where it’ll finally sit *in local space* once parented.
        int idx = offsetIndex++;
        Vector3 finalLocalPos = CalculateOffset(idx);

        // 3) Compute a world‐space mid‑point for the “toss up.”
        Vector3 startWorld = item.transform.position;
        Vector3 midWorld = startWorld + new Vector3(
            Random.Range(-randomXZRange, randomXZRange),
            throwUpHeight,
            Random.Range(-randomXZRange, randomXZRange)
        );

        // 4) Random rotation for the toss.
        Vector3 randomRot = new Vector3(
            Random.Range(-rotationMagnitude, rotationMagnitude),
            Random.Range(-rotationMagnitude, rotationMagnitude),
            Random.Range(-rotationMagnitude, rotationMagnitude)
        );

        // 5) Build the sequence
        Sequence seq = DOTween.Sequence();
        // — First, toss it up in world space:
        seq.Append(item.transform.DOMove(midWorld, upDuration).SetEase(Ease.OutQuad));
        seq.Join(item.transform.DORotate(randomRot, upDuration, RotateMode.LocalAxisAdd));
        // — Once it gets there, *then* parent it to origin:
        seq.AppendCallback(() =>
        {
            item.transform.SetParent(origin, worldPositionStays: true);
        });
        // — Finally, move *locally* into the exact slot:
        seq.Append(item.transform.DOLocalMove(finalLocalPos, moveDuration).SetEase(Ease.InOutQuad));
        seq.Join(item.transform.DOLocalRotate(Vector3.zero, moveDuration));
        
        seq.AppendCallback(() =>
        {
            
            // 1) Push it into our stack-data so CalculateOffset can see it.
            itemStack.Push(item);
            
            if (item.GetComponent<StackItem>().itemType == ItemType.Cash && isCashUtilizer)
            {
                itemStack.Pop();
                Destroy(item);
                
                if(ArrowPointer.Instance.currentTargetIndex == 3)
                    ArrowPointer.Instance.MoveToNextTarget();
                
            }
            else if (isPlayer && item.GetComponent<StackItem>().itemType == ItemType.Cash)
            {
                if(ArrowPointer.Instance.currentTargetIndex == 2)
                    ArrowPointer.Instance.MoveToNextTarget(); 
            }

            if (isPlayer && item.GetComponent<StackItem>().itemType == ItemType.Meat)
            {
                
                CurrencyManager.Instance.PlusCurrencyValue("meat",1);
                
            }

            if (item.GetComponent<StackItem>().itemType == ItemType.Meat && !isPlayer)
            {
                if(ArrowPointer.Instance.currentTargetIndex == 1)
                    ArrowPointer.Instance.MoveToNextTarget();
            }

            SoundManager.Instance.PlayOneShotPop();

        });
    }


    // Replaces all item positions (optionally with no tween)
    public void UpdateAllItemPositions(bool instant = true)
    {
        var arr = itemStack.ToArray();
        for (int i = 0; i < arr.Length; i++)
        {
            var go = arr[arr.Length - 1 - i];
            if (instant)
                go.transform.localPosition = CalculateOffset(i);
            else
                go.transform.DOLocalMove(CalculateOffset(i), moveDuration);
        }
    }

    // Computes the local offset for an item by its index
    private Vector3 CalculateOffset(int index)
    {
        if (stackMode == StackMode.Vertical)
            return verticalOffset * index;

        int layerSize = gridColumns * gridRows;
        int layer = index / layerSize;
        int idxInLayer = index % layerSize;
        int row = idxInLayer / gridColumns;
        int col = idxInLayer % gridColumns;

        Vector3 horizontal = new Vector3(
            col * gridCellSize.x,
            0f,
            row * gridCellSize.z
        );
        Vector3 vertical = layerOffset * layer;
        return horizontal + vertical;
    }
}

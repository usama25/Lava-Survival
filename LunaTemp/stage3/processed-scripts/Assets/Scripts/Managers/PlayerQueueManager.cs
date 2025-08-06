using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectQueueManager : MonoBehaviour
{
    public static ObjectQueueManager Instance;
    [Header("Queue Setup")]
    [Tooltip("Prefab used to spawn each queue object.")]
    public GameObject objectPrefab;
    [Tooltip("How many objects to spawn initially.")]
    public int initialQueueSize = 5;

    [Header("Positions")]
    [Tooltip("Start of the queue line.")]
    public Transform pointA;
    [Tooltip("End of the queue line.")]
    public Transform pointB;
    [Tooltip("Where dequeued objects should move to.")]
    public Transform exitPoint;

    [Header("Timing")]
    [Tooltip("Time for a dequeued object to reach Exit Point.")]
    public float moveDuration = 1f;
    [Tooltip("Time for the remaining objects to shift forward one step.")]
    public float shiftDuration = 0.5f;

    // Internal list of spawned objects, in queue order.
    private List<GameObject> queueObjects = new List<GameObject>();
    // Fixed array of world‐space positions along A→B at which each index should stand.
    private Vector3[] stepPositions;

    public ObjectStacker cashCounter;
    private void Awake()
    {
        if (Instance == null)
            Instance = this;
    }

    void Start()
    {
        InitializeQueue();
    }

    /// <summary>
    /// Spawns initialQueueSize instances of objectPrefab equally spaced from A to B.
    /// </summary>
    private void InitializeQueue()
    {
        if (initialQueueSize < 2)
        {
            Debug.LogError("initialQueueSize must be >= 2 to form a row.");
            return;
        }

        // Precompute the target positions along the line
        stepPositions = new Vector3[initialQueueSize];
        for (int i = 0; i < initialQueueSize; i++)
        {
            float t = i / (float)(initialQueueSize - 1); 
            stepPositions[i] = Vector3.Lerp(pointA.position, pointB.position, t);
        }

        // Spawn and store
        for (int i = 0; i < initialQueueSize; i++)
        {
            GameObject obj = Instantiate(objectPrefab, stepPositions[i], Quaternion.identity, transform);
            obj.gameObject.name = "NPC" + i;
            queueObjects.Add(obj);
        }
    }

    /// <summary>
    /// Call this (e.g. from a button) to dequeue the front object and shift the rest.
    /// </summary>
    public void DequeueNext()
    {
        if (queueObjects.Count == 0)
        {
            Debug.Log("Queue is empty — nothing to dequeue.");
            return;
        }

        // 1) Remember how many slots we should have
        int totalSlots = queueObjects.Count;

        // 2) Remove the front object
        GameObject first = queueObjects[0];
        queueObjects.RemoveAt(0);

        // 3) Compute dynamic spacing
        Vector3 dir = (pointB.position - pointA.position).normalized;
        float totalDist = Vector3.Distance(pointA.position, pointB.position);
        float slotSpacing = totalDist / (totalSlots - 1);

        // 4) Shift everyone else into slots 0…(totalSlots-2)
        for (int i = 0; i < queueObjects.Count; i++)
        {
            Vector3 target = pointA.position + dir * slotSpacing * i;
            StartCoroutine(MoveToPoint(queueObjects[i], target, shiftDuration, null));
        }

        first.transform.LookAt(exitPoint);

        // 5) Send the first one off, then animate it into the last slot and re‑add it
        StartCoroutine(MoveToPoint(first, exitPoint.position, moveDuration + 1.5f, () =>
        {
            Destroy(first);
            GameObject obj = Instantiate(objectPrefab, stepPositions[stepPositions.Length - 1], Quaternion.identity, transform);
            queueObjects.Add(obj);
            
        }));
    }



    /// <summary>
    /// Smoothly moves obj from its current position to destination over duration seconds.
    /// Calls onComplete() if provided once the move is done.
    /// </summary>
    private IEnumerator MoveToPoint(GameObject obj, [Bridge.Ref] Vector3 destination, float duration, Action onComplete)
    {
        float elapsed = 0f;
        Vector3 start = obj.transform.position;
        obj.GetComponent<Npc>().StartWalk();
        while (elapsed < duration)
        {
            obj.transform.position = Vector3.Lerp(start, destination, elapsed / duration);
            elapsed += Time.deltaTime;
            yield return null;
        }

        obj.transform.position = destination;
        obj.GetComponent<Npc>().StopWalk();
        onComplete?.Invoke();
    }
}

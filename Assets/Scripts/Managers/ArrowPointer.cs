using System;
using System.Collections.Generic;
using UnityEngine;

public class ArrowPointer : MonoBehaviour
{
    public static ArrowPointer Instance;
    public Transform player;             // Player object
    public Transform arrow;              // Arrow object
    public List<Transform> targets;      // All targets in order
    public int currentTargetIndex = 0;

    public float orbitRadius = 2f;       // Orbit distance from player
    public float heightOffset = 2f;      // Optional: height above player

    private void Awake()
    {
        if (Instance == null)
            Instance = this;
    }

    void Update()
    {
        if (targets == null || targets.Count == 0) return;

        Transform target = targets[currentTargetIndex];

        // Step 1: Direction to target (on XZ plane only)
        Vector3 toTarget = target.position - player.position;
        toTarget.y = 0; // ignore vertical component
        Vector3 direction = toTarget.normalized;

        // Step 2: Position the arrow around the player at orbit radius
        Vector3 orbitPosition = player.position + direction * orbitRadius;
        orbitPosition.y = heightOffset;
        arrow.position = orbitPosition;

        // Step 3: Rotate arrow to face target (on Y-axis only)
        Vector3 lookDirection = target.position - arrow.position;
        lookDirection.y = 0; // constrain to Y-axis rotation only
        if (lookDirection != Vector3.zero)
        {
            Quaternion lookRotation = Quaternion.LookRotation(lookDirection);
            arrow.rotation = Quaternion.Euler(0f, lookRotation.eulerAngles.y, 0f);
        }
    }

    public void MoveToNextTarget()
    {
        if (currentTargetIndex < targets.Count - 1)
            currentTargetIndex++;
        else
            arrow.gameObject.SetActive(false); // All done
    }
}


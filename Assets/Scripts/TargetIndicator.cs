using UnityEngine;

public class PathIndicator : MonoBehaviour
{
    [Tooltip("The Transform this arrow will point toward.")]
    [SerializeField] private Transform target;

    void Update()
    {
        if (target != null)
            RotateTowardsTarget();
    }

    /// <summary>
    /// Zeroes out the vertical component so rotation is only around Y.
    /// </summary>
    private void RotateTowardsTarget()
    {
        // Direction from this object to the target
        Vector3 dir = target.position - transform.position;
        // Ignore vertical difference
        dir.y = 0f;

        if (dir.sqrMagnitude > 0.0001f)
        {
            // Compute and apply the rotation
            Quaternion lookRot = Quaternion.LookRotation(dir);
            transform.rotation = lookRot;
        }
    }

    /// <summary>
    /// Call this to change which Transform the arrow should point to.
    /// </summary>
    public void SetTarget(Transform newTarget)
    {
        target = newTarget;
    }
}

using DG.Tweening;
using UnityEngine;

public class Bullet : MonoBehaviour
{
    public float speed = 20f;
    private Transform target;

    public void SetTarget(Transform target)
    {
        this.target = target;
    }

    void Update()
    {
        if (target != null)
        {
            Vector3 direction = (target.position - transform.position).normalized;
            transform.position += direction * speed * Time.deltaTime;

            direction.y = 0;

            // Check if the direction is not zero to avoid errors
            if (direction != Vector3.zero)
            {
                // Calculate the target rotation only around the Y-axis
                Quaternion targetRotation = Quaternion.LookRotation(direction);

                // Apply the rotation to this object
                transform.rotation = targetRotation;
            }

            
            if (Vector3.Distance(transform.position, target.position) < 0.1f)
            {
                HitTarget();
            }
        }
    }

    void HitTarget()
    {
        IDamageable damageable = target.GetComponent<IDamageable>();
        if (damageable != null)
        {
            damageable.TakeDamage(100f);
            PoolingManager.Instance.PutObjBackInQueue("bullet",gameObject);
            GameObject scoreVfx = PoolingManager.Instance.SpawnObject("score", transform.position + new Vector3(0,1.5f,0),Quaternion.identity,1);
            scoreVfx.transform.DOLocalMoveY(1.5f, 0.5f).SetRelative(true).SetEase(Ease.OutQuart);
        }
    }
}
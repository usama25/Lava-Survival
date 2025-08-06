using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class DamageSystem : MonoBehaviour, IDamageable
{
    public float maxHealth = 1f;
    private float currentHealth;
    public Image healthBar;
    public UnityEvent onDeath;
    private bool once;
    void OnEnable()
    {
        currentHealth = maxHealth;
        healthBar.fillAmount = maxHealth;
    }
    

    public void TakeDamage(float amount)
    {
        currentHealth -= amount;

        healthBar.fillAmount = currentHealth / maxHealth;
        
        
        if (currentHealth <= 0 && !once)
        {
            once = true;
            Die();
        }
    }

    void Die()
    {
       onDeath?.Invoke();
    }
}
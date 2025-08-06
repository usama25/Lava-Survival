using System;
using System.Collections;
using GameAssets.GameSet.GameDevUtils.Managers;

using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Collider))]
public class CurrencyDeductionOnCollision : MonoBehaviour
{
    [Header("Currency Settings")]
    [SerializeField] private string currencyName = "coin";

    [SerializeField] private int totalAmount;

    [Header("Chunked Subtraction")]
    [SerializeField] private int chunkSize;

    [SerializeField] private float delayBetweenDeductions;

    private Coroutine deductionCoroutine;
    private int remainingAmount;

    public Text amount;
    private bool once;
    public PlayerController pc;
    public GameObject win;
    public ParticleSystem particle;
    private void Start()
    {
        remainingAmount = totalAmount;
    }
    

    private void Update()
    {
        amount.text = remainingAmount.ToString();

        if (remainingAmount <= 0 && !once)
        {
            once = true;
            pc.canMove = false;
            pc.inputValue = 0;
            particle.Play();
            StartCoroutine(WinSequence());
        }
    }

    IEnumerator WinSequence()
    {
        yield return new WaitForSeconds(2);
        win.SetActive(true);
    }

    private void Reset()
    {
        //GetComponent<Collider>().isTrigger = false;
    }

    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            if (deductionCoroutine != null) return;

            if (CurrencyManager.Instance.TotalCurrencyFor(currencyName) > 0)
            {
                deductionCoroutine = StartCoroutine(DeductChunks());
            }
        }

        
        
    }

    private void OnCollisionExit(Collision other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            if (deductionCoroutine != null)
            {
                StopCoroutine(deductionCoroutine);
                deductionCoroutine = null;
            } 
        }

       
    }

    private IEnumerator DeductChunks()
    {
        while (CurrencyManager.Instance.TotalCurrencyFor(currencyName) > 0)
        {
            int thisBatch = Mathf.Min(chunkSize, remainingAmount);

            for (int i = 0; i < thisBatch; i++)
            {
                
                CurrencyManager.Instance.SubtractCurrencyValue(currencyName, 1);
                remainingAmount--;
            }
            yield return new WaitForSeconds(delayBetweenDeductions);
        }

        deductionCoroutine = null;
        OnDeductionComplete();
    }
    

    
    protected virtual void OnDeductionComplete()
    {
       Debug.Log("complete");
    }
}

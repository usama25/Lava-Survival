using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelfDestroy : MonoBehaviour
{

    public float lifeDuration;
    private void OnEnable()
    {
        StartCoroutine(DestroyMe());
    }


    IEnumerator DestroyMe()
    {
        yield return new WaitForSeconds(lifeDuration);
        Destroy(gameObject);
    }
}

using System;
using DG.Tweening;
using GameAssets.GameSet.GameDevUtils.Managers;

using UnityEngine;
using UnityEngine.UI;

public class Npc : MonoBehaviour
{
   public Animator myAnim;
   [HideInInspector] public bool once;
   [HideInInspector] public StackingPlace myStackingPlace;
   private StackingPlace giverStack;
   public GameObject popUp;
   public Text requiredMeat;
   public Image fillImage;
   private void Awake()
   {
       myStackingPlace = GetComponent<StackingPlace>();
       requiredMeat.text = "x" + GetComponent<StackingPlace>().objectsRequired.ToString();

   }

   public void StartWalk()
   {
    myAnim.SetBool("isWalking",true);  
   }

   public void StopWalk()
   {
       myAnim.SetBool("isWalking",false);
   }

   private void Update()
   {
       if (myStackingPlace.objectsRequired <= 0 && !once)
       {
           once = true;
           ObjectQueueManager.Instance.DequeueNext();
           giverStack.GetComponent<StackingPlace>().StopSequence();
           popUp.SetActive(false);
           GetComponent<StackingPlace>().autoGiverStacker = null;
           for (int i = 0; i < 7; i++)
           {
               var obj = PoolingManager.Instance.SpawnObject(
                   "cash",
                   transform.position + new Vector3(0,1,0),
                   Quaternion.identity
               );
           }
       }
   }

   private void OnTriggerStay(Collider other)
   {
       if (other.CompareTag("MeatCounter") && !once)
       {
           giverStack = other.GetComponent<StackingPlace>();
           popUp.SetActive(true);
           if (other.GetComponent<ObjectStacker>().ItemCount > 0)
           {
               GetComponent<StackingPlace>().autoGiverStacker = other.gameObject.GetComponent<ObjectStacker>();
               GetComponent<StackingPlace>().StartAutoRoutine();
           }
           else if(other.GetComponent<ObjectStacker>().ItemCount <= 0)
           {
               other.gameObject.GetComponent<StackingPlace>().StopSequence();
               GetComponent<StackingPlace>().StopSequence();
           }
           
           requiredMeat.text = "x" + GetComponent<StackingPlace>().objectsRequired.ToString();
           float targetFill = 1f - GetComponent<StackingPlace>().objectsRequired / 3f;
           DOTween.To(() => fillImage.fillAmount, x => fillImage.fillAmount = x, targetFill, 0.2f);
       }
   }
}

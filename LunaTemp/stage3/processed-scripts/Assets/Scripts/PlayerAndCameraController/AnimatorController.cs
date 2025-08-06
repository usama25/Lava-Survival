using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimatorController : MonoBehaviour
{
   public Animator playerAnim;
   private int velocityHash;
   public FloatingJoystick dynamicJoystick;
   private bool once;
  
   
   private void Start()
   {
      velocityHash = Animator.StringToHash("velocity");
   }

   private void Update()
   {

      float inputValue = Mathf.Abs(dynamicJoystick.Horizontal) + Mathf.Abs(dynamicJoystick.Vertical);
      playerAnim.SetFloat(velocityHash,inputValue);
      playerAnim.speed = Mathf.Clamp(inputValue,1,5f);
   }

   public void Shoot()
   {
      playerAnim.SetTrigger("shoot");
   }

   public void Die()
   {
      playerAnim.SetTrigger("die");
   }
}

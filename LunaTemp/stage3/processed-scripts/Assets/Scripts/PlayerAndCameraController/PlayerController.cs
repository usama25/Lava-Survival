using System;
using System.Collections;
using System.Collections.Generic;
using GameAssets.GameSet.GameDevUtils.Managers;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : MonoBehaviour
{
        [SerializeField] private Rigidbody _rb;
        [SerializeField] public float _speed = 5;
        [SerializeField] private float _turnSpeed = 360;
        [SerializeField] private Transform _playerModel;

    
        private Vector3 _input;
        /*[HideInInspector]*/ public float deceleration,inputValue;
        public FloatingJoystick dynamicJoystick;
        [HideInInspector] public bool canMove = true;
        public bool isDie;
        public ObjectStacker meatStacker;
        public ObjectStacker cashStacker;
        public GameObject failScreen;
        private void OnEnable()
        {
            Cursor.lockState = CursorLockMode.None;
            
        }

    
        private void Update() {

            if(!canMove)
                return;
        }
    
        private void FixedUpdate() {
            if(!canMove)
                return;
            
            GatherInput();
            Look(); 
            Move();
        }
    
        private void GatherInput() {
           
            _input = new Vector3(dynamicJoystick.Horizontal, 0, dynamicJoystick.Vertical);
            inputValue = Mathf.Abs(dynamicJoystick.Horizontal) + Mathf.Abs(dynamicJoystick.Vertical);
         
        }
    
        private void Look() {

            if (_input == Vector3.zero) return;
    
            var rot = Quaternion.LookRotation(_input.ToIso(), Vector3.up);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, rot, _turnSpeed * Time.deltaTime);
            
            
           // CurrencyManager.Instance.PlusCurrencyValue("coin",100);
          //  CurrencyManager.Instance.SubtractCurrencyValue("coin",10);
        }

        

        private void Move() {
            if (inputValue > 0)
            {
                deceleration = 0.2f;
                _rb.MovePosition(transform.position + transform.forward * (_input.normalized.magnitude * (_speed * Mathf.Clamp(inputValue,0,1)) * Time.deltaTime));
                _playerModel.transform.position = transform.position + new Vector3(0,-.5f,0);
                SoundManager.Instance.PlayWalk();
            }
            else
            {
                deceleration -= Time.deltaTime;
                _rb.MovePosition(transform.position + transform.forward * (Mathf.Clamp(deceleration,0,1) * _speed * Time.deltaTime));
                _playerModel.transform.position = transform.position + new Vector3(0,-.5f,0);
                SoundManager.Instance.PlayWalkStop();

            }
            
        }

        public void IsDead()
        {
            isDie = true;
            canMove = false;
            inputValue = 0;
            
            SoundManager.Instance.PlayOneShot(SoundManager.Instance.deathClip,1);
            StartCoroutine(FailSequence());
        }

        IEnumerator FailSequence()
        {
            yield return new WaitForSeconds(2);
            SoundManager.Instance.PlayOneShot(SoundManager.Instance.loseClip,1);
            yield return new WaitForSeconds(2f);
            failScreen.SetActive(true);

        }

        public void Restart()
        {
            SceneManager.LoadScene(0);
        }

        public void DownloadNow()
        {
            Application.OpenURL("https://play.google.com/store/apps/details?id=com.gamelegendstudio.lavasurvival");
        }

        private void OnTriggerEnter(Collider other)
        {
            if (other.CompareTag("item"))
            {
                if(other.GetComponent<StackItem>().itemType == ItemType.Meat)
                     meatStacker.GetItemsInStack(other.gameObject);
                else
                    cashStacker.GetItemsInStack(other.gameObject);

            }
        }
}

     
    
    public static class Helpers 
    {
        private static Matrix4x4 _isoMatrix = Matrix4x4.Rotate(Quaternion.Euler(0, 0, 0));
        public static Vector3 ToIso(this Vector3 input) => _isoMatrix.MultiplyPoint3x4(input);
    }


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform player;
    public float offsetX,offsetZ;
    private Vector3 m_refPos;


    void FixedUpdate()
    {
        var pos = transform.position;
        m_refPos = player.position;
        m_refPos *= Time.smoothDeltaTime;
        transform.position = Vector3.Lerp( this.transform.position, new Vector3(player.position.x + offsetX, 
            transform.position.y, player.position.z + offsetZ),  Time.deltaTime * 3f);
    }
}

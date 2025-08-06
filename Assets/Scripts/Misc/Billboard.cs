using UnityEngine;

public class Billboard : MonoBehaviour
{
    private Camera mainCam;

    void Start()
    {
        mainCam = Camera.main;
    }

    void LateUpdate()
    {
        if (mainCam == null) return;

        // Look at camera but maintain upright orientation
        Vector3 camForward = mainCam.transform.forward;
        Vector3 up = Vector3.up; // or mainCam.transform.up if needed

        transform.rotation = Quaternion.LookRotation(camForward, up);
    }
}
using UnityEngine;

public class FlickerEffect : MonoBehaviour
{
    public Light spotlight;          // Reference to the spotlight
    public float flickerIntensityMin = 0.5f;  // Minimum intensity of the flicker
    public float flickerIntensityMax = 1.5f;  // Maximum intensity of the flicker
    public float flickerInterval = 0.1f;      // Interval for flicker updates

    private float originalIntensity;
    private float timer;
    private float nextFlickerTime;

    void Start()
    {
        if (spotlight == null)
        {
            spotlight = GetComponent<Light>();
        }

        if (spotlight != null)
        {
            originalIntensity = spotlight.intensity;
            nextFlickerTime = Time.time + flickerInterval;  // Initialize next flicker time
        }
    }

    void Update()
    {
        if (spotlight != null)
        {
            timer += Time.deltaTime;

            // Check if it's time for a new flicker
            if (Time.time >= nextFlickerTime)
            {
                // Set the spotlight intensity to a random value
                spotlight.intensity = Random.Range(flickerIntensityMin, flickerIntensityMax);

                // Schedule the next flicker
                nextFlickerTime = Time.time + flickerInterval;
            }
        }
    }
}

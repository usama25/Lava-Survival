using Pathfinding;
using UnityEngine;

public abstract class Human : MonoBehaviour
{
    public IAstarAI AiComponent;
    public AIDestinationSetter AdsComponent;
    public int pointIndex;
    public void Initialize()
    {
        AiComponent = GetComponent<IAstarAI>();
        AdsComponent = GetComponent<AIDestinationSetter>();
        AiComponent.isAvailable = true;
    }


 
}
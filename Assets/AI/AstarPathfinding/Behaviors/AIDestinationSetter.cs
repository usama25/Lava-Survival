using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

namespace Pathfinding {
    /// <summary>
    /// Sets the destination of an AI to the position of a specified object.
    /// This component should be attached to a GameObject together with a movement script such as AIPath, RichAI, or AILerp.
    /// This component will then make the AI move towards the <see cref="target"/> set on this component.
    ///
    /// See: <see cref="Pathfinding.IAstarAI.destination"/>
    ///
    /// [Open online documentation to see images]
    /// </summary>
    [UniqueComponent(tag = "ai.destination")]
    [HelpURL("https://arongranberg.com/astar/documentation/stable/class_pathfinding_1_1_a_i_destination_setter.php")]
    public class AIDestinationSetter : VersionedMonoBehaviour {
        /// <summary>The object that the AI should move to</summary>
        public Transform target;
        public Transform restPos;
        private IAstarAI ai;
        // Queue to store multiple targets
        private Queue<Transform> targets = new Queue<Transform>();
        
        void OnEnable () {
            ai = GetComponent<IAstarAI>();
            
            // Update the destination right before searching for a path as well.
            // This is enough in theory, but this script will also update the destination every
            // frame as the destination is used for debugging and may be used for other things by other
            // scripts as well. So it makes sense that it is up to date every frame.
            if (ai != null) ai.onSearchPath += Update;
            
        }

        void OnDisable () {
            if (ai != null) ai.onSearchPath -= Update;
        }

        /// <summary>
        /// Adds a new target to the queue
        /// </summary>
        /// <param name="newTarget">The new target to add</param>
        public void AddTarget(Transform newTarget) {
            targets.Enqueue(newTarget); // Add the new target to the end of the queue
            IFactory factory = newTarget.GetComponent<IFactory>();
            if (factory != null)
            {
                factory.ExecuteWhenTargetSet(gameObject.transform);
            }
        }

        /// <summary>
        /// Removes the first target from the queue
        /// </summary>
        public void RemoveTarget() {
            if (targets.Count > 0) {
               Transform targett = targets.Dequeue(); // Remove the first target from the queue
               IFactory factory = targett.GetComponent<IFactory>();
               if (factory != null)
               {
                   factory.Execute(gameObject.transform);
               }
               else
               {
                   Debug.LogWarning($"Factory Execution Failed {target.name}");
               }
               target = null;
               // Transform dequeued = targets.Dequeue(); // Remove the first target from the queue
               // Destroy(dequeued.gameObject);
            }
            else
            {
                if (!ai.isAvailable)
                {
                    if (restPos)
                    {
                        ai.destination = restPos.position;
                    }
                }
            }
        }

        /// <summary>Updates the AI's destination every frame</summary>
        void Update () {
            if ( ai != null) {
                // Check if the current target is different from the AI's current destination
                if (targets.Count > 0)
                {
                    target = targets.Peek().transform;
                    if (ai.destination != target.position)
                    {
                       ai.destination = target.position; // Set AI's destination to the first target in the queue
                       
                    }
                }

                if (ai.isStopped||ai.reachedDestination)
                {
                    RemoveTarget(); // If reached, remove the current target from the queue
                }
                // Check if the AI has reached its current destination
             
            }
        }

        public void stopMe()
        {
            if (ai != null)
                ai.isStopped = true;
        }
    }

   
}
public interface IFactory
{
    public Image TimerImg{ get; set; }
    public bool isAvailable { get; set; }
    public int TaskAssignIndex { get; set; }
    public void ExecuteWhenTargetSet(Transform other);
    public void Execute(Transform other);

    public void SetFree(Transform other);
} 

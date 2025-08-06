using UnityEngine;
using System.Collections;

namespace MangoMango
{
    
/// <summary>
/// Generic Singleton class that can be inherited by other classes.
/// </summary>
public class Singleton<T> : MonoBehaviour where T : class
{
    /// <summary>
    /// Static instance of the singleton.
    /// </summary>
    protected static T _instance = null;

    /// <summary>
    /// Property to access the singleton instance.
    /// </summary>
    public static T Instance
    {
        get
        {
            // If the instance is null, create a new instance.
            if (_instance == null)
            {
                // Instantiate the singleton as a component of the SingletonManager's GameObject.
                _instance = SingletonManager.gameobject.AddComponent(typeof(T)) as T;
            }
            return _instance;
        }
    }

    /// <summary>
    /// Explicit instantiation method.
    /// </summary>
    public static void Instantiate()
    {
        _instance = Instance;
    }

    /// <summary>
    /// Constructor that sets the instance to the current instance of the derived class.
    /// </summary>
    public Singleton()
    {
        _instance = this as T;
    }

    /// <summary>
    /// Method to execute an action after a coroutine has finished.
    /// </summary>
    /// <param name="coroutine">Coroutine to execute.</param>
    /// <param name="action">Action to execute after the coroutine.</param>
    public void ExecuteAfterCoroutine(IEnumerator coroutine, System.Action action)
    {
        StartCoroutine(ExecuteAfterCoroutineActual(coroutine, action));
    }

    /// <summary>
    /// Coroutine that executes an action after another coroutine.
    /// </summary>
    /// <param name="coroutine">Coroutine to execute.</param>
    /// <param name="action">Action to execute after the coroutine.</param>
    /// <returns>Coroutine enumerator.</returns>
    public IEnumerator ExecuteAfterCoroutineActual(IEnumerator coroutine, System.Action action)
    {
        yield return StartCoroutine(coroutine);
        action();
    }
}

/// <summary>
/// SingletonManager class responsible for managing the creation of singleton instances.
/// </summary>
public class SingletonManager
{
    /// <summary>
    /// Static GameObject used to hold singleton components.
    /// </summary>
    private static GameObject _gameobject = null;

    /// <summary>
    /// Property to access the singleton GameObject.
    /// </summary>
    public static GameObject gameobject
    {
        get
        {
            // If the GameObject is null, create a new one and make it persistent across scenes.
            if (_gameobject == null)
            {
                _gameobject = new GameObject("-SingletonManager");
                Object.DontDestroyOnLoad(_gameobject);
            }
            return _gameobject;
        }
    }
}
}

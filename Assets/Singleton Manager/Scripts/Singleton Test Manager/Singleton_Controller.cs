using System;
using UnityEngine;
using System.Collections;

using MangoMango;
public class Singleton_Controller : Singleton<Singleton_Controller>
{
    /// <summary>
    /// Singleton_Controller class responsible for handling all the instances in 1.
    /// Just make public object of the class you wanna make instance of
    /// in awake function of that script, just write below line
    /// Singleton_Controller.Instance.YourClass = this;
    /// Now everytime you wanna access it, just access it as
    /// Singleton_Controller.Instance.YourClass.AnyFunction();
    /// </summary>
   // public TaskAssigner TaskAssigner;
   // public GenericUiManager GenericUiManager;
   // public CurrencyManager CurrencyManager;
   // public ThemeManager ThemeManager;
   // public GenericAudioManager AudioManager;
}

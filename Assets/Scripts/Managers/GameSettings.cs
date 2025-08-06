// Shady
using UnityEngine;
using DG.Tweening;
using GameAssets.GameSet.GameDevUtils.Managers;
using UnityEngine.UI;
using UnityEngine.Events;


[System.Serializable]
public class Toggle
{
    public Button button    = null;
    public Sprite OnSprite  = null;
    public Sprite OffSprite = null;

    private Image SpriteImage = null;

    public void AddListener(UnityAction call)
    {
        button.onClick.RemoveAllListeners();
        button.onClick.AddListener(call);
        SpriteImage = button.GetComponent<Image>();
    }//AddListener() end

    public void SetState(bool Toggle) => SpriteImage.sprite = Toggle ? OnSprite : OffSprite;
}//class end

public class GameSettings : MonoBehaviour
{
    public static GameSettings Instance {get; private set;}
    [SerializeField] RectTransform SettingPanel  = null;
    [SerializeField] Button        SettingButton = null;
    [Space]
    [SerializeField] Toggle MusicToggle  = null;
    [SerializeField] Toggle SFXToggle    = null;
    [SerializeField] Toggle HapticToggle = null;

    private bool CanToggle = true;
    private bool Toggle    = false;
    private float PosY     = 0f;

    public bool toggleStatusBg
    {
        set
        {
            if (value)
            {
                PlayerPrefs.SetInt("toggleStatusBg",1);
            }
            else
            {
                PlayerPrefs.SetInt("toggleStatusBg",0);
            }
        }
        get
        {
            if (PlayerPrefs.GetInt("toggleStatusBg") == 0)
                return false;
            else
                return true;
        }

    }
    public bool toggleStatusSFX
    {
        set
        {
            if (value)
            {
                PlayerPrefs.SetInt("toggleStatusSFX",1);
            }
            else
            {
                PlayerPrefs.SetInt("toggleStatusSFX",0);
            }
        }
        get
        {
            if (PlayerPrefs.GetInt("toggleStatusSFX") == 0)
                return false;
            else
                return true;
        }

    }
    public bool toggleStatusHaptic
    {
        set
        {
            if (value)
            {
                PlayerPrefs.SetInt("toggleStatusHaptic",1);
            }
            else
            {
                PlayerPrefs.SetInt("toggleStatusHaptic",0);
            }
        }
        get
        {
            if (PlayerPrefs.GetInt("toggleStatusHaptic") == 0)
                return false;
            else
                return true;
        }

    }
    private void Awake()
    {
        if(!Instance)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }//if end
        else
        {
            DestroyImmediate(gameObject);
            return;
        }//else end
    }//Awake() end

    private void Start()
    {
        if (!PlayerPrefs.HasKey("toggleStatusHaptic") && !PlayerPrefs.HasKey("toggleStatusSFX") && !PlayerPrefs.HasKey("toggleStatusBg"))
        {
            toggleStatusBg = true;
            toggleStatusSFX = true;
            toggleStatusHaptic = true;
            SoundManager.Instance.SetBgSoundSetting(GameSettings.Instance.toggleStatusBg);

        }

        SettingPanel.anchoredPosition = new Vector2(SettingPanel.anchoredPosition.x, -SettingPanel.anchoredPosition.y);
        PosY = -SettingPanel.anchoredPosition.y;
        SettingButton.onClick.RemoveAllListeners();
        SettingButton.onClick.AddListener(TogglePanel);
        MusicToggle. AddListener(ToggleMusic);
        SFXToggle.   AddListener(ToggleSFX);
        HapticToggle.AddListener(ToggleHaptic);
        LoadSettings();
        //SettingButton.gameObject.SetActive(false);
    }//Start() end
    
    public void InitializeSettings() => SettingButton.gameObject.SetActive(true);

    private void TogglePanel()
    {
        if(!CanToggle)
            return;
        CanToggle = false;
        Toggle    = !Toggle;
        if(Toggle)
        {
            SettingPanel.DOAnchorPos3DY(PosY, 0.25f, false).OnComplete(()=>CanToggle = true);
            if(SoundManager.Instance)
                SoundManager.Instance.PlayOneShot(SoundManager.Instance.buttonClip,1);
            Invoke(nameof(ClosePanel), 3.0f);
        }//if end
        else   
            ClosePanel();
    }//TogglePanel() end

    public void ClosePanel()
    {
        CancelInvoke();
        Toggle = false;
        SettingPanel.DOAnchorPos3DY(-PosY, 0.25f, false).OnComplete(()=>CanToggle = true);
    }//ClosePanel() end

    private void LoadSettings()
    {
        MusicToggle.SetState(toggleStatusBg);
        SFXToggle.SetState(toggleStatusSFX);
        HapticToggle.SetState(toggleStatusHaptic);
    }//LoadSettings() end

    private void ToggleMusic()
    {
        toggleStatusBg = !toggleStatusBg;
        MusicToggle.SetState(toggleStatusBg);
        SoundManager.Instance.SetBgSoundSetting(toggleStatusBg);

        // if(AudioManager.Instance)
        // {
        //     AudioManager.Instance.SetBGSetting(SaveData.Instance.Music);
        //     AudioManager.Instance.ButtonClick();
        // }//if end
        // SaveSystem.SaveProgress();
    }//ToggleMusic() end

    private void ToggleSFX()
    {
        toggleStatusSFX = !toggleStatusSFX;
        SFXToggle.SetState(toggleStatusSFX);
       

        // if(AudioManager.Instance)
        // {
        //     AudioManager.Instance.ButtonClick();
        //     AudioManager.Instance.SetSFXSetting(SaveData.Instance.SFX);
        // }//if end
        // SaveSystem.SaveProgress();
    }//ToggleSFX() end

    private void ToggleHaptic()
    {
        toggleStatusHaptic = !toggleStatusHaptic;
        HapticToggle.SetState(toggleStatusHaptic);
        
    }//ToggleHaptic() end

}//class end
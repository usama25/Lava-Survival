using UnityEngine;

namespace GameAssets.GameSet.GameDevUtils.Managers
{


	public class SoundManager : MonoBehaviour
	{

		public static    SoundManager Instance { get; private set; }
		public AudioSource  bgSoundSource;
		[SerializeField] AudioSource  bgAmbienceSoundSource;
		[SerializeField] AudioSource  sFXSoundSource;
		[SerializeField] AudioSource  walkSoundSource;

		public AudioClip bgClip;
		public AudioClip buttonClip;
		public AudioClip walkClip;
		public AudioClip attackClip;
		public AudioClip deathClip;
		public AudioClip buildClip;
		public AudioClip loseClip;
		public AudioClip[] pops;

		private int popIndex = 0;
		void Awake()
		{
			if (Instance == null)
			{
				Instance = this;
				DontDestroyOnLoad(gameObject);
			}
			else
			{
				DestroyImmediate(gameObject);
			}
		}

		void Start()
		{
			if (bgSoundSource.isPlaying)
				return;
			bgSoundSource.clip = bgClip;
			bgSoundSource.loop = true;
			bgSoundSource.Play();
		    
			
		}


		public void SetBgSoundSetting(bool toggle)
		{
			bgSoundSource.mute         = !toggle;
			
		}

		public void SetSfxSoundSetting(bool toggle) => sFXSoundSource.mute = !toggle;

		public void PlayOneShot(AudioClip clip, float volume)
		{ 
			sFXSoundSource.PlayOneShot(clip, volume);
		}

		public void PlayOneShotPop()
		{
			sFXSoundSource.PlayOneShot(pops[popIndex]);
			if (popIndex < 3)
			{
				popIndex++;
			}
			else
			{
				popIndex = 0;
			}
		}
		public void PlayWalk()
		{
			if(!walkSoundSource.isPlaying)
			    walkSoundSource.Play();
		}
		
		public void PlayWalkStop()
		{
			walkSoundSource.Stop();
		}

		public void PlayButtonSound() => sFXSoundSource.PlayOneShot(buttonClip, 1);

	}


}
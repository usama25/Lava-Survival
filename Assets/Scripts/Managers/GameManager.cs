using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.PlayerLoop;
using UnityEngine.SceneManagement;


namespace GameAssets.GameSet.GameDevUtils.Managers
{


	public class OnGameStateChangedEvent : UnityEvent<GameState>
	{

	}


	public enum GameState
	{

		MainMenu      = 0,
		StartScreen   = 7,
		SelectionScreen   = 8,
		Gameplay      = 1,
		Pause         = 2,
		Win           = 3,
		Fail          = 4,
		FinalMomentum = 5,
		Inventory     = 6
		

	}

	public class GameManager : MonoBehaviour
	{

		public static GameManager Instance { get; private set; }

		[SerializeField] GameState gameCurrentState = GameState.MainMenu;

		public GameState GameCurrentState
		{
			get => gameCurrentState;
			private set
			{
				gameCurrentState = value;
				onGameStateChangedEvent?.Invoke(gameCurrentState);
			}
		}


		static OnGameStateChangedEvent onGameStateChangedEvent = new OnGameStateChangedEvent();


		public LevelManager levelManager;
		public UIManager    uiManager;

		public Transform[] playerPosition;
		public GameObject player;
		public Camera     playerCam;
		
		
		[SerializeField] float beforeLevelCompleteDelay;
		[SerializeField] float beforeLevelFailDelay;

		
		public int InfinityCurrentLevel => levelManager.InfinityCurrentLevelNumber();
		bool       IsLevelCompleteNotInvoke;


		public delegate void OnMainMenuEvent();

		public static event OnMainMenuEvent onMainMenuEvent;

		public delegate void OnGamePlayEvent();

		public static event OnGamePlayEvent onGamePlayEvent;

		public delegate void OnPauseEvent();

		public static event OnPauseEvent onPauseEvent;


		public delegate void OnFinalMomentumEvent();

		public static event OnFinalMomentumEvent onFinalMomentumEvent;

		public delegate void OnCompleteEvent();

		public static event OnCompleteEvent onCompleteEvent;

		public delegate void OnFailedEvent();

		public static event OnFailedEvent onFailedEvent;


		private void Awake()
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

		void OnEnable()
		{
			Application.targetFrameRate = 60;
			onGameStateChangedEvent.AddListener(OnGameStateChanged);
		}

		void OnDisable()
		{
			onGameStateChangedEvent.RemoveAllListeners();
		}

		void Start()
		{
			LoadLevelAtStart();
			OnGameStateChanged(GameState.MainMenu);
		}

		void Update() {

			if (Input.GetMouseButton(0) && gameCurrentState == GameState.StartScreen)
			{
				ChangeGameState(GameState.Gameplay);
			}
		}

		void CameraStart()
		{
			DOTween.To(()=> playerCam.orthographicSize, x=> playerCam.orthographicSize = x, 6, 3);
		}
		public void ChangeGameState(GameState state)
		{
			GameCurrentState = state;
		}

		void OnGameStateChanged(GameState state)
		{
			switch (state)
			{
				case GameState.MainMenu:
					Time.timeScale = 1;
					uiManager.EnableUIScreen(GameState.MainMenu,0);
					onMainMenuEvent?.Invoke();
					break;

				case GameState.StartScreen:
					Time.timeScale = 1;
					uiManager.EnableUIScreen(GameState.StartScreen,0);
					break;
				
				case GameState.SelectionScreen:
					Time.timeScale = 1;
					uiManager.EnableUIScreen(GameState.SelectionScreen,0);
					break;
				
				case GameState.Gameplay:
					Time.timeScale = 1;
					CameraStart();
					uiManager.EnableUIScreen(GameState.Gameplay,0);
					onGamePlayEvent?.Invoke();
					break;

				case GameState.Pause:
					Time.timeScale = 0;
					uiManager.EnableUIScreen(GameState.Pause,0);
					onPauseEvent?.Invoke();
					break;

				case GameState.FinalMomentum:
					//uiManager.EnableUIScreen(GameState.FinalMomentum);
					onFinalMomentumEvent?.Invoke();
					break;

				case GameState.Win:
					//if (IsLevelCompleteNotInvoke) return;
					//IsLevelCompleteNotInvoke = true;
					//SoundManager.Instance.PlayOneShot(SoundManager.Instance.winClip, 1);
					//SoundManager.Instance.PlayOneShot(SoundManager.Instance.kidsJoyClip, 1);
					uiManager.EnableUIScreen(GameState.Win, beforeLevelCompleteDelay);
					//NextUnlockLevel();
					//uiManager.EnableUIScreen(GameState.Win);
					onCompleteEvent?.Invoke();
					break;

				case GameState.Fail:
					Camera.main.DOShakePosition(0.5f, new Vector3(1, 1, 1));
					//SoundManager.Instance.PlayOneShot(SoundManager.Instance.failClip, 1);
					uiManager.EnableUIScreen(GameState.Fail, beforeLevelFailDelay);

					// Elephant.LevelFailed(InfinityCurrentLevel);
					// GameAnalytics.NewProgressionEvent(GAProgressionStatus.Fail, "LevelFail", InfinityCurrentLevel);
					//uiManager.EnableUIScreen(GameState.Fail,0);
					onFailedEvent?.Invoke();
					break;
			}
		}


		private void LoadLevelAtStart()
		{
			levelManager.LoadLevelAtStart();
			SpawnPlayerAndCamera();
		}

		private void SpawnPlayerAndCamera()
		{
			player.transform.position = playerPosition[levelManager.CurrentPlayLevelNumber() - 1].position;
		}

		void NextUnlockLevel()
		{
			levelManager.NextUnlockLevel();
		}


		public void PlayBtn()
		{
			ChangeGameState(GameState.StartScreen);
		}
		public void TabToContinue()
		{
			SoundManager.Instance.PlayButtonSound();
			ChangeGameState(GameState.Gameplay);
		}

		public void Restart()
		{
			NextUnlockLevel();
			SceneManager.LoadScene(0);
		}

		public void RestartFail()
		{
			SceneManager.LoadScene(0);
		}
	}


}
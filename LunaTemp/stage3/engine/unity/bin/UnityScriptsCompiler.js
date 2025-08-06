if ( TRACE ) { TRACE( JSON.parse( '["AnimatorController#Start","AnimatorController#Update","AnimatorController#Shoot","AnimatorController#Die","ArrowPointer#init","ArrowPointer#Awake","ArrowPointer#Update","ArrowPointer#MoveToNextTarget","Billboard#Start","Billboard#LateUpdate","Bullet#init","Bullet#SetTarget","Bullet#Update","Bullet#HitTarget","CameraFollow#init","CameraFollow#FixedUpdate","CurrencyDeductionOnCollision#init","CurrencyDeductionOnCollision#Start","CurrencyDeductionOnCollision#Update","CurrencyDeductionOnCollision#WinSequence","CurrencyDeductionOnCollision#Reset","CurrencyDeductionOnCollision#OnCollisionEnter","CurrencyDeductionOnCollision#OnCollisionExit","CurrencyDeductionOnCollision#DeductChunks","CurrencyDeductionOnCollision#OnDeductionComplete","CuustomerZone#OnCollisionEnter","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral$1","DG.Tweening.DOTweenProShortcuts#DOSpiral","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","EnemyAI#init","EnemyAI#Start","EnemyAI#Update","EnemyAI#TransitionTo","EnemyAI#OnDeath","EnemyAI#DeathSequence","EnemySpawner#init","EnemySpawner#OnEnable","EnemySpawner#OnDisable","EnemySpawner#Start","EnemySpawner#HandleEnemyDeath","EnemySpawner#RespawnAt","EnemySpawner#SpawnAt","GameAssets.GameSet.GameDevUtils.Managers.Currency#CurrencyName#get","GameAssets.GameSet.GameDevUtils.Managers.Currency#TotalCurrency#get","GameAssets.GameSet.GameDevUtils.Managers.Currency#TotalCurrency#set","GameAssets.GameSet.GameDevUtils.Managers.Currency#SetInitialValues","GameAssets.GameSet.GameDevUtils.Managers.Currency#AddCurrency","GameAssets.GameSet.GameDevUtils.Managers.Currency#RemoveCurrency","GameAssets.GameSet.GameDevUtils.Managers.Currency#SaveCurrency","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#Awake","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#Update","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#SetAllCurrenciesInitialValues","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#PlusCurrencyValue","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#SubtractCurrencyValue","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#TotalCurrencyFor","GameAssets.GameSet.GameDevUtils.Managers.GameManager#init","GameAssets.GameSet.GameDevUtils.Managers.GameManager#GameCurrentState#get","GameAssets.GameSet.GameDevUtils.Managers.GameManager#GameCurrentState#set","GameAssets.GameSet.GameDevUtils.Managers.GameManager#InfinityCurrentLevel#get","GameAssets.GameSet.GameDevUtils.Managers.GameManager#init","GameAssets.GameSet.GameDevUtils.Managers.GameManager#Awake","GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnEnable","GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnDisable","GameAssets.GameSet.GameDevUtils.Managers.GameManager#Start","GameAssets.GameSet.GameDevUtils.Managers.GameManager#Update","GameAssets.GameSet.GameDevUtils.Managers.GameManager#CameraStart","GameAssets.GameSet.GameDevUtils.Managers.GameManager#ChangeGameState","GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnGameStateChanged","GameAssets.GameSet.GameDevUtils.Managers.GameManager#LoadLevelAtStart","GameAssets.GameSet.GameDevUtils.Managers.GameManager#SpawnPlayerAndCamera","GameAssets.GameSet.GameDevUtils.Managers.GameManager#NextUnlockLevel","GameAssets.GameSet.GameDevUtils.Managers.GameManager#PlayBtn","GameAssets.GameSet.GameDevUtils.Managers.GameManager#TabToContinue","GameAssets.GameSet.GameDevUtils.Managers.GameManager#Restart","GameAssets.GameSet.GameDevUtils.Managers.GameManager#RestartFail","GameAssets.GameSet.GameDevUtils.Managers.LevelManager#init","GameAssets.GameSet.GameDevUtils.Managers.LevelManager#LoadLevelAtStart","GameAssets.GameSet.GameDevUtils.Managers.LevelManager#InfinityCurrentLevelNumber","GameAssets.GameSet.GameDevUtils.Managers.LevelManager#CurrentPlayLevelNumber","GameAssets.GameSet.GameDevUtils.Managers.LevelManager#NextUnlockLevel","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#init","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#Awake","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#Start","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#SetBgSoundSetting","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#SetSfxSoundSetting","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayOneShot","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayOneShotPop","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayWalk","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayWalkStop","GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayButtonSound","GameAssets.GameSet.GameDevUtils.Managers.UIManager#EnableUIScreen","GameAssets.GameSet.GameDevUtils.Managers.UIManager#EnableScreenWithDelay","GameSettings#toggleStatusBg#get","GameSettings#toggleStatusBg#set","GameSettings#toggleStatusSFX#get","GameSettings#toggleStatusSFX#set","GameSettings#toggleStatusHaptic#get","GameSettings#toggleStatusHaptic#set","GameSettings#init","GameSettings#Awake","GameSettings#Start","GameSettings#InitializeSettings","GameSettings#TogglePanel","GameSettings#ClosePanel","GameSettings#LoadSettings","GameSettings#ToggleMusic","GameSettings#ToggleSFX","GameSettings#ToggleHaptic","Helpers#init","Helpers#ToIso","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","Npc#Awake","Npc#StartWalk","Npc#StopWalk","Npc#Update","Npc#OnTriggerStay","ObjectQueueManager#init","ObjectQueueManager#Awake","ObjectQueueManager#Start","ObjectQueueManager#InitializeQueue","ObjectQueueManager#DequeueNext","ObjectQueueManager#MoveToPoint","ObjectStacker#ItemCount#get","ObjectStacker#init","ObjectStacker#OnValidate","ObjectStacker#Update","ObjectStacker#GetItemsInStack","ObjectStacker#GetItemsOutOfStack","ObjectStacker#PushItemWithTween","ObjectStacker#UpdateAllItemPositions","ObjectStacker#CalculateOffset","ParticlePool#init","PlayerAttack#init","PlayerAttack#Start","PlayerAttack#Update","PlayerAttack#GetClosest","PlayerAttack#RotatePlayerModel","PlayerAttack#PerformArcAttack","PlayerAttack#OnDrawGizmosSelected","PlayerController#init","PlayerController#OnEnable","PlayerController#Update","PlayerController#FixedUpdate","PlayerController#GatherInput","PlayerController#Look","PlayerController#Move","PlayerController#IsDead","PlayerController#FailSequence","PlayerController#Restart","PlayerController#DownloadNow","PlayerController#OnTriggerEnter","PoolingManager#init","PoolingManager#Awake","PoolingManager#Initialize","PoolingManager#Startt","PoolingManager#MakePool","PoolingManager#SpawnObject$1","PoolingManager#SpawnObject","PoolingManager#EnemySpawn","PoolingManager#Obj","PoolingManager#PlayParticle$3","PoolingManager#PlayParticle","PoolingManager#PlayParticle$2","PoolingManager#PlayParticle$1","PoolingManager#Play$3","PoolingManager#Play","PoolingManager#Play$2","PoolingManager#Play$1","PoolingManager#PutObjBackInQueue","PoolingManager#PutBackInQueue","StackingPlace#init","StackingPlace#Awake","StackingPlace#Start","StackingPlace#StartAutoRoutine","StackingPlace#OnCollisionEnter","StackingPlace#OnCollisionExit","StackingPlace#StopSequence","StackingPlace#TransferItems","StackingPlace#AutoTransferLoop","StackItem#OnEnable","Toggle#AddListener","Toggle#SetState","DamageSystem#init","DamageSystem#OnEnable","DamageSystem#TakeDamage","DamageSystem#Die","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","EnemyAI.AttackState#ctor","EnemyAI.AttackState#Enter","EnemyAI.AttackState#Update","EnemyAI.AttackState#Exit","EnemyAI.ChaseState#ctor","EnemyAI.ChaseState#Enter","EnemyAI.ChaseState#Update","EnemyAI.ChaseState#Exit","EnemyAI.IdleState#ctor","EnemyAI.IdleState#Enter","EnemyAI.IdleState#Update","EnemyAI.IdleState#Exit","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @version 1.0.9349.28458
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AnimatorController start.*/
    Bridge.define("AnimatorController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            playerAnim: null,
            velocityHash: 0,
            dynamicJoystick: null,
            once: false
        },
        methods: {
            /*AnimatorController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AnimatorController#Start", this ); }

                this.velocityHash = UnityEngine.Animator.StringToHash("velocity");
            },
            /*AnimatorController.Start end.*/

            /*AnimatorController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AnimatorController#Update", this ); }


                var inputValue = Math.abs(this.dynamicJoystick.Horizontal) + Math.abs(this.dynamicJoystick.Vertical);
                this.playerAnim.SetFloat(this.velocityHash, inputValue);
                this.playerAnim.speed = Math.max(1, Math.min(inputValue, 5.0));
            },
            /*AnimatorController.Update end.*/

            /*AnimatorController.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "AnimatorController#Shoot", this ); }

                this.playerAnim.SetTrigger$1("shoot");
            },
            /*AnimatorController.Shoot end.*/

            /*AnimatorController.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "AnimatorController#Die", this ); }

                this.playerAnim.SetTrigger$1("die");
            },
            /*AnimatorController.Die end.*/


        }
    });
    /*AnimatorController end.*/

    /*ArrowPointer start.*/
    Bridge.define("ArrowPointer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            player: null,
            arrow: null,
            targets: null,
            currentTargetIndex: 0,
            orbitRadius: 0,
            heightOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ArrowPointer#init", this ); }

                this.currentTargetIndex = 0;
                this.orbitRadius = 2.0;
                this.heightOffset = 2.0;
            }
        },
        methods: {
            /*ArrowPointer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ArrowPointer#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(ArrowPointer.Instance, null)) {
                    ArrowPointer.Instance = this;
                }
            },
            /*ArrowPointer.Awake end.*/

            /*ArrowPointer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ArrowPointer#Update", this ); }

                if (this.targets == null || this.targets.Count === 0) {
                    return;
                }

                var target = this.targets.getItem(this.currentTargetIndex);

                // Step 1: Direction to target (on XZ plane only)
                var toTarget = target.position.$clone().sub( this.player.position );
                toTarget.y = 0; // ignore vertical component
                var direction = toTarget.clone().normalize().$clone();

                // Step 2: Position the arrow around the player at orbit radius
                var orbitPosition = this.player.position.$clone().add( direction.$clone().clone().scale( this.orbitRadius ) );
                orbitPosition.y = this.heightOffset;
                this.arrow.position = orbitPosition.$clone();

                // Step 3: Rotate arrow to face target (on Y-axis only)
                var lookDirection = target.position.$clone().sub( this.arrow.position );
                lookDirection.y = 0; // constrain to Y-axis rotation only
                if (!pc.Vec3.equals( lookDirection, pc.Vec3.ZERO.clone() )) {
                    var lookRotation = new pc.Quat().lookRotation( lookDirection, pc.Vec3.UP );
                    this.arrow.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, lookRotation.getPositiveEulerAngles().y, 0.0 );
                }
            },
            /*ArrowPointer.Update end.*/

            /*ArrowPointer.MoveToNextTarget start.*/
            MoveToNextTarget: function () {
if ( TRACE ) { TRACE( "ArrowPointer#MoveToNextTarget", this ); }

                if (this.currentTargetIndex < ((this.targets.Count - 1) | 0)) {
                    this.currentTargetIndex = (this.currentTargetIndex + 1) | 0;
                } else {
                    this.arrow.gameObject.SetActive(false);
                } // All done
            },
            /*ArrowPointer.MoveToNextTarget end.*/


        }
    });
    /*ArrowPointer end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*Billboard start.*/
    Bridge.define("Billboard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCam: null
        },
        methods: {
            /*Billboard.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Billboard#Start", this ); }

                this.mainCam = UnityEngine.Camera.main;
            },
            /*Billboard.Start end.*/

            /*Billboard.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Billboard#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCam, null)) {
                    return;
                }

                // Look at camera but maintain upright orientation
                var camForward = this.mainCam.transform.forward.$clone();
                var up = pc.Vec3.UP.clone(); // or mainCam.transform.up if needed

                this.transform.rotation = new pc.Quat().lookRotation( camForward, up );
            },
            /*Billboard.LateUpdate end.*/


        }
    });
    /*Billboard end.*/

    /*Bullet start.*/
    Bridge.define("Bullet", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            target: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Bullet#init", this ); }

                this.speed = 20.0;
            }
        },
        methods: {
            /*Bullet.SetTarget start.*/
            SetTarget: function (target) {
if ( TRACE ) { TRACE( "Bullet#SetTarget", this ); }

                this.target = target;
            },
            /*Bullet.SetTarget end.*/

            /*Bullet.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Bullet#Update", this ); }

                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    var direction = (this.target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                    this.transform.position = this.transform.position.$clone().add( direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.deltaTime ) );

                    direction.y = 0;

                    // Check if the direction is not zero to avoid errors
                    if (!pc.Vec3.equals( direction, pc.Vec3.ZERO.clone() )) {
                        // Calculate the target rotation only around the Y-axis
                        var targetRotation = new pc.Quat().lookRotation( direction, pc.Vec3.UP );

                        // Apply the rotation to this object
                        this.transform.rotation = targetRotation.$clone();
                    }


                    if (pc.Vec3.distance( this.transform.position, this.target.position ) < 0.1) {
                        this.HitTarget();
                    }
                }
            },
            /*Bullet.Update end.*/

            /*Bullet.HitTarget start.*/
            HitTarget: function () {
if ( TRACE ) { TRACE( "Bullet#HitTarget", this ); }

                var damageable = this.target.GetComponent(IDamageable);
                if (damageable != null) {
                    damageable.IDamageable$TakeDamage(100.0);
                    PoolingManager.Instance.PutObjBackInQueue("bullet", this.gameObject);
                    var scoreVfx = PoolingManager.Instance.SpawnObject$1("score", this.transform.position.$clone().add( new pc.Vec3( 0, 1.5, 0 ) ), pc.Quat.IDENTITY.clone(), 1);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(scoreVfx.transform, 1.5, 0.5), true), DG.Tweening.Ease.OutQuart);
                }
            },
            /*Bullet.HitTarget end.*/


        }
    });
    /*Bullet end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            offsetX: 0,
            offsetZ: 0,
            m_refPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollow#init", this ); }

                this.m_refPos = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*CameraFollow.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#FixedUpdate", this ); }

                var pos = this.transform.position.$clone();
                this.m_refPos = this.player.position.$clone();
                this.m_refPos = this.m_refPos.$clone().clone().scale( UnityEngine.Time.smoothDeltaTime );
                this.transform.position = new pc.Vec3().lerp( this.transform.position, new pc.Vec3( this.player.position.x + this.offsetX, this.transform.position.y, this.player.position.z + this.offsetZ ), UnityEngine.Time.deltaTime * 3.0 );
            },
            /*CameraFollow.FixedUpdate end.*/


        }
    });
    /*CameraFollow end.*/

    /*CurrencyDeductionOnCollision start.*/
    Bridge.define("CurrencyDeductionOnCollision", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            currencyName: null,
            totalAmount: 0,
            chunkSize: 0,
            delayBetweenDeductions: 0,
            deductionCoroutine: null,
            remainingAmount: 0,
            amount: null,
            once: false,
            pc: null,
            win: null,
            particle: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#init", this ); }

                this.currencyName = "coin";
            }
        },
        methods: {
            /*CurrencyDeductionOnCollision.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#Start", this ); }

                this.remainingAmount = this.totalAmount;
            },
            /*CurrencyDeductionOnCollision.Start end.*/

            /*CurrencyDeductionOnCollision.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#Update", this ); }

                this.amount.text = Bridge.toString(this.remainingAmount);

                if (this.remainingAmount <= 0 && !this.once) {
                    this.once = true;
                    this.pc.canMove = false;
                    this.pc.inputValue = 0;
                    this.particle.Play();
                    this.StartCoroutine$1(this.WinSequence());
                }
            },
            /*CurrencyDeductionOnCollision.Update end.*/

            /*CurrencyDeductionOnCollision.WinSequence start.*/
            WinSequence: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#WinSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.win.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CurrencyDeductionOnCollision.WinSequence end.*/

            /*CurrencyDeductionOnCollision.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#Reset", this ); }

                //GetComponent<Collider>().isTrigger = false;
            },
            /*CurrencyDeductionOnCollision.Reset end.*/

            /*CurrencyDeductionOnCollision.OnCollisionEnter start.*/
            OnCollisionEnter: function (other) {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#OnCollisionEnter", this ); }

                if (other.gameObject.CompareTag("Player")) {
                    if (this.deductionCoroutine != null) {
                        return;
                    }

                    if (GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.TotalCurrencyFor(this.currencyName) > 0) {
                        this.deductionCoroutine = this.StartCoroutine$1(this.DeductChunks());
                    }
                }



            },
            /*CurrencyDeductionOnCollision.OnCollisionEnter end.*/

            /*CurrencyDeductionOnCollision.OnCollisionExit start.*/
            OnCollisionExit: function (other) {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#OnCollisionExit", this ); }

                if (other.gameObject.CompareTag("Player")) {
                    if (this.deductionCoroutine != null) {
                        this.StopCoroutine$2(this.deductionCoroutine);
                        this.deductionCoroutine = null;
                    }
                }


            },
            /*CurrencyDeductionOnCollision.OnCollisionExit end.*/

            /*CurrencyDeductionOnCollision.DeductChunks start.*/
            DeductChunks: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#DeductChunks", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    thisBatch,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.TotalCurrencyFor(this.currencyName) > 0 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    thisBatch = UnityEngine.Mathf.Min(this.chunkSize, this.remainingAmount);

                                        for (var i = 0; i < thisBatch; i = (i + 1) | 0) {

                                            GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.SubtractCurrencyValue(this.currencyName, 1);
                                            this.remainingAmount = (this.remainingAmount - 1) | 0;
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenDeductions);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.deductionCoroutine = null;
                                        this.OnDeductionComplete();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CurrencyDeductionOnCollision.DeductChunks end.*/

            /*CurrencyDeductionOnCollision.OnDeductionComplete start.*/
            OnDeductionComplete: function () {
if ( TRACE ) { TRACE( "CurrencyDeductionOnCollision#OnDeductionComplete", this ); }

                UnityEngine.Debug.Log$1("complete");
            },
            /*CurrencyDeductionOnCollision.OnDeductionComplete end.*/


        }
    });
    /*CurrencyDeductionOnCollision end.*/

    /*CuustomerZone start.*/
    Bridge.define("CuustomerZone", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            objectQueueManager: null
        },
        methods: {
            /*CuustomerZone.OnCollisionEnter start.*/
            OnCollisionEnter: function (other) {
if ( TRACE ) { TRACE( "CuustomerZone#OnCollisionEnter", this ); }

                if (other.gameObject.CompareTag("Player")) {
                    this.objectQueueManager.DequeueNext();
                }
            },
            /*CuustomerZone.OnCollisionEnter end.*/


        }
    });
    /*CuustomerZone end.*/

    /*IDamageable start.*/
    Bridge.define("IDamageable", {
        $kind: 3
    });
    /*IDamageable end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {DG.Tweening.DOTweenAnimation}    arg
     * @return  {void}
     */


    /*DG.Tweening.DOTweenAnimation start.*/
    /** @namespace DG.Tweening */

    /**
     * Attach this to a GameObject to create a tween
     *
     * @public
     * @class DG.Tweening.DOTweenAnimation
     * @augments DG.Tweening.Core.ABSAnimationComponent
     */
    Bridge.define("DG.Tweening.DOTweenAnimation", {
        inherits: [DG.Tweening.Core.ABSAnimationComponent],
        statics: {
            events: {
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function addOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function removeOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnReset: null
            },
            methods: {
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static start.*/
                Dispatch_OnReset: function (anim) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Dispatch_OnReset", this ); }

                    if (!Bridge.staticEquals(DG.Tweening.DOTweenAnimation.OnReset, null)) {
                        DG.Tweening.DOTweenAnimation.OnReset(anim);
                    }
                },
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static end.*/

                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static start.*/
                TypeToDOTargetType: function (t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#TypeToDOTargetType", this ); }

                    var str = Bridge.getTypeName(t);
                    var dotIndex = str.lastIndexOf(".");
                    if (dotIndex !== -1) {
                        str = str.substr(((dotIndex + 1) | 0));
                    }
                    if (System.String.indexOf(str, "Renderer") !== -1 && (!Bridge.referenceEquals(str, "SpriteRenderer"))) {
                        str = "Renderer";
                    }
                    //#if true // PHYSICS_MARKER
                    //            if (str == "Rigidbody") str = "Transform";
                    //#endif
                    //#if true // PHYSICS2D_MARKER
                    //            if (str == "Rigidbody2D") str = "Transform";
                    //#endif
                    //            if (str == "RectTransform") str = "Transform";
                    if (Bridge.referenceEquals(str, "RawImage") || Bridge.referenceEquals(str, "Graphic")) {
                        str = "Image";
                    } // RawImages/Graphics are managed like Images for DOTweenAnimation (color and fade use Graphic target anyway)
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(DG.Tweening.DOTweenAnimation.TargetType, str), DG.Tweening.DOTweenAnimation.TargetType), System.Int32));
                },
                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static end.*/


            }
        },
        fields: {
            targetIsSelf: false,
            targetGO: null,
            tweenTargetIsTargetGO: false,
            delay: 0,
            duration: 0,
            easeType: 0,
            easeCurve: null,
            loopType: 0,
            loops: 0,
            id: null,
            isRelative: false,
            isFrom: false,
            isIndependentUpdate: false,
            autoKill: false,
            autoGenerate: false,
            isActive: false,
            isValid: false,
            target: null,
            animationType: 0,
            targetType: 0,
            forcedTargetType: 0,
            autoPlay: false,
            useTargetAsV3: false,
            endValueFloat: 0,
            endValueV3: null,
            endValueV2: null,
            endValueColor: null,
            endValueString: null,
            endValueRect: null,
            endValueTransform: null,
            optionalBool0: false,
            optionalBool1: false,
            optionalFloat0: 0,
            optionalInt0: 0,
            optionalRotationMode: 0,
            optionalScrambleMode: 0,
            optionalShakeRandomnessMode: 0,
            optionalString: null,
            _tweenAutoGenerationCalled: false,
            _playCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#init", this ); }

                this.endValueV3 = new UnityEngine.Vector3();
                this.endValueV2 = new UnityEngine.Vector2();
                this.endValueColor = new UnityEngine.Color();
                this.endValueRect = new UnityEngine.Rect();
                this.targetIsSelf = true;
                this.tweenTargetIsTargetGO = true;
                this.duration = 1;
                this.easeType = DG.Tweening.Ease.OutQuad;
                this.easeCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0, 0, 0, 0), new pc.Keyframe(1, 1, 0, 0) ]});
                this.loopType = DG.Tweening.LoopType.Restart;
                this.loops = 1;
                this.id = "";
                this.isIndependentUpdate = false;
                this.autoKill = true;
                this.autoGenerate = true;
                this.isActive = true;
                this.autoPlay = true;
                this.endValueColor = new pc.Color( 1, 1, 1, 1 );
                this.endValueString = "";
                this.endValueRect = new UnityEngine.Rect.$ctor1(0, 0, 0, 0);
                this.optionalRotationMode = DG.Tweening.RotateMode.Fast;
                this.optionalScrambleMode = DG.Tweening.ScrambleMode.None;
                this.optionalShakeRandomnessMode = DG.Tweening.ShakeRandomnessMode.Full;
                this._playCount = -1;
            }
        },
        methods: {
            /*DG.Tweening.DOTweenAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Awake", this ); }

                if (!this.isActive || !this.autoGenerate) {
                    return;
                }

                if (this.animationType !== DG.Tweening.DOTweenAnimation.AnimationType.Move || !this.useTargetAsV3) {
                    // Don't create tweens if we're using a RectTransform as a Move target,
                    // because that will work only inside Start
                    this.CreateTween(false, this.autoPlay);
                    this._tweenAutoGenerationCalled = true;
                }
            },
            /*DG.Tweening.DOTweenAnimation.Awake end.*/

            /*DG.Tweening.DOTweenAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Start", this ); }

                if (this._tweenAutoGenerationCalled || !this.isActive || !this.autoGenerate) {
                    return;
                }

                this.CreateTween(false, this.autoPlay);
                this._tweenAutoGenerationCalled = true;
            },
            /*DG.Tweening.DOTweenAnimation.Start end.*/

            /*DG.Tweening.DOTweenAnimation.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Reset", this ); }

                DG.Tweening.DOTweenAnimation.Dispatch_OnReset(this);
            },
            /*DG.Tweening.DOTweenAnimation.Reset end.*/

            /*DG.Tweening.DOTweenAnimation.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#OnDestroy", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.OnDestroy end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween start.*/
            /**
             * Creates/recreates the tween without playing it, but first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTween", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween and plays it, first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTween start.*/
            /**
             * Creates/recreates the tween from its target's current value without playing it, but first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTween", this ); }

                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween from its target's current value and plays it, first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay", this ); }

                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.CreateTween start.*/
            /**
             * Creates the tween manually (called automatically if AutoGenerate is set in the Inspector)
             from its target's current value.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    regenerateIfExists    If TRUE and an existing tween was already created (and not killed), kills it and recreates it with the current
             parameters. Otherwise, if a tween already exists, does nothing.
             * @param   {boolean}    andPlay               If TRUE also plays the tween, otherwise only creates it
             * @return  {void}
             */
            CreateTween: function (regenerateIfExists, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateTween", this ); }

                if (regenerateIfExists === void 0) { regenerateIfExists = false; }
                if (andPlay === void 0) { andPlay = true; }
                if (!this.isValid) {
                    if (regenerateIfExists) { // Called manually: warn users
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation isn't valid and its tween won't be created", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }
                if (this.tween != null) {
                    if (this.tween.active) {
                        if (regenerateIfExists) {
                            DG.Tweening.TweenExtensions.Kill(this.tween);
                        } else {
                            return;
                        }
                    }
                    this.tween = null;
                }

                //            if (target == null) {
                //                Debug.LogWarning(string.Format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", this.gameObject.name), this.gameObject);
                //                return;
                //            }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.Component.op_Equality(this.target, null) || UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    if (this.targetIsSelf && UnityEngine.Component.op_Equality(this.target, null)) {
                        // Old error caused during upgrade from DOTween Pro 0.9.255
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", [this.gameObject.name]), this.gameObject);
                    } else {
                        // Missing non-self target
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }

                if (this.forcedTargetType !== DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    this.targetType = this.forcedTargetType;
                }
                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    // Legacy DOTweenAnimation (made with a version older than 0.9.450) without stored targetType > assign it now
                    this.targetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                }

                switch (this.animationType) {
                    case DG.Tweening.DOTweenAnimation.AnimationType.None: 
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Move: 
                        if (this.useTargetAsV3) {
                            this.isRelative = false;
                            if (UnityEngine.Component.op_Equality(this.endValueTransform, null)) {
                                UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target is NULL, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                this.endValueV3 = pc.Vec3.ZERO.clone();
                            } else {
                                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.RectTransform) {
                                    var endValueT = Bridge.as(this.endValueTransform, UnityEngine.RectTransform);
                                    if (UnityEngine.Component.op_Equality(endValueT, null)) {
                                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target should be a RectTransform, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                        this.endValueV3 = pc.Vec3.ZERO.clone();
                                    } else {
                                        var rTarget = Bridge.as(this.target, UnityEngine.RectTransform);
                                        if (UnityEngine.Component.op_Equality(rTarget, null)) {
                                            UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's target and TO target are not of the same type. Please reassign the values", [this.gameObject.name]), this.gameObject);
                                        } else {
                                            // Problem: doesn't work inside Awake (ararargh!)
                                            this.endValueV3 = UnityEngine.Vector3.FromVector2(DG.Tweening.DOTweenModuleUI.Utils.SwitchToRectTransform(endValueT, rTarget));
                                        }
                                    }
                                } else {
                                    this.endValueV3 = this.endValueTransform.position.$clone();
                                }
                            }
                        }
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOAnchorPos3D(Bridge.cast(this.target, UnityEngine.RectTransform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.DOTweenModulePhysics.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody2D), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalMove: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalMove(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalBool0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Rotate: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.DOTweenModulePhysics.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody2D), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalRotate: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalRotate(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Scale: 
                        switch (this.targetType) {
                            default: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOScale$1(tweenGO.transform, this.optionalBool0 ? new pc.Vec3( this.endValueFloat, this.endValueFloat, this.endValueFloat ) : this.endValueV3.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.UIWidthHeight: 
                        this.tween = DG.Tweening.DOTweenModuleUI.DOSizeDelta(Bridge.cast(this.target, UnityEngine.RectTransform), this.optionalBool0 ? new pc.Vec2( this.endValueFloat, this.endValueFloat ) : this.endValueV2.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Color: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$3(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$1(Bridge.cast(this.target, UnityEngine.Light), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOColor(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor$3(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueColor.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Fade: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOFade$1(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOIntensity(Bridge.cast(this.target, UnityEngine.Light), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOFade(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$1(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$4(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.CanvasGroup: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade(Bridge.cast(this.target, UnityEngine.CanvasGroup), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Text: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOText(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueString, this.duration, this.optionalBool0, this.optionalScrambleMode, this.optionalString);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchPosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOPunchPosition(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos(Bridge.cast(this.target, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchScale(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchRotation(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakePosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOShakePosition$3(Bridge.cast(this.target, UnityEngine.Transform), this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1(Bridge.cast(this.target, UnityEngine.RectTransform), this.duration, UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeScale$1(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeRotation$3(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraAspect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOAspect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraBackgroundColor: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOColor(Bridge.cast(this.target, UnityEngine.Camera), this.endValueColor.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraFieldOfView: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOFieldOfView(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraOrthoSize: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOOrthoSize(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraPixelRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPixelRect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DORect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                }

                if (this.tween == null) {
                    return;
                }

                // Created

                if (this.isFrom) {
                    DG.Tweening.TweenSettingsExtensions.From$1(DG.Tweening.Tweener, Bridge.cast(this.tween, DG.Tweening.Tweener), this.isRelative);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Tween, this.tween, this.isRelative);
                }
                var setTarget = this.GetTweenTarget();
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tween, this.tween, setTarget), this.delay), this.loops, this.loopType), this.autoKill), Bridge.fn.bind(this, function () {
                    this.tween = null;
                }));
                if (this.isSpeedBased) {
                    DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Tween, this.tween);
                }
                if (this.easeType === DG.Tweening.Ease.INTERNAL_Custom) {
                    DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Tween, this.tween, this.easeCurve);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tween, this.tween, this.easeType);
                }
                if (!System.String.isNullOrEmpty(this.id)) {
                    DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Tween, this.tween, this.id);
                }
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Tween, this.tween, this.isIndependentUpdate);

                if (this.hasOnStart) {
                    if (this.onStart != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStart, this.onStart.Invoke));
                    }
                } else {
                    this.onStart = null;
                }
                if (this.hasOnPlay) {
                    if (this.onPlay != null) {
                        DG.Tweening.TweenSettingsExtensions.OnPlay(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onPlay, this.onPlay.Invoke));
                    }
                } else {
                    this.onPlay = null;
                }
                if (this.hasOnUpdate) {
                    if (this.onUpdate != null) {
                        DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onUpdate, this.onUpdate.Invoke));
                    }
                } else {
                    this.onUpdate = null;
                }
                if (this.hasOnStepComplete) {
                    if (this.onStepComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStepComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStepComplete, this.onStepComplete.Invoke));
                    }
                } else {
                    this.onStepComplete = null;
                }
                if (this.hasOnComplete) {
                    if (this.onComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onComplete, this.onComplete.Invoke));
                    }
                } else {
                    this.onComplete = null;
                }
                if (this.hasOnRewind) {
                    if (this.onRewind != null) {
                        DG.Tweening.TweenSettingsExtensions.OnRewind(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onRewind, this.onRewind.Invoke));
                    }
                } else {
                    this.onRewind = null;
                }

                if (andPlay) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this.tween);
                } else {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tween, this.tween);
                }

                if (this.hasOnTweenCreated && this.onTweenCreated != null) {
                    this.onTweenCreated.Invoke();
                }
            },
            /*DG.Tweening.DOTweenAnimation.CreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweens start.*/
            /**
             * Returns the tweens (if generated and not killed) created by all DOTweenAnimations on this gameObject,
             in the same order as they appear in the Inspector (top to bottom).<p />
             Note that a tween is generated inside the Awake call (except RectTransform tweens which are generated inside Start),
             so this method won't return them before that
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {System.Collections.Generic.List$1}
             */
            GetTweens: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweens", this ); }

                var $t;
                var result = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                $t = Bridge.getEnumerator(anims);
                try {
                    while ($t.moveNext()) {
                        var anim = $t.Current;
                        if (anim.tween != null && anim.tween.active) {
                            result.add(anim.tween);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweens end.*/

            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget start.*/
            /**
             * Sets the animation target (which must be of the same type of the one set in the Inspector).
             This is useful if you want to change it BEFORE this {@link }
             creates a tween, while after that it won't have any effect.<p />
             Consider that a {@link } creates its tween inside its Awake (except for special tweens),
             so you will need to sure your code runs before this object's Awake (via ScriptExecutionOrder or enabling/disabling methods)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {UnityEngine.Component}    tweenTarget                                   New target for the animation (must be of the same type of the previous one)
             * @param   {boolean}                  useTweenTargetGameObjectForGroupOperations    If TRUE also uses tweenTarget's gameObject when settings the target-ID of the tween
             (which is used with DOPlay/DORestart/etc to apply the same operation on all tweens that have the same target-id).<p />
             You should usually leave this to TRUE if you change the target.
             * @return  {void}
             */
            SetAnimationTarget: function (tweenTarget, useTweenTargetGameObjectForGroupOperations) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#SetAnimationTarget", this ); }

                if (useTweenTargetGameObjectForGroupOperations === void 0) { useTweenTargetGameObjectForGroupOperations = true; }
                var newTargetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                if (newTargetType !== this.targetType) {
                    UnityEngine.Debug.LogError$2("DOTweenAnimation \u25ba SetAnimationTarget: the new target is of a different type from the one set in the Inspector");
                    return;
                }
                this.target = tweenTarget;
                this.targetGO = this.target.gameObject;
                this.tweenTargetIsTargetGO = useTweenTargetGameObjectForGroupOperations;
            },
            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlay start.*/
            /**
             * Plays all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlay", this ); }

                DG.Tweening.DOTween.Play(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlay end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards start.*/
            /**
             * Plays backwards all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayBackwards: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwards", this ); }

                DG.Tweening.DOTween.PlayBackwards(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForward start.*/
            /**
             * Plays foward all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayForward: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForward", this ); }

                DG.Tweening.DOTween.PlayForward(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForward end.*/

            /*DG.Tweening.DOTweenAnimation.DOPause start.*/
            /**
             * Pauses all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPause", this ); }

                DG.Tweening.DOTween.Pause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPause end.*/

            /*DG.Tweening.DOTweenAnimation.DOTogglePause start.*/
            /**
             * Pauses/unpauses (depending on the current state) all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOTogglePause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOTogglePause", this ); }

                DG.Tweening.DOTween.TogglePause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOTogglePause end.*/

            /*DG.Tweening.DOTweenAnimation.DORewind start.*/
            /**
             * Rewinds all tweens created by this animation in the correct order
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewind: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewind", this ); }

                this._playCount = -1;
                // Rewind using Components order (in case there are multiple animations on the same property)
                var anims = this.gameObject.GetComponents(DG.Tweening.DOTweenAnimation);
                for (var i = (anims.length - 1) | 0; i > -1; i = (i - 1) | 0) {
                    var t = anims[i].tween;
                    if (t != null && DG.Tweening.TweenExtensions.IsInitialized(t)) {
                        DG.Tweening.TweenExtensions.Rewind(anims[i].tween);
                    }
                }
                // DOTween.Rewind(GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORewind end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORestart: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart", this ); }

                this.DORestart$1(false);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart$1 start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    fromHere    If TRUE, re-evaluates the tween's start and end values from its current position.
             Set it to TRUE when spawning the same DOTweenAnimation in different positions (like when using a pooling system)
             * @return  {void}
             */
            DORestart$1: function (fromHere) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart$1", this ); }

                this._playCount = -1;
                if (this.tween == null) {
                    if (DG.Tweening.Core.Debugger.logPriority > 1) {
                        DG.Tweening.Core.Debugger.LogNullTween(this.tween);
                    }
                    return;
                }
                if (fromHere && this.isRelative) {
                    this.ReEvaluateRelativeTween();
                }
                DG.Tweening.DOTween.Restart(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORestart$1 end.*/

            /*DG.Tweening.DOTweenAnimation.DOComplete start.*/
            /**
             * Completes all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOComplete: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOComplete", this ); }

                DG.Tweening.DOTween.Complete(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOComplete end.*/

            /*DG.Tweening.DOTweenAnimation.DOKill start.*/
            /**
             * Kills all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOKill: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKill", this ); }

                DG.Tweening.DOTween.Kill(this.GetTweenTarget());
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.DOKill end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayById start.*/
            /**
             * Plays all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayById", this ); }

                DG.Tweening.DOTween.Play$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayAllById start.*/
            /**
             * Plays all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayAllById", this ); }

                DG.Tweening.DOTween.Play(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPauseAllById start.*/
            /**
             * Pauses all tweens that with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPauseAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPauseAllById", this ); }

                DG.Tweening.DOTween.Pause(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPauseAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById start.*/
            /**
             * Plays backwards all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsById", this ); }

                DG.Tweening.DOTween.PlayBackwards$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById start.*/
            /**
             * Plays backwards all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById", this ); }

                DG.Tweening.DOTween.PlayBackwards(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById start.*/
            /**
             * Plays forward all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardById", this ); }

                DG.Tweening.DOTween.PlayForward$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById start.*/
            /**
             * Plays forward all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardAllById", this ); }

                DG.Tweening.DOTween.PlayForward(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayNext start.*/
            /**
             * Plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayNext", this ); }

                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                while (this._playCount < ((anims.length - 1) | 0)) {
                    this._playCount = (this._playCount + 1) | 0;
                    var anim = anims[this._playCount];
                    if (UnityEngine.MonoBehaviour.op_Inequality(anim, null) && anim.tween != null && anim.tween.active && !DG.Tweening.TweenExtensions.IsPlaying(anim.tween) && !DG.Tweening.TweenExtensions.IsComplete(anim.tween)) {
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, anim.tween);
                        break;
                    }
                }
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext start.*/
            /**
             * Rewinds all tweens with the given ID and whose target-id is the same as the one set by this animation,
             then plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewindAndPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAndPlayNext", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(this.GetTweenTarget());
                this.DOPlayNext();
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAllById start.*/
            /**
             * Rewinds all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORewindAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartById start.*/
            /**
             * Restarts all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartAllById start.*/
            /**
             * Restarts all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillById start.*/
            /**
             * Kills all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillById", this ); }

                DG.Tweening.DOTween.Kill$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillAllById start.*/
            /**
             * Kills all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillAllById", this ); }

                DG.Tweening.DOTween.Kill(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillAllById end.*/

            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview start.*/
            /**
             * Previews the tween in the editor. Only for DOTween internal usage: don't use otherwise.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {DG.Tweening.Tween}
             */
            CreateEditorPreview: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateEditorPreview", this ); }

                if (UnityEngine.Application.isPlaying) {
                    return null;
                }

                // CHANGE: first param switched to TRUE otherwise changing an animation and replaying in editor would still play old one
                this.CreateTween(true, this.autoPlay);
                return this.tween;
            },
            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenGO start.*/
            /**
             * Returns the gameObject whose target component should be animated
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenGO: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenGO", this ); }

                return this.targetIsSelf ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenGO end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenTarget start.*/
            /**
             * Returns the GameObject which should be used/retrieved for SetTarget
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenTarget: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenTarget", this ); }

                return this.targetIsSelf || !this.tweenTargetIsTargetGO ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenTarget end.*/

            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween start.*/
            ReEvaluateRelativeTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween", this ); }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    return;
                }
                if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.Move) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.position.$clone().add( this.endValueV3 ).$clone(), true);
                } else if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.LocalMove) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.localPosition.$clone().add( this.endValueV3 ).$clone(), true);
                }
            },
            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween end.*/


        },
        overloads: {
            "DORestart(bool)": "DORestart$1"
        }
    });
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.AnimationType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Move: 1,
                LocalMove: 2,
                Rotate: 3,
                LocalRotate: 4,
                Scale: 5,
                Color: 6,
                Fade: 7,
                Text: 8,
                PunchPosition: 9,
                PunchRotation: 10,
                PunchScale: 11,
                ShakePosition: 12,
                ShakeRotation: 13,
                ShakeScale: 14,
                CameraAspect: 15,
                CameraBackgroundColor: 16,
                CameraFieldOfView: 17,
                CameraOrthoSize: 18,
                CameraPixelRect: 19,
                CameraRect: 20,
                UIWidthHeight: 21
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.TargetType", {
        $kind: 1006,
        statics: {
            fields: {
                Unset: 0,
                Camera: 1,
                CanvasGroup: 2,
                Image: 3,
                Light: 4,
                RectTransform: 5,
                Renderer: 6,
                SpriteRenderer: 7,
                Rigidbody: 8,
                Rigidbody2D: 9,
                Text: 10,
                Transform: 11,
                tk2dBaseSprite: 12,
                tk2dTextMesh: 13,
                TextMeshPro: 14,
                TextMeshProUGUI: 15
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    Bridge.define("DG.Tweening.DOTweenAnimationExtensions", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static start.*/
                IsSameOrSubclassOf: function (T, t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf", this ); }

                    return Bridge.is(t, T);
                },
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    Bridge.define("DG.Tweening.DOTweenProShortcuts", {
        statics: {
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#ctor", this ); }

                    // Create stub instances of custom plugins, in order to allow IL2CPP to understand they must be included in the build
                    var stub = new DG.Tweening.Plugins.SpiralPlugin();
                }
            },
            methods: {
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral$1:static start.*/
                /**
                 * Tweens a Transform's localPosition in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Transform}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral$1: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#DOSpiral$1", this ); }

                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.localPosition;
                    }, function (x) {
                        target.localPosition = x.$clone();
                    }, System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral$1:static end.*/

                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static start.*/
                /**
                 * Tweens a Rigidbody's position in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Rigidbody}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#DOSpiral", this ); }

                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handle$1: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this.handle$1.anchorMin = center.$clone();
                this.handle$1.anchorMax = center.$clone();
                this.handle$1.pivot = center.$clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize(), radius, this.cam);
                this.handle$1.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*EnemyAI start.*/
    Bridge.define("EnemyAI", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnEnemyDeath: null
            }
        },
        fields: {
            detectionRadius: 0,
            attackRange: 0,
            attackRate: 0,
            attackDamage: 0,
            attackWindupTime: 0,
            attackAnimDuration: 0,
            anim: null,
            player: null,
            playerMask: 0,
            nextAttackTime: 0,
            currentState: null,
            isDie: false,
            spawnPoint: null,
            spawnCount: 0,
            randomXZRange: 0,
            throwUpHeight: 0,
            upDuration: 0,
            downDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EnemyAI#init", this ); }

                this.detectionRadius = 4.0;
                this.attackRange = 1.1;
                this.attackRate = 1.0;
                this.attackDamage = 5.0;
                this.attackWindupTime = 0.1;
                this.attackAnimDuration = 1.0;
                this.isDie = false;
                this.spawnCount = 4;
                this.randomXZRange = 1.0;
                this.throwUpHeight = 2.0;
                this.upDuration = 0.5;
                this.downDuration = 0.5;
            }
        },
        methods: {
            /*EnemyAI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EnemyAI#Start", this ); }

                this.playerMask = UnityEngine.LayerMask.GetMask(["Player"]);
                this.nextAttackTime = 0.0;

                // start in Idle
                this.TransitionTo(new EnemyAI.IdleState(this));
            },
            /*EnemyAI.Start end.*/

            /*EnemyAI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyAI#Update", this ); }

                if (this.isDie) {
                    return;
                }

                // refresh player reference each frame
                var hits = UnityEngine.Physics.OverlapSphere(this.transform.position, this.detectionRadius, this.playerMask);
                this.player = hits.length > 0 ? hits[0].transform : null;
                // delegate all logic to current state
                this.currentState.EnemyAI$IState$Update();
            },
            /*EnemyAI.Update end.*/

            /*EnemyAI.TransitionTo start.*/
            TransitionTo: function (newState) {
if ( TRACE ) { TRACE( "EnemyAI#TransitionTo", this ); }

                this.currentState != null ? this.currentState.EnemyAI$IState$Exit() : null;
                this.currentState = newState;
                this.currentState.EnemyAI$IState$Enter();
            },
            /*EnemyAI.TransitionTo end.*/

            /*EnemyAI.OnDeath start.*/
            OnDeath: function () {
if ( TRACE ) { TRACE( "EnemyAI#OnDeath", this ); }

                if (this.isDie) {
                    return;
                }
                this.isDie = true;
                this.anim.SetTrigger$1("die");

                for (var i = 0; i < this.spawnCount; i = (i + 1) | 0) {
                    // 1) Spawn
                    var obj = { v : PoolingManager.Instance.SpawnObject$1("meat", this.transform.position.$clone(), pc.Quat.IDENTITY.clone()) };

                    obj.v.GetComponent(UnityEngine.Collider).enabled = false;
                    // 2) Cache its start position
                    var startPos = obj.v.transform.position.$clone();

                    // 3) Pick a random XZ offset
                    var rx = UnityEngine.Random.Range$1(-this.randomXZRange, this.randomXZRange);
                    var rz = UnityEngine.Random.Range$1(-this.randomXZRange, this.randomXZRange);
                    var scatterOffset = new pc.Vec3( rx, 0.0, rz );

                    // 4) Compute apex/world positions
                    var apexPos = startPos.$clone().add( scatterOffset ).add( pc.Vec3.UP.clone().clone().scale( this.throwUpHeight ) );
                    var settlePos = startPos.$clone().add( scatterOffset );

                    // 5) Build the tween
                    var seq = DG.Tweening.DOTween.Sequence();
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(obj.v.transform, apexPos.$clone(), this.upDuration), DG.Tweening.Ease.OutQuad));
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(obj.v.transform, settlePos.$clone(), this.downDuration), DG.Tweening.Ease.OutBounce));

                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, (function ($me, obj) {
                        return function () {
                            obj.v.GetComponent(UnityEngine.Collider).enabled = true;

                        };
                    })(this, obj));
                    // (optional) if you want each spawn staggered:
                    // seq.PrependInterval(i * 0.1f);
                }

                this.StartCoroutine$1(this.DeathSequence());

            },
            /*EnemyAI.OnDeath end.*/

            /*EnemyAI.DeathSequence start.*/
            DeathSequence: function () {
if ( TRACE ) { TRACE( "EnemyAI#DeathSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    DG.Tweening.ShortcutExtensions.DOScale(this.transform, 0.0, 0.5);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    // let any spawner know “this guy died”
                                        !Bridge.staticEquals(EnemyAI.OnEnemyDeath, null) ? EnemyAI.OnEnemyDeath(this) : null;

                                        // put this enemy back in its pool
                                        PoolingManager.Instance.PutObjBackInQueue("enemy", this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EnemyAI.DeathSequence end.*/


        }
    });
    /*EnemyAI end.*/

    /*EnemyAI+IState start.*/
    Bridge.define("EnemyAI.IState", {
        $kind: 1003
    });
    /*EnemyAI+IState end.*/

    /*EnemySpawner start.*/
    Bridge.define("EnemySpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spawnPoints: null,
            poolName: null,
            respawnDelay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EnemySpawner#init", this ); }

                this.poolName = "enemy";
                this.respawnDelay = 0.0;
            }
        },
        methods: {
            /*EnemySpawner.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "EnemySpawner#OnEnable", this ); }

                EnemyAI.addOnEnemyDeath(Bridge.fn.cacheBind(this, this.HandleEnemyDeath));
            },
            /*EnemySpawner.OnEnable end.*/

            /*EnemySpawner.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "EnemySpawner#OnDisable", this ); }

                EnemyAI.removeOnEnemyDeath(Bridge.fn.cacheBind(this, this.HandleEnemyDeath));
            },
            /*EnemySpawner.OnDisable end.*/

            /*EnemySpawner.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EnemySpawner#Start", this ); }

                var $t;
                // initial spawn
                $t = Bridge.getEnumerator(this.spawnPoints);
                try {
                    while ($t.moveNext()) {
                        var sp = $t.Current;
                        this.SpawnAt(sp);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*EnemySpawner.Start end.*/

            /*EnemySpawner.HandleEnemyDeath start.*/
            HandleEnemyDeath: function (dead) {
if ( TRACE ) { TRACE( "EnemySpawner#HandleEnemyDeath", this ); }

                // grab the spawnPoint that was stored on the dying enemy
                var sp = dead.spawnPoint;
                if (UnityEngine.Component.op_Inequality(sp, null)) {
                    this.StartCoroutine$1(this.RespawnAt(sp));
                }
            },
            /*EnemySpawner.HandleEnemyDeath end.*/

            /*EnemySpawner.RespawnAt start.*/
            RespawnAt: function (sp) {
if ( TRACE ) { TRACE( "EnemySpawner#RespawnAt", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.respawnDelay > 0.0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.respawnDelay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    this.SpawnAt(sp);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EnemySpawner.RespawnAt end.*/

            /*EnemySpawner.SpawnAt start.*/
            SpawnAt: function (sp) {
if ( TRACE ) { TRACE( "EnemySpawner#SpawnAt", this ); }

                // pull from pool
                var go = PoolingManager.Instance.SpawnObject$1(this.poolName, sp.position.$clone(), sp.rotation.$clone());

                DG.Tweening.ShortcutExtensions.DOScale(go.transform, 0.5, 0.5);

                // let the enemy know where it came from
                var ai = go.GetComponent(EnemyAI);
                if (UnityEngine.MonoBehaviour.op_Inequality(ai, null)) {
                    ai.spawnPoint = sp;
                }

                ai.isDie = false;
                ai.anim.ResetTrigger$1("die");
                ai.anim.SetTrigger$1("idle");

            },
            /*EnemySpawner.SpawnAt end.*/


        }
    });
    /*EnemySpawner end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.Currency start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.Currency", {
        fields: {
            currencyName: null,
            totalCurrency: 0,
            CoinSavePrefs: null
        },
        props: {
            CurrencyName: {
                get: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#CurrencyName#get", this ); }

                    return this.currencyName;
                }
            },
            TotalCurrency: {
                get: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#TotalCurrency#get", this ); }

                    return this.totalCurrency;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#TotalCurrency#set", this ); }

                    this.totalCurrency = value;
                }
            }
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.SetInitialValues start.*/
            SetInitialValues: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#SetInitialValues", this ); }

                this.TotalCurrency = this.totalCurrency;
                this.CoinSavePrefs = this.currencyName;

                if (!UnityEngine.PlayerPrefs.HasKey(this.CoinSavePrefs)) {
                    this.SaveCurrency();
                } else {
                    this.totalCurrency = 0;
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.SetInitialValues end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.AddCurrency start.*/
            AddCurrency: function (value) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#AddCurrency", this ); }

                this.TotalCurrency = (this.TotalCurrency + value) | 0;
                this.SaveCurrency();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.AddCurrency end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.RemoveCurrency start.*/
            RemoveCurrency: function (value) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#RemoveCurrency", this ); }

                this.TotalCurrency = (this.TotalCurrency - value) | 0;
                this.SaveCurrency();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.RemoveCurrency end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.SaveCurrency start.*/
            SaveCurrency: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.Currency#SaveCurrency", this ); }

                UnityEngine.PlayerPrefs.SetInt(this.CoinSavePrefs, this.TotalCurrency);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.Currency.SaveCurrency end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.Currency end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            currencies: null,
            meat: null,
            GpCurrency: null,
            lcCurrency: null
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance, null)) {
                    GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.gameObject);
                    return;
                }

                this.SetAllCurrenciesInitialValues();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Awake end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#Update", this ); }

                //mmCurrency.text = currencies[0].TotalCurrency.ToString();
                this.GpCurrency.text = Bridge.toString(this.currencies.getItem(0).TotalCurrency);
                this.meat.text = Bridge.toString(this.currencies.getItem(1).TotalCurrency);
                //lcCurrency.text = currencies[0].TotalCurrency.ToString();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Update end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.SetAllCurrenciesInitialValues start.*/
            SetAllCurrenciesInitialValues: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#SetAllCurrenciesInitialValues", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.currencies);
                try {
                    while ($t.moveNext()) {
                        var currency = $t.Current;
                        currency.SetInitialValues();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.SetAllCurrenciesInitialValues end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.PlusCurrencyValue start.*/
            PlusCurrencyValue: function (currencyName, valueToSave) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#PlusCurrencyValue", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.currencies);
                try {
                    while ($t.moveNext()) {
                        var currency = $t.Current;
                        if (Bridge.referenceEquals(currency.CurrencyName, currencyName)) {
                            currency.AddCurrency(valueToSave);
                            return;
                        } else {
                            //					Debug.LogError($"Currency Name of {currencyName} Not in List Please Add First");
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.PlusCurrencyValue end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.SubtractCurrencyValue start.*/
            SubtractCurrencyValue: function (currencyName, valueToSave) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#SubtractCurrencyValue", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.currencies);
                try {
                    while ($t.moveNext()) {
                        var currency = $t.Current;
                        if (Bridge.referenceEquals(currency.CurrencyName, currencyName)) {
                            currency.RemoveCurrency(valueToSave);
                            return;
                        } else {
                            //					Debug.LogError($"Currency Name of {currencyName} Not in List Please Add First");
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.SubtractCurrencyValue end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.TotalCurrencyFor start.*/
            TotalCurrencyFor: function (currencyName) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager#TotalCurrencyFor", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.currencies);
                try {
                    while ($t.moveNext()) {
                        var currency = $t.Current;
                        if (Bridge.referenceEquals(currency.CurrencyName, currencyName)) {
                            return currency.TotalCurrency;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                UnityEngine.Debug.LogError$2(System.String.format("Currency Name of {0} Not in List Please Add First", [currencyName]));
                return 0;
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.TotalCurrencyFor end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameManager start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null,
                onGameStateChangedEvent: null
            },
            events: {
                onMainMenuEvent: null,
                onGamePlayEvent: null,
                onPauseEvent: null,
                onFinalMomentumEvent: null,
                onCompleteEvent: null,
                onFailedEvent: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#init", this ); }

                    this.onGameStateChangedEvent = new GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent();
                }
            }
        },
        fields: {
            gameCurrentState: 0,
            levelManager: null,
            uiManager: null,
            playerPosition: null,
            player: null,
            playerCam: null,
            beforeLevelCompleteDelay: 0,
            beforeLevelFailDelay: 0,
            IsLevelCompleteNotInvoke: false
        },
        props: {
            GameCurrentState: {
                get: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#GameCurrentState#get", this ); }

                    return this.gameCurrentState;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#GameCurrentState#set", this ); }

                    this.gameCurrentState = value;
                    GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGameStateChangedEvent != null ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGameStateChangedEvent.Invoke(this.gameCurrentState) : null;
                }
            },
            InfinityCurrentLevel: {
                get: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#InfinityCurrentLevel#get", this ); }

                    return this.levelManager.InfinityCurrentLevelNumber();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#init", this ); }

                this.gameCurrentState = GameAssets.GameSet.GameDevUtils.Managers.GameState.MainMenu;
            }
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameAssets.GameSet.GameDevUtils.Managers.GameManager.Instance, null)) {
                    GameAssets.GameSet.GameDevUtils.Managers.GameManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.gameObject);
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Awake end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnEnable", this ); }

                UnityEngine.Application.targetFrameRate = 60;
                GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGameStateChangedEvent.AddListener(Bridge.fn.cacheBind(this, this.OnGameStateChanged));
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnEnable end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnDisable", this ); }

                GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGameStateChangedEvent.RemoveAllListeners();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnDisable end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#Start", this ); }

                this.LoadLevelAtStart();
                this.OnGameStateChanged(GameAssets.GameSet.GameDevUtils.Managers.GameState.MainMenu);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Start end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#Update", this ); }


                if (UnityEngine.Input.GetMouseButton(0) && this.gameCurrentState === GameAssets.GameSet.GameDevUtils.Managers.GameState.StartScreen) {
                    this.ChangeGameState(GameAssets.GameSet.GameDevUtils.Managers.GameState.Gameplay);
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Update end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.CameraStart start.*/
            CameraStart: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#CameraStart", this ); }

                DG.Tweening.DOTween.To$4(Bridge.fn.bind(this, function () {
                    return this.playerCam.orthographicSize;
                }), Bridge.fn.bind(this, function (x) {
                    this.playerCam.orthographicSize = x;
                }), 6, 3);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.CameraStart end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.ChangeGameState start.*/
            ChangeGameState: function (state) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#ChangeGameState", this ); }

                this.GameCurrentState = state;
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.ChangeGameState end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnGameStateChanged start.*/
            OnGameStateChanged: function (state) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#OnGameStateChanged", this ); }

                switch (state) {
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.MainMenu: 
                        UnityEngine.Time.timeScale = 1;
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.MainMenu, 0);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onMainMenuEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onMainMenuEvent() : null;
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.StartScreen: 
                        UnityEngine.Time.timeScale = 1;
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.StartScreen, 0);
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.SelectionScreen: 
                        UnityEngine.Time.timeScale = 1;
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.SelectionScreen, 0);
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.Gameplay: 
                        UnityEngine.Time.timeScale = 1;
                        this.CameraStart();
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.Gameplay, 0);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGamePlayEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onGamePlayEvent() : null;
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.Pause: 
                        UnityEngine.Time.timeScale = 0;
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.Pause, 0);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onPauseEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onPauseEvent() : null;
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.FinalMomentum: 
                        //uiManager.EnableUIScreen(GameState.FinalMomentum);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onFinalMomentumEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onFinalMomentumEvent() : null;
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.Win: 
                        //if (IsLevelCompleteNotInvoke) return;
                        //IsLevelCompleteNotInvoke = true;
                        //SoundManager.Instance.PlayOneShot(SoundManager.Instance.winClip, 1);
                        //SoundManager.Instance.PlayOneShot(SoundManager.Instance.kidsJoyClip, 1);
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.Win, this.beforeLevelCompleteDelay);
                        //NextUnlockLevel();
                        //uiManager.EnableUIScreen(GameState.Win);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onCompleteEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onCompleteEvent() : null;
                        break;
                    case GameAssets.GameSet.GameDevUtils.Managers.GameState.Fail: 
                        DG.Tweening.ShortcutExtensions.DOShakePosition$1(UnityEngine.Camera.main, 0.5, new pc.Vec3( 1, 1, 1 ));
                        //SoundManager.Instance.PlayOneShot(SoundManager.Instance.failClip, 1);
                        this.uiManager.EnableUIScreen(GameAssets.GameSet.GameDevUtils.Managers.GameState.Fail, this.beforeLevelFailDelay);
                        // Elephant.LevelFailed(InfinityCurrentLevel);
                        // GameAnalytics.NewProgressionEvent(GAProgressionStatus.Fail, "LevelFail", InfinityCurrentLevel);
                        //uiManager.EnableUIScreen(GameState.Fail,0);
                        !Bridge.staticEquals(GameAssets.GameSet.GameDevUtils.Managers.GameManager.onFailedEvent, null) ? GameAssets.GameSet.GameDevUtils.Managers.GameManager.onFailedEvent() : null;
                        break;
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.OnGameStateChanged end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.LoadLevelAtStart start.*/
            LoadLevelAtStart: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#LoadLevelAtStart", this ); }

                this.levelManager.LoadLevelAtStart();
                this.SpawnPlayerAndCamera();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.LoadLevelAtStart end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.SpawnPlayerAndCamera start.*/
            SpawnPlayerAndCamera: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#SpawnPlayerAndCamera", this ); }

                this.player.transform.position = this.playerPosition[((this.levelManager.CurrentPlayLevelNumber() - 1) | 0)].position.$clone();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.SpawnPlayerAndCamera end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.NextUnlockLevel start.*/
            NextUnlockLevel: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#NextUnlockLevel", this ); }

                this.levelManager.NextUnlockLevel();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.NextUnlockLevel end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.PlayBtn start.*/
            PlayBtn: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#PlayBtn", this ); }

                this.ChangeGameState(GameAssets.GameSet.GameDevUtils.Managers.GameState.StartScreen);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.PlayBtn end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.TabToContinue start.*/
            TabToContinue: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#TabToContinue", this ); }

                GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayButtonSound();
                this.ChangeGameState(GameAssets.GameSet.GameDevUtils.Managers.GameState.Gameplay);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.TabToContinue end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Restart start.*/
            Restart: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#Restart", this ); }

                this.NextUnlockLevel();
                UnityEngine.SceneManagement.SceneManager.LoadScene(0);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.Restart end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.RestartFail start.*/
            RestartFail: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.GameManager#RestartFail", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene(0);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.GameManager.RestartFail end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.GameManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameState start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.GameState", {
        $kind: 6,
        statics: {
            fields: {
                MainMenu: 0,
                StartScreen: 7,
                SelectionScreen: 8,
                Gameplay: 1,
                Pause: 2,
                Win: 3,
                Fail: 4,
                FinalMomentum: 5,
                Inventory: 6
            }
        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.GameState end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens", {
        fields: {
            stateType: 0,
            panel: null
        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.LevelManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            allLevels: null,
            currentLevelNumber: 0,
            isTesting: false,
            Level_Pref: null,
            PlayLevel_Pref: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.LevelManager#init", this ); }

                this.Level_Pref = "LevelNumber";
                this.PlayLevel_Pref = "PlayLevelNumber";
            }
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.LoadLevelAtStart start.*/
            LoadLevelAtStart: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.LevelManager#LoadLevelAtStart", this ); }

                if (this.allLevels.length > 0) {
                    this.allLevels[((this.CurrentPlayLevelNumber() - 1) | 0)].SetActive(true);
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.LoadLevelAtStart end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.InfinityCurrentLevelNumber start.*/
            InfinityCurrentLevelNumber: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.LevelManager#InfinityCurrentLevelNumber", this ); }

                if (!this.isTesting) {
                    if (!UnityEngine.PlayerPrefs.HasKey(this.Level_Pref)) {
                        UnityEngine.PlayerPrefs.SetInt(this.Level_Pref, 1);
                    }

                    return UnityEngine.PlayerPrefs.GetInt(this.Level_Pref, 0);
                } else {
                    return this.currentLevelNumber;
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.InfinityCurrentLevelNumber end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.CurrentPlayLevelNumber start.*/
            CurrentPlayLevelNumber: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.LevelManager#CurrentPlayLevelNumber", this ); }

                if (!this.isTesting) {
                    if (!UnityEngine.PlayerPrefs.HasKey(this.PlayLevel_Pref)) {
                        UnityEngine.PlayerPrefs.SetInt(this.PlayLevel_Pref, 1);
                    }

                    return UnityEngine.PlayerPrefs.GetInt(this.PlayLevel_Pref, 0);
                } else {
                    return this.currentLevelNumber;
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.CurrentPlayLevelNumber end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.NextUnlockLevel start.*/
            NextUnlockLevel: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.LevelManager#NextUnlockLevel", this ); }

                var level = (UnityEngine.PlayerPrefs.GetInt(this.Level_Pref, 0) + 1) | 0;
                var playLevel = (UnityEngine.PlayerPrefs.GetInt(this.PlayLevel_Pref, 0) + 1) | 0;
                if (playLevel > this.allLevels.length) {
                    playLevel = 1;
                }
                UnityEngine.PlayerPrefs.SetInt(this.Level_Pref, level);
                UnityEngine.PlayerPrefs.SetInt(this.PlayLevel_Pref, playLevel);
                UnityEngine.PlayerPrefs.Save();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager.NextUnlockLevel end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.SoundManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            bgSoundSource: null,
            bgAmbienceSoundSource: null,
            sFXSoundSource: null,
            walkSoundSource: null,
            bgClip: null,
            buttonClip: null,
            walkClip: null,
            attackClip: null,
            deathClip: null,
            buildClip: null,
            loseClip: null,
            pops: null,
            popIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#init", this ); }

                this.popIndex = 0;
            }
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance, null)) {
                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.gameObject);
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Awake end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#Start", this ); }

                if (this.bgSoundSource.isPlaying) {
                    return;
                }
                this.bgSoundSource.clip = this.bgClip;
                this.bgSoundSource.loop = true;
                this.bgSoundSource.Play();


            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Start end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.SetBgSoundSetting start.*/
            SetBgSoundSetting: function (toggle) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#SetBgSoundSetting", this ); }

                this.bgSoundSource.mute = !toggle;

            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.SetBgSoundSetting end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.SetSfxSoundSetting start.*/
            SetSfxSoundSetting: function (toggle) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#SetSfxSoundSetting", this ); }

                this.sFXSoundSource.mute = !toggle;
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.SetSfxSoundSetting end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayOneShot start.*/
            PlayOneShot: function (clip, volume) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayOneShot", this ); }

                this.sFXSoundSource.PlayOneShot$1(clip, volume);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayOneShot end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayOneShotPop start.*/
            PlayOneShotPop: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayOneShotPop", this ); }

                this.sFXSoundSource.PlayOneShot(this.pops[this.popIndex]);
                if (this.popIndex < 3) {
                    this.popIndex = (this.popIndex + 1) | 0;
                } else {
                    this.popIndex = 0;
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayOneShotPop end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayWalk start.*/
            PlayWalk: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayWalk", this ); }

                if (!this.walkSoundSource.isPlaying) {
                    this.walkSoundSource.Play();
                }
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayWalk end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayWalkStop start.*/
            PlayWalkStop: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayWalkStop", this ); }

                this.walkSoundSource.Stop();
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayWalkStop end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayButtonSound start.*/
            PlayButtonSound: function () {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.SoundManager#PlayButtonSound", this ); }

                this.sFXSoundSource.PlayOneShot$1(this.buttonClip, 1);
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager.PlayButtonSound end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.UIManager start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gameStateScreens: null
        },
        methods: {
            /*GameAssets.GameSet.GameDevUtils.Managers.UIManager.EnableUIScreen start.*/
            EnableUIScreen: function (state, delay) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.UIManager#EnableUIScreen", this ); }

                this.StartCoroutine$1(this.EnableScreenWithDelay(state, delay));
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.UIManager.EnableUIScreen end.*/

            /*GameAssets.GameSet.GameDevUtils.Managers.UIManager.EnableScreenWithDelay start.*/
            EnableScreenWithDelay: function (gameState, delay) {
if ( TRACE ) { TRACE( "GameAssets.GameSet.GameDevUtils.Managers.UIManager#EnableScreenWithDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    stateScreen,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $t = Bridge.getEnumerator(this.gameStateScreens);
                                        try {
                                            while ($t.moveNext()) {
                                                stateScreen = $t.Current;
                                                stateScreen.panel.SetActive(stateScreen.stateType === gameState);
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameAssets.GameSet.GameDevUtils.Managers.UIManager.EnableScreenWithDelay end.*/


        }
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.UIManager end.*/

    /*GameSettings start.*/
    Bridge.define("GameSettings", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            SettingPanel: null,
            SettingButton: null,
            MusicToggle: null,
            SFXToggle: null,
            HapticToggle: null,
            CanToggle: false,
            Toggle: false,
            PosY: 0
        },
        props: {
            toggleStatusBg: {
                get: function () {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusBg#get", this ); }

                    if (UnityEngine.PlayerPrefs.GetInt("toggleStatusBg") === 0) {
                        return false;
                    } else {
                        return true;
                    }
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusBg#set", this ); }

                    if (value) {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusBg", 1);
                    } else {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusBg", 0);
                    }
                }
            },
            toggleStatusSFX: {
                get: function () {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusSFX#get", this ); }

                    if (UnityEngine.PlayerPrefs.GetInt("toggleStatusSFX") === 0) {
                        return false;
                    } else {
                        return true;
                    }
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusSFX#set", this ); }

                    if (value) {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusSFX", 1);
                    } else {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusSFX", 0);
                    }
                }
            },
            toggleStatusHaptic: {
                get: function () {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusHaptic#get", this ); }

                    if (UnityEngine.PlayerPrefs.GetInt("toggleStatusHaptic") === 0) {
                        return false;
                    } else {
                        return true;
                    }
                },
                set: function (value) {
if ( TRACE ) { TRACE( "GameSettings#toggleStatusHaptic#set", this ); }

                    if (value) {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusHaptic", 1);
                    } else {
                        UnityEngine.PlayerPrefs.SetInt("toggleStatusHaptic", 0);
                    }
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameSettings#init", this ); }

                this.CanToggle = true;
                this.Toggle = false;
                this.PosY = 0.0;
            }
        },
        methods: {
            /*GameSettings.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameSettings#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(GameSettings.Instance)) {
                    GameSettings.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.gameObject);
                    return;
                } //else end
            },
            /*GameSettings.Awake end.*/

            /*GameSettings.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameSettings#Start", this ); }

                if (!UnityEngine.PlayerPrefs.HasKey("toggleStatusHaptic") && !UnityEngine.PlayerPrefs.HasKey("toggleStatusSFX") && !UnityEngine.PlayerPrefs.HasKey("toggleStatusBg")) {
                    this.toggleStatusBg = true;
                    this.toggleStatusSFX = true;
                    this.toggleStatusHaptic = true;
                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.SetBgSoundSetting(GameSettings.Instance.toggleStatusBg);

                }

                this.SettingPanel.anchoredPosition = new pc.Vec2( this.SettingPanel.anchoredPosition.x, -this.SettingPanel.anchoredPosition.y );
                this.PosY = -this.SettingPanel.anchoredPosition.y;
                this.SettingButton.onClick.RemoveAllListeners();
                this.SettingButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.TogglePanel));
                this.MusicToggle.AddListener(Bridge.fn.cacheBind(this, this.ToggleMusic));
                this.SFXToggle.AddListener(Bridge.fn.cacheBind(this, this.ToggleSFX));
                this.HapticToggle.AddListener(Bridge.fn.cacheBind(this, this.ToggleHaptic));
                this.LoadSettings();
                //SettingButton.gameObject.SetActive(false);
            },
            /*GameSettings.Start end.*/

            /*GameSettings.InitializeSettings start.*/
            InitializeSettings: function () {
if ( TRACE ) { TRACE( "GameSettings#InitializeSettings", this ); }

                this.SettingButton.gameObject.SetActive(true);
            },
            /*GameSettings.InitializeSettings end.*/

            /*GameSettings.TogglePanel start.*/
            TogglePanel: function () {
if ( TRACE ) { TRACE( "GameSettings#TogglePanel", this ); }

                if (!this.CanToggle) {
                    return;
                }
                this.CanToggle = false;
                this.Toggle = !this.Toggle;
                if (this.Toggle) {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY(this.SettingPanel, this.PosY, 0.25, false), Bridge.fn.bind(this, function () {
                        this.CanToggle = true;
                    }));
                    if (UnityEngine.Object.op_Implicit(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance)) {
                        GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayOneShot(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.buttonClip, 1);
                    }
                    this.Invoke("ClosePanel", 3.0);
                } else {
                    this.ClosePanel();
                }
            },
            /*GameSettings.TogglePanel end.*/

            /*GameSettings.ClosePanel start.*/
            ClosePanel: function () {
if ( TRACE ) { TRACE( "GameSettings#ClosePanel", this ); }

                this.CancelInvoke();
                this.Toggle = false;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY(this.SettingPanel, -this.PosY, 0.25, false), Bridge.fn.bind(this, function () {
                    this.CanToggle = true;
                }));
            },
            /*GameSettings.ClosePanel end.*/

            /*GameSettings.LoadSettings start.*/
            LoadSettings: function () {
if ( TRACE ) { TRACE( "GameSettings#LoadSettings", this ); }

                this.MusicToggle.SetState(this.toggleStatusBg);
                this.SFXToggle.SetState(this.toggleStatusSFX);
                this.HapticToggle.SetState(this.toggleStatusHaptic);
            },
            /*GameSettings.LoadSettings end.*/

            /*GameSettings.ToggleMusic start.*/
            ToggleMusic: function () {
if ( TRACE ) { TRACE( "GameSettings#ToggleMusic", this ); }

                this.toggleStatusBg = !this.toggleStatusBg;
                this.MusicToggle.SetState(this.toggleStatusBg);
                GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.SetBgSoundSetting(this.toggleStatusBg);

                // if(AudioManager.Instance)
                // {
                //     AudioManager.Instance.SetBGSetting(SaveData.Instance.Music);
                //     AudioManager.Instance.ButtonClick();
                // }//if end
                // SaveSystem.SaveProgress();
            },
            /*GameSettings.ToggleMusic end.*/

            /*GameSettings.ToggleSFX start.*/
            ToggleSFX: function () {
if ( TRACE ) { TRACE( "GameSettings#ToggleSFX", this ); }

                this.toggleStatusSFX = !this.toggleStatusSFX;
                this.SFXToggle.SetState(this.toggleStatusSFX);


                // if(AudioManager.Instance)
                // {
                //     AudioManager.Instance.ButtonClick();
                //     AudioManager.Instance.SetSFXSetting(SaveData.Instance.SFX);
                // }//if end
                // SaveSystem.SaveProgress();
            },
            /*GameSettings.ToggleSFX end.*/

            /*GameSettings.ToggleHaptic start.*/
            ToggleHaptic: function () {
if ( TRACE ) { TRACE( "GameSettings#ToggleHaptic", this ); }

                this.toggleStatusHaptic = !this.toggleStatusHaptic;
                this.HapticToggle.SetState(this.toggleStatusHaptic);

            },
            /*GameSettings.ToggleHaptic end.*/


        }
    });
    /*GameSettings end.*/

    /*Helpers start.*/
    Bridge.define("Helpers", {
        statics: {
            fields: {
                _isoMatrix: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Helpers#init", this ); }

                    this._isoMatrix = new UnityEngine.Matrix4x4();
                    this._isoMatrix = new pc.Mat4().setTRS( pc.Vec3.ZERO, new pc.Quat().setFromEulerAngles_Unity( 0, 0, 0 ), pc.Vec3.ONE );
                }
            },
            methods: {
                /*Helpers.ToIso:static start.*/
                ToIso: function (input) {
if ( TRACE ) { TRACE( "Helpers#ToIso", this ); }

                    return Helpers._isoMatrix.transformPoint( input );
                },
                /*Helpers.ToIso:static end.*/


            }
        }
    });
    /*Helpers end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ItemType start.*/
    Bridge.define("ItemType", {
        $kind: 6,
        statics: {
            fields: {
                Any: 0,
                Meat: 1,
                Cash: 2
            }
        }
    });
    /*ItemType end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "JoystickPlayerExample#FixedUpdate", this ); }

                var direction = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#ModeChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#AxisChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapX", this ); }

                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapY", this ); }

                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "JoystickSetterExample#Update", this ); }

                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*Npc start.*/
    Bridge.define("Npc", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            myAnim: null,
            once: false,
            myStackingPlace: null,
            giverStack: null,
            popUp: null,
            requiredMeat: null,
            fillImage: null
        },
        methods: {
            /*Npc.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Npc#Awake", this ); }

                this.myStackingPlace = this.GetComponent(StackingPlace);
                this.requiredMeat.text = "x" + (Bridge.toString(this.GetComponent(StackingPlace).objectsRequired) || "");

            },
            /*Npc.Awake end.*/

            /*Npc.StartWalk start.*/
            StartWalk: function () {
if ( TRACE ) { TRACE( "Npc#StartWalk", this ); }

                this.myAnim.SetBool$1("isWalking", true);
            },
            /*Npc.StartWalk end.*/

            /*Npc.StopWalk start.*/
            StopWalk: function () {
if ( TRACE ) { TRACE( "Npc#StopWalk", this ); }

                this.myAnim.SetBool$1("isWalking", false);
            },
            /*Npc.StopWalk end.*/

            /*Npc.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Npc#Update", this ); }

                if (this.myStackingPlace.objectsRequired <= 0 && !this.once) {
                    this.once = true;
                    ObjectQueueManager.Instance.DequeueNext();
                    this.giverStack.GetComponent(StackingPlace).StopSequence();
                    this.popUp.SetActive(false);
                    this.GetComponent(StackingPlace).autoGiverStacker = null;
                    for (var i = 0; i < 7; i = (i + 1) | 0) {
                        var obj = PoolingManager.Instance.SpawnObject$1("cash", this.transform.position.$clone().add( new pc.Vec3( 0, 1, 0 ) ), pc.Quat.IDENTITY.clone());
                    }
                }
            },
            /*Npc.Update end.*/

            /*Npc.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "Npc#OnTriggerStay", this ); }

                if (other.CompareTag("MeatCounter") && !this.once) {
                    this.giverStack = other.GetComponent(StackingPlace);
                    this.popUp.SetActive(true);
                    if (other.GetComponent(ObjectStacker).ItemCount > 0) {
                        this.GetComponent(StackingPlace).autoGiverStacker = other.gameObject.GetComponent(ObjectStacker);
                        this.GetComponent(StackingPlace).StartAutoRoutine();
                    } else if (other.GetComponent(ObjectStacker).ItemCount <= 0) {
                        other.gameObject.GetComponent(StackingPlace).StopSequence();
                        this.GetComponent(StackingPlace).StopSequence();
                    }

                    this.requiredMeat.text = "x" + (Bridge.toString(this.GetComponent(StackingPlace).objectsRequired) || "");
                    var targetFill = 1.0 - this.GetComponent(StackingPlace).objectsRequired / 3.0;
                    DG.Tweening.DOTween.To$4(Bridge.fn.bind(this, function () {
                        return this.fillImage.fillAmount;
                    }), Bridge.fn.bind(this, function (x) {
                        this.fillImage.fillAmount = x;
                    }), targetFill, 0.2);
                }
            },
            /*Npc.OnTriggerStay end.*/


        }
    });
    /*Npc end.*/

    /*ObjectQueueManager start.*/
    Bridge.define("ObjectQueueManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            objectPrefab: null,
            initialQueueSize: 0,
            pointA: null,
            pointB: null,
            exitPoint: null,
            moveDuration: 0,
            shiftDuration: 0,
            queueObjects: null,
            stepPositions: null,
            cashCounter: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ObjectQueueManager#init", this ); }

                this.initialQueueSize = 5;
                this.moveDuration = 1.0;
                this.shiftDuration = 0.5;
                this.queueObjects = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*ObjectQueueManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ObjectQueueManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(ObjectQueueManager.Instance, null)) {
                    ObjectQueueManager.Instance = this;
                }
            },
            /*ObjectQueueManager.Awake end.*/

            /*ObjectQueueManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ObjectQueueManager#Start", this ); }

                this.InitializeQueue();
            },
            /*ObjectQueueManager.Start end.*/

            /*ObjectQueueManager.InitializeQueue start.*/
            /**
             * Spawns initialQueueSize instances of objectPrefab equally spaced from A to B.
             *
             * @instance
             * @private
             * @this ObjectQueueManager
             * @memberof ObjectQueueManager
             * @return  {void}
             */
            InitializeQueue: function () {
if ( TRACE ) { TRACE( "ObjectQueueManager#InitializeQueue", this ); }

                if (this.initialQueueSize < 2) {
                    UnityEngine.Debug.LogError$2("initialQueueSize must be >= 2 to form a row.");
                    return;
                }

                // Precompute the target positions along the line
                this.stepPositions = System.Array.init(this.initialQueueSize, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < this.initialQueueSize; i = (i + 1) | 0) {
                    var t = i / (((this.initialQueueSize - 1) | 0));
                    this.stepPositions[i] = new pc.Vec3().lerp( this.pointA.position, this.pointB.position, t );
                }

                // Spawn and store
                for (var i1 = 0; i1 < this.initialQueueSize; i1 = (i1 + 1) | 0) {
                    var obj = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.objectPrefab, this.stepPositions[i1], pc.Quat.IDENTITY.clone(), this.transform);
                    obj.gameObject.name = "NPC" + i1;
                    this.queueObjects.add(obj);
                }
            },
            /*ObjectQueueManager.InitializeQueue end.*/

            /*ObjectQueueManager.DequeueNext start.*/
            /**
             * Call this (e.g. from a button) to dequeue the front object and shift the rest.
             *
             * @instance
             * @public
             * @this ObjectQueueManager
             * @memberof ObjectQueueManager
             * @return  {void}
             */
            DequeueNext: function () {
if ( TRACE ) { TRACE( "ObjectQueueManager#DequeueNext", this ); }

                if (this.queueObjects.Count === 0) {
                    UnityEngine.Debug.Log$1("Queue is empty \u2014 nothing to dequeue.");
                    return;
                }

                // 1) Remember how many slots we should have
                var totalSlots = this.queueObjects.Count;

                // 2) Remove the front object
                var first = this.queueObjects.getItem(0);
                this.queueObjects.removeAt(0);

                // 3) Compute dynamic spacing
                var dir = (this.pointB.position.$clone().sub( this.pointA.position )).clone().normalize().$clone();
                var totalDist = pc.Vec3.distance( this.pointA.position, this.pointB.position );
                var slotSpacing = totalDist / (((totalSlots - 1) | 0));

                // 4) Shift everyone else into slots 0…(totalSlots-2)
                for (var i = 0; i < this.queueObjects.Count; i = (i + 1) | 0) {
                    var target = this.pointA.position.$clone().add( dir.$clone().clone().scale( slotSpacing ).clone().scale( i ) );
                    this.StartCoroutine$1(this.MoveToPoint(this.queueObjects.getItem(i), target, this.shiftDuration, null));
                }

                first.transform.LookAt(this.exitPoint);

                // 5) Send the first one off, then animate it into the last slot and re‑add it
                this.StartCoroutine$1(this.MoveToPoint(first, this.exitPoint.position, this.moveDuration + 1.5, Bridge.fn.bind(this, function () {
                    UnityEngine.MonoBehaviour.Destroy(first);
                    var obj = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.objectPrefab, this.stepPositions[((this.stepPositions.length - 1) | 0)], pc.Quat.IDENTITY.clone(), this.transform);
                    this.queueObjects.add(obj);

                })));
            },
            /*ObjectQueueManager.DequeueNext end.*/

            /*ObjectQueueManager.MoveToPoint start.*/
            /**
             * Smoothly moves obj from its current position to destination over duration seconds.
             Calls onComplete() if provided once the move is done.
             *
             * @instance
             * @private
             * @this ObjectQueueManager
             * @memberof ObjectQueueManager
             * @param   {UnityEngine.GameObject}            obj            
             * @param   {UnityEngine.Vector3}               destination    
             * @param   {number}                            duration       
             * @param   {System.Action}                     onComplete
             * @return  {System.Collections.IEnumerator}
             */
            MoveToPoint: function (obj, destination, duration, onComplete) {
if ( TRACE ) { TRACE( "ObjectQueueManager#MoveToPoint", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                        start = obj.transform.position.$clone();
                                        obj.GetComponent(Npc).StartWalk();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    obj.transform.position = new pc.Vec3().lerp( start, destination, elapsed / duration );
                                        elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    obj.transform.position = destination.$clone();
                                        obj.GetComponent(Npc).StopWalk();
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ObjectQueueManager.MoveToPoint end.*/


        }
    });
    /*ObjectQueueManager end.*/

    /*ObjectStacker start.*/
    Bridge.define("ObjectStacker", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            itemType: 0,
            stackMode: 0,
            origin: null,
            verticalOffset: null,
            gridColumns: 0,
            gridRows: 0,
            gridCellSize: null,
            layerOffset: null,
            throwUpHeight: 0,
            randomXZRange: 0,
            rotationMagnitude: 0,
            upDuration: 0,
            moveDuration: 0,
            offsetIndex: 0,
            itemStack: null,
            isPlayer: false,
            isCashUtilizer: false
        },
        props: {
            ItemCount: {
                get: function () {
if ( TRACE ) { TRACE( "ObjectStacker#ItemCount#get", this ); }

                    return this.itemStack.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ObjectStacker#init", this ); }

                this.verticalOffset = new UnityEngine.Vector3();
                this.gridCellSize = new UnityEngine.Vector3();
                this.layerOffset = new UnityEngine.Vector3();
                this.stackMode = ObjectStacker.StackMode.Vertical;
                this.verticalOffset = pc.Vec3.UP.clone();
                this.gridColumns = 3;
                this.gridRows = 3;
                this.gridCellSize = new pc.Vec3( 1.0, 0.0, 1.0 );
                this.layerOffset = pc.Vec3.UP.clone();
                this.throwUpHeight = 1.0;
                this.randomXZRange = 0.5;
                this.rotationMagnitude = 30.0;
                this.upDuration = 0.5;
                this.moveDuration = 0.5;
                this.itemStack = new (System.Collections.Generic.Stack$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*ObjectStacker.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "ObjectStacker#OnValidate", this ); }

                if (UnityEngine.Component.op_Equality(this.origin, null)) {
                    this.origin = this.transform;
                }
            },
            /*ObjectStacker.OnValidate end.*/

            /*ObjectStacker.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ObjectStacker#Update", this ); }

                this.UpdateAllItemPositions();
            },
            /*ObjectStacker.Update end.*/

            /*ObjectStacker.GetItemsInStack start.*/
            /**
             * Push items onto the stack with a toss animation.
             *
             * @instance
             * @public
             * @this ObjectStacker
             * @memberof ObjectStacker
             * @param   {Array.<UnityEngine.GameObject>}    items
             * @return  {void}
             */
            GetItemsInStack: function (items) {
if ( TRACE ) { TRACE( "ObjectStacker#GetItemsInStack", this ); }

                var $t;
                if (items === void 0) { items = []; }
                $t = Bridge.getEnumerator(items);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (UnityEngine.GameObject.op_Equality(item, null) || this.itemStack.Contains(item)) {
                            continue;
                        }

                        this.PushItemWithTween(item);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ObjectStacker.GetItemsInStack end.*/

            /*ObjectStacker.GetItemsOutOfStack start.*/
            /**
             * Pop up to 'count' items. Returns them top-first.
             *
             * @instance
             * @public
             * @this ObjectStacker
             * @memberof ObjectStacker
             * @param   {number}                               count
             * @return  {System.Collections.Generic.List$1}
             */
            GetItemsOutOfStack: function (count) {
if ( TRACE ) { TRACE( "ObjectStacker#GetItemsOutOfStack", this ); }

                var removed = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.offsetIndex = (this.offsetIndex - count) | 0;
                for (var i = 0; i < count && this.itemStack.Count > 0; i = (i + 1) | 0) {
                    var go = this.itemStack.Pop();

                    removed.add(go);


                    go.transform.SetParent(null, true);
                    var col = { };
                    if (go.TryGetComponent$1(UnityEngine.Collider, col)) {
                        col.v.enabled = true;
                    }
                }

                // Immediately reposition remaining stack
                //UpdateAllItemPositions(true);
                return removed;
            },
            /*ObjectStacker.GetItemsOutOfStack end.*/

            /*ObjectStacker.PushItemWithTween start.*/
            PushItemWithTween: function (item) {
if ( TRACE ) { TRACE( "ObjectStacker#PushItemWithTween", this ); }

                if (this.isPlayer) {
                    if (item.GetComponent(StackItem).itemType === ItemType.Cash) {
                        GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.PlusCurrencyValue("coin", 1);
                        UnityEngine.Debug.Log$1("cash");
                    }
                }
                var col = { };

                if (item.TryGetComponent$1(UnityEngine.Collider, col)) {
                    col.v.enabled = false;
                }

                // 2) Figure out where it’ll finally sit *in local space* once parented.
                var idx = Bridge.identity(this.offsetIndex, ((this.offsetIndex = (this.offsetIndex + 1) | 0)));
                var finalLocalPos = this.CalculateOffset(idx);

                // 3) Compute a world‐space mid‑point for the “toss up.”
                var startWorld = item.transform.position.$clone();
                var midWorld = startWorld.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(-this.randomXZRange, this.randomXZRange), this.throwUpHeight, UnityEngine.Random.Range$1(-this.randomXZRange, this.randomXZRange) ) );

                // 4) Random rotation for the toss.
                var randomRot = new pc.Vec3( UnityEngine.Random.Range$1(-this.rotationMagnitude, this.rotationMagnitude), UnityEngine.Random.Range$1(-this.rotationMagnitude, this.rotationMagnitude), UnityEngine.Random.Range$1(-this.rotationMagnitude, this.rotationMagnitude) );

                // 5) Build the sequence
                var seq = DG.Tweening.DOTween.Sequence();
                // — First, toss it up in world space:
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.transform, midWorld.$clone(), this.upDuration), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.ShortcutExtensions.DORotate(item.transform, randomRot.$clone(), this.upDuration, DG.Tweening.RotateMode.LocalAxisAdd));
                // — Once it gets there, *then* parent it to origin:
                DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, Bridge.fn.bind(this, function () {
                    item.transform.SetParent(this.origin, true);
                }));
                // — Finally, move *locally* into the exact slot:
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(item.transform, finalLocalPos.$clone(), this.moveDuration), DG.Tweening.Ease.InOutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.ShortcutExtensions.DOLocalRotate(item.transform, pc.Vec3.ZERO.clone(), this.moveDuration));

                DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, Bridge.fn.bind(this, function () {

                    // 1) Push it into our stack-data so CalculateOffset can see it.
                    this.itemStack.Push(item);

                    if (item.GetComponent(StackItem).itemType === ItemType.Cash && this.isCashUtilizer) {
                        this.itemStack.Pop();
                        UnityEngine.MonoBehaviour.Destroy(item);

                        if (ArrowPointer.Instance.currentTargetIndex === 3) {
                            ArrowPointer.Instance.MoveToNextTarget();
                        }

                    } else if (this.isPlayer && item.GetComponent(StackItem).itemType === ItemType.Cash) {
                        if (ArrowPointer.Instance.currentTargetIndex === 2) {
                            ArrowPointer.Instance.MoveToNextTarget();
                        }
                    }

                    if (this.isPlayer && item.GetComponent(StackItem).itemType === ItemType.Meat) {

                        GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.PlusCurrencyValue("meat", 1);

                    }

                    if (item.GetComponent(StackItem).itemType === ItemType.Meat && !this.isPlayer) {
                        if (ArrowPointer.Instance.currentTargetIndex === 1) {
                            ArrowPointer.Instance.MoveToNextTarget();
                        }
                    }

                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayOneShotPop();

                }));
            },
            /*ObjectStacker.PushItemWithTween end.*/

            /*ObjectStacker.UpdateAllItemPositions start.*/
            UpdateAllItemPositions: function (instant) {
if ( TRACE ) { TRACE( "ObjectStacker#UpdateAllItemPositions", this ); }

                if (instant === void 0) { instant = true; }
                var arr = this.itemStack.ToArray();
                for (var i = 0; i < arr.length; i = (i + 1) | 0) {
                    var go = arr[((((arr.length - 1) | 0) - i) | 0)];
                    if (instant) {
                        go.transform.localPosition = this.CalculateOffset(i);
                    } else {
                        DG.Tweening.ShortcutExtensions.DOLocalMove(go.transform, this.CalculateOffset(i), this.moveDuration);
                    }
                }
            },
            /*ObjectStacker.UpdateAllItemPositions end.*/

            /*ObjectStacker.CalculateOffset start.*/
            CalculateOffset: function (index) {
if ( TRACE ) { TRACE( "ObjectStacker#CalculateOffset", this ); }

                if (this.stackMode === ObjectStacker.StackMode.Vertical) {
                    return this.verticalOffset.$clone().clone().scale( index );
                }

                var layerSize = Bridge.Int.mul(this.gridColumns, this.gridRows);
                var layer = (Bridge.Int.div(index, layerSize)) | 0;
                var idxInLayer = index % layerSize;
                var row = (Bridge.Int.div(idxInLayer, this.gridColumns)) | 0;
                var col = idxInLayer % this.gridColumns;

                var horizontal = new pc.Vec3( col * this.gridCellSize.x, 0.0, row * this.gridCellSize.z );
                var vertical = this.layerOffset.$clone().clone().scale( layer );
                return horizontal.$clone().add( vertical );
            },
            /*ObjectStacker.CalculateOffset end.*/


        }
    });
    /*ObjectStacker end.*/

    /*ObjectStacker+StackMode start.*/
    Bridge.define("ObjectStacker.StackMode", {
        $kind: 1006,
        statics: {
            fields: {
                Vertical: 0,
                Grid: 1
            }
        }
    });
    /*ObjectStacker+StackMode end.*/

    /*ParticlePool start.*/
    Bridge.define("ParticlePool", {
        fields: {
            HideInHierarchy: false,
            ParticleName: null,
            PoolSize: 0,
            ParticlePrefab: null,
            Debug: false,
            PoolParent: null,
            ParticleQueue: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ParticlePool#init", this ); }

                this.HideInHierarchy = true;
                this.ParticleName = "Name";
                this.PoolSize = 10;
                this.Debug = false;
                this.ParticleQueue = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
            }
        }
    });
    /*ParticlePool end.*/

    /*PlayerAttack start.*/
    Bridge.define("PlayerAttack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            detectionRadius: 0,
            attackArcRange: 0,
            attackArcAngle: 0,
            attackDamage: 0,
            knockbackDistance: 0,
            knockbackDuration: 0,
            fireRate: 0,
            animatorController: null,
            playerModel: null,
            attackVfx: null,
            enemyMask: 0,
            nextFireTime: 0,
            isEnemyInRange: false,
            currentTarget: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerAttack#init", this ); }

                this.detectionRadius = 10.0;
                this.attackArcRange = 3.0;
                this.attackArcAngle = 120.0;
                this.attackDamage = 10.0;
                this.knockbackDistance = 3.0;
                this.knockbackDuration = 0.2;
                this.fireRate = 1.0;
            }
        },
        methods: {
            /*PlayerAttack.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerAttack#Start", this ); }

                this.enemyMask = UnityEngine.LayerMask.GetMask(["Enemy"]);
                this.nextFireTime = 0.0;
            },
            /*PlayerAttack.Start end.*/

            /*PlayerAttack.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerAttack#Update", this ); }

                var $t;
                if (this.GetComponent(PlayerController).isDie) {
                    return;
                }
                // 1) Collect all alive enemies in detection
                var hits = UnityEngine.Physics.OverlapSphere(this.transform.position, this.detectionRadius, this.enemyMask);

                var alive = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                $t = Bridge.getEnumerator(hits);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        var ai = c.GetComponent(EnemyAI);
                        if (UnityEngine.MonoBehaviour.op_Inequality(ai, null) && !ai.isDie) {
                            alive.add(c.transform);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // 2) Update targeting & rotation
                if (alive.Count > 0) {
                    this.isEnemyInRange = true;
                    this.currentTarget = this.GetClosest(alive);
                } else {
                    this.isEnemyInRange = false;
                    this.currentTarget = null;
                }
                this.RotatePlayerModel();

                // 3) Swing if we can
                if (this.isEnemyInRange && UnityEngine.Time.time >= this.nextFireTime) {
                    this.nextFireTime = UnityEngine.Time.time + this.fireRate;
                    this.PerformArcAttack(alive);
                }
            },
            /*PlayerAttack.Update end.*/

            /*PlayerAttack.GetClosest start.*/
            GetClosest: function (list) {
if ( TRACE ) { TRACE( "PlayerAttack#GetClosest", this ); }

                var $t;
                var best = null;
                var minD = 3.40282347E+38;
                $t = Bridge.getEnumerator(list);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        var d = pc.Vec3.distance( this.transform.position, t.position );
                        if (d < minD) {
                            minD = d;
                            best = t;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return best;
            },
            /*PlayerAttack.GetClosest end.*/

            /*PlayerAttack.RotatePlayerModel start.*/
            RotatePlayerModel: function () {
if ( TRACE ) { TRACE( "PlayerAttack#RotatePlayerModel", this ); }

                if (this.isEnemyInRange && UnityEngine.Component.op_Inequality(this.currentTarget, null)) {
                    var dir = this.currentTarget.position.$clone().sub( this.playerModel.position );
                    dir.y = 0;
                    if (dir.lengthSq() > 0.001) {
                        this.playerModel.rotation = new pc.Quat().lookRotation( dir.clone().normalize(), pc.Vec3.UP );
                    }
                } else {
                    this.playerModel.rotation = this.transform.rotation.$clone();
                }
            },
            /*PlayerAttack.RotatePlayerModel end.*/

            /*PlayerAttack.PerformArcAttack start.*/
            PerformArcAttack: function (enemies) {
if ( TRACE ) { TRACE( "PlayerAttack#PerformArcAttack", this ); }

                var $t;
                this.animatorController.SetTrigger$1("shoot");
                this.attackVfx.Play();
                var origin = this.playerModel.position.$clone();
                var forward = this.playerModel.forward.$clone();

                $t = Bridge.getEnumerator(enemies);
                try {
                    while ($t.moveNext()) {
                        var e = $t.Current;
                        var toE = e.position.$clone().sub( origin );
                        toE.y = 0;

                        if (toE.length() <= this.attackArcRange) {
                            var angle = Math.acos( pc.math.clamp( forward.clone().normalize().dot( toE.clone().normalize().clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG;
                            if (angle <= this.attackArcAngle * 0.5) {
                                // 1) Damage
                                var dmg = e.GetComponent(IDamageable);
                                if (dmg != null) {
                                    dmg.IDamageable$TakeDamage(this.attackDamage);
                                }

                                GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayOneShot(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.attackClip, 1);
                                if (ArrowPointer.Instance.currentTargetIndex === 0) {
                                    ArrowPointer.Instance.MoveToNextTarget();
                                }
                                // 2) Knockback
                                var pushDir = toE.clone().normalize().$clone();
                                var endPos = e.position.$clone().add( pushDir.$clone().clone().scale( this.knockbackDistance ) );
                                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(e, endPos.$clone(), this.knockbackDuration), DG.Tweening.Ease.OutQuad);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlayerAttack.PerformArcAttack end.*/

            /*PlayerAttack.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "PlayerAttack#OnDrawGizmosSelected", this ); }

                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 1, 0, 1 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );

                if (UnityEngine.Component.op_Inequality(this.playerModel, null)) {
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                    var orig = this.playerModel.position.$clone();
                    var fwd = this.playerModel.forward.$clone();
                    var half = this.attackArcAngle * 0.5;
                    var leftRot = new pc.Quat().setFromEulerAngles_Unity( 0, -half, 0 );
                    var rightRot = new pc.Quat().setFromEulerAngles_Unity( 0, half, 0 );
                    var leftDir = leftRot.transformVector( fwd );
                    var rightDir = rightRot.transformVector( fwd );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                }
            },
            /*PlayerAttack.OnDrawGizmosSelected end.*/


        }
    });
    /*PlayerAttack end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _rb: null,
            _speed: 0,
            _turnSpeed: 0,
            _playerModel: null,
            _input: null,
            deceleration: 0,
            inputValue: 0,
            dynamicJoystick: null,
            canMove: false,
            isDie: false,
            meatStacker: null,
            cashStacker: null,
            failScreen: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this._input = new UnityEngine.Vector3();
                this._speed = 5;
                this._turnSpeed = 360;
                this.canMove = true;
            }
        },
        methods: {
            /*PlayerController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayerController#OnEnable", this ); }

                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.None;

            },
            /*PlayerController.OnEnable end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }


                if (!this.canMove) {
                    return;
                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerController#FixedUpdate", this ); }

                if (!this.canMove) {
                    return;
                }

                this.GatherInput();
                this.Look();
                this.Move();
            },
            /*PlayerController.FixedUpdate end.*/

            /*PlayerController.GatherInput start.*/
            GatherInput: function () {
if ( TRACE ) { TRACE( "PlayerController#GatherInput", this ); }


                this._input = new pc.Vec3( this.dynamicJoystick.Horizontal, 0, this.dynamicJoystick.Vertical );
                this.inputValue = Math.abs(this.dynamicJoystick.Horizontal) + Math.abs(this.dynamicJoystick.Vertical);

            },
            /*PlayerController.GatherInput end.*/

            /*PlayerController.Look start.*/
            Look: function () {
if ( TRACE ) { TRACE( "PlayerController#Look", this ); }


                if (pc.Vec3.equals( this._input, pc.Vec3.ZERO.clone() )) {
                    return;
                }

                var rot = new pc.Quat().lookRotation( Helpers.ToIso(this._input), pc.Vec3.UP.clone() );
                this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), rot.$clone(), this._turnSpeed * UnityEngine.Time.deltaTime );


                // CurrencyManager.Instance.PlusCurrencyValue("coin",100);
                //  CurrencyManager.Instance.SubtractCurrencyValue("coin",10);
            },
            /*PlayerController.Look end.*/

            /*PlayerController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "PlayerController#Move", this ); }

                if (this.inputValue > 0) {
                    this.deceleration = 0.2;
                    this._rb.MovePosition(this.transform.position.$clone().add( this.transform.forward.$clone().clone().scale( (this._input.clone().normalize().length() * (this._speed * Math.max(0, Math.min(this.inputValue, 1))) * UnityEngine.Time.deltaTime) ) ));
                    this._playerModel.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, -0.5, 0 ) );
                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayWalk();
                } else {
                    this.deceleration -= UnityEngine.Time.deltaTime;
                    this._rb.MovePosition(this.transform.position.$clone().add( this.transform.forward.$clone().clone().scale( (Math.max(0, Math.min(this.deceleration, 1)) * this._speed * UnityEngine.Time.deltaTime) ) ));
                    this._playerModel.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0, -0.5, 0 ) );
                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayWalkStop();

                }

            },
            /*PlayerController.Move end.*/

            /*PlayerController.IsDead start.*/
            IsDead: function () {
if ( TRACE ) { TRACE( "PlayerController#IsDead", this ); }

                this.isDie = true;
                this.canMove = false;
                this.inputValue = 0;

                GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayOneShot(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.deathClip, 1);
                this.StartCoroutine$1(this.FailSequence());
            },
            /*PlayerController.IsDead end.*/

            /*PlayerController.FailSequence start.*/
            FailSequence: function () {
if ( TRACE ) { TRACE( "PlayerController#FailSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.PlayOneShot(GameAssets.GameSet.GameDevUtils.Managers.SoundManager.Instance.loseClip, 1);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.failScreen.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.FailSequence end.*/

            /*PlayerController.Restart start.*/
            Restart: function () {
if ( TRACE ) { TRACE( "PlayerController#Restart", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene(0);
            },
            /*PlayerController.Restart end.*/

            /*PlayerController.DownloadNow start.*/
            DownloadNow: function () {
if ( TRACE ) { TRACE( "PlayerController#DownloadNow", this ); }
 },
            /*PlayerController.DownloadNow end.*/

            /*PlayerController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerEnter", this ); }

                if (other.CompareTag("item")) {
                    if (other.GetComponent(StackItem).itemType === ItemType.Meat) {
                        this.meatStacker.GetItemsInStack([other.gameObject]);
                    } else {
                        this.cashStacker.GetItemsInStack([other.gameObject]);
                    }

                }
            },
            /*PlayerController.OnTriggerEnter end.*/


        }
    });
    /*PlayerController end.*/

    /*PoolingManager start.*/
    Bridge.define("PoolingManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            Pools: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PoolingManager#init", this ); }

                this.Pools = new (System.Collections.Generic.List$1(ParticlePool)).ctor();
            }
        },
        methods: {
            /*PoolingManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PoolingManager#Awake", this ); }

                this.Initialize();
            },
            /*PoolingManager.Awake end.*/

            /*PoolingManager.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "PoolingManager#Initialize", this ); }

                if (!UnityEngine.Object.op_Implicit(PoolingManager.Instance)) {
                    PoolingManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.gameObject);
                    return;
                } //else end
                this.Startt();
            },
            /*PoolingManager.Initialize end.*/

            /*PoolingManager.Startt start.*/
            Startt: function () {
if ( TRACE ) { TRACE( "PoolingManager#Startt", this ); }

                for (var i = 0; i < this.Pools.Count; i = (i + 1) | 0) {
                    this.MakePool(this.Pools.getItem(i).ParticleName, this.Pools.getItem(i));
                }
            },
            /*PoolingManager.Startt end.*/

            /*PoolingManager.MakePool start.*/
            MakePool: function (ParentName, Pool) {
if ( TRACE ) { TRACE( "PoolingManager#MakePool", this ); }

                if (!UnityEngine.Object.op_Implicit(Pool.ParticlePrefab)) {
                    return;
                }
                Pool.PoolParent = new UnityEngine.GameObject.$ctor2(Pool.ParticleName);
                Pool.PoolParent.transform.SetParent(this.transform);
                if (Pool.HideInHierarchy) {
                    Pool.PoolParent.gameObject.hideFlags = UnityEngine.HideFlags.HideInHierarchy;
                }
                for (var i = 0; i < Pool.PoolSize; i = (i + 1) | 0) {
                    var Temp = UnityEngine.Object.Instantiate(UnityEngine.GameObject, Pool.ParticlePrefab, Pool.PoolParent.transform);
                    Temp.SetActive(false);
                    Pool.ParticleQueue.Enqueue(Temp);
                } //loop end
            },
            /*PoolingManager.MakePool end.*/

            /*PoolingManager.SpawnObject$1 start.*/
            SpawnObject$1: function (enemyName, Pos, rot, duration) {
if ( TRACE ) { TRACE( "PoolingManager#SpawnObject$1", this ); }

                if (duration === void 0) { duration = 0.0; }
                return this.EnemySpawn(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, enemyName);
                }), Pos, rot, duration);
            },
            /*PoolingManager.SpawnObject$1 end.*/

            /*PoolingManager.SpawnObject start.*/
            SpawnObject: function (enemyName, parent) {
if ( TRACE ) { TRACE( "PoolingManager#SpawnObject", this ); }

                return this.Obj(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, enemyName);
                }), parent);
            },
            /*PoolingManager.SpawnObject end.*/

            /*PoolingManager.EnemySpawn start.*/
            EnemySpawn: function (Pool, Pos, rot, duration) {
if ( TRACE ) { TRACE( "PoolingManager#EnemySpawn", this ); }

                if (duration === void 0) { duration = 0.0; }
                if (Pool.ParticleQueue.Count <= 0) {
                    return null;
                }

                var PS = Pool.ParticleQueue.Dequeue();

                PS.transform.position = Pos.$clone();
                PS.transform.rotation = rot.$clone();
                PS.gameObject.SetActive(true);
                Pool.ParticleQueue.Enqueue(PS);

                if (duration > 0) {
                    this.StartCoroutine$1(this.PutBackInQueue(Pool, PS, duration));
                }

                return PS; //if end
            },
            /*PoolingManager.EnemySpawn end.*/

            /*PoolingManager.Obj start.*/
            Obj: function (Pool, parent) {
if ( TRACE ) { TRACE( "PoolingManager#Obj", this ); }

                if (Pool.ParticleQueue.Count <= 0) {
                    return null;
                }

                var PS = Pool.ParticleQueue.Dequeue();

                PS.transform.SetParent(parent);
                PS.gameObject.SetActive(true);
                Pool.ParticleQueue.Enqueue(PS);


                return PS; //if end
            },
            /*PoolingManager.Obj end.*/

            /*PoolingManager.PlayParticle$3 start.*/
            PlayParticle$3: function (ParticleName, Pos, parent) {
if ( TRACE ) { TRACE( "PoolingManager#PlayParticle$3", this ); }

                return this.Play$3(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, ParticleName);
                }), Pos, parent);
            },
            /*PoolingManager.PlayParticle$3 end.*/

            /*PoolingManager.PlayParticle start.*/
            PlayParticle: function (ParticleName, Parent) {
if ( TRACE ) { TRACE( "PoolingManager#PlayParticle", this ); }

                this.Play(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, ParticleName);
                }), Parent);
            },
            /*PoolingManager.PlayParticle end.*/

            /*PoolingManager.PlayParticle$2 start.*/
            PlayParticle$2: function (ParticleName, pos, dequeDuration, Parent) {
if ( TRACE ) { TRACE( "PoolingManager#PlayParticle$2", this ); }

                if (Parent === void 0) { Parent = null; }
                return this.Play$2(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, ParticleName);
                }), pos, dequeDuration, Parent);
            },
            /*PoolingManager.PlayParticle$2 end.*/

            /*PoolingManager.PlayParticle$1 start.*/
            PlayParticle$1: function (ParticleName, pos) {
if ( TRACE ) { TRACE( "PoolingManager#PlayParticle$1", this ); }

                this.Play$1(this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, ParticleName);
                }), pos);
            },
            /*PoolingManager.PlayParticle$1 end.*/

            /*PoolingManager.Play$3 start.*/
            Play$3: function (Pool, Pos, parent) {
if ( TRACE ) { TRACE( "PoolingManager#Play$3", this ); }

                if (Pool.ParticleQueue.Count > 0) {
                    var PS = Pool.ParticleQueue.Dequeue().GetComponent(UnityEngine.ParticleSystem);
                    PS.transform.SetParent(parent);
                    PS.transform.position = Pos.$clone();
                    PS.transform.rotation = PS.transform.localRotation.$clone();
                    PS.gameObject.SetActive(true);
                    this.StartCoroutine$1(this.PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
                    PS.Play();
                    return PS.gameObject;
                } //if end

                return null;
            },
            /*PoolingManager.Play$3 end.*/

            /*PoolingManager.Play start.*/
            Play: function (Pool, Parent) {
if ( TRACE ) { TRACE( "PoolingManager#Play", this ); }

                if (Pool.ParticleQueue.Count > 0) {
                    var PS = Pool.ParticleQueue.Dequeue().GetComponent(UnityEngine.ParticleSystem);
                    PS.transform.SetParent(Parent, true);
                    PS.gameObject.SetActive(true);
                    this.StartCoroutine$1(this.PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
                    PS.Play();
                } //if end
            },
            /*PoolingManager.Play end.*/

            /*PoolingManager.Play$2 start.*/
            Play$2: function (Pool, pos, dequeDuration, Parent) {
if ( TRACE ) { TRACE( "PoolingManager#Play$2", this ); }

                if (Parent === void 0) { Parent = null; }
                if (Pool.ParticleQueue.Count > 0) {
                    var PS = Pool.ParticleQueue.Dequeue().GetComponent(UnityEngine.ParticleSystem);
                    PS.transform.SetParent(Parent, true);
                    PS.gameObject.SetActive(true);
                    this.StartCoroutine$1(this.PutBackInQueue(Pool, PS.gameObject, dequeDuration));
                    PS.Play();
                    return PS.gameObject;
                } //if end

                return null;
            },
            /*PoolingManager.Play$2 end.*/

            /*PoolingManager.Play$1 start.*/
            Play$1: function (Pool, pos) {
if ( TRACE ) { TRACE( "PoolingManager#Play$1", this ); }

                if (Pool.ParticleQueue.Count > 0) {
                    var PS = Pool.ParticleQueue.Dequeue().GetComponent(UnityEngine.ParticleSystem);
                    PS.transform.position = pos.$clone();
                    PS.gameObject.SetActive(true);
                    this.StartCoroutine$1(this.PutBackInQueue(Pool, PS.gameObject, PS.main.duration));
                    PS.Play();
                } //if end
            },
            /*PoolingManager.Play$1 end.*/

            /*PoolingManager.PutObjBackInQueue start.*/
            PutObjBackInQueue: function (poolName, obj) {
if ( TRACE ) { TRACE( "PoolingManager#PutObjBackInQueue", this ); }

                var PS = this.Pools.Find(function (pool) {
                    return System.String.equals(pool.ParticleName, poolName);
                });
                obj.SetActive(false);
                PS.ParticleQueue.Enqueue(obj);
            },
            /*PoolingManager.PutObjBackInQueue end.*/

            /*PoolingManager.PutBackInQueue start.*/
            PutBackInQueue: function (Pool, Particle, Duration) {
if ( TRACE ) { TRACE( "PoolingManager#PutBackInQueue", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(Duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (!UnityEngine.Object.op_Implicit(Particle)) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    Particle.SetActive(false);
                                        Pool.ParticleQueue.Enqueue(Particle);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PoolingManager.PutBackInQueue end.*/


        },
        overloads: {
            "SpawnObject(string, Vector3, Quaternion, float)": "SpawnObject$1",
            "PlayParticle(string, Vector3, Transform)": "PlayParticle$3",
            "PlayParticle(string, Vector3, float, Transform)": "PlayParticle$2",
            "PlayParticle(string, Vector3)": "PlayParticle$1",
            "Play(ParticlePool, Vector3, Transform)": "Play$3",
            "Play(ParticlePool, Vector3, float, Transform)": "Play$2",
            "Play(ParticlePool, Vector3)": "Play$1"
        }
    });
    /*PoolingManager end.*/

    /*StackingPlace start.*/
    Bridge.define("StackingPlace", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            acceptedType: 0,
            transferInterval: 0,
            autoStack: false,
            isGiver: false,
            autoGiverStacker: null,
            initialDelay: 0,
            objectsRequired: 0,
            takerStacker: null,
            transferRoutine: null,
            giver: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "StackingPlace#init", this ); }

                this.transferInterval = 0.5;
                this.autoStack = false;
            }
        },
        methods: {
            /*StackingPlace.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "StackingPlace#Awake", this ); }

                this.takerStacker = this.GetComponent(ObjectStacker);
            },
            /*StackingPlace.Awake end.*/

            /*StackingPlace.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "StackingPlace#Start", this ); }

                if (this.autoStack && UnityEngine.MonoBehaviour.op_Inequality(this.autoGiverStacker, null)) {
                    this.transferRoutine = this.StartCoroutine$1(this.AutoTransferLoop(this.autoGiverStacker));
                }
            },
            /*StackingPlace.Start end.*/

            /*StackingPlace.StartAutoRoutine start.*/
            StartAutoRoutine: function () {
if ( TRACE ) { TRACE( "StackingPlace#StartAutoRoutine", this ); }

                if (this.autoStack && UnityEngine.MonoBehaviour.op_Inequality(this.autoGiverStacker, null) && this.transferRoutine == null) {
                    this.transferRoutine = this.StartCoroutine$1(this.AutoTransferLoop(this.autoGiverStacker));
                }
            },
            /*StackingPlace.StartAutoRoutine end.*/

            /*StackingPlace.OnCollisionEnter start.*/
            OnCollisionEnter: function (other) {
if ( TRACE ) { TRACE( "StackingPlace#OnCollisionEnter", this ); }

                if (this.autoStack) {
                    return;
                }

                if (!this.isGiver) {
                    if (other.gameObject.CompareTag("Player")) {
                        var pc = other.gameObject.GetComponent(PlayerController);

                        if (this.acceptedType === pc.meatStacker.itemType) {
                            this.giver = pc.meatStacker;
                        } else {
                            this.giver = pc.cashStacker;
                        }
                    } else {
                        this.giver = other.gameObject.GetComponent(ObjectStacker);

                    }
                } else {
                    this.giver = this.GetComponent(ObjectStacker);


                    if (other.gameObject.CompareTag("Player")) {
                        var pc1 = other.gameObject.GetComponent(PlayerController);

                        if (this.acceptedType === pc1.meatStacker.itemType) {
                            this.takerStacker = pc1.meatStacker;
                        } else {
                            this.takerStacker = pc1.cashStacker;
                        }
                    } else {
                        this.takerStacker = other.gameObject.GetComponent(ObjectStacker);

                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.takerStacker, null)) {
                    this.transferRoutine = this.StartCoroutine$1(this.TransferItems(this.giver));
                }
            },
            /*StackingPlace.OnCollisionEnter end.*/

            /*StackingPlace.OnCollisionExit start.*/
            OnCollisionExit: function (other) {
if ( TRACE ) { TRACE( "StackingPlace#OnCollisionExit", this ); }

                if (this.autoStack) {
                    return;
                }
                if (this.transferRoutine != null) {
                    this.StopCoroutine$2(this.transferRoutine);
                    this.transferRoutine = null;
                }
            },
            /*StackingPlace.OnCollisionExit end.*/

            /*StackingPlace.StopSequence start.*/
            StopSequence: function () {
if ( TRACE ) { TRACE( "StackingPlace#StopSequence", this ); }

                if (this.transferRoutine != null) {
                    this.StopCoroutine(this.AutoTransferLoop(this.giver));
                }
            },
            /*StackingPlace.StopSequence end.*/

            /*StackingPlace.TransferItems start.*/
            TransferItems: function (giver) {
if ( TRACE ) { TRACE( "StackingPlace#TransferItems", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    items,
                    item,
                    stackItem,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // keep running until we hit a wrong-type or you manually StopCoroutine
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.MonoBehaviour.op_Inequality(giver, null) ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    // only try to pull if there's something in the queue
                                        if (giver.ItemCount > 0) {
                                            items = giver.GetItemsOutOfStack(1);
                                            if (items.Count > 0) {
                                                item = items.getItem(0);
                                                stackItem = item.GetComponent(StackItem);

                                                if (UnityEngine.MonoBehaviour.op_Inequality(stackItem, null) && stackItem.itemType === this.acceptedType) {
                                                    this.takerStacker.GetItemsInStack([item]);
                                                } else {
                                                    // wrong type: return it and bail out
                                                    giver.GetItemsInStack([item]);
                                                    $step = 4;
                                                    continue;
                                                }
                                            }
                                            // if items.Count == 0 we just wait and loop again
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.transferInterval);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transferRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*StackingPlace.TransferItems end.*/

            /*StackingPlace.AutoTransferLoop start.*/
            AutoTransferLoop: function (giver) {
if ( TRACE ) { TRACE( "StackingPlace#AutoTransferLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    items,
                    item,
                    stackItem,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.initialDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // runs as long as autoStack stays true and giver exists
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( this.autoStack && UnityEngine.MonoBehaviour.op_Inequality(giver, null) ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    if (this.objectsRequired > 0 && giver.ItemCount > 0) {
                                            items = giver.GetItemsOutOfStack(1);
                                            if (items.Count > 0) {
                                                item = items.getItem(0);
                                                stackItem = item.GetComponent(StackItem);
                                                if (item.GetComponent(StackItem).itemType === ItemType.Meat) {
                                                    GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager.Instance.SubtractCurrencyValue("meat", 1);
                                                }

                                                if (UnityEngine.MonoBehaviour.op_Inequality(stackItem, null) && stackItem.itemType === this.acceptedType) {
                                                    this.takerStacker.GetItemsInStack([item]);
                                                    this.objectsRequired = (this.objectsRequired - 1) | 0;
                                                } else {
                                                    //giver.GetItemsInStack(item);
                                                }
                                            }
                                        }

                                        // always wait and re-check, so new items or new objectsRequired will be picked up
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.transferInterval);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    this.transferRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*StackingPlace.AutoTransferLoop end.*/


        }
    });
    /*StackingPlace end.*/

    /*StackItem start.*/
    Bridge.define("StackItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            itemType: 0
        },
        methods: {
            /*StackItem.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "StackItem#OnEnable", this ); }

                if (this.itemType === ItemType.Cash) {
                    ObjectQueueManager.Instance.cashCounter.GetItemsInStack([this.gameObject]);
                }
            },
            /*StackItem.OnEnable end.*/


        }
    });
    /*StackItem end.*/

    /*Toggle start.*/
    Bridge.define("Toggle", {
        fields: {
            button: null,
            OnSprite: null,
            OffSprite: null,
            SpriteImage: null
        },
        methods: {
            /*Toggle.AddListener start.*/
            AddListener: function (call) {
if ( TRACE ) { TRACE( "Toggle#AddListener", this ); }

                this.button.onClick.RemoveAllListeners();
                this.button.onClick.AddListener(call);
                this.SpriteImage = this.button.GetComponent(UnityEngine.UI.Image);
            },
            /*Toggle.AddListener end.*/

            /*Toggle.SetState start.*/
            SetState: function ($Toggle) {
if ( TRACE ) { TRACE( "Toggle#SetState", this ); }

                this.SpriteImage.sprite = $Toggle ? this.OnSprite : this.OffSprite;
            },
            /*Toggle.SetState end.*/


        }
    });
    /*Toggle end.*/

    /*DamageSystem start.*/
    Bridge.define("DamageSystem", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        fields: {
            maxHealth: 0,
            currentHealth: 0,
            healthBar: null,
            onDeath: null,
            once: false
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DamageSystem#init", this ); }

                this.maxHealth = 1.0;
            }
        },
        methods: {
            /*DamageSystem.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "DamageSystem#OnEnable", this ); }

                this.currentHealth = this.maxHealth;
                this.healthBar.fillAmount = this.maxHealth;
            },
            /*DamageSystem.OnEnable end.*/

            /*DamageSystem.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "DamageSystem#TakeDamage", this ); }

                this.currentHealth -= amount;

                this.healthBar.fillAmount = this.currentHealth / this.maxHealth;


                if (this.currentHealth <= 0 && !this.once) {
                    this.once = true;
                    this.Die();
                }
            },
            /*DamageSystem.TakeDamage end.*/

            /*DamageSystem.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "DamageSystem#Die", this ); }

                this.onDeath != null ? this.onDeath.Invoke() : null;
            },
            /*DamageSystem.Die end.*/


        }
    });
    /*DamageSystem end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*EnemyAI+AttackState start.*/
    Bridge.define("EnemyAI.AttackState", {
        inherits: [EnemyAI.IState],
        $kind: 1002,
        fields: {
            ai: null,
            attackStartTime: 0,
            hasHit: false
        },
        alias: [
            "Enter", "EnemyAI$IState$Enter",
            "Update", "EnemyAI$IState$Update",
            "Exit", "EnemyAI$IState$Exit"
        ],
        ctors: {
            ctor: function (ai) {
if ( TRACE ) { TRACE( "EnemyAI.AttackState#ctor", this ); }

                this.$initialize();
                this.ai = ai;
            }
        },
        methods: {
            /*EnemyAI+AttackState.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "EnemyAI.AttackState#Enter", this ); }

                this.ai.anim.ResetTrigger$1("walk");
                this.ai.anim.ResetTrigger$1("idle");
                this.ai.anim.SetTrigger$1("attack");

                this.attackStartTime = UnityEngine.Time.time;
                this.hasHit = false;
                // schedule next cooldown now
                this.ai.nextAttackTime = this.attackStartTime + 1.0 / this.ai.attackRate;
            },
            /*EnemyAI+AttackState.Enter end.*/

            /*EnemyAI+AttackState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyAI.AttackState#Update", this ); }

                var elapsed = UnityEngine.Time.time - this.attackStartTime;

                // 1) Wind‑up: apply damage once
                if (!this.hasHit && elapsed >= this.ai.attackWindupTime) {
                    this.hasHit = true;
                    var dmg = UnityEngine.Component.op_Inequality(this.ai.player, null) ? this.ai.player.GetComponent(IDamageable) : null;
                    if (dmg != null) {
                        dmg.IDamageable$TakeDamage(this.ai.attackDamage);
                    }
                }

                // 2) End of attack anim: transition to next state
                if (elapsed >= this.ai.attackAnimDuration) {
                    var dist = UnityEngine.Component.op_Equality(this.ai.player, null) ? 3.40282347E+38 : pc.Vec3.distance( this.ai.transform.position, this.ai.player.position );

                    if (UnityEngine.Component.op_Equality(this.ai.player, null) || dist > this.ai.detectionRadius) {
                        this.ai.TransitionTo(new EnemyAI.IdleState(this.ai));
                    } else {
                        if (dist > this.ai.attackRange) {
                            this.ai.TransitionTo(new EnemyAI.ChaseState(this.ai));
                        } else {
                            this.ai.TransitionTo(new EnemyAI.IdleState(this.ai));
                        }
                    } // rest until cooldown
                }
            },
            /*EnemyAI+AttackState.Update end.*/

            /*EnemyAI+AttackState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "EnemyAI.AttackState#Exit", this ); }
 /* nothing special */
            },
            /*EnemyAI+AttackState.Exit end.*/


        }
    });
    /*EnemyAI+AttackState end.*/

    /*EnemyAI+ChaseState start.*/
    Bridge.define("EnemyAI.ChaseState", {
        inherits: [EnemyAI.IState],
        $kind: 1002,
        fields: {
            ai: null
        },
        alias: [
            "Enter", "EnemyAI$IState$Enter",
            "Update", "EnemyAI$IState$Update",
            "Exit", "EnemyAI$IState$Exit"
        ],
        ctors: {
            ctor: function (ai) {
if ( TRACE ) { TRACE( "EnemyAI.ChaseState#ctor", this ); }

                this.$initialize();
                this.ai = ai;
            }
        },
        methods: {
            /*EnemyAI+ChaseState.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "EnemyAI.ChaseState#Enter", this ); }

                this.ai.anim.ResetTrigger$1("idle");
                this.ai.anim.ResetTrigger$1("attack");
                this.ai.anim.SetTrigger$1("walk");
            },
            /*EnemyAI+ChaseState.Enter end.*/

            /*EnemyAI+ChaseState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyAI.ChaseState#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.ai.player, null)) {
                    this.ai.TransitionTo(new EnemyAI.IdleState(this.ai));
                    return;
                }

                var dist = pc.Vec3.distance( this.ai.transform.position, this.ai.player.position );

                if (dist > this.ai.detectionRadius) {
                    this.ai.TransitionTo(new EnemyAI.IdleState(this.ai));
                } else if (dist <= this.ai.attackRange && UnityEngine.Time.time >= this.ai.nextAttackTime) {
                    this.ai.TransitionTo(new EnemyAI.AttackState(this.ai));
                }
                // else: keep chasing
            },
            /*EnemyAI+ChaseState.Update end.*/

            /*EnemyAI+ChaseState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "EnemyAI.ChaseState#Exit", this ); }


            },
            /*EnemyAI+ChaseState.Exit end.*/


        }
    });
    /*EnemyAI+ChaseState end.*/

    /*EnemyAI+IdleState start.*/
    Bridge.define("EnemyAI.IdleState", {
        inherits: [EnemyAI.IState],
        $kind: 1002,
        fields: {
            ai: null
        },
        alias: [
            "Enter", "EnemyAI$IState$Enter",
            "Update", "EnemyAI$IState$Update",
            "Exit", "EnemyAI$IState$Exit"
        ],
        ctors: {
            ctor: function (ai) {
if ( TRACE ) { TRACE( "EnemyAI.IdleState#ctor", this ); }

                this.$initialize();
                this.ai = ai;
            }
        },
        methods: {
            /*EnemyAI+IdleState.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "EnemyAI.IdleState#Enter", this ); }

                this.ai.anim.ResetTrigger$1("walk");
                this.ai.anim.ResetTrigger$1("attack");
                this.ai.anim.SetTrigger$1("idle");
            },
            /*EnemyAI+IdleState.Enter end.*/

            /*EnemyAI+IdleState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EnemyAI.IdleState#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.ai.player, null)) {
                    return;
                } // stay idle

                var dist = pc.Vec3.distance( this.ai.transform.position, this.ai.player.position );

                if (dist > this.ai.detectionRadius) {
                    // still out of detection → remain idle
                    return;
                } else if (dist > this.ai.attackRange) {
                    this.ai.TransitionTo(new EnemyAI.ChaseState(this.ai));
                } else if (UnityEngine.Time.time >= this.ai.nextAttackTime) {
                    this.ai.TransitionTo(new EnemyAI.AttackState(this.ai));
                }
                // else: in range but waiting for cooldown, stay idle
            },
            /*EnemyAI+IdleState.Update end.*/

            /*EnemyAI+IdleState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "EnemyAI.IdleState#Exit", this ); }
 /* nothing to clean up */
            },
            /*EnemyAI+IdleState.Exit end.*/


        }
    });
    /*EnemyAI+IdleState end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent start.*/
    Bridge.define("GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent", {
        inherits: [UnityEngine.Events.UnityEvent$1(GameAssets.GameSet.GameDevUtils.Managers.GameState)]
    });
    /*GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine.Events","System.Collections","UnityEngine","System.Collections.Generic","UnityEngine.EventSystems","GameAssets.GameSet.GameDevUtils.Managers","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*DamageSystem start.*/
    $m("DamageSystem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Die","t":8,"sn":"Die","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Single,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"currentHealth","t":4,"rt":$n[0].Single,"sn":"currentHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"healthBar","t":4,"rt":$n[1].Image,"sn":"healthBar"},{"a":2,"n":"maxHealth","t":4,"rt":$n[0].Single,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"onDeath","t":4,"rt":$n[2].UnityEvent,"sn":"onDeath"},{"a":1,"n":"once","t":4,"rt":$n[0].Boolean,"sn":"once","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DamageSystem end.*/

    /*IDamageable start.*/
    $m("IDamageable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Single,"ps":0}],"sn":"IDamageable$TakeDamage","rt":$n[0].Void,"p":[$n[0].Single]}]}; }, $n);
    /*IDamageable end.*/

    /*EnemyAI start.*/
    $m("EnemyAI", function () { return {"nested":[EnemyAI.IState,EnemyAI.IdleState,EnemyAI.ChaseState,EnemyAI.AttackState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DeathSequence","t":8,"sn":"DeathSequence","rt":$n[3].IEnumerator},{"a":2,"n":"OnDeath","t":8,"sn":"OnDeath","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TransitionTo","t":8,"pi":[{"n":"newState","pt":EnemyAI.IState,"ps":0}],"sn":"TransitionTo","rt":$n[0].Void,"p":[EnemyAI.IState]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References")],"a":2,"n":"anim","t":4,"rt":$n[4].Animator,"sn":"anim"},{"at":[new UnityEngine.TooltipAttribute("Total length of your attack clip (seconds)")],"a":2,"n":"attackAnimDuration","t":4,"rt":$n[0].Single,"sn":"attackAnimDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"attackDamage","t":4,"rt":$n[0].Single,"sn":"attackDamage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"attackRange","t":4,"rt":$n[0].Single,"sn":"attackRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"attackRate","t":4,"rt":$n[0].Single,"sn":"attackRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Seconds before the hit actually lands (wind\u2011up)")],"a":2,"n":"attackWindupTime","t":4,"rt":$n[0].Single,"sn":"attackWindupTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentState","t":4,"rt":EnemyAI.IState,"sn":"currentState"},{"at":[new UnityEngine.HeaderAttribute("Detection & Combat")],"a":2,"n":"detectionRadius","t":4,"rt":$n[0].Single,"sn":"detectionRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Time to come back down")],"a":2,"n":"downDuration","t":4,"rt":$n[0].Single,"sn":"downDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isDie","t":4,"rt":$n[0].Boolean,"sn":"isDie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"nextAttackTime","t":4,"rt":$n[0].Single,"sn":"nextAttackTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"player","t":4,"rt":$n[4].Transform,"sn":"player"},{"a":1,"n":"playerMask","t":4,"rt":$n[0].Int32,"sn":"playerMask","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Horizontal spread (XZ) when they scatter on the toss")],"a":2,"n":"randomXZRange","t":4,"rt":$n[0].Single,"sn":"randomXZRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawn & Scatter Settings"),new UnityEngine.TooltipAttribute("How many to spawn each burst")],"a":2,"n":"spawnCount","t":4,"rt":$n[0].Int32,"sn":"spawnCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"spawnPoint","t":4,"rt":$n[4].Transform,"sn":"spawnPoint"},{"at":[new UnityEngine.TooltipAttribute("How high they fly up")],"a":2,"n":"throwUpHeight","t":4,"rt":$n[0].Single,"sn":"throwUpHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Time to go up")],"a":2,"n":"upDuration","t":4,"rt":$n[0].Single,"sn":"upDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnEnemyDeath","is":true,"t":2,"ad":{"a":2,"n":"add_OnEnemyDeath","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnEnemyDeath","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnEnemyDeath","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnEnemyDeath","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*EnemyAI end.*/

    /*EnemyAI+IState start.*/
    $m("EnemyAI.IState", function () { return {"td":EnemyAI,"att":1048738,"a":2,"m":[{"ab":true,"a":2,"n":"Enter","t":8,"sn":"EnemyAI$IState$Enter","rt":$n[0].Void},{"ab":true,"a":2,"n":"Exit","t":8,"sn":"EnemyAI$IState$Exit","rt":$n[0].Void},{"ab":true,"a":2,"n":"Update","t":8,"sn":"EnemyAI$IState$Update","rt":$n[0].Void}]}; }, $n);
    /*EnemyAI+IState end.*/

    /*EnemyAI+IdleState start.*/
    $m("EnemyAI.IdleState", function () { return {"td":EnemyAI,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[EnemyAI],"pi":[{"n":"ai","pt":EnemyAI,"ps":0}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"sn":"Enter","rt":$n[0].Void},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"ai","t":4,"rt":EnemyAI,"sn":"ai","ro":true}]}; }, $n);
    /*EnemyAI+IdleState end.*/

    /*EnemyAI+ChaseState start.*/
    $m("EnemyAI.ChaseState", function () { return {"td":EnemyAI,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[EnemyAI],"pi":[{"n":"ai","pt":EnemyAI,"ps":0}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"sn":"Enter","rt":$n[0].Void},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"ai","t":4,"rt":EnemyAI,"sn":"ai","ro":true}]}; }, $n);
    /*EnemyAI+ChaseState end.*/

    /*EnemyAI+AttackState start.*/
    $m("EnemyAI.AttackState", function () { return {"td":EnemyAI,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[EnemyAI],"pi":[{"n":"ai","pt":EnemyAI,"ps":0}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"sn":"Enter","rt":$n[0].Void},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"ai","t":4,"rt":EnemyAI,"sn":"ai","ro":true},{"a":1,"n":"attackStartTime","t":4,"rt":$n[0].Single,"sn":"attackStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hasHit","t":4,"rt":$n[0].Boolean,"sn":"hasHit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*EnemyAI+AttackState end.*/

    /*EnemySpawner start.*/
    $m("EnemySpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleEnemyDeath","t":8,"pi":[{"n":"dead","pt":EnemyAI,"ps":0}],"sn":"HandleEnemyDeath","rt":$n[0].Void,"p":[EnemyAI]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"RespawnAt","t":8,"pi":[{"n":"sp","pt":$n[4].Transform,"ps":0}],"sn":"RespawnAt","rt":$n[3].IEnumerator,"p":[$n[4].Transform]},{"a":1,"n":"SpawnAt","t":8,"pi":[{"n":"sp","pt":$n[4].Transform,"ps":0}],"sn":"SpawnAt","rt":$n[0].Void,"p":[$n[4].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("Name of the pool in your PoolingManager")],"a":2,"n":"poolName","t":4,"rt":$n[0].String,"sn":"poolName"},{"at":[new UnityEngine.TooltipAttribute("Optional delay before respawning")],"a":2,"n":"respawnDelay","t":4,"rt":$n[0].Single,"sn":"respawnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Setup"),new UnityEngine.TooltipAttribute("Drag in all of your empty GameObjects marking spawn positions.")],"a":2,"n":"spawnPoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"spawnPoints"}]}; }, $n);
    /*EnemySpawner end.*/

    /*ArrowPointer start.*/
    $m("ArrowPointer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"MoveToNextTarget","t":8,"sn":"MoveToNextTarget","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":ArrowPointer,"sn":"Instance"},{"a":2,"n":"arrow","t":4,"rt":$n[4].Transform,"sn":"arrow"},{"a":2,"n":"currentTargetIndex","t":4,"rt":$n[0].Int32,"sn":"currentTargetIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"heightOffset","t":4,"rt":$n[0].Single,"sn":"heightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orbitRadius","t":4,"rt":$n[0].Single,"sn":"orbitRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"player","t":4,"rt":$n[4].Transform,"sn":"player"},{"a":2,"n":"targets","t":4,"rt":$n[5].List$1(UnityEngine.Transform),"sn":"targets"}]}; }, $n);
    /*ArrowPointer end.*/

    /*CurrencyDeductionOnCollision start.*/
    $m("CurrencyDeductionOnCollision", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Collider)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DeductChunks","t":8,"sn":"DeductChunks","rt":$n[3].IEnumerator},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"other","pt":$n[4].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[4].Collision]},{"a":1,"n":"OnCollisionExit","t":8,"pi":[{"n":"other","pt":$n[4].Collision,"ps":0}],"sn":"OnCollisionExit","rt":$n[0].Void,"p":[$n[4].Collision]},{"v":true,"a":3,"n":"OnDeductionComplete","t":8,"sn":"OnDeductionComplete","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WinSequence","t":8,"sn":"WinSequence","rt":$n[3].IEnumerator},{"a":2,"n":"amount","t":4,"rt":$n[1].Text,"sn":"amount"},{"at":[new UnityEngine.HeaderAttribute("Chunked Subtraction"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chunkSize","t":4,"rt":$n[0].Int32,"sn":"chunkSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Currency Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currencyName","t":4,"rt":$n[0].String,"sn":"currencyName"},{"a":1,"n":"deductionCoroutine","t":4,"rt":$n[4].Coroutine,"sn":"deductionCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayBetweenDeductions","t":4,"rt":$n[0].Single,"sn":"delayBetweenDeductions","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"once","t":4,"rt":$n[0].Boolean,"sn":"once","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"particle","t":4,"rt":$n[4].ParticleSystem,"sn":"particle"},{"a":2,"n":"pc","t":4,"rt":PlayerController,"sn":"pc"},{"a":1,"n":"remainingAmount","t":4,"rt":$n[0].Int32,"sn":"remainingAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalAmount","t":4,"rt":$n[0].Int32,"sn":"totalAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"win","t":4,"rt":$n[4].GameObject,"sn":"win"}]}; }, $n);
    /*CurrencyDeductionOnCollision end.*/

    /*Toggle start.*/
    $m("Toggle", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddListener","t":8,"pi":[{"n":"call","pt":Function,"ps":0}],"sn":"AddListener","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"SetState","t":8,"pi":[{"n":"Toggle","pt":$n[0].Boolean,"ps":0}],"sn":"SetState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"OffSprite","t":4,"rt":$n[4].Sprite,"sn":"OffSprite"},{"a":2,"n":"OnSprite","t":4,"rt":$n[4].Sprite,"sn":"OnSprite"},{"a":1,"n":"SpriteImage","t":4,"rt":$n[1].Image,"sn":"SpriteImage"},{"a":2,"n":"button","t":4,"rt":$n[1].Button,"sn":"button"}]}; }, $n);
    /*Toggle end.*/

    /*GameSettings start.*/
    $m("GameSettings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClosePanel","t":8,"sn":"ClosePanel","rt":$n[0].Void},{"a":2,"n":"InitializeSettings","t":8,"sn":"InitializeSettings","rt":$n[0].Void},{"a":1,"n":"LoadSettings","t":8,"sn":"LoadSettings","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ToggleHaptic","t":8,"sn":"ToggleHaptic","rt":$n[0].Void},{"a":1,"n":"ToggleMusic","t":8,"sn":"ToggleMusic","rt":$n[0].Void},{"a":1,"n":"TogglePanel","t":8,"sn":"TogglePanel","rt":$n[0].Void},{"a":1,"n":"ToggleSFX","t":8,"sn":"ToggleSFX","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameSettings,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameSettings,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameSettings],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"toggleStatusBg","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_toggleStatusBg","t":8,"rt":$n[0].Boolean,"fg":"toggleStatusBg","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_toggleStatusBg","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"toggleStatusBg"},"fn":"toggleStatusBg"},{"a":2,"n":"toggleStatusHaptic","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_toggleStatusHaptic","t":8,"rt":$n[0].Boolean,"fg":"toggleStatusHaptic","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_toggleStatusHaptic","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"toggleStatusHaptic"},"fn":"toggleStatusHaptic"},{"a":2,"n":"toggleStatusSFX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_toggleStatusSFX","t":8,"rt":$n[0].Boolean,"fg":"toggleStatusSFX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_toggleStatusSFX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"toggleStatusSFX"},"fn":"toggleStatusSFX"},{"a":1,"n":"CanToggle","t":4,"rt":$n[0].Boolean,"sn":"CanToggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"HapticToggle","t":4,"rt":Toggle,"sn":"HapticToggle"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"MusicToggle","t":4,"rt":Toggle,"sn":"MusicToggle"},{"a":1,"n":"PosY","t":4,"rt":$n[0].Single,"sn":"PosY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"SFXToggle","t":4,"rt":Toggle,"sn":"SFXToggle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"SettingButton","t":4,"rt":$n[1].Button,"sn":"SettingButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"SettingPanel","t":4,"rt":$n[4].RectTransform,"sn":"SettingPanel"},{"a":1,"n":"Toggle","t":4,"rt":$n[0].Boolean,"sn":"Toggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameSettings,"sn":"Instance"}]}; }, $n);
    /*GameSettings end.*/

    /*ObjectQueueManager start.*/
    $m("ObjectQueueManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DequeueNext","t":8,"sn":"DequeueNext","rt":$n[0].Void},{"a":1,"n":"InitializeQueue","t":8,"sn":"InitializeQueue","rt":$n[0].Void},{"a":1,"n":"MoveToPoint","t":8,"pi":[{"n":"obj","pt":$n[4].GameObject,"ps":0},{"n":"destination","pt":$n[4].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"onComplete","pt":Function,"ps":3}],"sn":"MoveToPoint","rt":$n[3].IEnumerator,"p":[$n[4].GameObject,$n[4].Vector3,$n[0].Single,Function]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":ObjectQueueManager,"sn":"Instance"},{"a":2,"n":"cashCounter","t":4,"rt":ObjectStacker,"sn":"cashCounter"},{"at":[new UnityEngine.TooltipAttribute("Where dequeued objects should move to.")],"a":2,"n":"exitPoint","t":4,"rt":$n[4].Transform,"sn":"exitPoint"},{"at":[new UnityEngine.TooltipAttribute("How many objects to spawn initially.")],"a":2,"n":"initialQueueSize","t":4,"rt":$n[0].Int32,"sn":"initialQueueSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.TooltipAttribute("Time for a dequeued object to reach Exit Point.")],"a":2,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Queue Setup"),new UnityEngine.TooltipAttribute("Prefab used to spawn each queue object.")],"a":2,"n":"objectPrefab","t":4,"rt":$n[4].GameObject,"sn":"objectPrefab"},{"at":[new UnityEngine.HeaderAttribute("Positions"),new UnityEngine.TooltipAttribute("Start of the queue line.")],"a":2,"n":"pointA","t":4,"rt":$n[4].Transform,"sn":"pointA"},{"at":[new UnityEngine.TooltipAttribute("End of the queue line.")],"a":2,"n":"pointB","t":4,"rt":$n[4].Transform,"sn":"pointB"},{"a":1,"n":"queueObjects","t":4,"rt":$n[5].List$1(UnityEngine.GameObject),"sn":"queueObjects"},{"at":[new UnityEngine.TooltipAttribute("Time for the remaining objects to shift forward one step.")],"a":2,"n":"shiftDuration","t":4,"rt":$n[0].Single,"sn":"shiftDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"stepPositions","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"stepPositions"}]}; }, $n);
    /*ObjectQueueManager end.*/

    /*ParticlePool start.*/
    $m("ParticlePool", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.TooltipAttribute("If true the actual Parent and Queue will be avialable to see in Inspector."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Debug","t":4,"rt":$n[0].Boolean,"sn":"Debug","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("If true Pool will be hidden in Hierarchy.")],"a":2,"n":"HideInHierarchy","t":4,"rt":$n[0].Boolean,"sn":"HideInHierarchy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("From this name the Particle will be called.")],"a":2,"n":"ParticleName","t":4,"rt":$n[0].String,"sn":"ParticleName"},{"at":[new UnityEngine.TooltipAttribute("Actual Prefab that will be Instantiated to make a pool.")],"a":2,"n":"ParticlePrefab","t":4,"rt":$n[4].GameObject,"sn":"ParticlePrefab"},{"at":[new UnityEngine.TooltipAttribute("Queue will be instantiated at runtime.")],"a":2,"n":"ParticleQueue","t":4,"rt":$n[5].Queue$1(UnityEngine.GameObject),"sn":"ParticleQueue"},{"at":[new UnityEngine.TooltipAttribute("Parent of Pool will be made at runtime.")],"a":2,"n":"PoolParent","t":4,"rt":$n[4].GameObject,"sn":"PoolParent"},{"at":[new UnityEngine.TooltipAttribute("Size of Pool to make.")],"a":2,"n":"PoolSize","t":4,"rt":$n[0].Int32,"sn":"PoolSize","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ParticlePool end.*/

    /*PoolingManager start.*/
    $m("PoolingManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnemySpawn","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"Pos","pt":$n[4].Vector3,"ps":1},{"n":"rot","pt":$n[4].Quaternion,"ps":2},{"n":"duration","dv":0.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"EnemySpawn","rt":$n[4].GameObject,"p":[ParticlePool,$n[4].Vector3,$n[4].Quaternion,$n[0].Single]},{"a":1,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":1,"n":"MakePool","t":8,"pi":[{"n":"ParentName","pt":$n[0].String,"ps":0},{"n":"Pool","pt":ParticlePool,"ps":1}],"sn":"MakePool","rt":$n[0].Void,"p":[$n[0].String,ParticlePool]},{"a":1,"n":"Obj","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"parent","pt":$n[4].Transform,"ps":1}],"sn":"Obj","rt":$n[4].GameObject,"p":[ParticlePool,$n[4].Transform]},{"a":1,"n":"Play","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"Parent","pt":$n[4].Transform,"ps":1}],"sn":"Play","rt":$n[0].Void,"p":[ParticlePool,$n[4].Transform]},{"a":1,"n":"Play","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"pos","pt":$n[4].Vector3,"ps":1}],"sn":"Play$1","rt":$n[0].Void,"p":[ParticlePool,$n[4].Vector3]},{"a":1,"n":"Play","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"Pos","pt":$n[4].Vector3,"ps":1},{"n":"parent","pt":$n[4].Transform,"ps":2}],"sn":"Play$3","rt":$n[4].GameObject,"p":[ParticlePool,$n[4].Vector3,$n[4].Transform]},{"a":1,"n":"Play","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"pos","pt":$n[4].Vector3,"ps":1},{"n":"dequeDuration","pt":$n[0].Single,"ps":2},{"n":"Parent","dv":null,"o":true,"pt":$n[4].Transform,"ps":3}],"sn":"Play$2","rt":$n[4].GameObject,"p":[ParticlePool,$n[4].Vector3,$n[0].Single,$n[4].Transform]},{"a":2,"n":"PlayParticle","t":8,"pi":[{"n":"ParticleName","pt":$n[0].String,"ps":0},{"n":"Parent","pt":$n[4].Transform,"ps":1}],"sn":"PlayParticle","rt":$n[0].Void,"p":[$n[0].String,$n[4].Transform]},{"a":2,"n":"PlayParticle","t":8,"pi":[{"n":"ParticleName","pt":$n[0].String,"ps":0},{"n":"pos","pt":$n[4].Vector3,"ps":1}],"sn":"PlayParticle$1","rt":$n[0].Void,"p":[$n[0].String,$n[4].Vector3]},{"a":2,"n":"PlayParticle","t":8,"pi":[{"n":"ParticleName","pt":$n[0].String,"ps":0},{"n":"Pos","pt":$n[4].Vector3,"ps":1},{"n":"parent","pt":$n[4].Transform,"ps":2}],"sn":"PlayParticle$3","rt":$n[4].GameObject,"p":[$n[0].String,$n[4].Vector3,$n[4].Transform]},{"a":2,"n":"PlayParticle","t":8,"pi":[{"n":"ParticleName","pt":$n[0].String,"ps":0},{"n":"pos","pt":$n[4].Vector3,"ps":1},{"n":"dequeDuration","pt":$n[0].Single,"ps":2},{"n":"Parent","dv":null,"o":true,"pt":$n[4].Transform,"ps":3}],"sn":"PlayParticle$2","rt":$n[4].GameObject,"p":[$n[0].String,$n[4].Vector3,$n[0].Single,$n[4].Transform]},{"a":1,"n":"PutBackInQueue","t":8,"pi":[{"n":"Pool","pt":ParticlePool,"ps":0},{"n":"Particle","pt":$n[4].GameObject,"ps":1},{"n":"Duration","pt":$n[0].Single,"ps":2}],"sn":"PutBackInQueue","rt":$n[3].IEnumerator,"p":[ParticlePool,$n[4].GameObject,$n[0].Single]},{"a":2,"n":"PutObjBackInQueue","t":8,"pi":[{"n":"poolName","pt":$n[0].String,"ps":0},{"n":"obj","pt":$n[4].GameObject,"ps":1}],"sn":"PutObjBackInQueue","rt":$n[0].Void,"p":[$n[0].String,$n[4].GameObject]},{"a":2,"n":"SpawnObject","t":8,"pi":[{"n":"enemyName","pt":$n[0].String,"ps":0},{"n":"parent","pt":$n[4].Transform,"ps":1}],"sn":"SpawnObject","rt":$n[4].GameObject,"p":[$n[0].String,$n[4].Transform]},{"a":2,"n":"SpawnObject","t":8,"pi":[{"n":"enemyName","pt":$n[0].String,"ps":0},{"n":"Pos","pt":$n[4].Vector3,"ps":1},{"n":"rot","pt":$n[4].Quaternion,"ps":2},{"n":"duration","dv":0.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"SpawnObject$1","rt":$n[4].GameObject,"p":[$n[0].String,$n[4].Vector3,$n[4].Quaternion,$n[0].Single]},{"a":1,"n":"Startt","t":8,"sn":"Startt","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":PoolingManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":PoolingManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[PoolingManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Pools","t":4,"rt":$n[5].List$1(ParticlePool),"sn":"Pools"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":PoolingManager,"sn":"Instance"}]}; }, $n);
    /*PoolingManager end.*/

    /*Billboard start.*/
    $m("Billboard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"mainCam","t":4,"rt":$n[4].Camera,"sn":"mainCam"}]}; }, $n);
    /*Billboard end.*/

    /*Npc start.*/
    $m("Npc", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[4].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[4].Collider]},{"a":2,"n":"StartWalk","t":8,"sn":"StartWalk","rt":$n[0].Void},{"a":2,"n":"StopWalk","t":8,"sn":"StopWalk","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"fillImage","t":4,"rt":$n[1].Image,"sn":"fillImage"},{"a":1,"n":"giverStack","t":4,"rt":StackingPlace,"sn":"giverStack"},{"a":2,"n":"myAnim","t":4,"rt":$n[4].Animator,"sn":"myAnim"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"myStackingPlace","t":4,"rt":StackingPlace,"sn":"myStackingPlace"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"once","t":4,"rt":$n[0].Boolean,"sn":"once","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"popUp","t":4,"rt":$n[4].GameObject,"sn":"popUp"},{"a":2,"n":"requiredMeat","t":4,"rt":$n[1].Text,"sn":"requiredMeat"}]}; }, $n);
    /*Npc end.*/

    /*AnimatorController start.*/
    $m("AnimatorController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Die","t":8,"sn":"Die","rt":$n[0].Void},{"a":2,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"dynamicJoystick","t":4,"rt":FloatingJoystick,"sn":"dynamicJoystick"},{"a":1,"n":"once","t":4,"rt":$n[0].Boolean,"sn":"once","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"playerAnim","t":4,"rt":$n[4].Animator,"sn":"playerAnim"},{"a":1,"n":"velocityHash","t":4,"rt":$n[0].Int32,"sn":"velocityHash","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*AnimatorController end.*/

    /*Bullet start.*/
    $m("Bullet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HitTarget","t":8,"sn":"HitTarget","rt":$n[0].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"target","pt":$n[4].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[4].Transform]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"target","t":4,"rt":$n[4].Transform,"sn":"target"}]}; }, $n);
    /*Bullet end.*/

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"m_refPos","t":4,"rt":$n[4].Vector3,"sn":"m_refPos"},{"a":2,"n":"offsetX","t":4,"rt":$n[0].Single,"sn":"offsetX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"offsetZ","t":4,"rt":$n[0].Single,"sn":"offsetZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"player","t":4,"rt":$n[4].Transform,"sn":"player"}]}; }, $n);
    /*CameraFollow end.*/

    /*PlayerAttack start.*/
    $m("PlayerAttack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetClosest","t":8,"pi":[{"n":"list","pt":$n[5].List$1(UnityEngine.Transform),"ps":0}],"sn":"GetClosest","rt":$n[4].Transform,"p":[$n[5].List$1(UnityEngine.Transform)]},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":1,"n":"PerformArcAttack","t":8,"pi":[{"n":"enemies","pt":$n[5].List$1(UnityEngine.Transform),"ps":0}],"sn":"PerformArcAttack","rt":$n[0].Void,"p":[$n[5].List$1(UnityEngine.Transform)]},{"a":1,"n":"RotatePlayerModel","t":8,"sn":"RotatePlayerModel","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.TooltipAttribute("The Animator that has your swing animation trigger.")],"a":2,"n":"animatorController","t":4,"rt":$n[4].Animator,"sn":"animatorController"},{"at":[new UnityEngine.TooltipAttribute("Degrees of the swing cone (e.g. 360, 180, 90)."),new UnityEngine.RangeAttribute(0.0, 360.0)],"a":2,"n":"attackArcAngle","t":4,"rt":$n[0].Single,"sn":"attackArcAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Arc Attack"),new UnityEngine.TooltipAttribute("Radius of your melee swing.")],"a":2,"n":"attackArcRange","t":4,"rt":$n[0].Single,"sn":"attackArcRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Damage dealt per swing.")],"a":2,"n":"attackDamage","t":4,"rt":$n[0].Single,"sn":"attackDamage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"attackVfx","t":4,"rt":$n[4].ParticleSystem,"sn":"attackVfx"},{"a":1,"n":"currentTarget","t":4,"rt":$n[4].Transform,"sn":"currentTarget"},{"at":[new UnityEngine.HeaderAttribute("Detection"),new UnityEngine.TooltipAttribute("How far the player can \u2018see\u2019 enemies.")],"a":2,"n":"detectionRadius","t":4,"rt":$n[0].Single,"sn":"detectionRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"enemyMask","t":4,"rt":$n[0].Int32,"sn":"enemyMask","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.TooltipAttribute("Seconds between swings.")],"a":2,"n":"fireRate","t":4,"rt":$n[0].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isEnemyInRange","t":4,"rt":$n[0].Boolean,"sn":"isEnemyInRange","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Knockback"),new UnityEngine.TooltipAttribute("How far to push enemies back.")],"a":2,"n":"knockbackDistance","t":4,"rt":$n[0].Single,"sn":"knockbackDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How long the knockback tween lasts.")],"a":2,"n":"knockbackDuration","t":4,"rt":$n[0].Single,"sn":"knockbackDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextFireTime","t":4,"rt":$n[0].Single,"sn":"nextFireTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("What actually turns to face the target.")],"a":2,"n":"playerModel","t":4,"rt":$n[4].Transform,"sn":"playerModel"}]}; }, $n);
    /*PlayerAttack end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DownloadNow","t":8,"sn":"DownloadNow","rt":$n[0].Void},{"a":1,"n":"FailSequence","t":8,"sn":"FailSequence","rt":$n[3].IEnumerator},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"GatherInput","t":8,"sn":"GatherInput","rt":$n[0].Void},{"a":2,"n":"IsDead","t":8,"sn":"IsDead","rt":$n[0].Void},{"a":1,"n":"Look","t":8,"sn":"Look","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[4].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[4].Collider]},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_input","t":4,"rt":$n[4].Vector3,"sn":"_input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playerModel","t":4,"rt":$n[4].Transform,"sn":"_playerModel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rb","t":4,"rt":$n[4].Rigidbody,"sn":"_rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_turnSpeed","t":4,"rt":$n[0].Single,"sn":"_turnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"canMove","t":4,"rt":$n[0].Boolean,"sn":"canMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"cashStacker","t":4,"rt":ObjectStacker,"sn":"cashStacker"},{"a":2,"n":"deceleration","t":4,"rt":$n[0].Single,"sn":"deceleration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dynamicJoystick","t":4,"rt":FloatingJoystick,"sn":"dynamicJoystick"},{"a":2,"n":"failScreen","t":4,"rt":$n[4].GameObject,"sn":"failScreen"},{"a":2,"n":"inputValue","t":4,"rt":$n[0].Single,"sn":"inputValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isDie","t":4,"rt":$n[0].Boolean,"sn":"isDie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"meatStacker","t":4,"rt":ObjectStacker,"sn":"meatStacker"}]}; }, $n);
    /*PlayerController end.*/

    /*Helpers start.*/
    $m("Helpers", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ToIso","is":true,"t":8,"pi":[{"n":"input","pt":$n[4].Vector3,"ps":0}],"sn":"ToIso","rt":$n[4].Vector3,"p":[$n[4].Vector3]},{"a":1,"n":"_isoMatrix","is":true,"t":4,"rt":$n[4].Matrix4x4,"sn":"_isoMatrix"}]}; }, $n);
    /*Helpers end.*/

    /*CuustomerZone start.*/
    $m("CuustomerZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"other","pt":$n[4].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[4].Collision]},{"a":2,"n":"objectQueueManager","t":4,"rt":ObjectQueueManager,"sn":"objectQueueManager"}]}; }, $n);
    /*CuustomerZone end.*/

    /*ObjectStacker start.*/
    $m("ObjectStacker", function () { return {"nested":[ObjectStacker.StackMode],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateOffset","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CalculateOffset","rt":$n[4].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetItemsInStack","t":8,"pi":[{"n":"items","ip":true,"pt":System.Array.type(UnityEngine.GameObject),"ps":0}],"sn":"GetItemsInStack","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.GameObject)]},{"a":2,"n":"GetItemsOutOfStack","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetItemsOutOfStack","rt":$n[5].List$1(UnityEngine.GameObject),"p":[$n[0].Int32]},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"PushItemWithTween","t":8,"pi":[{"n":"item","pt":$n[4].GameObject,"ps":0}],"sn":"PushItemWithTween","rt":$n[0].Void,"p":[$n[4].GameObject]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateAllItemPositions","t":8,"pi":[{"n":"instant","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"UpdateAllItemPositions","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ItemCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_ItemCount","t":8,"rt":$n[0].Int32,"fg":"ItemCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ItemCount"},{"at":[new UnityEngine.TooltipAttribute("For grid mode: horizontal spacing between items (X,Z).")],"a":2,"n":"gridCellSize","t":4,"rt":$n[4].Vector3,"sn":"gridCellSize"},{"at":[new UnityEngine.TooltipAttribute("For grid mode: number of columns (X) and rows (Z) per layer.")],"a":2,"n":"gridColumns","t":4,"rt":$n[0].Int32,"sn":"gridColumns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"gridRows","t":4,"rt":$n[0].Int32,"sn":"gridRows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isCashUtilizer","t":4,"rt":$n[0].Boolean,"sn":"isCashUtilizer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPlayer","t":4,"rt":$n[0].Boolean,"sn":"isPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"itemStack","t":4,"rt":$n[5].Stack$1(UnityEngine.GameObject),"sn":"itemStack"},{"at":[new UnityEngine.HeaderAttribute("Stack Settings")],"a":2,"n":"itemType","t":4,"rt":ItemType,"sn":"itemType","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}},{"at":[new UnityEngine.TooltipAttribute("For grid mode: vertical offset between layers.")],"a":2,"n":"layerOffset","t":4,"rt":$n[4].Vector3,"sn":"layerOffset"},{"at":[new UnityEngine.TooltipAttribute("Duration of the move to final position animation.")],"a":2,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"offsetIndex","t":4,"rt":$n[0].Int32,"sn":"offsetIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Transform that marks the origin point for stacking.")],"a":2,"n":"origin","t":4,"rt":$n[4].Transform,"sn":"origin"},{"at":[new UnityEngine.TooltipAttribute("Random range on X and Z axes during the toss.")],"a":2,"n":"randomXZRange","t":4,"rt":$n[0].Single,"sn":"randomXZRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Max random rotation in degrees during the toss.")],"a":2,"n":"rotationMagnitude","t":4,"rt":$n[0].Single,"sn":"rotationMagnitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Choose whether to stack vertically or in a grid.")],"a":2,"n":"stackMode","t":4,"rt":ObjectStacker.StackMode,"sn":"stackMode","box":function ($v) { return Bridge.box($v, ObjectStacker.StackMode, System.Enum.toStringFn(ObjectStacker.StackMode));}},{"at":[new UnityEngine.HeaderAttribute("Tween Settings"),new UnityEngine.TooltipAttribute("Height to throw the item up during animation.")],"a":2,"n":"throwUpHeight","t":4,"rt":$n[0].Single,"sn":"throwUpHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Duration of the throw-up animation.")],"a":2,"n":"upDuration","t":4,"rt":$n[0].Single,"sn":"upDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("For vertical mode: Y offset between stacked items.")],"a":2,"n":"verticalOffset","t":4,"rt":$n[4].Vector3,"sn":"verticalOffset"}]}; }, $n);
    /*ObjectStacker end.*/

    /*ObjectStacker+StackMode start.*/
    $m("ObjectStacker.StackMode", function () { return {"td":ObjectStacker,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Grid","is":true,"t":4,"rt":ObjectStacker.StackMode,"sn":"Grid","box":function ($v) { return Bridge.box($v, ObjectStacker.StackMode, System.Enum.toStringFn(ObjectStacker.StackMode));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":ObjectStacker.StackMode,"sn":"Vertical","box":function ($v) { return Bridge.box($v, ObjectStacker.StackMode, System.Enum.toStringFn(ObjectStacker.StackMode));}}]}; }, $n);
    /*ObjectStacker+StackMode end.*/

    /*StackingPlace start.*/
    $m("StackingPlace", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AutoTransferLoop","t":8,"pi":[{"n":"giver","pt":ObjectStacker,"ps":0}],"sn":"AutoTransferLoop","rt":$n[3].IEnumerator,"p":[ObjectStacker]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"other","pt":$n[4].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[4].Collision]},{"a":1,"n":"OnCollisionExit","t":8,"pi":[{"n":"other","pt":$n[4].Collision,"ps":0}],"sn":"OnCollisionExit","rt":$n[0].Void,"p":[$n[4].Collision]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartAutoRoutine","t":8,"sn":"StartAutoRoutine","rt":$n[0].Void},{"a":2,"n":"StopSequence","t":8,"sn":"StopSequence","rt":$n[0].Void},{"a":1,"n":"TransferItems","t":8,"pi":[{"n":"giver","pt":ObjectStacker,"ps":0}],"sn":"TransferItems","rt":$n[3].IEnumerator,"p":[ObjectStacker]},{"at":[new UnityEngine.HeaderAttribute("Collision Transfer"),new UnityEngine.TooltipAttribute("Type of item this taker accepts.")],"a":2,"n":"acceptedType","t":4,"rt":ItemType,"sn":"acceptedType","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}},{"at":[new UnityEngine.TooltipAttribute("Reference to the giver ObjectStacker for auto mode.")],"a":2,"n":"autoGiverStacker","t":4,"rt":ObjectStacker,"sn":"autoGiverStacker"},{"at":[new UnityEngine.HeaderAttribute("Auto Transfer"),new UnityEngine.TooltipAttribute("Enable automatic transfer from a given giver.")],"a":2,"n":"autoStack","t":4,"rt":$n[0].Boolean,"sn":"autoStack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"giver","t":4,"rt":ObjectStacker,"sn":"giver"},{"a":2,"n":"initialDelay","t":4,"rt":$n[0].Single,"sn":"initialDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isGiver","t":4,"rt":$n[0].Boolean,"sn":"isGiver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"objectsRequired","t":4,"rt":$n[0].Int32,"sn":"objectsRequired","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"takerStacker","t":4,"rt":ObjectStacker,"sn":"takerStacker"},{"at":[new UnityEngine.TooltipAttribute("Delay in seconds between each transfer.")],"a":2,"n":"transferInterval","t":4,"rt":$n[0].Single,"sn":"transferInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"transferRoutine","t":4,"rt":$n[4].Coroutine,"sn":"transferRoutine"}]}; }, $n);
    /*StackingPlace end.*/

    /*StackItem start.*/
    $m("StackItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"itemType","t":4,"rt":ItemType,"sn":"itemType","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}}]}; }, $n);
    /*StackItem end.*/

    /*ItemType start.*/
    $m("ItemType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Any","is":true,"t":4,"rt":ItemType,"sn":"Any","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}},{"a":2,"n":"Cash","is":true,"t":4,"rt":ItemType,"sn":"Cash","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}},{"a":2,"n":"Meat","is":true,"t":4,"rt":ItemType,"sn":"Meat","box":function ($v) { return Bridge.box($v, ItemType, System.Enum.toStringFn(ItemType));}}]}; }, $n);
    /*ItemType end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[4].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[1].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[1].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[4].Vector2,"ps":1},{"n":"radius","pt":$n[4].Vector2,"ps":2},{"n":"cam","pt":$n[4].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[4].Vector2,$n[4].Vector2,$n[4].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[4].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[4].Vector2,"p":[$n[4].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[4].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[4].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[4].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[4].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[4].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[4].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handle","t":4,"rt":$n[4].RectTransform,"sn":"handle$1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[4].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[4].Vector2,"ps":1},{"n":"radius","pt":$n[4].Vector2,"ps":2},{"n":"cam","pt":$n[4].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[4].Vector2,$n[4].Vector2,$n[4].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[4].Vector2,"ps":1},{"n":"radius","pt":$n[4].Vector2,"ps":2},{"n":"cam","pt":$n[4].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[4].Vector2,$n[4].Vector2,$n[4].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[6].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[6].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[4].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.Currency start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.Currency", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCurrency","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"AddCurrency","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"RemoveCurrency","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"RemoveCurrency","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"SaveCurrency","t":8,"sn":"SaveCurrency","rt":$n[0].Void},{"a":2,"n":"SetInitialValues","t":8,"sn":"SetInitialValues","rt":$n[0].Void},{"a":2,"n":"CurrencyName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_CurrencyName","t":8,"rt":$n[0].String,"fg":"CurrencyName"},"fn":"CurrencyName"},{"a":2,"n":"TotalCurrency","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_TotalCurrency","t":8,"rt":$n[0].Int32,"fg":"TotalCurrency","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_TotalCurrency","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"TotalCurrency"},"fn":"TotalCurrency"},{"a":1,"n":"CoinSavePrefs","t":4,"rt":$n[0].String,"sn":"CoinSavePrefs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currencyName","t":4,"rt":$n[0].String,"sn":"currencyName"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalCurrency","t":4,"rt":$n[0].Int32,"sn":"totalCurrency","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.Currency end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlusCurrencyValue","t":8,"pi":[{"n":"currencyName","pt":$n[0].String,"ps":0},{"n":"valueToSave","pt":$n[0].Int32,"ps":1}],"sn":"PlusCurrencyValue","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32]},{"a":1,"n":"SetAllCurrenciesInitialValues","t":8,"sn":"SetAllCurrenciesInitialValues","rt":$n[0].Void},{"a":2,"n":"SubtractCurrencyValue","t":8,"pi":[{"n":"currencyName","pt":$n[0].String,"ps":0},{"n":"valueToSave","pt":$n[0].Int32,"ps":1}],"sn":"SubtractCurrencyValue","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32]},{"a":2,"n":"TotalCurrencyFor","t":8,"pi":[{"n":"currencyName","pt":$n[0].String,"ps":0}],"sn":"TotalCurrencyFor","rt":$n[0].Int32,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[7].CurrencyManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[7].CurrencyManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[7].CurrencyManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"GpCurrency","t":4,"rt":$n[1].Text,"sn":"GpCurrency"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currencies","t":4,"rt":$n[5].List$1(GameAssets.GameSet.GameDevUtils.Managers.Currency),"sn":"currencies"},{"a":2,"n":"lcCurrency","t":4,"rt":$n[1].Text,"sn":"lcCurrency"},{"a":2,"n":"meat","t":4,"rt":$n[1].Text,"sn":"meat"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[7].CurrencyManager,"sn":"Instance"}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.OnGameStateChangedEvent end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameState start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fail","is":true,"t":4,"rt":$n[7].GameState,"sn":"Fail","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"FinalMomentum","is":true,"t":4,"rt":$n[7].GameState,"sn":"FinalMomentum","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"Gameplay","is":true,"t":4,"rt":$n[7].GameState,"sn":"Gameplay","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"Inventory","is":true,"t":4,"rt":$n[7].GameState,"sn":"Inventory","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"MainMenu","is":true,"t":4,"rt":$n[7].GameState,"sn":"MainMenu","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"Pause","is":true,"t":4,"rt":$n[7].GameState,"sn":"Pause","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"SelectionScreen","is":true,"t":4,"rt":$n[7].GameState,"sn":"SelectionScreen","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"StartScreen","is":true,"t":4,"rt":$n[7].GameState,"sn":"StartScreen","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"Win","is":true,"t":4,"rt":$n[7].GameState,"sn":"Win","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.GameState end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameManager start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.GameManager", function () { return {"nested":[Function,Function,Function,Function,Function,Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CameraStart","t":8,"sn":"CameraStart","rt":$n[0].Void},{"a":2,"n":"ChangeGameState","t":8,"pi":[{"n":"state","pt":$n[7].GameState,"ps":0}],"sn":"ChangeGameState","rt":$n[0].Void,"p":[$n[7].GameState]},{"a":1,"n":"LoadLevelAtStart","t":8,"sn":"LoadLevelAtStart","rt":$n[0].Void},{"a":1,"n":"NextUnlockLevel","t":8,"sn":"NextUnlockLevel","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnGameStateChanged","t":8,"pi":[{"n":"state","pt":$n[7].GameState,"ps":0}],"sn":"OnGameStateChanged","rt":$n[0].Void,"p":[$n[7].GameState]},{"a":2,"n":"PlayBtn","t":8,"sn":"PlayBtn","rt":$n[0].Void},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[0].Void},{"a":2,"n":"RestartFail","t":8,"sn":"RestartFail","rt":$n[0].Void},{"a":1,"n":"SpawnPlayerAndCamera","t":8,"sn":"SpawnPlayerAndCamera","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TabToContinue","t":8,"sn":"TabToContinue","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"GameCurrentState","t":16,"rt":$n[7].GameState,"g":{"a":2,"n":"get_GameCurrentState","t":8,"rt":$n[7].GameState,"fg":"GameCurrentState","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},"s":{"a":1,"n":"set_GameCurrentState","t":8,"p":[$n[7].GameState],"rt":$n[0].Void,"fs":"GameCurrentState"},"fn":"GameCurrentState"},{"a":2,"n":"InfinityCurrentLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_InfinityCurrentLevel","t":8,"rt":$n[0].Int32,"fg":"InfinityCurrentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"InfinityCurrentLevel"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[7].GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[7].GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[7].GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"IsLevelCompleteNotInvoke","t":4,"rt":$n[0].Boolean,"sn":"IsLevelCompleteNotInvoke","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"beforeLevelCompleteDelay","t":4,"rt":$n[0].Single,"sn":"beforeLevelCompleteDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"beforeLevelFailDelay","t":4,"rt":$n[0].Single,"sn":"beforeLevelFailDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameCurrentState","t":4,"rt":$n[7].GameState,"sn":"gameCurrentState","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}},{"a":2,"n":"levelManager","t":4,"rt":$n[7].LevelManager,"sn":"levelManager"},{"a":1,"n":"onGameStateChangedEvent","is":true,"t":4,"rt":$n[7].OnGameStateChangedEvent,"sn":"onGameStateChangedEvent"},{"a":2,"n":"player","t":4,"rt":$n[4].GameObject,"sn":"player"},{"a":2,"n":"playerCam","t":4,"rt":$n[4].Camera,"sn":"playerCam"},{"a":2,"n":"playerPosition","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"playerPosition"},{"a":2,"n":"uiManager","t":4,"rt":$n[7].UIManager,"sn":"uiManager"},{"a":2,"n":"onCompleteEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onCompleteEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonCompleteEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onCompleteEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonCompleteEvent","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"onFailedEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onFailedEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonFailedEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onFailedEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonFailedEvent","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"onFinalMomentumEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onFinalMomentumEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonFinalMomentumEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onFinalMomentumEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonFinalMomentumEvent","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"onGamePlayEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onGamePlayEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonGamePlayEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onGamePlayEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonGamePlayEvent","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"onMainMenuEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onMainMenuEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonMainMenuEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onMainMenuEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonMainMenuEvent","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"onPauseEvent","is":true,"t":2,"ad":{"a":2,"n":"add_onPauseEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonPauseEvent","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_onPauseEvent","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonPauseEvent","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[7].GameManager,"sn":"Instance"}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.GameManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.LevelManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CurrentPlayLevelNumber","t":8,"sn":"CurrentPlayLevelNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"InfinityCurrentLevelNumber","t":8,"sn":"InfinityCurrentLevelNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LoadLevelAtStart","t":8,"sn":"LoadLevelAtStart","rt":$n[0].Void},{"a":2,"n":"NextUnlockLevel","t":8,"sn":"NextUnlockLevel","rt":$n[0].Void},{"a":1,"n":"Level_Pref","t":4,"rt":$n[0].String,"sn":"Level_Pref","ro":true},{"a":1,"n":"PlayLevel_Pref","t":4,"rt":$n[0].String,"sn":"PlayLevel_Pref","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"allLevels","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"allLevels"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentLevelNumber","t":4,"rt":$n[0].Int32,"sn":"currentLevelNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isTesting","t":4,"rt":$n[0].Boolean,"sn":"isTesting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.LevelManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.SoundManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayButtonSound","t":8,"sn":"PlayButtonSound","rt":$n[0].Void},{"a":2,"n":"PlayOneShot","t":8,"pi":[{"n":"clip","pt":$n[4].AudioClip,"ps":0},{"n":"volume","pt":$n[0].Single,"ps":1}],"sn":"PlayOneShot","rt":$n[0].Void,"p":[$n[4].AudioClip,$n[0].Single]},{"a":2,"n":"PlayOneShotPop","t":8,"sn":"PlayOneShotPop","rt":$n[0].Void},{"a":2,"n":"PlayWalk","t":8,"sn":"PlayWalk","rt":$n[0].Void},{"a":2,"n":"PlayWalkStop","t":8,"sn":"PlayWalkStop","rt":$n[0].Void},{"a":2,"n":"SetBgSoundSetting","t":8,"pi":[{"n":"toggle","pt":$n[0].Boolean,"ps":0}],"sn":"SetBgSoundSetting","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetSfxSoundSetting","t":8,"pi":[{"n":"toggle","pt":$n[0].Boolean,"ps":0}],"sn":"SetSfxSoundSetting","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[7].SoundManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[7].SoundManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[7].SoundManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"attackClip","t":4,"rt":$n[4].AudioClip,"sn":"attackClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bgAmbienceSoundSource","t":4,"rt":$n[4].AudioSource,"sn":"bgAmbienceSoundSource"},{"a":2,"n":"bgClip","t":4,"rt":$n[4].AudioClip,"sn":"bgClip"},{"a":2,"n":"bgSoundSource","t":4,"rt":$n[4].AudioSource,"sn":"bgSoundSource"},{"a":2,"n":"buildClip","t":4,"rt":$n[4].AudioClip,"sn":"buildClip"},{"a":2,"n":"buttonClip","t":4,"rt":$n[4].AudioClip,"sn":"buttonClip"},{"a":2,"n":"deathClip","t":4,"rt":$n[4].AudioClip,"sn":"deathClip"},{"a":2,"n":"loseClip","t":4,"rt":$n[4].AudioClip,"sn":"loseClip"},{"a":1,"n":"popIndex","t":4,"rt":$n[0].Int32,"sn":"popIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pops","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"pops"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sFXSoundSource","t":4,"rt":$n[4].AudioSource,"sn":"sFXSoundSource"},{"a":2,"n":"walkClip","t":4,"rt":$n[4].AudioClip,"sn":"walkClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"walkSoundSource","t":4,"rt":$n[4].AudioSource,"sn":"walkSoundSource"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[7].SoundManager,"sn":"Instance"}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.SoundManager end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"panel","t":4,"rt":$n[4].GameObject,"sn":"panel"},{"a":2,"n":"stateType","t":4,"rt":$n[7].GameState,"sn":"stateType","box":function ($v) { return Bridge.box($v, GameAssets.GameSet.GameDevUtils.Managers.GameState, System.Enum.toStringFn(GameAssets.GameSet.GameDevUtils.Managers.GameState));}}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens end.*/

    /*GameAssets.GameSet.GameDevUtils.Managers.UIManager start.*/
    $m("GameAssets.GameSet.GameDevUtils.Managers.UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EnableScreenWithDelay","t":8,"pi":[{"n":"gameState","pt":$n[7].GameState,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"EnableScreenWithDelay","rt":$n[3].IEnumerator,"p":[$n[7].GameState,$n[0].Single]},{"a":2,"n":"EnableUIScreen","t":8,"pi":[{"n":"state","pt":$n[7].GameState,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"EnableUIScreen","rt":$n[0].Void,"p":[$n[7].GameState,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameStateScreens","t":4,"rt":System.Array.type(GameAssets.GameSet.GameDevUtils.Managers.GameStateScreens),"sn":"gameStateScreens"}]}; }, $n);
    /*GameAssets.GameSet.GameDevUtils.Managers.UIManager end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[8].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[8].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[4].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[10].Sequence,"p":[$n[4].Rigidbody,$n[4].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody,$n[11].Path,$n[0].Single,$n[10].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[10].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[10].PathType,$n[10].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"towards","pt":$n[4].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[10].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[9].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[4].Rigidbody,$n[4].Vector3,$n[0].Single,$n[10].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[4].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody,$n[4].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody,$n[11].Path,$n[0].Single,$n[10].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[10].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[10].PathType,$n[10].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"endValue","pt":$n[4].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[10].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[9].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[4].Rigidbody,$n[4].Vector3,$n[0].Single,$n[10].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[10].Sequence,"p":[$n[4].Rigidbody2D,$n[4].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody2D,$n[11].Path,$n[0].Single,$n[10].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[10].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[10].PathType,$n[10].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody2D,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody2D,$n[11].Path,$n[0].Single,$n[10].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[10].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[10].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[10].PathType,$n[10].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[10].Tweener,"p":[$n[4].SpriteRenderer,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].SpriteRenderer,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[10].Sequence,"p":[$n[4].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[10].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[10].Tweener,"p":[$n[1].Graphic,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[10].Tweener,"p":[$n[1].Image,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[10].Tweener,"p":[$n[1].Text,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[4].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[4].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[12].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[9].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[1].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[12].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[10].Sequence,"p":[$n[1].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[10].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[10].Sequence,"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[10].Tweener,"p":[$n[1].ScrollRect,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"punch","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[10].Tweener,"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Outline,$n[4].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[10].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[10].Tweener,"p":[$n[4].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[10].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[4].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[10].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[10].Tweener,"p":[$n[4].RectTransform,$n[0].Single,$n[4].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[10].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"center","pt":$n[4].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].RectTransform,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].RectTransform,$n[4].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[10].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[9].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[1].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[10].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[10].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[10].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[4].RectTransform,"ps":0},{"n":"to","pt":$n[4].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[4].Vector2,"p":[$n[4].RectTransform,$n[4].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[10].Sequence,"p":[$n[4].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[10].Sequence,"p":[$n[4].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Material,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Material,$n[4].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Material,"ps":0},{"n":"endValue","pt":$n[4].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Material,$n[4].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[10].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[4].CustomYieldInstruction,"p":[$n[10].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[10].DOTweenCYInstruction.WaitForCompletion,$n[10].DOTweenCYInstruction.WaitForRewind,$n[10].DOTweenCYInstruction.WaitForKill,$n[10].DOTweenCYInstruction.WaitForElapsedLoops,$n[10].DOTweenCYInstruction.WaitForPosition,$n[10].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[10].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].Tween],"pi":[{"n":"tween","pt":$n[10].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[10].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[10].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[10].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[11].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[10].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[4].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[11].Path,$n[0].Single,$n[10].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[4].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[4].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[13].PathOptions,"ps":0},{"n":"t","pt":$n[10].Tween,"ps":1},{"n":"newRot","pt":$n[4].Quaternion,"ps":2},{"n":"trans","pt":$n[4].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[13].PathOptions,$n[10].Tween,$n[4].Quaternion,$n[4].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[10].DOTweenAnimation.AnimationType,$n[10].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[10].Tween},{"a":2,"n":"CreateTween","t":8,"pi":[{"n":"regenerateIfExists","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"andPlay","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateTween","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"a":2,"n":"DOKillAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOKillById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[10].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[10].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[4].GameObject},{"a":1,"n":"GetTweenTarget","t":8,"sn":"GetTweenTarget","rt":$n[4].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[5].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":2,"n":"RecreateTween","t":8,"sn":"RecreateTween","rt":$n[0].Void},{"a":2,"n":"RecreateTweenAndPlay","t":8,"sn":"RecreateTweenAndPlay","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTween","t":8,"sn":"RewindThenRecreateTween","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTweenAndPlay","t":8,"sn":"RewindThenRecreateTweenAndPlay","rt":$n[0].Void},{"a":2,"n":"SetAnimationTarget","t":8,"pi":[{"n":"tweenTarget","pt":$n[4].Component,"ps":0},{"n":"useTweenTargetGameObjectForGroupOperations","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetAnimationTarget","rt":$n[0].Void,"p":[$n[4].Component,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[10].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenAutoGenerationCalled","t":4,"rt":$n[0].Boolean,"sn":"_tweenAutoGenerationCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoGenerate","t":4,"rt":$n[0].Boolean,"sn":"autoGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[10].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[4].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[4].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[4].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[4].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[4].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[10].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalBool1","t":4,"rt":$n[0].Boolean,"sn":"optionalBool1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[10].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[10].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalShakeRandomnessMode","t":4,"rt":$n[10].ShakeRandomnessMode,"sn":"optionalShakeRandomnessMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ShakeRandomnessMode, System.Enum.toStringFn(DG.Tweening.ShakeRandomnessMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[4].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[4].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[10].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[10].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[10].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[10].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[4].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Rigidbody,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[10].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[10].Tweener,"p":[$n[4].Rigidbody,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[10].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[10].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral$1","rt":$n[10].Tweener,"p":[$n[4].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[10].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    }});

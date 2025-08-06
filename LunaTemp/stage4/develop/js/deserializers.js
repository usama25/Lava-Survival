var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointSpring' )
  var i685 = data
  i684.spring = i685[0]
  i684.damper = i685[1]
  i684.targetPosition = i685[2]
  return i684
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointMotor' )
  var i687 = data
  i686.m_TargetVelocity = i687[0]
  i686.m_Force = i687[1]
  i686.m_FreeSpin = i687[2]
  return i686
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointLimits' )
  var i689 = data
  i688.m_Min = i689[0]
  i688.m_Max = i689[1]
  i688.m_Bounciness = i689[2]
  i688.m_BounceMinVelocity = i689[3]
  i688.m_ContactDistance = i689[4]
  i688.minBounce = i689[5]
  i688.maxBounce = i689[6]
  return i688
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointDrive' )
  var i691 = data
  i690.m_PositionSpring = i691[0]
  i690.m_PositionDamper = i691[1]
  i690.m_MaximumForce = i691[2]
  i690.m_UseAcceleration = i691[3]
  return i690
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i693 = data
  i692.m_Spring = i693[0]
  i692.m_Damper = i693[1]
  return i692
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i695 = data
  i694.m_Limit = i695[0]
  i694.m_Bounciness = i695[1]
  i694.m_ContactDistance = i695[2]
  return i694
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i697 = data
  i696.m_ExtremumSlip = i697[0]
  i696.m_ExtremumValue = i697[1]
  i696.m_AsymptoteSlip = i697[2]
  i696.m_AsymptoteValue = i697[3]
  i696.m_Stiffness = i697[4]
  return i696
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i699 = data
  i698.m_LowerAngle = i699[0]
  i698.m_UpperAngle = i699[1]
  return i698
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i701 = data
  i700.m_MotorSpeed = i701[0]
  i700.m_MaximumMotorTorque = i701[1]
  return i700
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i703 = data
  i702.m_DampingRatio = i703[0]
  i702.m_Frequency = i703[1]
  i702.m_Angle = i703[2]
  return i702
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i705 = data
  i704.m_LowerTranslation = i705[0]
  i704.m_UpperTranslation = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i707 = data
  i706.name = i707[0]
  i706.width = i707[1]
  i706.height = i707[2]
  i706.mipmapCount = i707[3]
  i706.anisoLevel = i707[4]
  i706.filterMode = i707[5]
  i706.hdr = !!i707[6]
  i706.format = i707[7]
  i706.wrapMode = i707[8]
  i706.alphaIsTransparency = !!i707[9]
  i706.alphaSource = i707[10]
  i706.graphicsFormat = i707[11]
  i706.sRGBTexture = !!i707[12]
  i706.desiredColorSpace = i707[13]
  i706.wrapU = i707[14]
  i706.wrapV = i707[15]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i709 = data
  i708.pivot = new pc.Vec2( i709[0], i709[1] )
  i708.anchorMin = new pc.Vec2( i709[2], i709[3] )
  i708.anchorMax = new pc.Vec2( i709[4], i709[5] )
  i708.sizeDelta = new pc.Vec2( i709[6], i709[7] )
  i708.anchoredPosition3D = new pc.Vec3( i709[8], i709[9], i709[10] )
  i708.rotation = new pc.Quat(i709[11], i709[12], i709[13], i709[14])
  i708.scale = new pc.Vec3( i709[15], i709[16], i709[17] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i711 = data
  i710.cullTransparentMesh = !!i711[0]
  return i710
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Image' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Sprite')
  i712.m_Type = i713[2]
  i712.m_PreserveAspect = !!i713[3]
  i712.m_FillCenter = !!i713[4]
  i712.m_FillMethod = i713[5]
  i712.m_FillAmount = i713[6]
  i712.m_FillClockwise = !!i713[7]
  i712.m_FillOrigin = i713[8]
  i712.m_UseSpriteMesh = !!i713[9]
  i712.m_PixelsPerUnitMultiplier = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[13]
  i712.m_Color = new pc.Color(i713[14], i713[15], i713[16], i713[17])
  i712.m_RaycastTarget = !!i713[18]
  i712.m_RaycastPadding = new pc.Vec4( i713[19], i713[20], i713[21], i713[22] )
  return i712
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i714 = root || request.c( 'FloatingJoystick' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'background')
  i714.handleRange = i715[2]
  i714.deadZone = i715[3]
  i714.axisOptions = i715[4]
  i714.snapX = !!i715[5]
  i714.snapY = !!i715[6]
  request.r(i715[7], i715[8], 0, i714, 'handle')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i717 = data
  i716.name = i717[0]
  i716.tagId = i717[1]
  i716.enabled = !!i717[2]
  i716.isStatic = !!i717[3]
  i716.layer = i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i719 = data
  i718.position = new pc.Vec3( i719[0], i719[1], i719[2] )
  i718.scale = new pc.Vec3( i719[3], i719[4], i719[5] )
  i718.rotation = new pc.Quat(i719[6], i719[7], i719[8], i719[9])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i721 = data
  i720.center = new pc.Vec3( i721[0], i721[1], i721[2] )
  i720.radius = i721[3]
  i720.height = i721[4]
  i720.direction = i721[5]
  i720.enabled = !!i721[6]
  i720.isTrigger = !!i721[7]
  request.r(i721[8], i721[9], 0, i720, 'material')
  return i720
}

Deserializers["Npc"] = function (request, data, root) {
  var i722 = root || request.c( 'Npc' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'myAnim')
  i722.once = !!i723[2]
  request.r(i723[3], i723[4], 0, i722, 'myStackingPlace')
  request.r(i723[5], i723[6], 0, i722, 'popUp')
  request.r(i723[7], i723[8], 0, i722, 'requiredMeat')
  request.r(i723[9], i723[10], 0, i722, 'fillImage')
  return i722
}

Deserializers["StackingPlace"] = function (request, data, root) {
  var i724 = root || request.c( 'StackingPlace' )
  var i725 = data
  i724.acceptedType = i725[0]
  i724.transferInterval = i725[1]
  i724.autoStack = !!i725[2]
  i724.isGiver = !!i725[3]
  request.r(i725[4], i725[5], 0, i724, 'autoGiverStacker')
  i724.initialDelay = i725[6]
  i724.objectsRequired = i725[7]
  request.r(i725[8], i725[9], 0, i724, 'takerStacker')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i727 = data
  i726.mass = i727[0]
  i726.drag = i727[1]
  i726.angularDrag = i727[2]
  i726.useGravity = !!i727[3]
  i726.isKinematic = !!i727[4]
  i726.constraints = i727[5]
  i726.maxAngularVelocity = i727[6]
  i726.collisionDetectionMode = i727[7]
  i726.interpolation = i727[8]
  return i726
}

Deserializers["ObjectStacker"] = function (request, data, root) {
  var i728 = root || request.c( 'ObjectStacker' )
  var i729 = data
  i728.itemType = i729[0]
  i728.stackMode = i729[1]
  request.r(i729[2], i729[3], 0, i728, 'origin')
  i728.verticalOffset = new pc.Vec3( i729[4], i729[5], i729[6] )
  i728.gridColumns = i729[7]
  i728.gridRows = i729[8]
  i728.gridCellSize = new pc.Vec3( i729[9], i729[10], i729[11] )
  i728.layerOffset = new pc.Vec3( i729[12], i729[13], i729[14] )
  i728.throwUpHeight = i729[15]
  i728.randomXZRange = i729[16]
  i728.rotationMagnitude = i729[17]
  i728.upDuration = i729[18]
  i728.moveDuration = i729[19]
  i728.isPlayer = !!i729[20]
  i728.isCashUtilizer = !!i729[21]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'animatorController')
  request.r(i731[2], i731[3], 0, i730, 'avatar')
  i730.updateMode = i731[4]
  i730.hasTransformHierarchy = !!i731[5]
  i730.applyRootMotion = !!i731[6]
  var i733 = i731[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.humanBones = i732
  i730.enabled = !!i731[8]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i737 = data
  i736.enabled = !!i737[0]
  request.r(i737[1], i737[2], 0, i736, 'sharedMaterial')
  var i739 = i737[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[4]
  i736.shadowCastingMode = i737[5]
  i736.sortingLayerID = i737[6]
  i736.sortingOrder = i737[7]
  i736.lightmapIndex = i737[8]
  i736.lightmapSceneIndex = i737[9]
  i736.lightmapScaleOffset = new pc.Vec4( i737[10], i737[11], i737[12], i737[13] )
  i736.lightProbeUsage = i737[14]
  i736.reflectionProbeUsage = i737[15]
  request.r(i737[16], i737[17], 0, i736, 'sharedMesh')
  var i741 = i737[18]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i736.bones = i740
  i736.updateWhenOffscreen = !!i737[19]
  i736.localBounds = i737[20]
  request.r(i737[21], i737[22], 0, i736, 'rootBone')
  var i743 = i737[23]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i743[i + 0]) );
  }
  i736.blendShapesWeights = i742
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i749 = data
  i748.weight = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'sharedMesh')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'additionalVertexStreams')
  i752.enabled = !!i753[2]
  request.r(i753[3], i753[4], 0, i752, 'sharedMaterial')
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sharedMaterials = i754
  i752.receiveShadows = !!i753[6]
  i752.shadowCastingMode = i753[7]
  i752.sortingLayerID = i753[8]
  i752.sortingOrder = i753[9]
  i752.lightmapIndex = i753[10]
  i752.lightmapSceneIndex = i753[11]
  i752.lightmapScaleOffset = new pc.Vec4( i753[12], i753[13], i753[14], i753[15] )
  i752.lightProbeUsage = i753[16]
  i752.reflectionProbeUsage = i753[17]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.planeDistance = i757[1]
  i756.referencePixelsPerUnit = i757[2]
  i756.isFallbackOverlay = !!i757[3]
  i756.renderMode = i757[4]
  i756.renderOrder = i757[5]
  i756.sortingLayerName = i757[6]
  i756.sortingOrder = i757[7]
  i756.scaleFactor = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'worldCamera')
  i756.overrideSorting = !!i757[11]
  i756.pixelPerfect = !!i757[12]
  i756.targetDisplay = i757[13]
  i756.overridePixelPerfect = !!i757[14]
  return i756
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i759 = data
  i758.m_UiScaleMode = i759[0]
  i758.m_ReferencePixelsPerUnit = i759[1]
  i758.m_ScaleFactor = i759[2]
  i758.m_ReferenceResolution = new pc.Vec2( i759[3], i759[4] )
  i758.m_ScreenMatchMode = i759[5]
  i758.m_MatchWidthOrHeight = i759[6]
  i758.m_PhysicalUnit = i759[7]
  i758.m_FallbackScreenDPI = i759[8]
  i758.m_DefaultSpriteDPI = i759[9]
  i758.m_DynamicPixelsPerUnit = i759[10]
  i758.m_PresetInfoIsWorld = !!i759[11]
  return i758
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i761 = data
  i760.m_IgnoreReversedGraphics = !!i761[0]
  i760.m_BlockingObjects = i761[1]
  i760.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i761[2] )
  return i760
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Outline' )
  var i763 = data
  i762.m_EffectColor = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.m_EffectDistance = new pc.Vec2( i763[4], i763[5] )
  i762.m_UseGraphicAlpha = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Text' )
  var i765 = data
  i764.m_FontData = request.d('UnityEngine.UI.FontData', i765[0], i764.m_FontData)
  i764.m_Text = i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_Material')
  i764.m_Maskable = !!i765[4]
  i764.m_Color = new pc.Color(i765[5], i765[6], i765[7], i765[8])
  i764.m_RaycastTarget = !!i765[9]
  i764.m_RaycastPadding = new pc.Vec4( i765[10], i765[11], i765[12], i765[13] )
  return i764
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.FontData' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Font')
  i766.m_FontSize = i767[2]
  i766.m_FontStyle = i767[3]
  i766.m_BestFit = !!i767[4]
  i766.m_MinSize = i767[5]
  i766.m_MaxSize = i767[6]
  i766.m_Alignment = i767[7]
  i766.m_AlignByGeometry = !!i767[8]
  i766.m_RichText = !!i767[9]
  i766.m_HorizontalOverflow = i767[10]
  i766.m_VerticalOverflow = i767[11]
  i766.m_LineSpacing = i767[12]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i768 = root || new pc.UnityMaterial()
  var i769 = data
  i768.name = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'shader')
  i768.renderQueue = i769[3]
  i768.enableInstancing = !!i769[4]
  var i771 = i769[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i771[i + 0]) );
  }
  i768.floatParameters = i770
  var i773 = i769[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i773[i + 0]) );
  }
  i768.colorParameters = i772
  var i775 = i769[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i775[i + 0]) );
  }
  i768.vectorParameters = i774
  var i777 = i769[8]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i777[i + 0]) );
  }
  i768.textureParameters = i776
  var i779 = i769[9]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i779[i + 0]) );
  }
  i768.materialFlags = i778
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i783 = data
  i782.name = i783[0]
  i782.value = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i787 = data
  i786.name = i787[0]
  i786.value = new pc.Color(i787[1], i787[2], i787[3], i787[4])
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i791 = data
  i790.name = i791[0]
  i790.value = new pc.Vec4( i791[1], i791[2], i791[3], i791[4] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i795 = data
  i794.name = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i799 = data
  i798.name = i799[0]
  i798.enabled = !!i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i801 = data
  i800.name = i801[0]
  i800.halfPrecision = !!i801[1]
  i800.useUInt32IndexFormat = !!i801[2]
  i800.vertexCount = i801[3]
  i800.aabb = i801[4]
  var i803 = i801[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( !!i803[i + 0] );
  }
  i800.streams = i802
  i800.vertices = i801[6]
  var i805 = i801[7]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i805[i + 0]) );
  }
  i800.subMeshes = i804
  var i807 = i801[8]
  var i806 = []
  for(var i = 0; i < i807.length; i += 16) {
    i806.push( new pc.Mat4().setData(i807[i + 0], i807[i + 1], i807[i + 2], i807[i + 3],  i807[i + 4], i807[i + 5], i807[i + 6], i807[i + 7],  i807[i + 8], i807[i + 9], i807[i + 10], i807[i + 11],  i807[i + 12], i807[i + 13], i807[i + 14], i807[i + 15]) );
  }
  i800.bindposes = i806
  var i809 = i801[9]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i809[i + 0]) );
  }
  i800.blendShapes = i808
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i815 = data
  i814.triangles = i815[0]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i821 = data
  i820.name = i821[0]
  var i823 = i821[1]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i823[i + 0]) );
  }
  i820.frames = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i825 = data
  i824.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i825[0], i824.main)
  i824.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i825[1], i824.colorBySpeed)
  i824.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i825[2], i824.colorOverLifetime)
  i824.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i825[3], i824.emission)
  i824.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i825[4], i824.rotationBySpeed)
  i824.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i825[5], i824.rotationOverLifetime)
  i824.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i825[6], i824.shape)
  i824.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i825[7], i824.sizeBySpeed)
  i824.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i825[8], i824.sizeOverLifetime)
  i824.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i825[9], i824.textureSheetAnimation)
  i824.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i825[10], i824.velocityOverLifetime)
  i824.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i825[11], i824.noise)
  i824.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i825[12], i824.inheritVelocity)
  i824.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i825[13], i824.forceOverLifetime)
  i824.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i825[14], i824.limitVelocityOverLifetime)
  i824.useAutoRandomSeed = !!i825[15]
  i824.randomSeed = i825[16]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemMain()
  var i827 = data
  i826.duration = i827[0]
  i826.loop = !!i827[1]
  i826.prewarm = !!i827[2]
  i826.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.startDelay)
  i826.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.startLifetime)
  i826.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[5], i826.startSpeed)
  i826.startSize3D = !!i827[6]
  i826.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.startSizeX)
  i826.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.startSizeY)
  i826.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.startSizeZ)
  i826.startRotation3D = !!i827[10]
  i826.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.startRotationX)
  i826.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[12], i826.startRotationY)
  i826.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[13], i826.startRotationZ)
  i826.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i827[14], i826.startColor)
  i826.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[15], i826.gravityModifier)
  i826.simulationSpace = i827[16]
  request.r(i827[17], i827[18], 0, i826, 'customSimulationSpace')
  i826.simulationSpeed = i827[19]
  i826.useUnscaledTime = !!i827[20]
  i826.scalingMode = i827[21]
  i826.playOnAwake = !!i827[22]
  i826.maxParticles = i827[23]
  i826.emitterVelocityMode = i827[24]
  i826.stopAction = i827[25]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i828 = root || new pc.MinMaxCurve()
  var i829 = data
  i828.mode = i829[0]
  i828.curveMin = new pc.AnimationCurve( { keys_flow: i829[1] } )
  i828.curveMax = new pc.AnimationCurve( { keys_flow: i829[2] } )
  i828.curveMultiplier = i829[3]
  i828.constantMin = i829[4]
  i828.constantMax = i829[5]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i830 = root || new pc.MinMaxGradient()
  var i831 = data
  i830.mode = i831[0]
  i830.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i831[1], i830.gradientMin)
  i830.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i831[2], i830.gradientMax)
  i830.colorMin = new pc.Color(i831[3], i831[4], i831[5], i831[6])
  i830.colorMax = new pc.Color(i831[7], i831[8], i831[9], i831[10])
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i833 = data
  i832.mode = i833[0]
  var i835 = i833[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i835[i + 0]) );
  }
  i832.colorKeys = i834
  var i837 = i833[2]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i837[i + 0]) );
  }
  i832.alphaKeys = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i841 = data
  i840.color = new pc.Color(i841[0], i841[1], i841[2], i841[3])
  i840.time = i841[4]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i845 = data
  i844.alpha = i845[0]
  i844.time = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemColorBySpeed()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i847[1], i846.color)
  i846.range = new pc.Vec2( i847[2], i847[3] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemColorOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i849[1], i848.color)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemEmitter()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.rateOverTime)
  i850.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.rateOverDistance)
  var i853 = i851[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i853[i + 0]) );
  }
  i850.bursts = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemBurst()
  var i857 = data
  i856.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[0], i856.count)
  i856.cycleCount = i857[1]
  i856.minCount = i857[2]
  i856.maxCount = i857[3]
  i856.repeatInterval = i857[4]
  i856.time = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemRotationBySpeed()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.x)
  i858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.y)
  i858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.z)
  i858.separateAxes = !!i859[4]
  i858.range = new pc.Vec2( i859[5], i859[6] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemRotationOverLifetime()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.x)
  i860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.y)
  i860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.z)
  i860.separateAxes = !!i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemShape()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.shapeType = i863[1]
  i862.randomDirectionAmount = i863[2]
  i862.sphericalDirectionAmount = i863[3]
  i862.randomPositionAmount = i863[4]
  i862.alignToDirection = !!i863[5]
  i862.radius = i863[6]
  i862.radiusMode = i863[7]
  i862.radiusSpread = i863[8]
  i862.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[9], i862.radiusSpeed)
  i862.radiusThickness = i863[10]
  i862.angle = i863[11]
  i862.length = i863[12]
  i862.boxThickness = new pc.Vec3( i863[13], i863[14], i863[15] )
  i862.meshShapeType = i863[16]
  request.r(i863[17], i863[18], 0, i862, 'mesh')
  request.r(i863[19], i863[20], 0, i862, 'meshRenderer')
  request.r(i863[21], i863[22], 0, i862, 'skinnedMeshRenderer')
  i862.useMeshMaterialIndex = !!i863[23]
  i862.meshMaterialIndex = i863[24]
  i862.useMeshColors = !!i863[25]
  i862.normalOffset = i863[26]
  i862.arc = i863[27]
  i862.arcMode = i863[28]
  i862.arcSpread = i863[29]
  i862.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[30], i862.arcSpeed)
  i862.donutRadius = i863[31]
  i862.position = new pc.Vec3( i863[32], i863[33], i863[34] )
  i862.rotation = new pc.Vec3( i863[35], i863[36], i863[37] )
  i862.scale = new pc.Vec3( i863[38], i863[39], i863[40] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemSizeBySpeed()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.x)
  i864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.y)
  i864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[3], i864.z)
  i864.separateAxes = !!i865[4]
  i864.range = new pc.Vec2( i865[5], i865[6] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemSizeOverLifetime()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[1], i866.x)
  i866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[2], i866.y)
  i866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[3], i866.z)
  i866.separateAxes = !!i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.mode = i869[1]
  i868.animation = i869[2]
  i868.numTilesX = i869[3]
  i868.numTilesY = i869[4]
  i868.useRandomRow = !!i869[5]
  i868.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[6], i868.frameOverTime)
  i868.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[7], i868.startFrame)
  i868.cycleCount = i869[8]
  i868.rowIndex = i869[9]
  i868.flipU = i869[10]
  i868.flipV = i869[11]
  i868.spriteCount = i869[12]
  var i871 = i869[13]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.sprites = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[4], i874.radial)
  i874.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[5], i874.speedModifier)
  i874.space = i875[6]
  i874.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[7], i874.orbitalX)
  i874.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[8], i874.orbitalY)
  i874.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[9], i874.orbitalZ)
  i874.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[10], i874.orbitalOffsetX)
  i874.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[11], i874.orbitalOffsetY)
  i874.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[12], i874.orbitalOffsetZ)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemNoise()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.separateAxes = !!i877[1]
  i876.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.strengthX)
  i876.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.strengthY)
  i876.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[4], i876.strengthZ)
  i876.frequency = i877[5]
  i876.damping = !!i877[6]
  i876.octaveCount = i877[7]
  i876.octaveMultiplier = i877[8]
  i876.octaveScale = i877[9]
  i876.quality = i877[10]
  i876.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[11], i876.scrollSpeed)
  i876.scrollSpeedMultiplier = i877[12]
  i876.remapEnabled = !!i877[13]
  i876.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[14], i876.remapX)
  i876.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[15], i876.remapY)
  i876.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[16], i876.remapZ)
  i876.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[17], i876.positionAmount)
  i876.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[18], i876.rotationAmount)
  i876.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[19], i876.sizeAmount)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemInheritVelocity()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.mode = i879[1]
  i878.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.curve)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemForceOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.space = i881[4]
  i880.randomized = !!i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.limit)
  i882.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.limitX)
  i882.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.limitY)
  i882.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[4], i882.limitZ)
  i882.dampen = i883[5]
  i882.separateAxes = !!i883[6]
  i882.space = i883[7]
  i882.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[8], i882.drag)
  i882.multiplyDragByParticleSize = !!i883[9]
  i882.multiplyDragByParticleVelocity = !!i883[10]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i885 = data
  i884.enabled = !!i885[0]
  request.r(i885[1], i885[2], 0, i884, 'sharedMaterial')
  var i887 = i885[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.sharedMaterials = i886
  i884.receiveShadows = !!i885[4]
  i884.shadowCastingMode = i885[5]
  i884.sortingLayerID = i885[6]
  i884.sortingOrder = i885[7]
  i884.lightmapIndex = i885[8]
  i884.lightmapSceneIndex = i885[9]
  i884.lightmapScaleOffset = new pc.Vec4( i885[10], i885[11], i885[12], i885[13] )
  i884.lightProbeUsage = i885[14]
  i884.reflectionProbeUsage = i885[15]
  request.r(i885[16], i885[17], 0, i884, 'mesh')
  i884.meshCount = i885[18]
  i884.activeVertexStreamsCount = i885[19]
  i884.alignment = i885[20]
  i884.renderMode = i885[21]
  i884.sortMode = i885[22]
  i884.lengthScale = i885[23]
  i884.velocityScale = i885[24]
  i884.cameraVelocityScale = i885[25]
  i884.normalDirection = i885[26]
  i884.sortingFudge = i885[27]
  i884.minParticleSize = i885[28]
  i884.maxParticleSize = i885[29]
  i884.pivot = new pc.Vec3( i885[30], i885[31], i885[32] )
  request.r(i885[33], i885[34], 0, i884, 'trailMaterial')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i891 = data
  i890.weight = i891[0]
  i890.vertices = i891[1]
  i890.normals = i891[2]
  i890.tangents = i891[3]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i893 = data
  i892.center = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.size = new pc.Vec3( i893[3], i893[4], i893[5] )
  i892.enabled = !!i893[6]
  i892.isTrigger = !!i893[7]
  request.r(i893[8], i893[9], 0, i892, 'material')
  return i892
}

Deserializers["StackItem"] = function (request, data, root) {
  var i894 = root || request.c( 'StackItem' )
  var i895 = data
  i894.itemType = i895[0]
  return i894
}

Deserializers["EnemyAI"] = function (request, data, root) {
  var i896 = root || request.c( 'EnemyAI' )
  var i897 = data
  i896.detectionRadius = i897[0]
  i896.attackRange = i897[1]
  i896.attackRate = i897[2]
  i896.attackDamage = i897[3]
  i896.attackWindupTime = i897[4]
  i896.attackAnimDuration = i897[5]
  request.r(i897[6], i897[7], 0, i896, 'anim')
  request.r(i897[8], i897[9], 0, i896, 'player')
  i896.nextAttackTime = i897[10]
  i896.isDie = !!i897[11]
  request.r(i897[12], i897[13], 0, i896, 'spawnPoint')
  i896.spawnCount = i897[14]
  i896.randomXZRange = i897[15]
  i896.throwUpHeight = i897[16]
  i896.upDuration = i897[17]
  i896.downDuration = i897[18]
  return i896
}

Deserializers["DamageSystem"] = function (request, data, root) {
  var i898 = root || request.c( 'DamageSystem' )
  var i899 = data
  i898.maxHealth = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'healthBar')
  i898.onDeath = request.d('UnityEngine.Events.UnityEvent', i899[3], i898.onDeath)
  return i898
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i901 = data
  i900.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i901[0], i900.m_PersistentCalls)
  return i900
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.Events.PersistentCall', i905[i + 0]));
  }
  i902.m_Calls = i904
  return i902
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_Target')
  i908.m_TargetAssemblyTypeName = i909[2]
  i908.m_MethodName = i909[3]
  i908.m_Mode = i909[4]
  i908.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i909[5], i908.m_Arguments)
  i908.m_CallState = i909[6]
  return i908
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_ObjectArgument')
  i910.m_ObjectArgumentAssemblyTypeName = i911[2]
  i910.m_IntArgument = i911[3]
  i910.m_FloatArgument = i911[4]
  i910.m_StringArgument = i911[5]
  i910.m_BoolArgument = !!i911[6]
  return i910
}

Deserializers["Billboard"] = function (request, data, root) {
  var i912 = root || request.c( 'Billboard' )
  var i913 = data
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i915 = data
  i914.enabled = !!i915[0]
  request.r(i915[1], i915[2], 0, i914, 'sharedMaterial')
  var i917 = i915[3]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.sharedMaterials = i916
  i914.receiveShadows = !!i915[4]
  i914.shadowCastingMode = i915[5]
  i914.sortingLayerID = i915[6]
  i914.sortingOrder = i915[7]
  i914.lightmapIndex = i915[8]
  i914.lightmapSceneIndex = i915[9]
  i914.lightmapScaleOffset = new pc.Vec4( i915[10], i915[11], i915[12], i915[13] )
  i914.lightProbeUsage = i915[14]
  i914.reflectionProbeUsage = i915[15]
  i914.color = new pc.Color(i915[16], i915[17], i915[18], i915[19])
  request.r(i915[20], i915[21], 0, i914, 'sprite')
  i914.flipX = !!i915[22]
  i914.flipY = !!i915[23]
  i914.drawMode = i915[24]
  i914.size = new pc.Vec2( i915[25], i915[26] )
  i914.tileMode = i915[27]
  i914.adaptiveModeThreshold = i915[28]
  i914.maskInteraction = i915[29]
  i914.spriteSortPoint = i915[30]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i919 = data
  i918.name = i919[0]
  i918.atlasId = i919[1]
  i918.mipmapCount = i919[2]
  i918.hdr = !!i919[3]
  i918.size = i919[4]
  i918.anisoLevel = i919[5]
  i918.filterMode = i919[6]
  var i921 = i919[7]
  var i920 = []
  for(var i = 0; i < i921.length; i += 4) {
    i920.push( UnityEngine.Rect.MinMaxRect(i921[i + 0], i921[i + 1], i921[i + 2], i921[i + 3]) );
  }
  i918.rects = i920
  i918.wrapU = i919[8]
  i918.wrapV = i919[9]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i925 = data
  i924.name = i925[0]
  i924.index = i925[1]
  i924.startup = !!i925[2]
  return i924
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_FirstSelected')
  i926.m_sendNavigationEvents = !!i927[2]
  i926.m_DragThreshold = i927[3]
  return i926
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i929 = data
  i928.m_MoveRepeatDelay = i929[0]
  i928.m_MoveRepeatRate = i929[1]
  request.r(i929[2], i929[3], 0, i928, 'm_XRTrackingOrigin')
  request.r(i929[4], i929[5], 0, i928, 'm_ActionsAsset')
  request.r(i929[6], i929[7], 0, i928, 'm_PointAction')
  request.r(i929[8], i929[9], 0, i928, 'm_MoveAction')
  request.r(i929[10], i929[11], 0, i928, 'm_SubmitAction')
  request.r(i929[12], i929[13], 0, i928, 'm_CancelAction')
  request.r(i929[14], i929[15], 0, i928, 'm_LeftClickAction')
  request.r(i929[16], i929[17], 0, i928, 'm_MiddleClickAction')
  request.r(i929[18], i929[19], 0, i928, 'm_RightClickAction')
  request.r(i929[20], i929[21], 0, i928, 'm_ScrollWheelAction')
  request.r(i929[22], i929[23], 0, i928, 'm_TrackedDevicePositionAction')
  request.r(i929[24], i929[25], 0, i928, 'm_TrackedDeviceOrientationAction')
  i928.m_DeselectOnBackgroundClick = !!i929[26]
  i928.m_PointerBehavior = i929[27]
  i928.m_CursorLockBehavior = i929[28]
  i928.m_ScrollDeltaPerTick = i929[29]
  i928.m_SendPointerHoverToParent = !!i929[30]
  return i928
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager"] = function (request, data, root) {
  var i930 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'meat')
  request.r(i931[2], i931[3], 0, i930, 'GpCurrency')
  request.r(i931[4], i931[5], 0, i930, 'lcCurrency')
  var i933 = i931[6]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('GameAssets.GameSet.GameDevUtils.Managers.Currency')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('GameAssets.GameSet.GameDevUtils.Managers.Currency', i933[i + 0]));
  }
  i930.currencies = i932
  return i930
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.Currency"] = function (request, data, root) {
  var i936 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.Currency' )
  var i937 = data
  i936.currencyName = i937[0]
  i936.totalCurrency = i937[1]
  return i936
}

Deserializers["ObjectQueueManager"] = function (request, data, root) {
  var i938 = root || request.c( 'ObjectQueueManager' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'objectPrefab')
  i938.initialQueueSize = i939[2]
  request.r(i939[3], i939[4], 0, i938, 'pointA')
  request.r(i939[5], i939[6], 0, i938, 'pointB')
  request.r(i939[7], i939[8], 0, i938, 'exitPoint')
  i938.moveDuration = i939[9]
  i938.shiftDuration = i939[10]
  request.r(i939[11], i939[12], 0, i938, 'cashCounter')
  return i938
}

Deserializers["EnemySpawner"] = function (request, data, root) {
  var i940 = root || request.c( 'EnemySpawner' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.spawnPoints = i942
  i940.poolName = i941[1]
  i940.respawnDelay = i941[2]
  return i940
}

Deserializers["PoolingManager"] = function (request, data, root) {
  var i944 = root || request.c( 'PoolingManager' )
  var i945 = data
  var i947 = i945[0]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('ParticlePool')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('ParticlePool', i947[i + 0]));
  }
  i944.Pools = i946
  return i944
}

Deserializers["ParticlePool"] = function (request, data, root) {
  var i950 = root || request.c( 'ParticlePool' )
  var i951 = data
  i950.HideInHierarchy = !!i951[0]
  i950.ParticleName = i951[1]
  i950.PoolSize = i951[2]
  request.r(i951[3], i951[4], 0, i950, 'ParticlePrefab')
  request.r(i951[5], i951[6], 0, i950, 'PoolParent')
  i950.Debug = !!i951[7]
  return i950
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.SoundManager"] = function (request, data, root) {
  var i952 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.SoundManager' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'bgSoundSource')
  request.r(i953[2], i953[3], 0, i952, 'bgClip')
  request.r(i953[4], i953[5], 0, i952, 'buttonClip')
  request.r(i953[6], i953[7], 0, i952, 'walkClip')
  request.r(i953[8], i953[9], 0, i952, 'attackClip')
  request.r(i953[10], i953[11], 0, i952, 'deathClip')
  request.r(i953[12], i953[13], 0, i952, 'buildClip')
  request.r(i953[14], i953[15], 0, i952, 'loseClip')
  var i955 = i953[16]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.pops = i954
  request.r(i953[17], i953[18], 0, i952, 'bgAmbienceSoundSource')
  request.r(i953[19], i953[20], 0, i952, 'sFXSoundSource')
  request.r(i953[21], i953[22], 0, i952, 'walkSoundSource')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'clip')
  request.r(i959[2], i959[3], 0, i958, 'outputAudioMixerGroup')
  i958.playOnAwake = !!i959[4]
  i958.loop = !!i959[5]
  i958.time = i959[6]
  i958.volume = i959[7]
  i958.pitch = i959[8]
  i958.enabled = !!i959[9]
  return i958
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Button' )
  var i961 = data
  i960.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i961[0], i960.m_OnClick)
  i960.m_Navigation = request.d('UnityEngine.UI.Navigation', i961[1], i960.m_Navigation)
  i960.m_Transition = i961[2]
  i960.m_Colors = request.d('UnityEngine.UI.ColorBlock', i961[3], i960.m_Colors)
  i960.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i961[4], i960.m_SpriteState)
  i960.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i961[5], i960.m_AnimationTriggers)
  i960.m_Interactable = !!i961[6]
  request.r(i961[7], i961[8], 0, i960, 'm_TargetGraphic')
  return i960
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i963 = data
  i962.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i963[0], i962.m_PersistentCalls)
  return i962
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i965 = data
  i964.m_Mode = i965[0]
  i964.m_WrapAround = !!i965[1]
  request.r(i965[2], i965[3], 0, i964, 'm_SelectOnUp')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectOnDown')
  request.r(i965[6], i965[7], 0, i964, 'm_SelectOnLeft')
  request.r(i965[8], i965[9], 0, i964, 'm_SelectOnRight')
  return i964
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i967 = data
  i966.m_NormalColor = new pc.Color(i967[0], i967[1], i967[2], i967[3])
  i966.m_HighlightedColor = new pc.Color(i967[4], i967[5], i967[6], i967[7])
  i966.m_PressedColor = new pc.Color(i967[8], i967[9], i967[10], i967[11])
  i966.m_SelectedColor = new pc.Color(i967[12], i967[13], i967[14], i967[15])
  i966.m_DisabledColor = new pc.Color(i967[16], i967[17], i967[18], i967[19])
  i966.m_ColorMultiplier = i967[20]
  i966.m_FadeDuration = i967[21]
  return i966
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_HighlightedSprite')
  request.r(i969[2], i969[3], 0, i968, 'm_PressedSprite')
  request.r(i969[4], i969[5], 0, i968, 'm_SelectedSprite')
  request.r(i969[6], i969[7], 0, i968, 'm_DisabledSprite')
  return i968
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i971 = data
  i970.m_NormalTrigger = i971[0]
  i970.m_HighlightedTrigger = i971[1]
  i970.m_PressedTrigger = i971[2]
  i970.m_SelectedTrigger = i971[3]
  i970.m_DisabledTrigger = i971[4]
  return i970
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i973 = data
  i972.targetIsSelf = !!i973[0]
  request.r(i973[1], i973[2], 0, i972, 'targetGO')
  i972.tweenTargetIsTargetGO = !!i973[3]
  i972.delay = i973[4]
  i972.duration = i973[5]
  i972.easeType = i973[6]
  i972.easeCurve = new pc.AnimationCurve( { keys_flow: i973[7] } )
  i972.loopType = i973[8]
  i972.loops = i973[9]
  i972.id = i973[10]
  i972.isRelative = !!i973[11]
  i972.isFrom = !!i973[12]
  i972.isIndependentUpdate = !!i973[13]
  i972.autoKill = !!i973[14]
  i972.autoGenerate = !!i973[15]
  i972.isActive = !!i973[16]
  i972.isValid = !!i973[17]
  request.r(i973[18], i973[19], 0, i972, 'target')
  i972.animationType = i973[20]
  i972.targetType = i973[21]
  i972.forcedTargetType = i973[22]
  i972.autoPlay = !!i973[23]
  i972.useTargetAsV3 = !!i973[24]
  i972.endValueFloat = i973[25]
  i972.endValueV3 = new pc.Vec3( i973[26], i973[27], i973[28] )
  i972.endValueV2 = new pc.Vec2( i973[29], i973[30] )
  i972.endValueColor = new pc.Color(i973[31], i973[32], i973[33], i973[34])
  i972.endValueString = i973[35]
  i972.endValueRect = UnityEngine.Rect.MinMaxRect(i973[36], i973[37], i973[38], i973[39])
  request.r(i973[40], i973[41], 0, i972, 'endValueTransform')
  i972.optionalBool0 = !!i973[42]
  i972.optionalBool1 = !!i973[43]
  i972.optionalFloat0 = i973[44]
  i972.optionalInt0 = i973[45]
  i972.optionalRotationMode = i973[46]
  i972.optionalScrambleMode = i973[47]
  i972.optionalShakeRandomnessMode = i973[48]
  i972.optionalString = i973[49]
  i972.updateType = i973[50]
  i972.isSpeedBased = !!i973[51]
  i972.hasOnStart = !!i973[52]
  i972.hasOnPlay = !!i973[53]
  i972.hasOnUpdate = !!i973[54]
  i972.hasOnStepComplete = !!i973[55]
  i972.hasOnComplete = !!i973[56]
  i972.hasOnTweenCreated = !!i973[57]
  i972.hasOnRewind = !!i973[58]
  i972.onStart = request.d('UnityEngine.Events.UnityEvent', i973[59], i972.onStart)
  i972.onPlay = request.d('UnityEngine.Events.UnityEvent', i973[60], i972.onPlay)
  i972.onUpdate = request.d('UnityEngine.Events.UnityEvent', i973[61], i972.onUpdate)
  i972.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i973[62], i972.onStepComplete)
  i972.onComplete = request.d('UnityEngine.Events.UnityEvent', i973[63], i972.onComplete)
  i972.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i973[64], i972.onTweenCreated)
  i972.onRewind = request.d('UnityEngine.Events.UnityEvent', i973[65], i972.onRewind)
  return i972
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i975 = data
  i974.priority = i975[0]
  i974.blendDistance = i975[1]
  i974.weight = i975[2]
  request.r(i975[3], i975[4], 0, i974, 'sharedProfile')
  i974.m_IsGlobal = !!i975[5]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.isTrigger = !!i977[1]
  request.r(i977[2], i977[3], 0, i976, 'material')
  request.r(i977[4], i977[5], 0, i976, 'sharedMesh')
  i976.convex = !!i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i979 = data
  i978.enabled = !!i979[0]
  i978.type = i979[1]
  i978.color = new pc.Color(i979[2], i979[3], i979[4], i979[5])
  i978.cullingMask = i979[6]
  i978.intensity = i979[7]
  i978.range = i979[8]
  i978.spotAngle = i979[9]
  i978.shadows = i979[10]
  i978.shadowNormalBias = i979[11]
  i978.shadowBias = i979[12]
  i978.shadowStrength = i979[13]
  i978.shadowResolution = i979[14]
  i978.lightmapBakeType = i979[15]
  i978.renderMode = i979[16]
  request.r(i979[17], i979[18], 0, i978, 'cookie')
  i978.cookieSize = i979[19]
  return i978
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i981 = data
  i980.m_Version = i981[0]
  i980.m_UsePipelineSettings = !!i981[1]
  i980.m_AdditionalLightsShadowResolutionTier = i981[2]
  i980.m_LightLayerMask = i981[3]
  i980.m_RenderingLayers = i981[4]
  i980.m_CustomShadowLayers = !!i981[5]
  i980.m_ShadowLayerMask = i981[6]
  i980.m_ShadowRenderingLayers = i981[7]
  i980.m_LightCookieSize = new pc.Vec2( i981[8], i981[9] )
  i980.m_LightCookieOffset = new pc.Vec2( i981[10], i981[11] )
  i980.m_SoftShadowQuality = i981[12]
  return i980
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i982 = root || request.c( 'CameraFollow' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'player')
  i982.offsetX = i983[2]
  i982.offsetZ = i983[3]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i985 = data
  i984.enabled = !!i985[0]
  i984.aspect = i985[1]
  i984.orthographic = !!i985[2]
  i984.orthographicSize = i985[3]
  i984.backgroundColor = new pc.Color(i985[4], i985[5], i985[6], i985[7])
  i984.nearClipPlane = i985[8]
  i984.farClipPlane = i985[9]
  i984.fieldOfView = i985[10]
  i984.depth = i985[11]
  i984.clearFlags = i985[12]
  i984.cullingMask = i985[13]
  i984.rect = i985[14]
  request.r(i985[15], i985[16], 0, i984, 'targetTexture')
  i984.usePhysicalProperties = !!i985[17]
  i984.focalLength = i985[18]
  i984.sensorSize = new pc.Vec2( i985[19], i985[20] )
  i984.lensShift = new pc.Vec2( i985[21], i985[22] )
  i984.gateFit = i985[23]
  i984.commandBufferCount = i985[24]
  i984.cameraType = i985[25]
  return i984
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i987 = data
  i986.m_RenderShadows = !!i987[0]
  i986.m_RequiresDepthTextureOption = i987[1]
  i986.m_RequiresOpaqueTextureOption = i987[2]
  i986.m_CameraType = i987[3]
  var i989 = i987[4]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.m_Cameras = i988
  i986.m_RendererIndex = i987[5]
  i986.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i987[6] )
  request.r(i987[7], i987[8], 0, i986, 'm_VolumeTrigger')
  i986.m_VolumeFrameworkUpdateModeOption = i987[9]
  i986.m_RenderPostProcessing = !!i987[10]
  i986.m_Antialiasing = i987[11]
  i986.m_AntialiasingQuality = i987[12]
  i986.m_StopNaN = !!i987[13]
  i986.m_Dithering = !!i987[14]
  i986.m_ClearDepth = !!i987[15]
  i986.m_AllowXRRendering = !!i987[16]
  i986.m_AllowHDROutput = !!i987[17]
  i986.m_UseScreenCoordOverride = !!i987[18]
  i986.m_ScreenSizeOverride = new pc.Vec4( i987[19], i987[20], i987[21], i987[22] )
  i986.m_ScreenCoordScaleBias = new pc.Vec4( i987[23], i987[24], i987[25], i987[26] )
  i986.m_RequiresDepthTexture = !!i987[27]
  i986.m_RequiresColorTexture = !!i987[28]
  i986.m_Version = i987[29]
  i986.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i987[30], i986.m_TaaSettings)
  return i986
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i993 = data
  i992.m_Quality = i993[0]
  i992.m_FrameInfluence = i993[1]
  i992.m_JitterScale = i993[2]
  i992.m_MipBias = i993[3]
  i992.m_VarianceClampScale = i993[4]
  i992.m_ContrastAdaptiveSharpening = i993[5]
  return i992
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i994 = root || request.c( 'PlayerController' )
  var i995 = data
  i994._speed = i995[0]
  i994.deceleration = i995[1]
  i994.inputValue = i995[2]
  request.r(i995[3], i995[4], 0, i994, 'dynamicJoystick')
  i994.canMove = !!i995[5]
  i994.isDie = !!i995[6]
  request.r(i995[7], i995[8], 0, i994, 'meatStacker')
  request.r(i995[9], i995[10], 0, i994, 'cashStacker')
  request.r(i995[11], i995[12], 0, i994, 'failScreen')
  request.r(i995[13], i995[14], 0, i994, '_rb')
  i994._turnSpeed = i995[15]
  request.r(i995[16], i995[17], 0, i994, '_playerModel')
  return i994
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i996 = root || request.c( 'PlayerAttack' )
  var i997 = data
  i996.detectionRadius = i997[0]
  i996.attackArcRange = i997[1]
  i996.attackArcAngle = i997[2]
  i996.attackDamage = i997[3]
  i996.knockbackDistance = i997[4]
  i996.knockbackDuration = i997[5]
  i996.fireRate = i997[6]
  request.r(i997[7], i997[8], 0, i996, 'animatorController')
  request.r(i997[9], i997[10], 0, i996, 'playerModel')
  request.r(i997[11], i997[12], 0, i996, 'attackVfx')
  return i996
}

Deserializers["ArrowPointer"] = function (request, data, root) {
  var i998 = root || request.c( 'ArrowPointer' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'player')
  request.r(i999[2], i999[3], 0, i998, 'arrow')
  var i1001 = i999[4]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.targets = i1000
  i998.currentTargetIndex = i999[5]
  i998.orbitRadius = i999[6]
  i998.heightOffset = i999[7]
  return i998
}

Deserializers["AnimatorController"] = function (request, data, root) {
  var i1004 = root || request.c( 'AnimatorController' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'playerAnim')
  request.r(i1005[2], i1005[3], 0, i1004, 'dynamicJoystick')
  return i1004
}

Deserializers["CuustomerZone"] = function (request, data, root) {
  var i1006 = root || request.c( 'CuustomerZone' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'objectQueueManager')
  return i1006
}

Deserializers["CurrencyDeductionOnCollision"] = function (request, data, root) {
  var i1008 = root || request.c( 'CurrencyDeductionOnCollision' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'amount')
  request.r(i1009[2], i1009[3], 0, i1008, 'pc')
  request.r(i1009[4], i1009[5], 0, i1008, 'win')
  request.r(i1009[6], i1009[7], 0, i1008, 'particle')
  i1008.currencyName = i1009[8]
  i1008.totalAmount = i1009[9]
  i1008.chunkSize = i1009[10]
  i1008.delayBetweenDeductions = i1009[11]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1011 = data
  i1010.ambientIntensity = i1011[0]
  i1010.reflectionIntensity = i1011[1]
  i1010.ambientMode = i1011[2]
  i1010.ambientLight = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.ambientSkyColor = new pc.Color(i1011[7], i1011[8], i1011[9], i1011[10])
  i1010.ambientGroundColor = new pc.Color(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.ambientEquatorColor = new pc.Color(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fogColor = new pc.Color(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.fogEndDistance = i1011[23]
  i1010.fogStartDistance = i1011[24]
  i1010.fogDensity = i1011[25]
  i1010.fog = !!i1011[26]
  request.r(i1011[27], i1011[28], 0, i1010, 'skybox')
  i1010.fogMode = i1011[29]
  var i1013 = i1011[30]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1013[i + 0]) );
  }
  i1010.lightmaps = i1012
  i1010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1011[31], i1010.lightProbes)
  i1010.lightmapsMode = i1011[32]
  i1010.mixedBakeMode = i1011[33]
  i1010.environmentLightingMode = i1011[34]
  i1010.ambientProbe = new pc.SphericalHarmonicsL2(i1011[35])
  i1010.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1011[36])
  i1010.useReferenceAmbientProbe = !!i1011[37]
  request.r(i1011[38], i1011[39], 0, i1010, 'customReflection')
  request.r(i1011[40], i1011[41], 0, i1010, 'defaultReflection')
  i1010.defaultReflectionMode = i1011[42]
  i1010.defaultReflectionResolution = i1011[43]
  i1010.sunLightObjectId = i1011[44]
  i1010.pixelLightCount = i1011[45]
  i1010.defaultReflectionHDR = !!i1011[46]
  i1010.hasLightDataAsset = !!i1011[47]
  i1010.hasManualGenerate = !!i1011[48]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'lightmapColor')
  request.r(i1017[2], i1017[3], 0, i1016, 'lightmapDirection')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1018 = root || new UnityEngine.LightProbes()
  var i1019 = data
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1027 = data
  i1026.AdditionalLightsPerObjectLimit = i1027[0]
  i1026.AdditionalLightsRenderingMode = i1027[1]
  i1026.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1027[2], i1026.LightRenderingMode)
  i1026.ColorGradingLutSize = i1027[3]
  i1026.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1027[4], i1026.ColorGradingMode)
  i1026.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1027[5], i1026.MainLightRenderingMode)
  i1026.MainLightRenderingModeValue = i1027[6]
  i1026.SupportsMainLightShadows = !!i1027[7]
  i1026.MixedLightingSupported = !!i1027[8]
  i1026.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1027[9], i1026.MsaaQuality)
  i1026.MSAA = i1027[10]
  i1026.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1027[11], i1026.OpaqueDownsampling)
  i1026.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1027[12], i1026.MainLightShadowmapResolution)
  i1026.MainLightShadowmapResolutionValue = i1027[13]
  i1026.SupportsSoftShadows = !!i1027[14]
  i1026.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1027[15], i1026.SoftShadowQuality)
  i1026.SoftShadowQualityValue = i1027[16]
  i1026.ShadowDistance = i1027[17]
  i1026.ShadowCascadeCount = i1027[18]
  i1026.Cascade2Split = i1027[19]
  i1026.Cascade3Split = new pc.Vec2( i1027[20], i1027[21] )
  i1026.Cascade4Split = new pc.Vec3( i1027[22], i1027[23], i1027[24] )
  i1026.CascadeBorder = i1027[25]
  i1026.ShadowDepthBias = i1027[26]
  i1026.ShadowNormalBias = i1027[27]
  i1026.RenderScale = i1027[28]
  i1026.RequireDepthTexture = !!i1027[29]
  i1026.RequireOpaqueTexture = !!i1027[30]
  i1026.SupportsHDR = !!i1027[31]
  i1026.SupportsTerrainHoles = !!i1027[32]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1029 = data
  i1028.Disabled = i1029[0]
  i1028.PerVertex = i1029[1]
  i1028.PerPixel = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1031 = data
  i1030.LowDynamicRange = i1031[0]
  i1030.HighDynamicRange = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1033 = data
  i1032.Disabled = i1033[0]
  i1032._2x = i1033[1]
  i1032._4x = i1033[2]
  i1032._8x = i1033[3]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1035 = data
  i1034.None = i1035[0]
  i1034._2xBilinear = i1035[1]
  i1034._4xBox = i1035[2]
  i1034._4xBilinear = i1035[3]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1037 = data
  i1036._256 = i1037[0]
  i1036._512 = i1037[1]
  i1036._1024 = i1037[2]
  i1036._2048 = i1037[3]
  i1036._4096 = i1037[4]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1039 = data
  i1038.UsePipelineSettings = i1039[0]
  i1038.Low = i1039[1]
  i1038.Medium = i1039[2]
  i1038.High = i1039[3]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1043[i + 0]));
  }
  i1040.ShaderCompilationErrors = i1042
  i1040.name = i1041[1]
  i1040.guid = i1041[2]
  var i1045 = i1041[3]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.shaderDefinedKeywords = i1044
  var i1047 = i1041[4]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1047[i + 0]) );
  }
  i1040.passes = i1046
  var i1049 = i1041[5]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1049[i + 0]) );
  }
  i1040.usePasses = i1048
  var i1051 = i1041[6]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1051[i + 0]) );
  }
  i1040.defaultParameterValues = i1050
  request.r(i1041[7], i1041[8], 0, i1040, 'unityFallbackShader')
  i1040.readDepth = !!i1041[9]
  i1040.isCreatedByShaderGraph = !!i1041[10]
  i1040.compiled = !!i1041[11]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1055 = data
  i1054.shaderName = i1055[0]
  i1054.errorMessage = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1060 = root || new pc.UnityShaderPass()
  var i1061 = data
  i1060.id = i1061[0]
  i1060.subShaderIndex = i1061[1]
  i1060.name = i1061[2]
  i1060.passType = i1061[3]
  i1060.grabPassTextureName = i1061[4]
  i1060.usePass = !!i1061[5]
  i1060.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[6], i1060.zTest)
  i1060.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[7], i1060.zWrite)
  i1060.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[8], i1060.culling)
  i1060.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1061[9], i1060.blending)
  i1060.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1061[10], i1060.alphaBlending)
  i1060.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[11], i1060.colorWriteMask)
  i1060.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[12], i1060.offsetUnits)
  i1060.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[13], i1060.offsetFactor)
  i1060.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[14], i1060.stencilRef)
  i1060.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[15], i1060.stencilReadMask)
  i1060.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[16], i1060.stencilWriteMask)
  i1060.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[17], i1060.stencilOp)
  i1060.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[18], i1060.stencilOpFront)
  i1060.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[19], i1060.stencilOpBack)
  var i1063 = i1061[20]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1063[i + 0]) );
  }
  i1060.tags = i1062
  var i1065 = i1061[21]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.passDefinedKeywords = i1064
  var i1067 = i1061[22]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1067[i + 0]) );
  }
  i1060.passDefinedKeywordGroups = i1066
  var i1069 = i1061[23]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1069[i + 0]) );
  }
  i1060.variants = i1068
  var i1071 = i1061[24]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1071[i + 0]) );
  }
  i1060.excludedVariants = i1070
  i1060.hasDepthReader = !!i1061[25]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1073 = data
  i1072.val = i1073[0]
  i1072.name = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1075 = data
  i1074.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[0], i1074.src)
  i1074.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[1], i1074.dst)
  i1074.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[2], i1074.op)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1077 = data
  i1076.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[0], i1076.pass)
  i1076.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[1], i1076.fail)
  i1076.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[2], i1076.zFail)
  i1076.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[3], i1076.comp)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.value = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1084.keywords = i1086
  i1084.hasDiscard = !!i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1091 = data
  i1090.passId = i1091[0]
  i1090.subShaderIndex = i1091[1]
  var i1093 = i1091[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1090.keywords = i1092
  i1090.vertexProgram = i1091[3]
  i1090.fragmentProgram = i1091[4]
  i1090.exportedForWebGl2 = !!i1091[5]
  i1090.readDepth = !!i1091[6]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'shader')
  i1096.pass = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.type = i1101[1]
  i1100.value = new pc.Vec4( i1101[2], i1101[3], i1101[4], i1101[5] )
  i1100.textureValue = i1101[6]
  i1100.shaderPropertyFlag = i1101[7]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1103 = data
  i1102.name = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'texture')
  i1102.aabb = i1103[3]
  i1102.vertices = i1103[4]
  i1102.triangles = i1103[5]
  i1102.textureRect = UnityEngine.Rect.MinMaxRect(i1103[6], i1103[7], i1103[8], i1103[9])
  i1102.packedRect = UnityEngine.Rect.MinMaxRect(i1103[10], i1103[11], i1103[12], i1103[13])
  i1102.border = new pc.Vec4( i1103[14], i1103[15], i1103[16], i1103[17] )
  i1102.transparency = i1103[18]
  i1102.bounds = i1103[19]
  i1102.pixelsPerUnit = i1103[20]
  i1102.textureWidth = i1103[21]
  i1102.textureHeight = i1103[22]
  i1102.nativeSize = new pc.Vec2( i1103[23], i1103[24] )
  i1102.pivot = new pc.Vec2( i1103[25], i1103[26] )
  i1102.textureRectOffset = new pc.Vec2( i1103[27], i1103[28] )
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1105 = data
  i1104.name = i1105[0]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.wrapMode = i1107[1]
  i1106.isLooping = !!i1107[2]
  i1106.length = i1107[3]
  var i1109 = i1107[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1109[i + 0]) );
  }
  i1106.curves = i1108
  var i1111 = i1107[5]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1111[i + 0]) );
  }
  i1106.events = i1110
  i1106.halfPrecision = !!i1107[6]
  i1106._frameRate = i1107[7]
  i1106.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1107[8], i1106.localBounds)
  i1106.hasMuscleCurves = !!i1107[9]
  var i1113 = i1107[10]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1106.clipMuscleConstant = i1112
  i1106.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1107[11], i1106.clipBindingConstant)
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1117 = data
  i1116.path = i1117[0]
  i1116.hash = i1117[1]
  i1116.componentType = i1117[2]
  i1116.property = i1117[3]
  i1116.keys = i1117[4]
  var i1119 = i1117[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1119[i + 0]) );
  }
  i1116.objectReferenceKeys = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1123 = data
  i1122.time = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'value')
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1127 = data
  i1126.functionName = i1127[0]
  i1126.floatParameter = i1127[1]
  i1126.intParameter = i1127[2]
  i1126.stringParameter = i1127[3]
  request.r(i1127[4], i1127[5], 0, i1126, 'objectReferenceParameter')
  i1126.time = i1127[6]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1129 = data
  i1128.center = new pc.Vec3( i1129[0], i1129[1], i1129[2] )
  i1128.extends = new pc.Vec3( i1129[3], i1129[4], i1129[5] )
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1132.genericBindings = i1134
  var i1137 = i1133[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1132.pptrCurveMapping = i1136
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.blendParameter = i1139[1]
  i1138.blendParameterY = i1139[2]
  i1138.blendType = i1139[3]
  var i1141 = i1139[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1141[i + 0]) );
  }
  i1138.children = i1140
  i1138.useAutomaticThresholds = !!i1139[5]
  i1138.minThreshold = i1139[6]
  i1138.maxThreshold = i1139[7]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'motion')
  i1144.threshold = i1145[2]
  i1144.position = new pc.Vec2( i1145[3], i1145[4] )
  i1144.timeScale = i1145[5]
  i1144.cycleOffset = i1145[6]
  i1144.directBlendParameter = i1145[7]
  i1144.mirror = !!i1145[8]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.ascent = i1147[1]
  i1146.originalLineHeight = i1147[2]
  i1146.fontSize = i1147[3]
  var i1149 = i1147[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1149[i + 0]) );
  }
  i1146.characterInfo = i1148
  request.r(i1147[5], i1147[6], 0, i1146, 'texture')
  i1146.originalFontSize = i1147[7]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1153 = data
  i1152.index = i1153[0]
  i1152.advance = i1153[1]
  i1152.bearing = i1153[2]
  i1152.glyphWidth = i1153[3]
  i1152.glyphHeight = i1153[4]
  i1152.minX = i1153[5]
  i1152.maxX = i1153[6]
  i1152.minY = i1153[7]
  i1152.maxY = i1153[8]
  i1152.uvBottomLeftX = i1153[9]
  i1152.uvBottomLeftY = i1153[10]
  i1152.uvBottomRightX = i1153[11]
  i1152.uvBottomRightY = i1153[12]
  i1152.uvTopLeftX = i1153[13]
  i1152.uvTopLeftY = i1153[14]
  i1152.uvTopRightX = i1153[15]
  i1152.uvTopRightY = i1153[16]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1155 = data
  i1154.name = i1155[0]
  var i1157 = i1155[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1157[i + 0]) );
  }
  i1154.layers = i1156
  var i1159 = i1155[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1159[i + 0]) );
  }
  i1154.parameters = i1158
  i1154.animationClips = i1155[3]
  i1154.avatarUnsupported = i1155[4]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.defaultWeight = i1163[1]
  i1162.blendingMode = i1163[2]
  i1162.avatarMask = i1163[3]
  i1162.syncedLayerIndex = i1163[4]
  i1162.syncedLayerAffectsTiming = !!i1163[5]
  i1162.syncedLayers = i1163[6]
  i1162.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1163[7], i1162.stateMachine)
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  i1164.path = i1165[2]
  var i1167 = i1165[3]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1167[i + 0]) );
  }
  i1164.states = i1166
  var i1169 = i1165[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1169[i + 0]) );
  }
  i1164.machines = i1168
  var i1171 = i1165[5]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1171[i + 0]) );
  }
  i1164.entryStateTransitions = i1170
  var i1173 = i1165[6]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1173[i + 0]) );
  }
  i1164.exitStateTransitions = i1172
  var i1175 = i1165[7]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1175[i + 0]) );
  }
  i1164.anyStateTransitions = i1174
  i1164.defaultStateId = i1165[8]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  i1178.cycleOffset = i1179[2]
  i1178.cycleOffsetParameter = i1179[3]
  i1178.cycleOffsetParameterActive = !!i1179[4]
  i1178.mirror = !!i1179[5]
  i1178.mirrorParameter = i1179[6]
  i1178.mirrorParameterActive = !!i1179[7]
  i1178.motionId = i1179[8]
  i1178.nameHash = i1179[9]
  i1178.fullPathHash = i1179[10]
  i1178.speed = i1179[11]
  i1178.speedParameter = i1179[12]
  i1178.speedParameterActive = !!i1179[13]
  i1178.tag = i1179[14]
  i1178.tagHash = i1179[15]
  i1178.writeDefaultValues = !!i1179[16]
  var i1181 = i1179[17]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 2, i1180, '')
  }
  i1178.behaviours = i1180
  var i1183 = i1179[18]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1183[i + 0]) );
  }
  i1178.transitions = i1182
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1189 = data
  i1188.fullPath = i1189[0]
  i1188.canTransitionToSelf = !!i1189[1]
  i1188.duration = i1189[2]
  i1188.exitTime = i1189[3]
  i1188.hasExitTime = !!i1189[4]
  i1188.hasFixedDuration = !!i1189[5]
  i1188.interruptionSource = i1189[6]
  i1188.offset = i1189[7]
  i1188.orderedInterruption = !!i1189[8]
  i1188.destinationStateId = i1189[9]
  i1188.isExit = !!i1189[10]
  i1188.mute = !!i1189[11]
  i1188.solo = !!i1189[12]
  var i1191 = i1189[13]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1191[i + 0]) );
  }
  i1188.conditions = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1195 = data
  i1194.mode = i1195[0]
  i1194.parameter = i1195[1]
  i1194.threshold = i1195[2]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1201 = data
  i1200.destinationStateId = i1201[0]
  i1200.isExit = !!i1201[1]
  i1200.mute = !!i1201[2]
  i1200.solo = !!i1201[3]
  var i1203 = i1201[4]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1203[i + 0]) );
  }
  i1200.conditions = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1207 = data
  i1206.defaultBool = !!i1207[0]
  i1206.defaultFloat = i1207[1]
  i1206.defaultInt = i1207[2]
  i1206.name = i1207[3]
  i1206.nameHash = i1207[4]
  i1206.type = i1207[5]
  return i1206
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1209 = data
  var i1211 = i1209[0]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('UnityEngine.InputSystem.InputActionMap', i1211[i + 0]) );
  }
  i1208.m_ActionMaps = i1210
  var i1213 = i1209[1]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1213[i + 0]) );
  }
  i1208.m_ControlSchemes = i1212
  i1208.m_IsProjectWide = !!i1209[2]
  return i1208
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1217 = data
  i1216.m_Name = i1217[0]
  i1216.m_Id = i1217[1]
  request.r(i1217[2], i1217[3], 0, i1216, 'm_Asset')
  var i1219 = i1217[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('UnityEngine.InputSystem.InputAction', i1219[i + 0]) );
  }
  i1216.m_Actions = i1218
  var i1221 = i1217[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('UnityEngine.InputSystem.InputBinding', i1221[i + 0]) );
  }
  i1216.m_Bindings = i1220
  return i1216
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_Type = i1225[1]
  i1224.m_ExpectedControlType = i1225[2]
  i1224.m_Id = i1225[3]
  i1224.m_Processors = i1225[4]
  i1224.m_Interactions = i1225[5]
  var i1227 = i1225[6]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('UnityEngine.InputSystem.InputBinding', i1227[i + 0]) );
  }
  i1224.m_SingletonActionBindings = i1226
  i1224.m_Flags = i1225[7]
  return i1224
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1231 = data
  i1230.m_Name = i1231[0]
  i1230.m_Id = i1231[1]
  i1230.m_Path = i1231[2]
  i1230.m_Interactions = i1231[3]
  i1230.m_Processors = i1231[4]
  i1230.m_Groups = i1231[5]
  i1230.m_Action = i1231[6]
  i1230.m_Flags = i1231[7]
  return i1230
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1235 = data
  i1234.m_Name = i1235[0]
  i1234.m_BindingGroup = i1235[1]
  var i1237 = i1235[2]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1237[i + 0]) );
  }
  i1234.m_DeviceRequirements = i1236
  return i1234
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1241 = data
  i1240.m_ControlPath = i1241[0]
  i1240.m_Flags = i1241[1]
  return i1240
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'm_Asset')
  i1242.m_ActionId = i1243[2]
  return i1242
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1244.components = i1246
  return i1244
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1251 = data
  i1250.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1251[0], i1250.skipIterations)
  i1250.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[1], i1250.threshold)
  i1250.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[2], i1250.intensity)
  i1250.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1251[3], i1250.scatter)
  i1250.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[4], i1250.clamp)
  i1250.tint = request.d('UnityEngine.Rendering.ColorParameter', i1251[5], i1250.tint)
  i1250.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1251[6], i1250.highQualityFiltering)
  i1250.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1251[7], i1250.downscale)
  i1250.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1251[8], i1250.maxIterations)
  i1250.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1251[9], i1250.dirtTexture)
  i1250.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[10], i1250.dirtIntensity)
  i1250.active = !!i1251[11]
  return i1250
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1253 = data
  i1252.m_Value = i1253[0]
  i1252.m_OverrideState = !!i1253[1]
  return i1252
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1255 = data
  i1254.m_Value = i1255[0]
  i1254.m_OverrideState = !!i1255[1]
  return i1254
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1257 = data
  i1256.m_Value = i1257[0]
  i1256.m_OverrideState = !!i1257[1]
  return i1256
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1259 = data
  i1258.m_Value = new pc.Color(i1259[0], i1259[1], i1259[2], i1259[3])
  i1258.m_OverrideState = !!i1259[4]
  return i1258
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1261 = data
  i1260.m_Value = !!i1261[0]
  i1260.m_OverrideState = !!i1261[1]
  return i1260
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1263 = data
  i1262.m_Value = i1263[0]
  i1262.m_OverrideState = !!i1263[1]
  return i1262
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1265 = data
  i1264.dimension = i1265[0]
  request.r(i1265[1], i1265[2], 0, i1264, 'm_Value')
  i1264.m_OverrideState = !!i1265[3]
  return i1264
}

Deserializers["UnityEngine.Rendering.Universal.FilmGrain"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.Rendering.Universal.FilmGrain' )
  var i1267 = data
  i1266.type = request.d('UnityEngine.Rendering.Universal.FilmGrainLookupParameter', i1267[0], i1266.type)
  i1266.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1267[1], i1266.intensity)
  i1266.response = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1267[2], i1266.response)
  i1266.texture = request.d('UnityEngine.Rendering.NoInterpTextureParameter', i1267[3], i1266.texture)
  i1266.active = !!i1267[4]
  return i1266
}

Deserializers["UnityEngine.Rendering.Universal.FilmGrainLookupParameter"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.Rendering.Universal.FilmGrainLookupParameter' )
  var i1269 = data
  i1268.m_Value = i1269[0]
  i1268.m_OverrideState = !!i1269[1]
  return i1268
}

Deserializers["UnityEngine.Rendering.NoInterpTextureParameter"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.Rendering.NoInterpTextureParameter' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'm_Value')
  i1270.m_OverrideState = !!i1271[2]
  return i1270
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1273 = data
  i1272.color = request.d('UnityEngine.Rendering.ColorParameter', i1273[0], i1272.color)
  i1272.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1273[1], i1272.center)
  i1272.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1273[2], i1272.intensity)
  i1272.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1273[3], i1272.smoothness)
  i1272.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1273[4], i1272.rounded)
  i1272.active = !!i1273[5]
  return i1272
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1275 = data
  i1274.m_Value = new pc.Vec2( i1275[0], i1275[1] )
  i1274.m_OverrideState = !!i1275[2]
  return i1274
}

Deserializers["UnityEngine.Rendering.Universal.ColorAdjustments"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Rendering.Universal.ColorAdjustments' )
  var i1277 = data
  i1276.postExposure = request.d('UnityEngine.Rendering.FloatParameter', i1277[0], i1276.postExposure)
  i1276.contrast = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1277[1], i1276.contrast)
  i1276.colorFilter = request.d('UnityEngine.Rendering.ColorParameter', i1277[2], i1276.colorFilter)
  i1276.hueShift = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1277[3], i1276.hueShift)
  i1276.saturation = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1277[4], i1276.saturation)
  i1276.active = !!i1277[5]
  return i1276
}

Deserializers["UnityEngine.Rendering.FloatParameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.Rendering.FloatParameter' )
  var i1279 = data
  i1278.m_Value = i1279[0]
  i1278.m_OverrideState = !!i1279[1]
  return i1278
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1281 = data
  i1280.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1281[0], i1280.mode)
  i1280.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1281[1], i1280.neutralHDRRangeReductionMode)
  i1280.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1281[2], i1280.acesPreset)
  i1280.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1281[3], i1280.hueShiftAmount)
  i1280.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1281[4], i1280.detectPaperWhite)
  i1280.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1281[5], i1280.paperWhite)
  i1280.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1281[6], i1280.detectBrightnessLimits)
  i1280.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1281[7], i1280.minNits)
  i1280.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1281[8], i1280.maxNits)
  i1280.active = !!i1281[9]
  return i1280
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1283 = data
  i1282.m_Value = i1283[0]
  i1282.m_OverrideState = !!i1283[1]
  return i1282
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1285 = data
  i1284.m_Value = i1285[0]
  i1284.m_OverrideState = !!i1285[1]
  return i1284
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1287 = data
  i1286.m_Value = i1287[0]
  i1286.m_OverrideState = !!i1287[1]
  return i1286
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1289 = data
  i1288.useSafeMode = !!i1289[0]
  i1288.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1289[1], i1288.safeModeOptions)
  i1288.timeScale = i1289[2]
  i1288.unscaledTimeScale = i1289[3]
  i1288.useSmoothDeltaTime = !!i1289[4]
  i1288.maxSmoothUnscaledTime = i1289[5]
  i1288.rewindCallbackMode = i1289[6]
  i1288.showUnityEditorReport = !!i1289[7]
  i1288.logBehaviour = i1289[8]
  i1288.drawGizmos = !!i1289[9]
  i1288.defaultRecyclable = !!i1289[10]
  i1288.defaultAutoPlay = i1289[11]
  i1288.defaultUpdateType = i1289[12]
  i1288.defaultTimeScaleIndependent = !!i1289[13]
  i1288.defaultEaseType = i1289[14]
  i1288.defaultEaseOvershootOrAmplitude = i1289[15]
  i1288.defaultEasePeriod = i1289[16]
  i1288.defaultAutoKill = !!i1289[17]
  i1288.defaultLoopType = i1289[18]
  i1288.debugMode = !!i1289[19]
  i1288.debugStoreTargetId = !!i1289[20]
  i1288.showPreviewPanel = !!i1289[21]
  i1288.storeSettingsLocation = i1289[22]
  i1288.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1289[23], i1288.modules)
  i1288.createASMDEF = !!i1289[24]
  i1288.showPlayingTweens = !!i1289[25]
  i1288.showPausedTweens = !!i1289[26]
  return i1288
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1291 = data
  i1290.logBehaviour = i1291[0]
  i1290.nestedTweenFailureBehaviour = i1291[1]
  return i1290
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1293 = data
  i1292.showPanel = !!i1293[0]
  i1292.audioEnabled = !!i1293[1]
  i1292.physicsEnabled = !!i1293[2]
  i1292.physics2DEnabled = !!i1293[3]
  i1292.spriteEnabled = !!i1293[4]
  i1292.uiEnabled = !!i1293[5]
  i1292.textMeshProEnabled = !!i1293[6]
  i1292.tk2DEnabled = !!i1293[7]
  i1292.deAudioEnabled = !!i1293[8]
  i1292.deUnityExtendedEnabled = !!i1293[9]
  i1292.epoOutlineEnabled = !!i1293[10]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1297[i + 0]) );
  }
  i1294.files = i1296
  i1294.componentToPrefabIds = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1301 = data
  i1300.path = i1301[0]
  request.r(i1301[1], i1301[2], 0, i1300, 'unityObject')
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1305[i + 0]) );
  }
  i1302.scriptsExecutionOrder = i1304
  var i1307 = i1303[1]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1307[i + 0]) );
  }
  i1302.sortingLayers = i1306
  var i1309 = i1303[2]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1309[i + 0]) );
  }
  i1302.cullingLayers = i1308
  i1302.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1303[3], i1302.timeSettings)
  i1302.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1303[4], i1302.physicsSettings)
  i1302.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1303[5], i1302.physics2DSettings)
  i1302.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1303[6], i1302.qualitySettings)
  i1302.enableRealtimeShadows = !!i1303[7]
  i1302.enableAutoInstancing = !!i1303[8]
  i1302.enableDynamicBatching = !!i1303[9]
  i1302.lightmapEncodingQuality = i1303[10]
  i1302.desiredColorSpace = i1303[11]
  var i1311 = i1303[12]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( i1311[i + 0] );
  }
  i1302.allTags = i1310
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1315 = data
  i1314.name = i1315[0]
  i1314.value = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  i1318.value = i1319[2]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.name = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1325 = data
  i1324.fixedDeltaTime = i1325[0]
  i1324.maximumDeltaTime = i1325[1]
  i1324.timeScale = i1325[2]
  i1324.maximumParticleTimestep = i1325[3]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1327 = data
  i1326.gravity = new pc.Vec3( i1327[0], i1327[1], i1327[2] )
  i1326.defaultSolverIterations = i1327[3]
  i1326.bounceThreshold = i1327[4]
  i1326.autoSyncTransforms = !!i1327[5]
  i1326.autoSimulation = !!i1327[6]
  var i1329 = i1327[7]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1329[i + 0]) );
  }
  i1326.collisionMatrix = i1328
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1333 = data
  i1332.enabled = !!i1333[0]
  i1332.layerId = i1333[1]
  i1332.otherLayerId = i1333[2]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'material')
  i1334.gravity = new pc.Vec2( i1335[2], i1335[3] )
  i1334.positionIterations = i1335[4]
  i1334.velocityIterations = i1335[5]
  i1334.velocityThreshold = i1335[6]
  i1334.maxLinearCorrection = i1335[7]
  i1334.maxAngularCorrection = i1335[8]
  i1334.maxTranslationSpeed = i1335[9]
  i1334.maxRotationSpeed = i1335[10]
  i1334.baumgarteScale = i1335[11]
  i1334.baumgarteTOIScale = i1335[12]
  i1334.timeToSleep = i1335[13]
  i1334.linearSleepTolerance = i1335[14]
  i1334.angularSleepTolerance = i1335[15]
  i1334.defaultContactOffset = i1335[16]
  i1334.autoSimulation = !!i1335[17]
  i1334.queriesHitTriggers = !!i1335[18]
  i1334.queriesStartInColliders = !!i1335[19]
  i1334.callbacksOnDisable = !!i1335[20]
  i1334.reuseCollisionCallbacks = !!i1335[21]
  i1334.autoSyncTransforms = !!i1335[22]
  var i1337 = i1335[23]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1337[i + 0]) );
  }
  i1334.collisionMatrix = i1336
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1341 = data
  i1340.enabled = !!i1341[0]
  i1340.layerId = i1341[1]
  i1340.otherLayerId = i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1343 = data
  var i1345 = i1343[0]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1345[i + 0]) );
  }
  i1342.qualityLevels = i1344
  var i1347 = i1343[1]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( i1347[i + 0] );
  }
  i1342.names = i1346
  i1342.shadows = i1343[2]
  i1342.anisotropicFiltering = i1343[3]
  i1342.antiAliasing = i1343[4]
  i1342.lodBias = i1343[5]
  i1342.shadowCascades = i1343[6]
  i1342.shadowDistance = i1343[7]
  i1342.shadowmaskMode = i1343[8]
  i1342.shadowProjection = i1343[9]
  i1342.shadowResolution = i1343[10]
  i1342.softParticles = !!i1343[11]
  i1342.softVegetation = !!i1343[12]
  i1342.activeColorSpace = i1343[13]
  i1342.desiredColorSpace = i1343[14]
  i1342.masterTextureLimit = i1343[15]
  i1342.maxQueuedFrames = i1343[16]
  i1342.particleRaycastBudget = i1343[17]
  i1342.pixelLightCount = i1343[18]
  i1342.realtimeReflectionProbes = !!i1343[19]
  i1342.shadowCascade2Split = i1343[20]
  i1342.shadowCascade4Split = new pc.Vec3( i1343[21], i1343[22], i1343[23] )
  i1342.streamingMipmapsActive = !!i1343[24]
  i1342.vSyncCount = i1343[25]
  i1342.asyncUploadBufferSize = i1343[26]
  i1342.asyncUploadTimeSlice = i1343[27]
  i1342.billboardsFaceCameraPosition = !!i1343[28]
  i1342.shadowNearPlaneOffset = i1343[29]
  i1342.streamingMipmapsMemoryBudget = i1343[30]
  i1342.maximumLODLevel = i1343[31]
  i1342.streamingMipmapsAddAllCameras = !!i1343[32]
  i1342.streamingMipmapsMaxLevelReduction = i1343[33]
  i1342.streamingMipmapsRenderersPerFrame = i1343[34]
  i1342.resolutionScalingFixedDPIFactor = i1343[35]
  i1342.streamingMipmapsMaxFileIORequests = i1343[36]
  i1342.currentQualityLevel = i1343[37]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1351 = data
  i1350.name = i1351[0]
  var i1353 = i1351[1]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1353[i + 0]) );
  }
  i1350.tos = i1352
  var i1355 = i1351[2]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1350.constant = i1354
  i1350.isValid = !!i1351[3]
  i1350.isHuman = !!i1351[4]
  i1350.hasRootMotion = !!i1351[5]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1359 = data
  i1358.hash = i1359[0]
  i1358.path = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask' )
  var i1361 = data
  i1360.name = i1361[0]
  var i1363 = i1361[1]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement', i1363[i + 0]) );
  }
  i1360.elements = i1362
  i1360.mask = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement' )
  var i1367 = data
  i1366.path = i1367[0]
  i1366.weight = i1367[1]
  i1366.hash = i1367[2]
  return i1366
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask":{"name":0,"elements":1,"mask":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement":{"path":0,"weight":1,"hash":2}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[18],"85":[59],"86":[14],"87":[14],"88":[14],"89":[14],"90":[14],"91":[14],"92":[14],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[94],"101":[94],"102":[94],"103":[94],"104":[94],"105":[94],"106":[94],"107":[59],"108":[22],"109":[110],"111":[110],"23":[0],"68":[112],"113":[0],"114":[59],"60":[59],"57":[56],"115":[116],"117":[0],"118":[0],"25":[23],"3":[1,0],"119":[0],"24":[23],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[0],"127":[0],"128":[0],"129":[1,0],"130":[0],"131":[0],"132":[0],"133":[0],"12":[1,0],"134":[0],"135":[38],"136":[38],"137":[38],"138":[38],"139":[59],"140":[59],"141":[116],"39":[38],"142":[23],"143":[116]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","FloatingJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.CapsuleCollider","Npc","UnityEngine.Animator","UnityEngine.GameObject","UnityEngine.UI.Text","StackingPlace","UnityEngine.Rigidbody","ObjectStacker","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","UnityEngine.Font","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider","StackItem","EnemyAI","DamageSystem","Billboard","UnityEngine.SpriteRenderer","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager","ObjectQueueManager","EnemySpawner","PoolingManager","GameAssets.GameSet.GameDevUtils.Managers.SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Button","PlayerController","DG.Tweening.DOTweenAnimation","UnityEngine.OcclusionArea","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.MeshCollider","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","CameraFollow","UnityEngine.Camera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.AudioListener","PlayerAttack","AnimatorController","ArrowPointer","CuustomerZone","UnityEngine.Terrain","UnityEngine.TerrainCollider","CurrencyDeductionOnCollision","UnityEngine.Cubemap","UnityEngine.AnimationClip","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.FilmGrain","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Rendering.Universal.ColorAdjustments","UnityEngine.Rendering.Universal.Tonemapping","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "PlayableAd";

Deserializers.lunaInitializationTime = "08/06/2025 10:10:35";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Lava";

Deserializers.lunaAppID = "31886";

Deserializers.projectId = "f06ae07000e6225419912104b0ab8f31";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.11.2\ncom.unity.render-pipelines.universal: 17.0.3\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "fcda5950-b3b9-45e9-bb8d-bc4c5b325eee";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


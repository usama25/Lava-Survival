var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSpring' )
  var i695 = data
  i694.spring = i695[0]
  i694.damper = i695[1]
  i694.targetPosition = i695[2]
  return i694
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointMotor' )
  var i697 = data
  i696.m_TargetVelocity = i697[0]
  i696.m_Force = i697[1]
  i696.m_FreeSpin = i697[2]
  return i696
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointLimits' )
  var i699 = data
  i698.m_Min = i699[0]
  i698.m_Max = i699[1]
  i698.m_Bounciness = i699[2]
  i698.m_BounceMinVelocity = i699[3]
  i698.m_ContactDistance = i699[4]
  i698.minBounce = i699[5]
  i698.maxBounce = i699[6]
  return i698
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointDrive' )
  var i701 = data
  i700.m_PositionSpring = i701[0]
  i700.m_PositionDamper = i701[1]
  i700.m_MaximumForce = i701[2]
  i700.m_UseAcceleration = i701[3]
  return i700
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i703 = data
  i702.m_Spring = i703[0]
  i702.m_Damper = i703[1]
  return i702
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i705 = data
  i704.m_Limit = i705[0]
  i704.m_Bounciness = i705[1]
  i704.m_ContactDistance = i705[2]
  return i704
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i707 = data
  i706.m_ExtremumSlip = i707[0]
  i706.m_ExtremumValue = i707[1]
  i706.m_AsymptoteSlip = i707[2]
  i706.m_AsymptoteValue = i707[3]
  i706.m_Stiffness = i707[4]
  return i706
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i709 = data
  i708.m_LowerAngle = i709[0]
  i708.m_UpperAngle = i709[1]
  return i708
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i711 = data
  i710.m_MotorSpeed = i711[0]
  i710.m_MaximumMotorTorque = i711[1]
  return i710
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i713 = data
  i712.m_DampingRatio = i713[0]
  i712.m_Frequency = i713[1]
  i712.m_Angle = i713[2]
  return i712
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i715 = data
  i714.m_LowerTranslation = i715[0]
  i714.m_UpperTranslation = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i717 = data
  i716.name = i717[0]
  i716.width = i717[1]
  i716.height = i717[2]
  i716.mipmapCount = i717[3]
  i716.anisoLevel = i717[4]
  i716.filterMode = i717[5]
  i716.hdr = !!i717[6]
  i716.format = i717[7]
  i716.wrapMode = i717[8]
  i716.alphaIsTransparency = !!i717[9]
  i716.alphaSource = i717[10]
  i716.graphicsFormat = i717[11]
  i716.sRGBTexture = !!i717[12]
  i716.desiredColorSpace = i717[13]
  i716.wrapU = i717[14]
  i716.wrapV = i717[15]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i719 = data
  i718.pivot = new pc.Vec2( i719[0], i719[1] )
  i718.anchorMin = new pc.Vec2( i719[2], i719[3] )
  i718.anchorMax = new pc.Vec2( i719[4], i719[5] )
  i718.sizeDelta = new pc.Vec2( i719[6], i719[7] )
  i718.anchoredPosition3D = new pc.Vec3( i719[8], i719[9], i719[10] )
  i718.rotation = new pc.Quat(i719[11], i719[12], i719[13], i719[14])
  i718.scale = new pc.Vec3( i719[15], i719[16], i719[17] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i721 = data
  i720.cullTransparentMesh = !!i721[0]
  return i720
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Image' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Sprite')
  i722.m_Type = i723[2]
  i722.m_PreserveAspect = !!i723[3]
  i722.m_FillCenter = !!i723[4]
  i722.m_FillMethod = i723[5]
  i722.m_FillAmount = i723[6]
  i722.m_FillClockwise = !!i723[7]
  i722.m_FillOrigin = i723[8]
  i722.m_UseSpriteMesh = !!i723[9]
  i722.m_PixelsPerUnitMultiplier = i723[10]
  request.r(i723[11], i723[12], 0, i722, 'm_Material')
  i722.m_Maskable = !!i723[13]
  i722.m_Color = new pc.Color(i723[14], i723[15], i723[16], i723[17])
  i722.m_RaycastTarget = !!i723[18]
  i722.m_RaycastPadding = new pc.Vec4( i723[19], i723[20], i723[21], i723[22] )
  return i722
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i724 = root || request.c( 'FloatingJoystick' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'background')
  i724.handleRange = i725[2]
  i724.deadZone = i725[3]
  i724.axisOptions = i725[4]
  i724.snapX = !!i725[5]
  i724.snapY = !!i725[6]
  request.r(i725[7], i725[8], 0, i724, 'handle')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i727 = data
  i726.name = i727[0]
  i726.tagId = i727[1]
  i726.enabled = !!i727[2]
  i726.isStatic = !!i727[3]
  i726.layer = i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i729 = data
  i728.position = new pc.Vec3( i729[0], i729[1], i729[2] )
  i728.scale = new pc.Vec3( i729[3], i729[4], i729[5] )
  i728.rotation = new pc.Quat(i729[6], i729[7], i729[8], i729[9])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i731 = data
  i730.center = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.radius = i731[3]
  i730.height = i731[4]
  i730.direction = i731[5]
  i730.enabled = !!i731[6]
  i730.isTrigger = !!i731[7]
  request.r(i731[8], i731[9], 0, i730, 'material')
  return i730
}

Deserializers["Npc"] = function (request, data, root) {
  var i732 = root || request.c( 'Npc' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'myAnim')
  i732.once = !!i733[2]
  request.r(i733[3], i733[4], 0, i732, 'myStackingPlace')
  request.r(i733[5], i733[6], 0, i732, 'popUp')
  request.r(i733[7], i733[8], 0, i732, 'requiredMeat')
  request.r(i733[9], i733[10], 0, i732, 'fillImage')
  return i732
}

Deserializers["StackingPlace"] = function (request, data, root) {
  var i734 = root || request.c( 'StackingPlace' )
  var i735 = data
  i734.acceptedType = i735[0]
  i734.transferInterval = i735[1]
  i734.autoStack = !!i735[2]
  i734.isGiver = !!i735[3]
  request.r(i735[4], i735[5], 0, i734, 'autoGiverStacker')
  i734.initialDelay = i735[6]
  i734.objectsRequired = i735[7]
  request.r(i735[8], i735[9], 0, i734, 'takerStacker')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i737 = data
  i736.mass = i737[0]
  i736.drag = i737[1]
  i736.angularDrag = i737[2]
  i736.useGravity = !!i737[3]
  i736.isKinematic = !!i737[4]
  i736.constraints = i737[5]
  i736.maxAngularVelocity = i737[6]
  i736.collisionDetectionMode = i737[7]
  i736.interpolation = i737[8]
  return i736
}

Deserializers["ObjectStacker"] = function (request, data, root) {
  var i738 = root || request.c( 'ObjectStacker' )
  var i739 = data
  i738.itemType = i739[0]
  i738.stackMode = i739[1]
  request.r(i739[2], i739[3], 0, i738, 'origin')
  i738.verticalOffset = new pc.Vec3( i739[4], i739[5], i739[6] )
  i738.gridColumns = i739[7]
  i738.gridRows = i739[8]
  i738.gridCellSize = new pc.Vec3( i739[9], i739[10], i739[11] )
  i738.layerOffset = new pc.Vec3( i739[12], i739[13], i739[14] )
  i738.throwUpHeight = i739[15]
  i738.randomXZRange = i739[16]
  i738.rotationMagnitude = i739[17]
  i738.upDuration = i739[18]
  i738.moveDuration = i739[19]
  i738.isPlayer = !!i739[20]
  i738.isCashUtilizer = !!i739[21]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'animatorController')
  request.r(i741[2], i741[3], 0, i740, 'avatar')
  i740.updateMode = i741[4]
  i740.hasTransformHierarchy = !!i741[5]
  i740.applyRootMotion = !!i741[6]
  var i743 = i741[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.humanBones = i742
  i740.enabled = !!i741[8]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i747 = data
  i746.enabled = !!i747[0]
  request.r(i747[1], i747[2], 0, i746, 'sharedMaterial')
  var i749 = i747[3]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sharedMaterials = i748
  i746.receiveShadows = !!i747[4]
  i746.shadowCastingMode = i747[5]
  i746.sortingLayerID = i747[6]
  i746.sortingOrder = i747[7]
  i746.lightmapIndex = i747[8]
  i746.lightmapSceneIndex = i747[9]
  i746.lightmapScaleOffset = new pc.Vec4( i747[10], i747[11], i747[12], i747[13] )
  i746.lightProbeUsage = i747[14]
  i746.reflectionProbeUsage = i747[15]
  request.r(i747[16], i747[17], 0, i746, 'sharedMesh')
  var i751 = i747[18]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i746.bones = i750
  i746.updateWhenOffscreen = !!i747[19]
  i746.localBounds = i747[20]
  request.r(i747[21], i747[22], 0, i746, 'rootBone')
  var i753 = i747[23]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i753[i + 0]) );
  }
  i746.blendShapesWeights = i752
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i759 = data
  i758.weight = i759[0]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'sharedMesh')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'additionalVertexStreams')
  i762.enabled = !!i763[2]
  request.r(i763[3], i763[4], 0, i762, 'sharedMaterial')
  var i765 = i763[5]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[6]
  i762.shadowCastingMode = i763[7]
  i762.sortingLayerID = i763[8]
  i762.sortingOrder = i763[9]
  i762.lightmapIndex = i763[10]
  i762.lightmapSceneIndex = i763[11]
  i762.lightmapScaleOffset = new pc.Vec4( i763[12], i763[13], i763[14], i763[15] )
  i762.lightProbeUsage = i763[16]
  i762.reflectionProbeUsage = i763[17]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i767 = data
  i766.enabled = !!i767[0]
  i766.planeDistance = i767[1]
  i766.referencePixelsPerUnit = i767[2]
  i766.isFallbackOverlay = !!i767[3]
  i766.renderMode = i767[4]
  i766.renderOrder = i767[5]
  i766.sortingLayerName = i767[6]
  i766.sortingOrder = i767[7]
  i766.scaleFactor = i767[8]
  request.r(i767[9], i767[10], 0, i766, 'worldCamera')
  i766.overrideSorting = !!i767[11]
  i766.pixelPerfect = !!i767[12]
  i766.targetDisplay = i767[13]
  i766.overridePixelPerfect = !!i767[14]
  return i766
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i769 = data
  i768.m_UiScaleMode = i769[0]
  i768.m_ReferencePixelsPerUnit = i769[1]
  i768.m_ScaleFactor = i769[2]
  i768.m_ReferenceResolution = new pc.Vec2( i769[3], i769[4] )
  i768.m_ScreenMatchMode = i769[5]
  i768.m_MatchWidthOrHeight = i769[6]
  i768.m_PhysicalUnit = i769[7]
  i768.m_FallbackScreenDPI = i769[8]
  i768.m_DefaultSpriteDPI = i769[9]
  i768.m_DynamicPixelsPerUnit = i769[10]
  i768.m_PresetInfoIsWorld = !!i769[11]
  return i768
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i771 = data
  i770.m_IgnoreReversedGraphics = !!i771[0]
  i770.m_BlockingObjects = i771[1]
  i770.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i771[2] )
  return i770
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Outline' )
  var i773 = data
  i772.m_EffectColor = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.m_EffectDistance = new pc.Vec2( i773[4], i773[5] )
  i772.m_UseGraphicAlpha = !!i773[6]
  return i772
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Text' )
  var i775 = data
  i774.m_FontData = request.d('UnityEngine.UI.FontData', i775[0], i774.m_FontData)
  i774.m_Text = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[4]
  i774.m_Color = new pc.Color(i775[5], i775[6], i775[7], i775[8])
  i774.m_RaycastTarget = !!i775[9]
  i774.m_RaycastPadding = new pc.Vec4( i775[10], i775[11], i775[12], i775[13] )
  return i774
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.FontData' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Font')
  i776.m_FontSize = i777[2]
  i776.m_FontStyle = i777[3]
  i776.m_BestFit = !!i777[4]
  i776.m_MinSize = i777[5]
  i776.m_MaxSize = i777[6]
  i776.m_Alignment = i777[7]
  i776.m_AlignByGeometry = !!i777[8]
  i776.m_RichText = !!i777[9]
  i776.m_HorizontalOverflow = i777[10]
  i776.m_VerticalOverflow = i777[11]
  i776.m_LineSpacing = i777[12]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i778 = root || new pc.UnityMaterial()
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'shader')
  i778.renderQueue = i779[3]
  i778.enableInstancing = !!i779[4]
  var i781 = i779[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i781[i + 0]) );
  }
  i778.floatParameters = i780
  var i783 = i779[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i783[i + 0]) );
  }
  i778.colorParameters = i782
  var i785 = i779[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i785[i + 0]) );
  }
  i778.vectorParameters = i784
  var i787 = i779[8]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i787[i + 0]) );
  }
  i778.textureParameters = i786
  var i789 = i779[9]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i789[i + 0]) );
  }
  i778.materialFlags = i788
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i793 = data
  i792.name = i793[0]
  i792.value = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i797 = data
  i796.name = i797[0]
  i796.value = new pc.Color(i797[1], i797[2], i797[3], i797[4])
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i801 = data
  i800.name = i801[0]
  i800.value = new pc.Vec4( i801[1], i801[2], i801[3], i801[4] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i805 = data
  i804.name = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'value')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i809 = data
  i808.name = i809[0]
  i808.enabled = !!i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i811 = data
  i810.name = i811[0]
  i810.halfPrecision = !!i811[1]
  i810.useUInt32IndexFormat = !!i811[2]
  i810.vertexCount = i811[3]
  i810.aabb = i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( !!i813[i + 0] );
  }
  i810.streams = i812
  i810.vertices = i811[6]
  var i815 = i811[7]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i815[i + 0]) );
  }
  i810.subMeshes = i814
  var i817 = i811[8]
  var i816 = []
  for(var i = 0; i < i817.length; i += 16) {
    i816.push( new pc.Mat4().setData(i817[i + 0], i817[i + 1], i817[i + 2], i817[i + 3],  i817[i + 4], i817[i + 5], i817[i + 6], i817[i + 7],  i817[i + 8], i817[i + 9], i817[i + 10], i817[i + 11],  i817[i + 12], i817[i + 13], i817[i + 14], i817[i + 15]) );
  }
  i810.bindposes = i816
  var i819 = i811[9]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i819[i + 0]) );
  }
  i810.blendShapes = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i825 = data
  i824.triangles = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i833[i + 0]) );
  }
  i830.frames = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i835 = data
  i834.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i835[0], i834.main)
  i834.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i835[1], i834.colorBySpeed)
  i834.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i835[2], i834.colorOverLifetime)
  i834.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i835[3], i834.emission)
  i834.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i835[4], i834.rotationBySpeed)
  i834.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i835[5], i834.rotationOverLifetime)
  i834.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i835[6], i834.shape)
  i834.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i835[7], i834.sizeBySpeed)
  i834.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i835[8], i834.sizeOverLifetime)
  i834.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i835[9], i834.textureSheetAnimation)
  i834.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i835[10], i834.velocityOverLifetime)
  i834.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i835[11], i834.noise)
  i834.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i835[12], i834.inheritVelocity)
  i834.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i835[13], i834.forceOverLifetime)
  i834.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i835[14], i834.limitVelocityOverLifetime)
  i834.useAutoRandomSeed = !!i835[15]
  i834.randomSeed = i835[16]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemMain()
  var i837 = data
  i836.duration = i837[0]
  i836.loop = !!i837[1]
  i836.prewarm = !!i837[2]
  i836.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.startDelay)
  i836.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.startLifetime)
  i836.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[5], i836.startSpeed)
  i836.startSize3D = !!i837[6]
  i836.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.startSizeX)
  i836.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[8], i836.startSizeY)
  i836.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[9], i836.startSizeZ)
  i836.startRotation3D = !!i837[10]
  i836.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.startRotationX)
  i836.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[12], i836.startRotationY)
  i836.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[13], i836.startRotationZ)
  i836.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i837[14], i836.startColor)
  i836.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[15], i836.gravityModifier)
  i836.simulationSpace = i837[16]
  request.r(i837[17], i837[18], 0, i836, 'customSimulationSpace')
  i836.simulationSpeed = i837[19]
  i836.useUnscaledTime = !!i837[20]
  i836.scalingMode = i837[21]
  i836.playOnAwake = !!i837[22]
  i836.maxParticles = i837[23]
  i836.emitterVelocityMode = i837[24]
  i836.stopAction = i837[25]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i838 = root || new pc.MinMaxCurve()
  var i839 = data
  i838.mode = i839[0]
  i838.curveMin = new pc.AnimationCurve( { keys_flow: i839[1] } )
  i838.curveMax = new pc.AnimationCurve( { keys_flow: i839[2] } )
  i838.curveMultiplier = i839[3]
  i838.constantMin = i839[4]
  i838.constantMax = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i840 = root || new pc.MinMaxGradient()
  var i841 = data
  i840.mode = i841[0]
  i840.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i841[1], i840.gradientMin)
  i840.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i841[2], i840.gradientMax)
  i840.colorMin = new pc.Color(i841[3], i841[4], i841[5], i841[6])
  i840.colorMax = new pc.Color(i841[7], i841[8], i841[9], i841[10])
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i843 = data
  i842.mode = i843[0]
  var i845 = i843[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i845[i + 0]) );
  }
  i842.colorKeys = i844
  var i847 = i843[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i847[i + 0]) );
  }
  i842.alphaKeys = i846
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i851 = data
  i850.color = new pc.Color(i851[0], i851[1], i851[2], i851[3])
  i850.time = i851[4]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i855 = data
  i854.alpha = i855[0]
  i854.time = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemColorBySpeed()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i857[1], i856.color)
  i856.range = new pc.Vec2( i857[2], i857[3] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemColorOverLifetime()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[1], i858.color)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemEmitter()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.rateOverTime)
  i860.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.rateOverDistance)
  var i863 = i861[3]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i863[i + 0]) );
  }
  i860.bursts = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemBurst()
  var i867 = data
  i866.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[0], i866.count)
  i866.cycleCount = i867[1]
  i866.minCount = i867[2]
  i866.maxCount = i867[3]
  i866.repeatInterval = i867[4]
  i866.time = i867[5]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemRotationBySpeed()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[1], i868.x)
  i868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.y)
  i868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.z)
  i868.separateAxes = !!i869[4]
  i868.range = new pc.Vec2( i869[5], i869[6] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemRotationOverLifetime()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[1], i870.x)
  i870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.y)
  i870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.z)
  i870.separateAxes = !!i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemShape()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.shapeType = i873[1]
  i872.randomDirectionAmount = i873[2]
  i872.sphericalDirectionAmount = i873[3]
  i872.randomPositionAmount = i873[4]
  i872.alignToDirection = !!i873[5]
  i872.radius = i873[6]
  i872.radiusMode = i873[7]
  i872.radiusSpread = i873[8]
  i872.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[9], i872.radiusSpeed)
  i872.radiusThickness = i873[10]
  i872.angle = i873[11]
  i872.length = i873[12]
  i872.boxThickness = new pc.Vec3( i873[13], i873[14], i873[15] )
  i872.meshShapeType = i873[16]
  request.r(i873[17], i873[18], 0, i872, 'mesh')
  request.r(i873[19], i873[20], 0, i872, 'meshRenderer')
  request.r(i873[21], i873[22], 0, i872, 'skinnedMeshRenderer')
  i872.useMeshMaterialIndex = !!i873[23]
  i872.meshMaterialIndex = i873[24]
  i872.useMeshColors = !!i873[25]
  i872.normalOffset = i873[26]
  i872.arc = i873[27]
  i872.arcMode = i873[28]
  i872.arcSpread = i873[29]
  i872.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[30], i872.arcSpeed)
  i872.donutRadius = i873[31]
  i872.position = new pc.Vec3( i873[32], i873[33], i873[34] )
  i872.rotation = new pc.Vec3( i873[35], i873[36], i873[37] )
  i872.scale = new pc.Vec3( i873[38], i873[39], i873[40] )
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemSizeBySpeed()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.separateAxes = !!i875[4]
  i874.range = new pc.Vec2( i875[5], i875[6] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemSizeOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.x)
  i876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.y)
  i876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.z)
  i876.separateAxes = !!i877[4]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.mode = i879[1]
  i878.animation = i879[2]
  i878.numTilesX = i879[3]
  i878.numTilesY = i879[4]
  i878.useRandomRow = !!i879[5]
  i878.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[6], i878.frameOverTime)
  i878.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[7], i878.startFrame)
  i878.cycleCount = i879[8]
  i878.rowIndex = i879[9]
  i878.flipU = i879[10]
  i878.flipV = i879[11]
  i878.spriteCount = i879[12]
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sprites = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[4], i884.radial)
  i884.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[5], i884.speedModifier)
  i884.space = i885[6]
  i884.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[7], i884.orbitalX)
  i884.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[8], i884.orbitalY)
  i884.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[9], i884.orbitalZ)
  i884.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[10], i884.orbitalOffsetX)
  i884.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[11], i884.orbitalOffsetY)
  i884.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[12], i884.orbitalOffsetZ)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemNoise()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.separateAxes = !!i887[1]
  i886.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.strengthX)
  i886.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.strengthY)
  i886.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[4], i886.strengthZ)
  i886.frequency = i887[5]
  i886.damping = !!i887[6]
  i886.octaveCount = i887[7]
  i886.octaveMultiplier = i887[8]
  i886.octaveScale = i887[9]
  i886.quality = i887[10]
  i886.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[11], i886.scrollSpeed)
  i886.scrollSpeedMultiplier = i887[12]
  i886.remapEnabled = !!i887[13]
  i886.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[14], i886.remapX)
  i886.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[15], i886.remapY)
  i886.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[16], i886.remapZ)
  i886.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[17], i886.positionAmount)
  i886.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[18], i886.rotationAmount)
  i886.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[19], i886.sizeAmount)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemInheritVelocity()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.mode = i889[1]
  i888.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.curve)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemForceOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.space = i891[4]
  i890.randomized = !!i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.limit)
  i892.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.limitX)
  i892.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.limitY)
  i892.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[4], i892.limitZ)
  i892.dampen = i893[5]
  i892.separateAxes = !!i893[6]
  i892.space = i893[7]
  i892.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[8], i892.drag)
  i892.multiplyDragByParticleSize = !!i893[9]
  i892.multiplyDragByParticleVelocity = !!i893[10]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i895 = data
  i894.enabled = !!i895[0]
  request.r(i895[1], i895[2], 0, i894, 'sharedMaterial')
  var i897 = i895[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.sharedMaterials = i896
  i894.receiveShadows = !!i895[4]
  i894.shadowCastingMode = i895[5]
  i894.sortingLayerID = i895[6]
  i894.sortingOrder = i895[7]
  i894.lightmapIndex = i895[8]
  i894.lightmapSceneIndex = i895[9]
  i894.lightmapScaleOffset = new pc.Vec4( i895[10], i895[11], i895[12], i895[13] )
  i894.lightProbeUsage = i895[14]
  i894.reflectionProbeUsage = i895[15]
  request.r(i895[16], i895[17], 0, i894, 'mesh')
  i894.meshCount = i895[18]
  i894.activeVertexStreamsCount = i895[19]
  i894.alignment = i895[20]
  i894.renderMode = i895[21]
  i894.sortMode = i895[22]
  i894.lengthScale = i895[23]
  i894.velocityScale = i895[24]
  i894.cameraVelocityScale = i895[25]
  i894.normalDirection = i895[26]
  i894.sortingFudge = i895[27]
  i894.minParticleSize = i895[28]
  i894.maxParticleSize = i895[29]
  i894.pivot = new pc.Vec3( i895[30], i895[31], i895[32] )
  request.r(i895[33], i895[34], 0, i894, 'trailMaterial')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i901 = data
  i900.weight = i901[0]
  i900.vertices = i901[1]
  i900.normals = i901[2]
  i900.tangents = i901[3]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i903 = data
  i902.center = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.size = new pc.Vec3( i903[3], i903[4], i903[5] )
  i902.enabled = !!i903[6]
  i902.isTrigger = !!i903[7]
  request.r(i903[8], i903[9], 0, i902, 'material')
  return i902
}

Deserializers["StackItem"] = function (request, data, root) {
  var i904 = root || request.c( 'StackItem' )
  var i905 = data
  i904.itemType = i905[0]
  return i904
}

Deserializers["Pathfinding.Seeker"] = function (request, data, root) {
  var i906 = root || request.c( 'Pathfinding.Seeker' )
  var i907 = data
  i906.drawGizmos = !!i907[0]
  i906.detailedGizmos = !!i907[1]
  i906.startEndModifier = request.d('Pathfinding.StartEndModifier', i907[2], i906.startEndModifier)
  i906.traversableTags = i907[3]
  i906.tagPenalties = i907[4]
  i906.graphMask = request.d('Pathfinding.GraphMask', i907[5], i906.graphMask)
  i906.version = i907[6]
  return i906
}

Deserializers["Pathfinding.StartEndModifier"] = function (request, data, root) {
  var i908 = root || request.c( 'Pathfinding.StartEndModifier' )
  var i909 = data
  i908.addPoints = !!i909[0]
  i908.exactStartPoint = i909[1]
  i908.exactEndPoint = i909[2]
  i908.useRaycasting = !!i909[3]
  i908.mask = UnityEngine.LayerMask.FromIntegerValue( i909[4] )
  i908.useGraphRaycasting = !!i909[5]
  return i908
}

Deserializers["Pathfinding.GraphMask"] = function (request, data, root) {
  var i910 = root || request.c( 'Pathfinding.GraphMask' )
  var i911 = data
  i910.value = i911[0]
  return i910
}

Deserializers["Pathfinding.AIPath"] = function (request, data, root) {
  var i912 = root || request.c( 'Pathfinding.AIPath' )
  var i913 = data
  i912.radius = i913[0]
  i912.height = i913[1]
  i912.canMove = !!i913[2]
  i912.maxSpeed = i913[3]
  i912.gravity = new pc.Vec3( i913[4], i913[5], i913[6] )
  i912.groundMask = UnityEngine.LayerMask.FromIntegerValue( i913[7] )
  i912.orientation = i913[8]
  i912.enableRotation = !!i913[9]
  i912.autoRepath = request.d('Pathfinding.AutoRepathPolicy', i913[10], i912.autoRepath)
  i912.maxAcceleration = i913[11]
  i912.rotationSpeed = i913[12]
  i912.slowdownDistance = i913[13]
  i912.pickNextWaypointDist = i913[14]
  i912.endReachedDistance = i913[15]
  i912.alwaysDrawGizmos = !!i913[16]
  i912.slowWhenNotFacingTarget = !!i913[17]
  i912.whenCloseToDestination = i913[18]
  i912.constrainInsideGraph = !!i913[19]
  i912.centerOffsetCompatibility = i913[20]
  i912.repathRateCompatibility = i913[21]
  i912.canSearchCompability = !!i913[22]
  request.r(i913[23], i913[24], 0, i912, 'targetCompatibility')
  i912.version = i913[25]
  return i912
}

Deserializers["Pathfinding.AutoRepathPolicy"] = function (request, data, root) {
  var i914 = root || request.c( 'Pathfinding.AutoRepathPolicy' )
  var i915 = data
  i914.mode = i915[0]
  i914.period = i915[1]
  i914.sensitivity = i915[2]
  i914.maximumPeriod = i915[3]
  i914.visualizeSensitivity = !!i915[4]
  return i914
}

Deserializers["Pathfinding.FunnelModifier"] = function (request, data, root) {
  var i916 = root || request.c( 'Pathfinding.FunnelModifier' )
  var i917 = data
  i916.unwrap = !!i917[0]
  i916.splitAtEveryPortal = !!i917[1]
  i916.version = i917[2]
  return i916
}

Deserializers["Pathfinding.AIDestinationSetter"] = function (request, data, root) {
  var i918 = root || request.c( 'Pathfinding.AIDestinationSetter' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'target')
  request.r(i919[2], i919[3], 0, i918, 'restPos')
  i918.version = i919[4]
  return i918
}

Deserializers["EnemyAI"] = function (request, data, root) {
  var i920 = root || request.c( 'EnemyAI' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'AdsComponent')
  i920.pointIndex = i921[2]
  i920.detectionRadius = i921[3]
  i920.attackRange = i921[4]
  i920.attackRate = i921[5]
  i920.attackDamage = i921[6]
  i920.attackWindupTime = i921[7]
  i920.attackAnimDuration = i921[8]
  request.r(i921[9], i921[10], 0, i920, 'anim')
  request.r(i921[11], i921[12], 0, i920, 'player')
  request.r(i921[13], i921[14], 0, i920, 'dstSetter')
  request.r(i921[15], i921[16], 0, i920, 'aiPath')
  i920.nextAttackTime = i921[17]
  i920.isDie = !!i921[18]
  request.r(i921[19], i921[20], 0, i920, 'spawnPoint')
  i920.spawnCount = i921[21]
  i920.randomXZRange = i921[22]
  i920.throwUpHeight = i921[23]
  i920.upDuration = i921[24]
  i920.downDuration = i921[25]
  return i920
}

Deserializers["DamageSystem"] = function (request, data, root) {
  var i922 = root || request.c( 'DamageSystem' )
  var i923 = data
  i922.maxHealth = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'healthBar')
  i922.onDeath = request.d('UnityEngine.Events.UnityEvent', i923[3], i922.onDeath)
  return i922
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i925 = data
  i924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i925[0], i924.m_PersistentCalls)
  return i924
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.Events.PersistentCall', i929[i + 0]));
  }
  i926.m_Calls = i928
  return i926
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_Target')
  i932.m_TargetAssemblyTypeName = i933[2]
  i932.m_MethodName = i933[3]
  i932.m_Mode = i933[4]
  i932.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i933[5], i932.m_Arguments)
  i932.m_CallState = i933[6]
  return i932
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_ObjectArgument')
  i934.m_ObjectArgumentAssemblyTypeName = i935[2]
  i934.m_IntArgument = i935[3]
  i934.m_FloatArgument = i935[4]
  i934.m_StringArgument = i935[5]
  i934.m_BoolArgument = !!i935[6]
  return i934
}

Deserializers["Billboard"] = function (request, data, root) {
  var i936 = root || request.c( 'Billboard' )
  var i937 = data
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i939 = data
  i938.enabled = !!i939[0]
  request.r(i939[1], i939[2], 0, i938, 'sharedMaterial')
  var i941 = i939[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.sharedMaterials = i940
  i938.receiveShadows = !!i939[4]
  i938.shadowCastingMode = i939[5]
  i938.sortingLayerID = i939[6]
  i938.sortingOrder = i939[7]
  i938.lightmapIndex = i939[8]
  i938.lightmapSceneIndex = i939[9]
  i938.lightmapScaleOffset = new pc.Vec4( i939[10], i939[11], i939[12], i939[13] )
  i938.lightProbeUsage = i939[14]
  i938.reflectionProbeUsage = i939[15]
  i938.color = new pc.Color(i939[16], i939[17], i939[18], i939[19])
  request.r(i939[20], i939[21], 0, i938, 'sprite')
  i938.flipX = !!i939[22]
  i938.flipY = !!i939[23]
  i938.drawMode = i939[24]
  i938.size = new pc.Vec2( i939[25], i939[26] )
  i938.tileMode = i939[27]
  i938.adaptiveModeThreshold = i939[28]
  i938.maskInteraction = i939[29]
  i938.spriteSortPoint = i939[30]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i943 = data
  i942.name = i943[0]
  i942.atlasId = i943[1]
  i942.mipmapCount = i943[2]
  i942.hdr = !!i943[3]
  i942.size = i943[4]
  i942.anisoLevel = i943[5]
  i942.filterMode = i943[6]
  var i945 = i943[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 4) {
    i944.push( UnityEngine.Rect.MinMaxRect(i945[i + 0], i945[i + 1], i945[i + 2], i945[i + 3]) );
  }
  i942.rects = i944
  i942.wrapU = i943[8]
  i942.wrapV = i943[9]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i949 = data
  i948.name = i949[0]
  i948.index = i949[1]
  i948.startup = !!i949[2]
  return i948
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_FirstSelected')
  i950.m_sendNavigationEvents = !!i951[2]
  i950.m_DragThreshold = i951[3]
  return i950
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i953 = data
  i952.m_MoveRepeatDelay = i953[0]
  i952.m_MoveRepeatRate = i953[1]
  request.r(i953[2], i953[3], 0, i952, 'm_XRTrackingOrigin')
  request.r(i953[4], i953[5], 0, i952, 'm_ActionsAsset')
  request.r(i953[6], i953[7], 0, i952, 'm_PointAction')
  request.r(i953[8], i953[9], 0, i952, 'm_MoveAction')
  request.r(i953[10], i953[11], 0, i952, 'm_SubmitAction')
  request.r(i953[12], i953[13], 0, i952, 'm_CancelAction')
  request.r(i953[14], i953[15], 0, i952, 'm_LeftClickAction')
  request.r(i953[16], i953[17], 0, i952, 'm_MiddleClickAction')
  request.r(i953[18], i953[19], 0, i952, 'm_RightClickAction')
  request.r(i953[20], i953[21], 0, i952, 'm_ScrollWheelAction')
  request.r(i953[22], i953[23], 0, i952, 'm_TrackedDevicePositionAction')
  request.r(i953[24], i953[25], 0, i952, 'm_TrackedDeviceOrientationAction')
  i952.m_DeselectOnBackgroundClick = !!i953[26]
  i952.m_PointerBehavior = i953[27]
  i952.m_CursorLockBehavior = i953[28]
  i952.m_ScrollDeltaPerTick = i953[29]
  i952.m_SendPointerHoverToParent = !!i953[30]
  return i952
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager"] = function (request, data, root) {
  var i954 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'meat')
  request.r(i955[2], i955[3], 0, i954, 'GpCurrency')
  request.r(i955[4], i955[5], 0, i954, 'lcCurrency')
  var i957 = i955[6]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('GameAssets.GameSet.GameDevUtils.Managers.Currency')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('GameAssets.GameSet.GameDevUtils.Managers.Currency', i957[i + 0]));
  }
  i954.currencies = i956
  return i954
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.Currency"] = function (request, data, root) {
  var i960 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.Currency' )
  var i961 = data
  i960.currencyName = i961[0]
  i960.totalCurrency = i961[1]
  return i960
}

Deserializers["ObjectQueueManager"] = function (request, data, root) {
  var i962 = root || request.c( 'ObjectQueueManager' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'objectPrefab')
  i962.initialQueueSize = i963[2]
  request.r(i963[3], i963[4], 0, i962, 'pointA')
  request.r(i963[5], i963[6], 0, i962, 'pointB')
  request.r(i963[7], i963[8], 0, i962, 'exitPoint')
  i962.moveDuration = i963[9]
  i962.shiftDuration = i963[10]
  request.r(i963[11], i963[12], 0, i962, 'cashCounter')
  return i962
}

Deserializers["PoolingManager"] = function (request, data, root) {
  var i964 = root || request.c( 'PoolingManager' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('ParticlePool')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('ParticlePool', i967[i + 0]));
  }
  i964.Pools = i966
  return i964
}

Deserializers["ParticlePool"] = function (request, data, root) {
  var i970 = root || request.c( 'ParticlePool' )
  var i971 = data
  i970.HideInHierarchy = !!i971[0]
  i970.ParticleName = i971[1]
  i970.PoolSize = i971[2]
  request.r(i971[3], i971[4], 0, i970, 'ParticlePrefab')
  request.r(i971[5], i971[6], 0, i970, 'PoolParent')
  i970.Debug = !!i971[7]
  return i970
}

Deserializers["GameAssets.GameSet.GameDevUtils.Managers.SoundManager"] = function (request, data, root) {
  var i972 = root || request.c( 'GameAssets.GameSet.GameDevUtils.Managers.SoundManager' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'bgSoundSource')
  request.r(i973[2], i973[3], 0, i972, 'bgClip')
  request.r(i973[4], i973[5], 0, i972, 'buttonClip')
  request.r(i973[6], i973[7], 0, i972, 'walkClip')
  request.r(i973[8], i973[9], 0, i972, 'attackClip')
  request.r(i973[10], i973[11], 0, i972, 'deathClip')
  request.r(i973[12], i973[13], 0, i972, 'buildClip')
  request.r(i973[14], i973[15], 0, i972, 'loseClip')
  var i975 = i973[16]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.pops = i974
  request.r(i973[17], i973[18], 0, i972, 'bgAmbienceSoundSource')
  request.r(i973[19], i973[20], 0, i972, 'sFXSoundSource')
  request.r(i973[21], i973[22], 0, i972, 'walkSoundSource')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'clip')
  request.r(i979[2], i979[3], 0, i978, 'outputAudioMixerGroup')
  i978.playOnAwake = !!i979[4]
  i978.loop = !!i979[5]
  i978.time = i979[6]
  i978.volume = i979[7]
  i978.pitch = i979[8]
  i978.enabled = !!i979[9]
  return i978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.Button' )
  var i981 = data
  i980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i981[0], i980.m_OnClick)
  i980.m_Navigation = request.d('UnityEngine.UI.Navigation', i981[1], i980.m_Navigation)
  i980.m_Transition = i981[2]
  i980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i981[3], i980.m_Colors)
  i980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i981[4], i980.m_SpriteState)
  i980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i981[5], i980.m_AnimationTriggers)
  i980.m_Interactable = !!i981[6]
  request.r(i981[7], i981[8], 0, i980, 'm_TargetGraphic')
  return i980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i983 = data
  i982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i983[0], i982.m_PersistentCalls)
  return i982
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i985 = data
  i984.m_Mode = i985[0]
  i984.m_WrapAround = !!i985[1]
  request.r(i985[2], i985[3], 0, i984, 'm_SelectOnUp')
  request.r(i985[4], i985[5], 0, i984, 'm_SelectOnDown')
  request.r(i985[6], i985[7], 0, i984, 'm_SelectOnLeft')
  request.r(i985[8], i985[9], 0, i984, 'm_SelectOnRight')
  return i984
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i987 = data
  i986.m_NormalColor = new pc.Color(i987[0], i987[1], i987[2], i987[3])
  i986.m_HighlightedColor = new pc.Color(i987[4], i987[5], i987[6], i987[7])
  i986.m_PressedColor = new pc.Color(i987[8], i987[9], i987[10], i987[11])
  i986.m_SelectedColor = new pc.Color(i987[12], i987[13], i987[14], i987[15])
  i986.m_DisabledColor = new pc.Color(i987[16], i987[17], i987[18], i987[19])
  i986.m_ColorMultiplier = i987[20]
  i986.m_FadeDuration = i987[21]
  return i986
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_HighlightedSprite')
  request.r(i989[2], i989[3], 0, i988, 'm_PressedSprite')
  request.r(i989[4], i989[5], 0, i988, 'm_SelectedSprite')
  request.r(i989[6], i989[7], 0, i988, 'm_DisabledSprite')
  return i988
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i991 = data
  i990.m_NormalTrigger = i991[0]
  i990.m_HighlightedTrigger = i991[1]
  i990.m_PressedTrigger = i991[2]
  i990.m_SelectedTrigger = i991[3]
  i990.m_DisabledTrigger = i991[4]
  return i990
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i993 = data
  i992.targetIsSelf = !!i993[0]
  request.r(i993[1], i993[2], 0, i992, 'targetGO')
  i992.tweenTargetIsTargetGO = !!i993[3]
  i992.delay = i993[4]
  i992.duration = i993[5]
  i992.easeType = i993[6]
  i992.easeCurve = new pc.AnimationCurve( { keys_flow: i993[7] } )
  i992.loopType = i993[8]
  i992.loops = i993[9]
  i992.id = i993[10]
  i992.isRelative = !!i993[11]
  i992.isFrom = !!i993[12]
  i992.isIndependentUpdate = !!i993[13]
  i992.autoKill = !!i993[14]
  i992.autoGenerate = !!i993[15]
  i992.isActive = !!i993[16]
  i992.isValid = !!i993[17]
  request.r(i993[18], i993[19], 0, i992, 'target')
  i992.animationType = i993[20]
  i992.targetType = i993[21]
  i992.forcedTargetType = i993[22]
  i992.autoPlay = !!i993[23]
  i992.useTargetAsV3 = !!i993[24]
  i992.endValueFloat = i993[25]
  i992.endValueV3 = new pc.Vec3( i993[26], i993[27], i993[28] )
  i992.endValueV2 = new pc.Vec2( i993[29], i993[30] )
  i992.endValueColor = new pc.Color(i993[31], i993[32], i993[33], i993[34])
  i992.endValueString = i993[35]
  i992.endValueRect = UnityEngine.Rect.MinMaxRect(i993[36], i993[37], i993[38], i993[39])
  request.r(i993[40], i993[41], 0, i992, 'endValueTransform')
  i992.optionalBool0 = !!i993[42]
  i992.optionalBool1 = !!i993[43]
  i992.optionalFloat0 = i993[44]
  i992.optionalInt0 = i993[45]
  i992.optionalRotationMode = i993[46]
  i992.optionalScrambleMode = i993[47]
  i992.optionalShakeRandomnessMode = i993[48]
  i992.optionalString = i993[49]
  i992.updateType = i993[50]
  i992.isSpeedBased = !!i993[51]
  i992.hasOnStart = !!i993[52]
  i992.hasOnPlay = !!i993[53]
  i992.hasOnUpdate = !!i993[54]
  i992.hasOnStepComplete = !!i993[55]
  i992.hasOnComplete = !!i993[56]
  i992.hasOnTweenCreated = !!i993[57]
  i992.hasOnRewind = !!i993[58]
  i992.onStart = request.d('UnityEngine.Events.UnityEvent', i993[59], i992.onStart)
  i992.onPlay = request.d('UnityEngine.Events.UnityEvent', i993[60], i992.onPlay)
  i992.onUpdate = request.d('UnityEngine.Events.UnityEvent', i993[61], i992.onUpdate)
  i992.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i993[62], i992.onStepComplete)
  i992.onComplete = request.d('UnityEngine.Events.UnityEvent', i993[63], i992.onComplete)
  i992.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i993[64], i992.onTweenCreated)
  i992.onRewind = request.d('UnityEngine.Events.UnityEvent', i993[65], i992.onRewind)
  return i992
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i995 = data
  i994.priority = i995[0]
  i994.blendDistance = i995[1]
  i994.weight = i995[2]
  request.r(i995[3], i995[4], 0, i994, 'sharedProfile')
  i994.m_IsGlobal = !!i995[5]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i997 = data
  i996.enabled = !!i997[0]
  i996.isTrigger = !!i997[1]
  request.r(i997[2], i997[3], 0, i996, 'material')
  request.r(i997[4], i997[5], 0, i996, 'sharedMesh')
  i996.convex = !!i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i999 = data
  i998.enabled = !!i999[0]
  i998.type = i999[1]
  i998.color = new pc.Color(i999[2], i999[3], i999[4], i999[5])
  i998.cullingMask = i999[6]
  i998.intensity = i999[7]
  i998.range = i999[8]
  i998.spotAngle = i999[9]
  i998.shadows = i999[10]
  i998.shadowNormalBias = i999[11]
  i998.shadowBias = i999[12]
  i998.shadowStrength = i999[13]
  i998.shadowResolution = i999[14]
  i998.lightmapBakeType = i999[15]
  i998.renderMode = i999[16]
  request.r(i999[17], i999[18], 0, i998, 'cookie')
  i998.cookieSize = i999[19]
  return i998
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1001 = data
  i1000.m_Version = i1001[0]
  i1000.m_UsePipelineSettings = !!i1001[1]
  i1000.m_AdditionalLightsShadowResolutionTier = i1001[2]
  i1000.m_LightLayerMask = i1001[3]
  i1000.m_RenderingLayers = i1001[4]
  i1000.m_CustomShadowLayers = !!i1001[5]
  i1000.m_ShadowLayerMask = i1001[6]
  i1000.m_ShadowRenderingLayers = i1001[7]
  i1000.m_LightCookieSize = new pc.Vec2( i1001[8], i1001[9] )
  i1000.m_LightCookieOffset = new pc.Vec2( i1001[10], i1001[11] )
  i1000.m_SoftShadowQuality = i1001[12]
  return i1000
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1002 = root || request.c( 'CameraFollow' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'player')
  i1002.offsetX = i1003[2]
  i1002.offsetZ = i1003[3]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.aspect = i1005[1]
  i1004.orthographic = !!i1005[2]
  i1004.orthographicSize = i1005[3]
  i1004.backgroundColor = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.nearClipPlane = i1005[8]
  i1004.farClipPlane = i1005[9]
  i1004.fieldOfView = i1005[10]
  i1004.depth = i1005[11]
  i1004.clearFlags = i1005[12]
  i1004.cullingMask = i1005[13]
  i1004.rect = i1005[14]
  request.r(i1005[15], i1005[16], 0, i1004, 'targetTexture')
  i1004.usePhysicalProperties = !!i1005[17]
  i1004.focalLength = i1005[18]
  i1004.sensorSize = new pc.Vec2( i1005[19], i1005[20] )
  i1004.lensShift = new pc.Vec2( i1005[21], i1005[22] )
  i1004.gateFit = i1005[23]
  i1004.commandBufferCount = i1005[24]
  i1004.cameraType = i1005[25]
  return i1004
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1007 = data
  i1006.m_RenderShadows = !!i1007[0]
  i1006.m_RequiresDepthTextureOption = i1007[1]
  i1006.m_RequiresOpaqueTextureOption = i1007[2]
  i1006.m_CameraType = i1007[3]
  var i1009 = i1007[4]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i1006.m_Cameras = i1008
  i1006.m_RendererIndex = i1007[5]
  i1006.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1007[6] )
  request.r(i1007[7], i1007[8], 0, i1006, 'm_VolumeTrigger')
  i1006.m_VolumeFrameworkUpdateModeOption = i1007[9]
  i1006.m_RenderPostProcessing = !!i1007[10]
  i1006.m_Antialiasing = i1007[11]
  i1006.m_AntialiasingQuality = i1007[12]
  i1006.m_StopNaN = !!i1007[13]
  i1006.m_Dithering = !!i1007[14]
  i1006.m_ClearDepth = !!i1007[15]
  i1006.m_AllowXRRendering = !!i1007[16]
  i1006.m_AllowHDROutput = !!i1007[17]
  i1006.m_UseScreenCoordOverride = !!i1007[18]
  i1006.m_ScreenSizeOverride = new pc.Vec4( i1007[19], i1007[20], i1007[21], i1007[22] )
  i1006.m_ScreenCoordScaleBias = new pc.Vec4( i1007[23], i1007[24], i1007[25], i1007[26] )
  i1006.m_RequiresDepthTexture = !!i1007[27]
  i1006.m_RequiresColorTexture = !!i1007[28]
  i1006.m_Version = i1007[29]
  i1006.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1007[30], i1006.m_TaaSettings)
  return i1006
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1013 = data
  i1012.m_Quality = i1013[0]
  i1012.m_FrameInfluence = i1013[1]
  i1012.m_JitterScale = i1013[2]
  i1012.m_MipBias = i1013[3]
  i1012.m_VarianceClampScale = i1013[4]
  i1012.m_ContrastAdaptiveSharpening = i1013[5]
  return i1012
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1014 = root || request.c( 'PlayerController' )
  var i1015 = data
  i1014._speed = i1015[0]
  i1014.deceleration = i1015[1]
  i1014.inputValue = i1015[2]
  request.r(i1015[3], i1015[4], 0, i1014, 'dynamicJoystick')
  i1014.canMove = !!i1015[5]
  i1014.isDie = !!i1015[6]
  request.r(i1015[7], i1015[8], 0, i1014, 'meatStacker')
  request.r(i1015[9], i1015[10], 0, i1014, 'cashStacker')
  request.r(i1015[11], i1015[12], 0, i1014, 'failScreen')
  request.r(i1015[13], i1015[14], 0, i1014, '_rb')
  i1014._turnSpeed = i1015[15]
  request.r(i1015[16], i1015[17], 0, i1014, '_playerModel')
  return i1014
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i1016 = root || request.c( 'PlayerAttack' )
  var i1017 = data
  i1016.detectionRadius = i1017[0]
  i1016.attackArcRange = i1017[1]
  i1016.attackArcAngle = i1017[2]
  i1016.attackDamage = i1017[3]
  i1016.knockbackDistance = i1017[4]
  i1016.knockbackDuration = i1017[5]
  i1016.fireRate = i1017[6]
  request.r(i1017[7], i1017[8], 0, i1016, 'animatorController')
  request.r(i1017[9], i1017[10], 0, i1016, 'playerModel')
  request.r(i1017[11], i1017[12], 0, i1016, 'attackVfx')
  return i1016
}

Deserializers["ArrowPointer"] = function (request, data, root) {
  var i1018 = root || request.c( 'ArrowPointer' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'player')
  request.r(i1019[2], i1019[3], 0, i1018, 'arrow')
  var i1021 = i1019[4]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.targets = i1020
  i1018.currentTargetIndex = i1019[5]
  i1018.orbitRadius = i1019[6]
  i1018.heightOffset = i1019[7]
  return i1018
}

Deserializers["AnimatorController"] = function (request, data, root) {
  var i1024 = root || request.c( 'AnimatorController' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'playerAnim')
  request.r(i1025[2], i1025[3], 0, i1024, 'dynamicJoystick')
  return i1024
}

Deserializers["CuustomerZone"] = function (request, data, root) {
  var i1026 = root || request.c( 'CuustomerZone' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'objectQueueManager')
  return i1026
}

Deserializers["CurrencyDeductionOnCollision"] = function (request, data, root) {
  var i1028 = root || request.c( 'CurrencyDeductionOnCollision' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'amount')
  request.r(i1029[2], i1029[3], 0, i1028, 'pc')
  request.r(i1029[4], i1029[5], 0, i1028, 'win')
  request.r(i1029[6], i1029[7], 0, i1028, 'particle')
  i1028.currencyName = i1029[8]
  i1028.totalAmount = i1029[9]
  i1028.chunkSize = i1029[10]
  i1028.delayBetweenDeductions = i1029[11]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1031 = data
  i1030.ambientIntensity = i1031[0]
  i1030.reflectionIntensity = i1031[1]
  i1030.ambientMode = i1031[2]
  i1030.ambientLight = new pc.Color(i1031[3], i1031[4], i1031[5], i1031[6])
  i1030.ambientSkyColor = new pc.Color(i1031[7], i1031[8], i1031[9], i1031[10])
  i1030.ambientGroundColor = new pc.Color(i1031[11], i1031[12], i1031[13], i1031[14])
  i1030.ambientEquatorColor = new pc.Color(i1031[15], i1031[16], i1031[17], i1031[18])
  i1030.fogColor = new pc.Color(i1031[19], i1031[20], i1031[21], i1031[22])
  i1030.fogEndDistance = i1031[23]
  i1030.fogStartDistance = i1031[24]
  i1030.fogDensity = i1031[25]
  i1030.fog = !!i1031[26]
  request.r(i1031[27], i1031[28], 0, i1030, 'skybox')
  i1030.fogMode = i1031[29]
  var i1033 = i1031[30]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1033[i + 0]) );
  }
  i1030.lightmaps = i1032
  i1030.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1031[31], i1030.lightProbes)
  i1030.lightmapsMode = i1031[32]
  i1030.mixedBakeMode = i1031[33]
  i1030.environmentLightingMode = i1031[34]
  i1030.ambientProbe = new pc.SphericalHarmonicsL2(i1031[35])
  i1030.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1031[36])
  i1030.useReferenceAmbientProbe = !!i1031[37]
  request.r(i1031[38], i1031[39], 0, i1030, 'customReflection')
  request.r(i1031[40], i1031[41], 0, i1030, 'defaultReflection')
  i1030.defaultReflectionMode = i1031[42]
  i1030.defaultReflectionResolution = i1031[43]
  i1030.sunLightObjectId = i1031[44]
  i1030.pixelLightCount = i1031[45]
  i1030.defaultReflectionHDR = !!i1031[46]
  i1030.hasLightDataAsset = !!i1031[47]
  i1030.hasManualGenerate = !!i1031[48]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'lightmapColor')
  request.r(i1037[2], i1037[3], 0, i1036, 'lightmapDirection')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1038 = root || new UnityEngine.LightProbes()
  var i1039 = data
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1047 = data
  i1046.AdditionalLightsPerObjectLimit = i1047[0]
  i1046.AdditionalLightsRenderingMode = i1047[1]
  i1046.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1047[2], i1046.LightRenderingMode)
  i1046.ColorGradingLutSize = i1047[3]
  i1046.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1047[4], i1046.ColorGradingMode)
  i1046.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1047[5], i1046.MainLightRenderingMode)
  i1046.MainLightRenderingModeValue = i1047[6]
  i1046.SupportsMainLightShadows = !!i1047[7]
  i1046.MixedLightingSupported = !!i1047[8]
  i1046.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1047[9], i1046.MsaaQuality)
  i1046.MSAA = i1047[10]
  i1046.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1047[11], i1046.OpaqueDownsampling)
  i1046.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1047[12], i1046.MainLightShadowmapResolution)
  i1046.MainLightShadowmapResolutionValue = i1047[13]
  i1046.SupportsSoftShadows = !!i1047[14]
  i1046.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1047[15], i1046.SoftShadowQuality)
  i1046.SoftShadowQualityValue = i1047[16]
  i1046.ShadowDistance = i1047[17]
  i1046.ShadowCascadeCount = i1047[18]
  i1046.Cascade2Split = i1047[19]
  i1046.Cascade3Split = new pc.Vec2( i1047[20], i1047[21] )
  i1046.Cascade4Split = new pc.Vec3( i1047[22], i1047[23], i1047[24] )
  i1046.CascadeBorder = i1047[25]
  i1046.ShadowDepthBias = i1047[26]
  i1046.ShadowNormalBias = i1047[27]
  i1046.RenderScale = i1047[28]
  i1046.RequireDepthTexture = !!i1047[29]
  i1046.RequireOpaqueTexture = !!i1047[30]
  i1046.SupportsHDR = !!i1047[31]
  i1046.SupportsTerrainHoles = !!i1047[32]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1049 = data
  i1048.Disabled = i1049[0]
  i1048.PerVertex = i1049[1]
  i1048.PerPixel = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1051 = data
  i1050.LowDynamicRange = i1051[0]
  i1050.HighDynamicRange = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1053 = data
  i1052.Disabled = i1053[0]
  i1052._2x = i1053[1]
  i1052._4x = i1053[2]
  i1052._8x = i1053[3]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1055 = data
  i1054.None = i1055[0]
  i1054._2xBilinear = i1055[1]
  i1054._4xBox = i1055[2]
  i1054._4xBilinear = i1055[3]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1057 = data
  i1056._256 = i1057[0]
  i1056._512 = i1057[1]
  i1056._1024 = i1057[2]
  i1056._2048 = i1057[3]
  i1056._4096 = i1057[4]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1059 = data
  i1058.UsePipelineSettings = i1059[0]
  i1058.Low = i1059[1]
  i1058.Medium = i1059[2]
  i1058.High = i1059[3]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1063[i + 0]));
  }
  i1060.ShaderCompilationErrors = i1062
  i1060.name = i1061[1]
  i1060.guid = i1061[2]
  var i1065 = i1061[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.shaderDefinedKeywords = i1064
  var i1067 = i1061[4]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1067[i + 0]) );
  }
  i1060.passes = i1066
  var i1069 = i1061[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1069[i + 0]) );
  }
  i1060.usePasses = i1068
  var i1071 = i1061[6]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1071[i + 0]) );
  }
  i1060.defaultParameterValues = i1070
  request.r(i1061[7], i1061[8], 0, i1060, 'unityFallbackShader')
  i1060.readDepth = !!i1061[9]
  i1060.isCreatedByShaderGraph = !!i1061[10]
  i1060.compiled = !!i1061[11]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1075 = data
  i1074.shaderName = i1075[0]
  i1074.errorMessage = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1080 = root || new pc.UnityShaderPass()
  var i1081 = data
  i1080.id = i1081[0]
  i1080.subShaderIndex = i1081[1]
  i1080.name = i1081[2]
  i1080.passType = i1081[3]
  i1080.grabPassTextureName = i1081[4]
  i1080.usePass = !!i1081[5]
  i1080.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[6], i1080.zTest)
  i1080.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[7], i1080.zWrite)
  i1080.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[8], i1080.culling)
  i1080.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[9], i1080.blending)
  i1080.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[10], i1080.alphaBlending)
  i1080.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[11], i1080.colorWriteMask)
  i1080.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[12], i1080.offsetUnits)
  i1080.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[13], i1080.offsetFactor)
  i1080.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[14], i1080.stencilRef)
  i1080.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[15], i1080.stencilReadMask)
  i1080.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[16], i1080.stencilWriteMask)
  i1080.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[17], i1080.stencilOp)
  i1080.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[18], i1080.stencilOpFront)
  i1080.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[19], i1080.stencilOpBack)
  var i1083 = i1081[20]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1083[i + 0]) );
  }
  i1080.tags = i1082
  var i1085 = i1081[21]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.passDefinedKeywords = i1084
  var i1087 = i1081[22]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1087[i + 0]) );
  }
  i1080.passDefinedKeywordGroups = i1086
  var i1089 = i1081[23]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1080.variants = i1088
  var i1091 = i1081[24]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1091[i + 0]) );
  }
  i1080.excludedVariants = i1090
  i1080.hasDepthReader = !!i1081[25]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1093 = data
  i1092.val = i1093[0]
  i1092.name = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1095 = data
  i1094.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.src)
  i1094.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.dst)
  i1094.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.op)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1097 = data
  i1096.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[0], i1096.pass)
  i1096.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[1], i1096.fail)
  i1096.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[2], i1096.zFail)
  i1096.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[3], i1096.comp)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.value = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1105 = data
  var i1107 = i1105[0]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1104.keywords = i1106
  i1104.hasDiscard = !!i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1111 = data
  i1110.passId = i1111[0]
  i1110.subShaderIndex = i1111[1]
  var i1113 = i1111[2]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.vertexProgram = i1111[3]
  i1110.fragmentProgram = i1111[4]
  i1110.exportedForWebGl2 = !!i1111[5]
  i1110.readDepth = !!i1111[6]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'shader')
  i1116.pass = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.type = i1121[1]
  i1120.value = new pc.Vec4( i1121[2], i1121[3], i1121[4], i1121[5] )
  i1120.textureValue = i1121[6]
  i1120.shaderPropertyFlag = i1121[7]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1123 = data
  i1122.name = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'texture')
  i1122.aabb = i1123[3]
  i1122.vertices = i1123[4]
  i1122.triangles = i1123[5]
  i1122.textureRect = UnityEngine.Rect.MinMaxRect(i1123[6], i1123[7], i1123[8], i1123[9])
  i1122.packedRect = UnityEngine.Rect.MinMaxRect(i1123[10], i1123[11], i1123[12], i1123[13])
  i1122.border = new pc.Vec4( i1123[14], i1123[15], i1123[16], i1123[17] )
  i1122.transparency = i1123[18]
  i1122.bounds = i1123[19]
  i1122.pixelsPerUnit = i1123[20]
  i1122.textureWidth = i1123[21]
  i1122.textureHeight = i1123[22]
  i1122.nativeSize = new pc.Vec2( i1123[23], i1123[24] )
  i1122.pivot = new pc.Vec2( i1123[25], i1123[26] )
  i1122.textureRectOffset = new pc.Vec2( i1123[27], i1123[28] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1125 = data
  i1124.name = i1125[0]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.wrapMode = i1127[1]
  i1126.isLooping = !!i1127[2]
  i1126.length = i1127[3]
  var i1129 = i1127[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1129[i + 0]) );
  }
  i1126.curves = i1128
  var i1131 = i1127[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1131[i + 0]) );
  }
  i1126.events = i1130
  i1126.halfPrecision = !!i1127[6]
  i1126._frameRate = i1127[7]
  i1126.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1127[8], i1126.localBounds)
  i1126.hasMuscleCurves = !!i1127[9]
  var i1133 = i1127[10]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1126.clipMuscleConstant = i1132
  i1126.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1127[11], i1126.clipBindingConstant)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1137 = data
  i1136.path = i1137[0]
  i1136.hash = i1137[1]
  i1136.componentType = i1137[2]
  i1136.property = i1137[3]
  i1136.keys = i1137[4]
  var i1139 = i1137[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1139[i + 0]) );
  }
  i1136.objectReferenceKeys = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1143 = data
  i1142.time = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'value')
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1147 = data
  i1146.functionName = i1147[0]
  i1146.floatParameter = i1147[1]
  i1146.intParameter = i1147[2]
  i1146.stringParameter = i1147[3]
  request.r(i1147[4], i1147[5], 0, i1146, 'objectReferenceParameter')
  i1146.time = i1147[6]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1149 = data
  i1148.center = new pc.Vec3( i1149[0], i1149[1], i1149[2] )
  i1148.extends = new pc.Vec3( i1149[3], i1149[4], i1149[5] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.genericBindings = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1152.pptrCurveMapping = i1156
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.blendParameter = i1159[1]
  i1158.blendParameterY = i1159[2]
  i1158.blendType = i1159[3]
  var i1161 = i1159[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1161[i + 0]) );
  }
  i1158.children = i1160
  i1158.useAutomaticThresholds = !!i1159[5]
  i1158.minThreshold = i1159[6]
  i1158.maxThreshold = i1159[7]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'motion')
  i1164.threshold = i1165[2]
  i1164.position = new pc.Vec2( i1165[3], i1165[4] )
  i1164.timeScale = i1165[5]
  i1164.cycleOffset = i1165[6]
  i1164.directBlendParameter = i1165[7]
  i1164.mirror = !!i1165[8]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.ascent = i1167[1]
  i1166.originalLineHeight = i1167[2]
  i1166.fontSize = i1167[3]
  var i1169 = i1167[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1169[i + 0]) );
  }
  i1166.characterInfo = i1168
  request.r(i1167[5], i1167[6], 0, i1166, 'texture')
  i1166.originalFontSize = i1167[7]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1173 = data
  i1172.index = i1173[0]
  i1172.advance = i1173[1]
  i1172.bearing = i1173[2]
  i1172.glyphWidth = i1173[3]
  i1172.glyphHeight = i1173[4]
  i1172.minX = i1173[5]
  i1172.maxX = i1173[6]
  i1172.minY = i1173[7]
  i1172.maxY = i1173[8]
  i1172.uvBottomLeftX = i1173[9]
  i1172.uvBottomLeftY = i1173[10]
  i1172.uvBottomRightX = i1173[11]
  i1172.uvBottomRightY = i1173[12]
  i1172.uvTopLeftX = i1173[13]
  i1172.uvTopLeftY = i1173[14]
  i1172.uvTopRightX = i1173[15]
  i1172.uvTopRightY = i1173[16]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1175 = data
  i1174.name = i1175[0]
  var i1177 = i1175[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1177[i + 0]) );
  }
  i1174.layers = i1176
  var i1179 = i1175[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1179[i + 0]) );
  }
  i1174.parameters = i1178
  i1174.animationClips = i1175[3]
  i1174.avatarUnsupported = i1175[4]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.defaultWeight = i1183[1]
  i1182.blendingMode = i1183[2]
  i1182.avatarMask = i1183[3]
  i1182.syncedLayerIndex = i1183[4]
  i1182.syncedLayerAffectsTiming = !!i1183[5]
  i1182.syncedLayers = i1183[6]
  i1182.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1183[7], i1182.stateMachine)
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  i1184.path = i1185[2]
  var i1187 = i1185[3]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1187[i + 0]) );
  }
  i1184.states = i1186
  var i1189 = i1185[4]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1189[i + 0]) );
  }
  i1184.machines = i1188
  var i1191 = i1185[5]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1191[i + 0]) );
  }
  i1184.entryStateTransitions = i1190
  var i1193 = i1185[6]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1193[i + 0]) );
  }
  i1184.exitStateTransitions = i1192
  var i1195 = i1185[7]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1195[i + 0]) );
  }
  i1184.anyStateTransitions = i1194
  i1184.defaultStateId = i1185[8]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.name = i1199[1]
  i1198.cycleOffset = i1199[2]
  i1198.cycleOffsetParameter = i1199[3]
  i1198.cycleOffsetParameterActive = !!i1199[4]
  i1198.mirror = !!i1199[5]
  i1198.mirrorParameter = i1199[6]
  i1198.mirrorParameterActive = !!i1199[7]
  i1198.motionId = i1199[8]
  i1198.nameHash = i1199[9]
  i1198.fullPathHash = i1199[10]
  i1198.speed = i1199[11]
  i1198.speedParameter = i1199[12]
  i1198.speedParameterActive = !!i1199[13]
  i1198.tag = i1199[14]
  i1198.tagHash = i1199[15]
  i1198.writeDefaultValues = !!i1199[16]
  var i1201 = i1199[17]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 2, i1200, '')
  }
  i1198.behaviours = i1200
  var i1203 = i1199[18]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1203[i + 0]) );
  }
  i1198.transitions = i1202
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1209 = data
  i1208.fullPath = i1209[0]
  i1208.canTransitionToSelf = !!i1209[1]
  i1208.duration = i1209[2]
  i1208.exitTime = i1209[3]
  i1208.hasExitTime = !!i1209[4]
  i1208.hasFixedDuration = !!i1209[5]
  i1208.interruptionSource = i1209[6]
  i1208.offset = i1209[7]
  i1208.orderedInterruption = !!i1209[8]
  i1208.destinationStateId = i1209[9]
  i1208.isExit = !!i1209[10]
  i1208.mute = !!i1209[11]
  i1208.solo = !!i1209[12]
  var i1211 = i1209[13]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1211[i + 0]) );
  }
  i1208.conditions = i1210
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1215 = data
  i1214.mode = i1215[0]
  i1214.parameter = i1215[1]
  i1214.threshold = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1221 = data
  i1220.destinationStateId = i1221[0]
  i1220.isExit = !!i1221[1]
  i1220.mute = !!i1221[2]
  i1220.solo = !!i1221[3]
  var i1223 = i1221[4]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1223[i + 0]) );
  }
  i1220.conditions = i1222
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1227 = data
  i1226.defaultBool = !!i1227[0]
  i1226.defaultFloat = i1227[1]
  i1226.defaultInt = i1227[2]
  i1226.name = i1227[3]
  i1226.nameHash = i1227[4]
  i1226.type = i1227[5]
  return i1226
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('UnityEngine.InputSystem.InputActionMap', i1231[i + 0]) );
  }
  i1228.m_ActionMaps = i1230
  var i1233 = i1229[1]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1233[i + 0]) );
  }
  i1228.m_ControlSchemes = i1232
  i1228.m_IsProjectWide = !!i1229[2]
  return i1228
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_Id = i1237[1]
  request.r(i1237[2], i1237[3], 0, i1236, 'm_Asset')
  var i1239 = i1237[4]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('UnityEngine.InputSystem.InputAction', i1239[i + 0]) );
  }
  i1236.m_Actions = i1238
  var i1241 = i1237[5]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('UnityEngine.InputSystem.InputBinding', i1241[i + 0]) );
  }
  i1236.m_Bindings = i1240
  return i1236
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1245 = data
  i1244.m_Name = i1245[0]
  i1244.m_Type = i1245[1]
  i1244.m_ExpectedControlType = i1245[2]
  i1244.m_Id = i1245[3]
  i1244.m_Processors = i1245[4]
  i1244.m_Interactions = i1245[5]
  var i1247 = i1245[6]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('UnityEngine.InputSystem.InputBinding', i1247[i + 0]) );
  }
  i1244.m_SingletonActionBindings = i1246
  i1244.m_Flags = i1245[7]
  return i1244
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1251 = data
  i1250.m_Name = i1251[0]
  i1250.m_Id = i1251[1]
  i1250.m_Path = i1251[2]
  i1250.m_Interactions = i1251[3]
  i1250.m_Processors = i1251[4]
  i1250.m_Groups = i1251[5]
  i1250.m_Action = i1251[6]
  i1250.m_Flags = i1251[7]
  return i1250
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1255 = data
  i1254.m_Name = i1255[0]
  i1254.m_BindingGroup = i1255[1]
  var i1257 = i1255[2]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1257[i + 0]) );
  }
  i1254.m_DeviceRequirements = i1256
  return i1254
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1261 = data
  i1260.m_ControlPath = i1261[0]
  i1260.m_Flags = i1261[1]
  return i1260
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'm_Asset')
  i1262.m_ActionId = i1263[2]
  return i1262
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 1, i1266, '')
  }
  i1264.components = i1266
  return i1264
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1271 = data
  i1270.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1271[0], i1270.skipIterations)
  i1270.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1271[1], i1270.threshold)
  i1270.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1271[2], i1270.intensity)
  i1270.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1271[3], i1270.scatter)
  i1270.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1271[4], i1270.clamp)
  i1270.tint = request.d('UnityEngine.Rendering.ColorParameter', i1271[5], i1270.tint)
  i1270.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1271[6], i1270.highQualityFiltering)
  i1270.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1271[7], i1270.downscale)
  i1270.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1271[8], i1270.maxIterations)
  i1270.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1271[9], i1270.dirtTexture)
  i1270.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1271[10], i1270.dirtIntensity)
  i1270.active = !!i1271[11]
  return i1270
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1273 = data
  i1272.m_Value = i1273[0]
  i1272.m_OverrideState = !!i1273[1]
  return i1272
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1275 = data
  i1274.m_Value = i1275[0]
  i1274.m_OverrideState = !!i1275[1]
  return i1274
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1277 = data
  i1276.m_Value = i1277[0]
  i1276.m_OverrideState = !!i1277[1]
  return i1276
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1279 = data
  i1278.m_Value = new pc.Color(i1279[0], i1279[1], i1279[2], i1279[3])
  i1278.m_OverrideState = !!i1279[4]
  return i1278
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1281 = data
  i1280.m_Value = !!i1281[0]
  i1280.m_OverrideState = !!i1281[1]
  return i1280
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1283 = data
  i1282.m_Value = i1283[0]
  i1282.m_OverrideState = !!i1283[1]
  return i1282
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1285 = data
  i1284.dimension = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'm_Value')
  i1284.m_OverrideState = !!i1285[3]
  return i1284
}

Deserializers["UnityEngine.Rendering.Universal.FilmGrain"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.Rendering.Universal.FilmGrain' )
  var i1287 = data
  i1286.type = request.d('UnityEngine.Rendering.Universal.FilmGrainLookupParameter', i1287[0], i1286.type)
  i1286.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1287[1], i1286.intensity)
  i1286.response = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1287[2], i1286.response)
  i1286.texture = request.d('UnityEngine.Rendering.NoInterpTextureParameter', i1287[3], i1286.texture)
  i1286.active = !!i1287[4]
  return i1286
}

Deserializers["UnityEngine.Rendering.Universal.FilmGrainLookupParameter"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Rendering.Universal.FilmGrainLookupParameter' )
  var i1289 = data
  i1288.m_Value = i1289[0]
  i1288.m_OverrideState = !!i1289[1]
  return i1288
}

Deserializers["UnityEngine.Rendering.NoInterpTextureParameter"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.Rendering.NoInterpTextureParameter' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'm_Value')
  i1290.m_OverrideState = !!i1291[2]
  return i1290
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1293 = data
  i1292.color = request.d('UnityEngine.Rendering.ColorParameter', i1293[0], i1292.color)
  i1292.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1293[1], i1292.center)
  i1292.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1293[2], i1292.intensity)
  i1292.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1293[3], i1292.smoothness)
  i1292.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1293[4], i1292.rounded)
  i1292.active = !!i1293[5]
  return i1292
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1295 = data
  i1294.m_Value = new pc.Vec2( i1295[0], i1295[1] )
  i1294.m_OverrideState = !!i1295[2]
  return i1294
}

Deserializers["UnityEngine.Rendering.Universal.ColorAdjustments"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Rendering.Universal.ColorAdjustments' )
  var i1297 = data
  i1296.postExposure = request.d('UnityEngine.Rendering.FloatParameter', i1297[0], i1296.postExposure)
  i1296.contrast = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1297[1], i1296.contrast)
  i1296.colorFilter = request.d('UnityEngine.Rendering.ColorParameter', i1297[2], i1296.colorFilter)
  i1296.hueShift = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1297[3], i1296.hueShift)
  i1296.saturation = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1297[4], i1296.saturation)
  i1296.active = !!i1297[5]
  return i1296
}

Deserializers["UnityEngine.Rendering.FloatParameter"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.Rendering.FloatParameter' )
  var i1299 = data
  i1298.m_Value = i1299[0]
  i1298.m_OverrideState = !!i1299[1]
  return i1298
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1301 = data
  i1300.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1301[0], i1300.mode)
  i1300.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1301[1], i1300.neutralHDRRangeReductionMode)
  i1300.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1301[2], i1300.acesPreset)
  i1300.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1301[3], i1300.hueShiftAmount)
  i1300.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1301[4], i1300.detectPaperWhite)
  i1300.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1301[5], i1300.paperWhite)
  i1300.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1301[6], i1300.detectBrightnessLimits)
  i1300.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1301[7], i1300.minNits)
  i1300.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1301[8], i1300.maxNits)
  i1300.active = !!i1301[9]
  return i1300
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1303 = data
  i1302.m_Value = i1303[0]
  i1302.m_OverrideState = !!i1303[1]
  return i1302
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1305 = data
  i1304.m_Value = i1305[0]
  i1304.m_OverrideState = !!i1305[1]
  return i1304
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1307 = data
  i1306.m_Value = i1307[0]
  i1306.m_OverrideState = !!i1307[1]
  return i1306
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1309 = data
  i1308.useSafeMode = !!i1309[0]
  i1308.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1309[1], i1308.safeModeOptions)
  i1308.timeScale = i1309[2]
  i1308.unscaledTimeScale = i1309[3]
  i1308.useSmoothDeltaTime = !!i1309[4]
  i1308.maxSmoothUnscaledTime = i1309[5]
  i1308.rewindCallbackMode = i1309[6]
  i1308.showUnityEditorReport = !!i1309[7]
  i1308.logBehaviour = i1309[8]
  i1308.drawGizmos = !!i1309[9]
  i1308.defaultRecyclable = !!i1309[10]
  i1308.defaultAutoPlay = i1309[11]
  i1308.defaultUpdateType = i1309[12]
  i1308.defaultTimeScaleIndependent = !!i1309[13]
  i1308.defaultEaseType = i1309[14]
  i1308.defaultEaseOvershootOrAmplitude = i1309[15]
  i1308.defaultEasePeriod = i1309[16]
  i1308.defaultAutoKill = !!i1309[17]
  i1308.defaultLoopType = i1309[18]
  i1308.debugMode = !!i1309[19]
  i1308.debugStoreTargetId = !!i1309[20]
  i1308.showPreviewPanel = !!i1309[21]
  i1308.storeSettingsLocation = i1309[22]
  i1308.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1309[23], i1308.modules)
  i1308.createASMDEF = !!i1309[24]
  i1308.showPlayingTweens = !!i1309[25]
  i1308.showPausedTweens = !!i1309[26]
  return i1308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1311 = data
  i1310.logBehaviour = i1311[0]
  i1310.nestedTweenFailureBehaviour = i1311[1]
  return i1310
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1312 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1313 = data
  i1312.showPanel = !!i1313[0]
  i1312.audioEnabled = !!i1313[1]
  i1312.physicsEnabled = !!i1313[2]
  i1312.physics2DEnabled = !!i1313[3]
  i1312.spriteEnabled = !!i1313[4]
  i1312.uiEnabled = !!i1313[5]
  i1312.textMeshProEnabled = !!i1313[6]
  i1312.tk2DEnabled = !!i1313[7]
  i1312.deAudioEnabled = !!i1313[8]
  i1312.deUnityExtendedEnabled = !!i1313[9]
  i1312.epoOutlineEnabled = !!i1313[10]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1317[i + 0]) );
  }
  i1314.files = i1316
  i1314.componentToPrefabIds = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1321 = data
  i1320.path = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'unityObject')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1325[i + 0]) );
  }
  i1322.scriptsExecutionOrder = i1324
  var i1327 = i1323[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1327[i + 0]) );
  }
  i1322.sortingLayers = i1326
  var i1329 = i1323[2]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1329[i + 0]) );
  }
  i1322.cullingLayers = i1328
  i1322.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1323[3], i1322.timeSettings)
  i1322.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1323[4], i1322.physicsSettings)
  i1322.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1323[5], i1322.physics2DSettings)
  i1322.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1323[6], i1322.qualitySettings)
  i1322.enableRealtimeShadows = !!i1323[7]
  i1322.enableAutoInstancing = !!i1323[8]
  i1322.enableDynamicBatching = !!i1323[9]
  i1322.lightmapEncodingQuality = i1323[10]
  i1322.desiredColorSpace = i1323[11]
  var i1331 = i1323[12]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( i1331[i + 0] );
  }
  i1322.allTags = i1330
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = i1335[1]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  i1338.value = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1345 = data
  i1344.fixedDeltaTime = i1345[0]
  i1344.maximumDeltaTime = i1345[1]
  i1344.timeScale = i1345[2]
  i1344.maximumParticleTimestep = i1345[3]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1347 = data
  i1346.gravity = new pc.Vec3( i1347[0], i1347[1], i1347[2] )
  i1346.defaultSolverIterations = i1347[3]
  i1346.bounceThreshold = i1347[4]
  i1346.autoSyncTransforms = !!i1347[5]
  i1346.autoSimulation = !!i1347[6]
  var i1349 = i1347[7]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1349[i + 0]) );
  }
  i1346.collisionMatrix = i1348
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1353 = data
  i1352.enabled = !!i1353[0]
  i1352.layerId = i1353[1]
  i1352.otherLayerId = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'material')
  i1354.gravity = new pc.Vec2( i1355[2], i1355[3] )
  i1354.positionIterations = i1355[4]
  i1354.velocityIterations = i1355[5]
  i1354.velocityThreshold = i1355[6]
  i1354.maxLinearCorrection = i1355[7]
  i1354.maxAngularCorrection = i1355[8]
  i1354.maxTranslationSpeed = i1355[9]
  i1354.maxRotationSpeed = i1355[10]
  i1354.baumgarteScale = i1355[11]
  i1354.baumgarteTOIScale = i1355[12]
  i1354.timeToSleep = i1355[13]
  i1354.linearSleepTolerance = i1355[14]
  i1354.angularSleepTolerance = i1355[15]
  i1354.defaultContactOffset = i1355[16]
  i1354.autoSimulation = !!i1355[17]
  i1354.queriesHitTriggers = !!i1355[18]
  i1354.queriesStartInColliders = !!i1355[19]
  i1354.callbacksOnDisable = !!i1355[20]
  i1354.reuseCollisionCallbacks = !!i1355[21]
  i1354.autoSyncTransforms = !!i1355[22]
  var i1357 = i1355[23]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1365[i + 0]) );
  }
  i1362.qualityLevels = i1364
  var i1367 = i1363[1]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( i1367[i + 0] );
  }
  i1362.names = i1366
  i1362.shadows = i1363[2]
  i1362.anisotropicFiltering = i1363[3]
  i1362.antiAliasing = i1363[4]
  i1362.lodBias = i1363[5]
  i1362.shadowCascades = i1363[6]
  i1362.shadowDistance = i1363[7]
  i1362.shadowmaskMode = i1363[8]
  i1362.shadowProjection = i1363[9]
  i1362.shadowResolution = i1363[10]
  i1362.softParticles = !!i1363[11]
  i1362.softVegetation = !!i1363[12]
  i1362.activeColorSpace = i1363[13]
  i1362.desiredColorSpace = i1363[14]
  i1362.masterTextureLimit = i1363[15]
  i1362.maxQueuedFrames = i1363[16]
  i1362.particleRaycastBudget = i1363[17]
  i1362.pixelLightCount = i1363[18]
  i1362.realtimeReflectionProbes = !!i1363[19]
  i1362.shadowCascade2Split = i1363[20]
  i1362.shadowCascade4Split = new pc.Vec3( i1363[21], i1363[22], i1363[23] )
  i1362.streamingMipmapsActive = !!i1363[24]
  i1362.vSyncCount = i1363[25]
  i1362.asyncUploadBufferSize = i1363[26]
  i1362.asyncUploadTimeSlice = i1363[27]
  i1362.billboardsFaceCameraPosition = !!i1363[28]
  i1362.shadowNearPlaneOffset = i1363[29]
  i1362.streamingMipmapsMemoryBudget = i1363[30]
  i1362.maximumLODLevel = i1363[31]
  i1362.streamingMipmapsAddAllCameras = !!i1363[32]
  i1362.streamingMipmapsMaxLevelReduction = i1363[33]
  i1362.streamingMipmapsRenderersPerFrame = i1363[34]
  i1362.resolutionScalingFixedDPIFactor = i1363[35]
  i1362.streamingMipmapsMaxFileIORequests = i1363[36]
  i1362.currentQualityLevel = i1363[37]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1371 = data
  i1370.name = i1371[0]
  var i1373 = i1371[1]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1373[i + 0]) );
  }
  i1370.tos = i1372
  var i1375 = i1371[2]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1370.constant = i1374
  i1370.isValid = !!i1371[3]
  i1370.isHuman = !!i1371[4]
  i1370.hasRootMotion = !!i1371[5]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1379 = data
  i1378.hash = i1379[0]
  i1378.path = i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask' )
  var i1381 = data
  i1380.name = i1381[0]
  var i1383 = i1381[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement', i1383[i + 0]) );
  }
  i1380.elements = i1382
  i1380.mask = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement' )
  var i1387 = data
  i1386.path = i1387[0]
  i1386.weight = i1387[1]
  i1386.hash = i1387[2]
  return i1386
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask":{"name":0,"elements":1,"mask":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement":{"path":0,"weight":1,"hash":2}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[17],"88":[62],"89":[13],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[62],"111":[21],"112":[113],"114":[113],"22":[0],"71":[115],"116":[0],"117":[62],"63":[62],"60":[59],"118":[34],"119":[34],"35":[34],"120":[34],"121":[34],"122":[34],"123":[34],"124":[34],"125":[20],"126":[127,34],"128":[34],"129":[10],"130":[10,131],"132":[127],"133":[34],"134":[135],"136":[0],"137":[0],"24":[22],"3":[1,0],"138":[0],"23":[22],"139":[0],"140":[0],"141":[0],"142":[0],"143":[0],"144":[0],"145":[0],"146":[0],"147":[0],"148":[1,0],"149":[0],"150":[0],"151":[0],"152":[0],"26":[1,0],"153":[0],"154":[42],"155":[42],"156":[42],"157":[42],"158":[62],"159":[62],"160":[135],"43":[42],"161":[22],"162":[135]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","FloatingJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.CapsuleCollider","Npc","UnityEngine.Animator","UnityEngine.GameObject","StackingPlace","UnityEngine.Rigidbody","ObjectStacker","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider","StackItem","Pathfinding.Seeker","Pathfinding.AIPath","Pathfinding.FunnelModifier","Pathfinding.AIDestinationSetter","EnemyAI","DamageSystem","Billboard","UnityEngine.SpriteRenderer","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameAssets.GameSet.GameDevUtils.Managers.CurrencyManager","ObjectQueueManager","PoolingManager","GameAssets.GameSet.GameDevUtils.Managers.SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Button","PlayerController","DG.Tweening.DOTweenAnimation","UnityEngine.OcclusionArea","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.MeshCollider","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","CameraFollow","UnityEngine.Camera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.AudioListener","PlayerAttack","AnimatorController","ArrowPointer","CuustomerZone","UnityEngine.Terrain","UnityEngine.TerrainCollider","CurrencyDeductionOnCollision","UnityEngine.Cubemap","UnityEngine.AnimationClip","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.FilmGrain","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Rendering.Universal.ColorAdjustments","UnityEngine.Rendering.Universal.Tonemapping","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Pathfinding.AIBase","Pathfinding.AILerp","Pathfinding.RichAI","Pathfinding.RaycastModifier","Pathfinding.SimpleSmoothModifier","Pathfinding.Legacy.LegacyAIPath","Pathfinding.Legacy.LegacyRichAI","Pathfinding.Examples.LightweightRVO","Pathfinding.Examples.RVOExampleAgent","Pathfinding.RVO.RVOController","Pathfinding.Examples.LocalSpaceRichAI","Pathfinding.Examples.HexagonTrigger","Pathfinding.Examples.TurnBasedDoor","Pathfinding.SingleNodeBlocker","Pathfinding.Examples.ManualRVOAgent","Pathfinding.Examples.MineBotAI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "PlayableAd";

Deserializers.lunaInitializationTime = "08/01/2025 14:22:43";

Deserializers.lunaDaysRunning = "4.0";

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

Deserializers.buildID = "c49d29e7-f5c6-43d1-b4d4-732511df0019";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


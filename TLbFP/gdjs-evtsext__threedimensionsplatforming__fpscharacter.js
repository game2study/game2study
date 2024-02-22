
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter || {};

/**
 * Behavior generated from 3D FPS Character
 */
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter = class FPSCharacter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Sprinting = false;
    this._behaviorData.CanSprint = true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Sprinting !== newBehaviorData.Sprinting)
      this._behaviorData.Sprinting = newBehaviorData.Sprinting;
    if (oldBehaviorData.CanSprint !== newBehaviorData.CanSprint)
      this._behaviorData.CanSprint = newBehaviorData.CanSprint;

    return true;
  }

  // Properties:
  
  _getSprinting() {
    return this._behaviorData.Sprinting !== undefined ? this._behaviorData.Sprinting : false;
  }
  _setSprinting(newValue) {
    this._behaviorData.Sprinting = newValue;
  }
  _toggleSprinting() {
    this._setSprinting(!this._getSprinting());
  }
  _getCanSprint() {
    return this._behaviorData.CanSprint !== undefined ? this._behaviorData.CanSprint : true;
  }
  _setCanSprint(newValue) {
    this._behaviorData.CanSprint = newValue;
  }
  _toggleCanSprint() {
    this._setCanSprint(!this._getCanSprint());
  }
}

/**
 * Shared data generated from 3D FPS Character
 */
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.SharedData = class FPSCharacterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ThreeDimensionsPlatforming_FPSCharacterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ThreeDimensionsPlatforming_FPSCharacterSharedData = new gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.SharedData(
      initialData
    );
  }
  return instanceContainer._ThreeDimensionsPlatforming_FPSCharacterSharedData;
}

// Methods:
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects5= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects3= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects4= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects5= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects5= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects3= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects5= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects3= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects4= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects5= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].setAngle(gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getAngle() + (gdjs.evtsExt__SpriteMultitouchJoystick__StickForceX.func(runtimeScene, 2, "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 2));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].setRotationY(gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getRotationY() + (gdjs.evtsExt__SpriteMultitouchJoystick__StickForceY.func(runtimeScene, 2, "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 2));
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ThreeDimensionsPlatforming__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].setAngle(gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle() + (gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 10));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].setRotationY(gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getRotationY() + (gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2[i].setRotationY(gdjs.evtTools.common.clamp((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2[i].getRotationY()), -(90), 90));
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("WalkingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getAngle()) + gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + 90, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) - 90, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) + 180, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) + 90, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) - 45, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) + 45, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getAngle()) - 135, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getAngle()) + 135, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 0);
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("SprintMobile"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("WalkingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SprintOn") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4[i].IsDirectionPushed8Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprinting(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprinting() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getAngle()) + gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + 90, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) / 1.25, 0);
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SprintDesktop") : ""));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SprintOn") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprinting(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprinting() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3[i].getAngle()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) / 1.25, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ForcePlayerStopSprint((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AllowSprint((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList8(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("MobileTrueOrFalse") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("LookingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("WalkingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("LookingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("WalkingStick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1[i].SetJoystickIdentifier("Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1[i].SetControllerIdentifier(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1[i].SetJoystickIdentifier("Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1[i].SetControllerIdentifier(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DebugCam") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0] : null), true, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0].getZ()) + (( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0].getDepth()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0].getRotationY())) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0].getRotationX()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1[0].getAngle()) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}}

}


};gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList10(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList11(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSChar = function(LookingStick, WalkingStick, Speed, SprintDesktop, SprintMobile, MobileTrueOrFalse, SprintOn, DebugCam, HitboxObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "LookingStick": LookingStick
, "WalkingStick": WalkingStick
, "SprintMobile": SprintMobile
, "HitboxObject": HitboxObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "LookingStick": gdjs.objectsListsToArray(LookingStick)
, "WalkingStick": gdjs.objectsListsToArray(WalkingStick)
, "SprintMobile": gdjs.objectsListsToArray(SprintMobile)
, "HitboxObject": gdjs.objectsListsToArray(HitboxObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Speed") return Speed;
if (argName === "SprintDesktop") return SprintDesktop;
if (argName === "MobileTrueOrFalse") return MobileTrueOrFalse;
if (argName === "SprintOn") return SprintOn;
if (argName === "DebugCam") return DebugCam;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects3.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects4.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDLookingStickObjects5.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects3.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects4.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDWalkingStickObjects5.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects3.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects4.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDSprintMobileObjects5.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects3.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects4.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.GDHitboxObjectObjects5.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ActAsFPSCharContext.eventsList12(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects2= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects2= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Mobile") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getAngle()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) / 1.25, 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MovementJoystick"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Mobile") : false);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanSprint() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1[i].IsDirectionPushed8Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1 */
/* Reuse gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1[i].SetControllerIdentifier(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1[i].SetJoystickIdentifier("Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].addPolarForce((gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getAngle()) + gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + 90, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0) / 1.25, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprinting(true);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanSprint(true);
}
}}

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprint = function(Mobile, Speed, MovementJoystick, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MovementJoystick": MovementJoystick
},
  _objectArraysMap: {
"Object": thisObjectList
, "MovementJoystick": gdjs.objectsListsToArray(MovementJoystick)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Mobile") return Mobile;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.GDMovementJoystickObjects2.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerSprintContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprinting() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprinting = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.isSprintingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanSprint(false);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprinting(false);
}
}}

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprint = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.ForcePlayerStopSprintContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanSprint(true);
}
}}

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprint = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.AllowSprintContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ThreeDimensionsPlatforming::FPSCharacter", gdjs.evtsExt__ThreeDimensionsPlatforming__FPSCharacter.FPSCharacter);

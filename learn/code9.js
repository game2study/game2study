gdjs.gm3Code = {};
gdjs.gm3Code.localVariables = [];
gdjs.gm3Code.GDMonsterObjects1= [];
gdjs.gm3Code.GDMonsterObjects2= [];
gdjs.gm3Code.GDPlayerObjects1= [];
gdjs.gm3Code.GDPlayerObjects2= [];
gdjs.gm3Code.GDFlatDarkJoystickObjects1= [];
gdjs.gm3Code.GDFlatDarkJoystickObjects2= [];
gdjs.gm3Code.GDOnScreenControlsButtonObjects1= [];
gdjs.gm3Code.GDOnScreenControlsButtonObjects2= [];
gdjs.gm3Code.GDClicKounterObjects1= [];
gdjs.gm3Code.GDClicKounterObjects2= [];
gdjs.gm3Code.GDCrateCounterObjects1= [];
gdjs.gm3Code.GDCrateCounterObjects2= [];
gdjs.gm3Code.GDPickupCrateObjects1= [];
gdjs.gm3Code.GDPickupCrateObjects2= [];
gdjs.gm3Code.GDKeyObjects1= [];
gdjs.gm3Code.GDKeyObjects2= [];
gdjs.gm3Code.GDPromptTextObjects1= [];
gdjs.gm3Code.GDPromptTextObjects2= [];
gdjs.gm3Code.GDGrassObjects1= [];
gdjs.gm3Code.GDGrassObjects2= [];
gdjs.gm3Code.GDCommonTreeDead2Objects1= [];
gdjs.gm3Code.GDCommonTreeDead2Objects2= [];
gdjs.gm3Code.GDWallCornerObjects1= [];
gdjs.gm3Code.GDWallCornerObjects2= [];
gdjs.gm3Code.GDWallDoorwayObjects1= [];
gdjs.gm3Code.GDWallDoorwayObjects2= [];
gdjs.gm3Code.GDWallWindowSlideObjects1= [];
gdjs.gm3Code.GDWallWindowSlideObjects2= [];
gdjs.gm3Code.GDWallObjects1= [];
gdjs.gm3Code.GDWallObjects2= [];
gdjs.gm3Code.GDWallHalfObjects1= [];
gdjs.gm3Code.GDWallHalfObjects2= [];
gdjs.gm3Code.GDGrassShortObjects1= [];
gdjs.gm3Code.GDGrassShortObjects2= [];
gdjs.gm3Code.GDMPIndicatorObjects1= [];
gdjs.gm3Code.GDMPIndicatorObjects2= [];


gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDFlatDarkJoystickObjects1Objects = Hashtable.newFrom({"FlatDarkJoystick": gdjs.gm3Code.GDFlatDarkJoystickObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDFlatDarkJoystickObjects1Objects = Hashtable.newFrom({"FlatDarkJoystick": gdjs.gm3Code.GDFlatDarkJoystickObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.gm3Code.GDOnScreenControlsButtonObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.gm3Code.GDPlayerObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects = Hashtable.newFrom({"PickupCrate": gdjs.gm3Code.GDPickupCrateObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects = Hashtable.newFrom({"PickupCrate": gdjs.gm3Code.GDPickupCrateObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects = Hashtable.newFrom({"PickupCrate": gdjs.gm3Code.GDPickupCrateObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.gm3Code.GDMonsterObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.gm3Code.GDPlayerObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.gm3Code.GDMonsterObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.gm3Code.GDPlayerObjects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDCommonTreeDead2Objects1Objects = Hashtable.newFrom({"CommonTreeDead2": gdjs.gm3Code.GDCommonTreeDead2Objects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDCommonTreeDead2Objects1Objects = Hashtable.newFrom({"CommonTreeDead2": gdjs.gm3Code.GDCommonTreeDead2Objects1});
gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDGrassShortObjects1Objects = Hashtable.newFrom({"GrassShort": gdjs.gm3Code.GDGrassShortObjects1});
gdjs.gm3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.gm3Code.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.gm3Code.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPlayerObjects1[i].getBehavior("FPSCharacter").ActAsFPSChar(gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDFlatDarkJoystickObjects1Objects, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDFlatDarkJoystickObjects1Objects, 500, "LShift", gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDOnScreenControlsButtonObjects1Objects, false, true, false, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__ThreeDimensionsPlatforming__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.gm3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.gm3Code.GDPlayerObjects1[0].getX()), (( gdjs.gm3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.gm3Code.GDPlayerObjects1[0].getY()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm3Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Pathfinding").getSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.gm3Code.GDMonsterObjects1[k] = gdjs.gm3Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.gm3Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm3Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gm3Code.GDMonsterObjects1[k] = gdjs.gm3Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.gm3Code.GDMonsterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm3Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Pathfinding").getSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gm3Code.GDMonsterObjects1[k] = gdjs.gm3Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.gm3Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm3Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gm3Code.GDMonsterObjects1[k] = gdjs.gm3Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.gm3Code.GDMonsterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Animation").setAnimationElapsedTime(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("context").setString("gm3");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "AnswerScreen");
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ClicKounter"), gdjs.gm3Code.GDClicKounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("CrateCounter"), gdjs.gm3Code.GDCrateCounterObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDClicKounterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDClicKounterObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.gm3Code.GDCrateCounterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDCrateCounterObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPlayerObjects1[i].getBehavior("Jump3D").SetCanJump((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PickupCrate"), gdjs.gm3Code.GDPickupCrateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDPickupCrateObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDPickupCrateObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPickupCrateObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PickupCrate"), gdjs.gm3Code.GDPickupCrateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm3Code.GDPickupCrateObjects1.length;i<l;++i) {
    if ( gdjs.gm3Code.GDPickupCrateObjects1[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.gm3Code.GDPickupCrateObjects1[k] = gdjs.gm3Code.GDPickupCrateObjects1[i];
        ++k;
    }
}
gdjs.gm3Code.GDPickupCrateObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDPickupCrateObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDPickupCrateObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPickupCrateObjects1[i].rotate(180, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PickupCrate"), gdjs.gm3Code.GDPickupCrateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.gm3Code.GDPromptTextObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPromptTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PickupCrate"), gdjs.gm3Code.GDPickupCrateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPickupCrateObjects1Objects, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.gm3Code.GDPromptTextObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPromptTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDMonsterObjects1Objects, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects, 200, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Pathfinding").setMaxSpeed(300);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDMonsterObjects1Objects, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDPlayerObjects1Objects, 200, true);
if (isConditionTrue_0) {
/* Reuse gdjs.gm3Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].getBehavior("Pathfinding").setMaxSpeed(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.gm3Code.GDPromptTextObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPromptTextObjects1[i].getBehavior("Text").setText("Press E to Collect");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.gm3Code.GDPromptTextObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPromptTextObjects1[i].getBehavior("Text").setText("Need 5 Keys to Collect");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CommonTreeDead2"), gdjs.gm3Code.GDCommonTreeDead2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.gm3Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gm3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDMonsterObjects1[i].separateFromObjectsList(gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDCommonTreeDead2Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.gm3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDCommonTreeDead2Objects1Objects, false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GrassShort"), gdjs.gm3Code.GDGrassShortObjects1);
{gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.func(runtimeScene, gdjs.gm3Code.mapOfGDgdjs_9546gm3Code_9546GDGrassShortObjects1Objects, 99, 99, 0, 0, 32 + gdjs.randomFloatInRange(-(32), 32), 32 + gdjs.randomFloatInRange(-(32), 32), "grass", "", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27611068);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GrassShort"), gdjs.gm3Code.GDGrassShortObjects1);
{for(var i = 0, len = gdjs.gm3Code.GDGrassShortObjects1.length ;i < len;++i) {
    gdjs.gm3Code.GDGrassShortObjects1[i].setPosition((gdjs.gm3Code.GDGrassShortObjects1[i].getX()) + gdjs.randomFloatInRange(-(32), 32),(gdjs.gm3Code.GDGrassShortObjects1[i].getY()) + gdjs.randomFloatInRange(-(32), 32));
}
}}

}


};

gdjs.gm3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm3Code.GDMonsterObjects1.length = 0;
gdjs.gm3Code.GDMonsterObjects2.length = 0;
gdjs.gm3Code.GDPlayerObjects1.length = 0;
gdjs.gm3Code.GDPlayerObjects2.length = 0;
gdjs.gm3Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.gm3Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.gm3Code.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.gm3Code.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.gm3Code.GDClicKounterObjects1.length = 0;
gdjs.gm3Code.GDClicKounterObjects2.length = 0;
gdjs.gm3Code.GDCrateCounterObjects1.length = 0;
gdjs.gm3Code.GDCrateCounterObjects2.length = 0;
gdjs.gm3Code.GDPickupCrateObjects1.length = 0;
gdjs.gm3Code.GDPickupCrateObjects2.length = 0;
gdjs.gm3Code.GDKeyObjects1.length = 0;
gdjs.gm3Code.GDKeyObjects2.length = 0;
gdjs.gm3Code.GDPromptTextObjects1.length = 0;
gdjs.gm3Code.GDPromptTextObjects2.length = 0;
gdjs.gm3Code.GDGrassObjects1.length = 0;
gdjs.gm3Code.GDGrassObjects2.length = 0;
gdjs.gm3Code.GDCommonTreeDead2Objects1.length = 0;
gdjs.gm3Code.GDCommonTreeDead2Objects2.length = 0;
gdjs.gm3Code.GDWallCornerObjects1.length = 0;
gdjs.gm3Code.GDWallCornerObjects2.length = 0;
gdjs.gm3Code.GDWallDoorwayObjects1.length = 0;
gdjs.gm3Code.GDWallDoorwayObjects2.length = 0;
gdjs.gm3Code.GDWallWindowSlideObjects1.length = 0;
gdjs.gm3Code.GDWallWindowSlideObjects2.length = 0;
gdjs.gm3Code.GDWallObjects1.length = 0;
gdjs.gm3Code.GDWallObjects2.length = 0;
gdjs.gm3Code.GDWallHalfObjects1.length = 0;
gdjs.gm3Code.GDWallHalfObjects2.length = 0;
gdjs.gm3Code.GDGrassShortObjects1.length = 0;
gdjs.gm3Code.GDGrassShortObjects2.length = 0;
gdjs.gm3Code.GDMPIndicatorObjects1.length = 0;
gdjs.gm3Code.GDMPIndicatorObjects2.length = 0;

gdjs.gm3Code.eventsList0(runtimeScene);

return;

}

gdjs['gm3Code'] = gdjs.gm3Code;

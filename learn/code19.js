gdjs.mp1Code = {};
gdjs.mp1Code.localVariables = [];
gdjs.mp1Code.GDPlayerObjects1= [];
gdjs.mp1Code.GDPlayerObjects2= [];
gdjs.mp1Code.GDPlayerObjects3= [];
gdjs.mp1Code.GDPlayerObjects4= [];
gdjs.mp1Code.GDNewButtonObjects1= [];
gdjs.mp1Code.GDNewButtonObjects2= [];
gdjs.mp1Code.GDNewButtonObjects3= [];
gdjs.mp1Code.GDNewButtonObjects4= [];
gdjs.mp1Code.GDNewJoystickObjects1= [];
gdjs.mp1Code.GDNewJoystickObjects2= [];
gdjs.mp1Code.GDNewJoystickObjects3= [];
gdjs.mp1Code.GDNewJoystickObjects4= [];
gdjs.mp1Code.GDBathroomCabinetDrawerObjects1= [];
gdjs.mp1Code.GDBathroomCabinetDrawerObjects2= [];
gdjs.mp1Code.GDBathroomCabinetDrawerObjects3= [];
gdjs.mp1Code.GDBathroomCabinetDrawerObjects4= [];
gdjs.mp1Code.GDMPIndicatorObjects1= [];
gdjs.mp1Code.GDMPIndicatorObjects2= [];
gdjs.mp1Code.GDMPIndicatorObjects3= [];
gdjs.mp1Code.GDMPIndicatorObjects4= [];


gdjs.mp1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mp1Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.mp1Code.GDPlayerObjects3[i].getVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingW"), true) ) {
        isConditionTrue_0 = true;
        gdjs.mp1Code.GDPlayerObjects3[k] = gdjs.mp1Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.mp1Code.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mp1Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("FPSCharacter").SetKeySimulate("w", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mp1Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.mp1Code.GDPlayerObjects3[i].getVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingA"), true) ) {
        isConditionTrue_0 = true;
        gdjs.mp1Code.GDPlayerObjects3[k] = gdjs.mp1Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.mp1Code.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mp1Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("FPSCharacter").SetKeySimulate("a", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mp1Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.mp1Code.GDPlayerObjects3[i].getVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingS"), true) ) {
        isConditionTrue_0 = true;
        gdjs.mp1Code.GDPlayerObjects3[k] = gdjs.mp1Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.mp1Code.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mp1Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("FPSCharacter").SetKeySimulate("s", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mp1Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.mp1Code.GDPlayerObjects3[i].getVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingD"), true) ) {
        isConditionTrue_0 = true;
        gdjs.mp1Code.GDPlayerObjects3[k] = gdjs.mp1Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.mp1Code.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mp1Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("FPSCharacter").SetKeySimulate("d", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mp1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.mp1Code.GDPlayerObjects2[i].getVariableBoolean(gdjs.mp1Code.GDPlayerObjects2[i].getVariables().getFromIndex(0).getChild("holdingSpace"), true) ) {
        isConditionTrue_0 = true;
        gdjs.mp1Code.GDPlayerObjects2[k] = gdjs.mp1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.mp1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mp1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects2[i].getBehavior("FPSCharacter").SetKeySimulate("space", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewJoystickObjects2Objects = Hashtable.newFrom({"NewJoystick": gdjs.mp1Code.GDNewJoystickObjects2});
gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewJoystickObjects2Objects = Hashtable.newFrom({"NewJoystick": gdjs.mp1Code.GDNewJoystickObjects2});
gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewButtonObjects2Objects = Hashtable.newFrom({"NewButton": gdjs.mp1Code.GDNewButtonObjects2});
gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.mp1Code.GDPlayerObjects2});
gdjs.mp1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
}

}


{


gdjs.mp1Code.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.mp1Code.GDNewButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewJoystick"), gdjs.mp1Code.GDNewJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects2[i].getBehavior("FPSCharacter").ActAsFPSChar(gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewJoystickObjects2Objects, gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewJoystickObjects2Objects, 200, "LShift", gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDNewButtonObjects2Objects, false, true, false, gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDPlayerObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28221804);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28222428);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28223204);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28224588);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28224388);
}
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if (isConditionTrue_0) {
}

}


};gdjs.mp1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {

{ //Subevents
gdjs.mp1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.mp1Code.GDPlayerObjects2});
gdjs.mp1Code.eventsList3 = function(runtimeScene) {

};gdjs.mp1Code.eventsList4 = function(runtimeScene) {

};gdjs.mp1Code.eventsList5 = function(runtimeScene) {

};gdjs.mp1Code.eventsList6 = function(runtimeScene) {

};gdjs.mp1Code.eventsList7 = function(runtimeScene) {

};gdjs.mp1Code.eventsList8 = function(runtimeScene) {

};gdjs.mp1Code.eventsList9 = function(runtimeScene) {

};gdjs.mp1Code.eventsList10 = function(runtimeScene) {

};gdjs.mp1Code.eventsList11 = function(runtimeScene) {

};gdjs.mp1Code.eventsList12 = function(runtimeScene) {

};gdjs.mp1Code.eventsList13 = function(runtimeScene) {

};gdjs.mp1Code.eventsList14 = function(runtimeScene) {

};gdjs.mp1Code.eventsList15 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingW"), true);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList3(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingA"), true);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList4(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingS"), true);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList5(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingD"), true);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList6(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingSpace"), true);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList7(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingW"), false);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList8(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingA"), false);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList9(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingS"), false);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList10(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingD"), false);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList11(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].setVariableBoolean(gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(0).getChild("holdingSpace"), false);
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList12(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(((gdjs.mp1Code.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mp1Code.GDPlayerObjects3[0].getVariables()).getFromIndex(1).getAsNumber()) > 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("Object3D").setRotationY(gdjs.mp1Code.GDPlayerObjects3[i].getBehavior("Object3D").getRotationY() + (gdjs.mp1Code.GDPlayerObjects3[i].getVariables().getFromIndex(1).getAsNumber()));
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList13(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.mp1Code.GDPlayerObjects2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(((gdjs.mp1Code.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mp1Code.GDPlayerObjects2[0].getVariables()).getFromIndex(2).getAsNumber()) > 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.mp1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.mp1Code.GDPlayerObjects2[i].getBehavior("Object3D").setRotationX(gdjs.mp1Code.GDPlayerObjects2[i].getBehavior("Object3D").getRotationX() + (gdjs.mp1Code.GDPlayerObjects2[i].getVariables().getFromIndex(2).getAsNumber()));
}
}
{ //Subevents: 
gdjs.mp1Code.eventsList14(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.mp1Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.mp1Code.GDPlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mp1Code.mapOfGDgdjs_9546mp1Code_9546GDPlayerObjects2Objects, 0, 0, "");
}{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}}

}


{


gdjs.mp1Code.eventsList15(runtimeScene);
}


};gdjs.mp1Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {

{ //Subevents
gdjs.mp1Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.mp1Code.eventsList18 = function(runtimeScene) {

{


gdjs.mp1Code.eventsList2(runtimeScene);
}


{


gdjs.mp1Code.eventsList17(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.mp1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mp1Code.GDPlayerObjects1.length = 0;
gdjs.mp1Code.GDPlayerObjects2.length = 0;
gdjs.mp1Code.GDPlayerObjects3.length = 0;
gdjs.mp1Code.GDPlayerObjects4.length = 0;
gdjs.mp1Code.GDNewButtonObjects1.length = 0;
gdjs.mp1Code.GDNewButtonObjects2.length = 0;
gdjs.mp1Code.GDNewButtonObjects3.length = 0;
gdjs.mp1Code.GDNewButtonObjects4.length = 0;
gdjs.mp1Code.GDNewJoystickObjects1.length = 0;
gdjs.mp1Code.GDNewJoystickObjects2.length = 0;
gdjs.mp1Code.GDNewJoystickObjects3.length = 0;
gdjs.mp1Code.GDNewJoystickObjects4.length = 0;
gdjs.mp1Code.GDBathroomCabinetDrawerObjects1.length = 0;
gdjs.mp1Code.GDBathroomCabinetDrawerObjects2.length = 0;
gdjs.mp1Code.GDBathroomCabinetDrawerObjects3.length = 0;
gdjs.mp1Code.GDBathroomCabinetDrawerObjects4.length = 0;
gdjs.mp1Code.GDMPIndicatorObjects1.length = 0;
gdjs.mp1Code.GDMPIndicatorObjects2.length = 0;
gdjs.mp1Code.GDMPIndicatorObjects3.length = 0;
gdjs.mp1Code.GDMPIndicatorObjects4.length = 0;

gdjs.mp1Code.eventsList18(runtimeScene);

return;

}

gdjs['mp1Code'] = gdjs.mp1Code;

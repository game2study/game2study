gdjs.Class_323D_32ViewCode = {};
gdjs.Class_323D_32ViewCode.localVariables = [];
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects1= [];
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2= [];
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects3= [];
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects4= [];
gdjs.Class_323D_32ViewCode.GDPlayerObjects1= [];
gdjs.Class_323D_32ViewCode.GDPlayerObjects2= [];
gdjs.Class_323D_32ViewCode.GDPlayerObjects3= [];
gdjs.Class_323D_32ViewCode.GDPlayerObjects4= [];
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects1= [];
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects2= [];
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects3= [];
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects4= [];
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects1= [];
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects2= [];
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects3= [];
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects4= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects1= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects2= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects3= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects4= [];


gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileJoystickObjects1Objects = Hashtable.newFrom({"MobileJoystick": gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects1});
gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileJoystickObjects1Objects = Hashtable.newFrom({"MobileJoystick": gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects1});
gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileButtonObjects1Objects = Hashtable.newFrom({"MobileButton": gdjs.Class_323D_32ViewCode.GDMobileButtonObjects1});
gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects1Objects = Hashtable.newFrom({"OtherPlayers": gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects1});
gdjs.Class_323D_32ViewCode.mapOfEmptyGDOtherPlayersObjects = Hashtable.newFrom({"OtherPlayers": []});
gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects2Objects = Hashtable.newFrom({"OtherPlayers": gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2});
gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects2Objects = Hashtable.newFrom({"OtherPlayers": gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2});
gdjs.Class_323D_32ViewCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).add(1);
}}

}


};gdjs.Class_323D_32ViewCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OtherPlayers"), gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2 */
{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects2Objects, gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("x").getAsString()), gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("y").getAsString()), "");
}{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].returnVariable(gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{ //Subevents: 
gdjs.Class_323D_32ViewCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Class_323D_32ViewCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).add(1);
}}

}


};gdjs.Class_323D_32ViewCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("OtherPlayers"), gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length;i<l;++i) {
    if ( gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].getVariableNumber(gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].getVariables().getFromIndex(0)) == gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[k] = gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i];
        ++k;
    }
}
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length = k;
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2[i].setPosition(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("x").getAsString()),gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Class_323D_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("y").getAsString()));
}
}
{ //Subevents: 
gdjs.Class_323D_32ViewCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Class_323D_32ViewCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.isAuthenticated());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MobileButton"), gdjs.Class_323D_32ViewCode.GDMobileButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MobileJoystick"), gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("OtherPlayers"), gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Class_323D_32ViewCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDPlayerObjects1[i].getBehavior("FPSCharacter").ActAsFPSChar(gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileJoystickObjects1Objects, gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileJoystickObjects1Objects, 259, "LShift", gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDMobileButtonObjects1Objects, false, true, false, gdjs.Class_323D_32ViewCode.mapOfGDgdjs_9546Class_9595323D_959532ViewCode_9546GDOtherPlayersObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Class_323D_32ViewCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDPlayerObjects1[i].getBehavior("FPSCharacter").SetKeySimulate("w", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Class_323D_32ViewCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Class_323D_32ViewCode.GDPlayerObjects1[i].getBehavior("FPSCharacter").SetKeySimulate("", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.writeField("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView/players/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "paused", "false", gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.writeField("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView/players/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "paused", "false", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Class_323D_32ViewCode.GDPlayerObjects1);
{gdjs.evtTools.firebaseTools.database.updateField("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView/players/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "x", gdjs.evtTools.common.toString((( gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Class_323D_32ViewCode.GDPlayerObjects1[0].getX())), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView/players/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "z", gdjs.evtTools.common.toString((( gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Class_323D_32ViewCode.GDPlayerObjects1[0].getBehavior("Object3D").getZ())), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.updateField("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView/players/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "y", gdjs.evtTools.common.toString((( gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Class_323D_32ViewCode.GDPlayerObjects1[0].getY())), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.database.getVariable("/classes/" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString() + "/games/3DView", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("current_player_iter", variable);
}
gdjs.Class_323D_32ViewCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) != gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_323D_32ViewCode.mapOfEmptyGDOtherPlayersObjects));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33654388);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Class_323D_32ViewCode.eventsList1(runtimeScene);} //End of subevents
}
gdjs.Class_323D_32ViewCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("current_player_iter", variable);
}
gdjs.Class_323D_32ViewCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Class_323D_32ViewCode.eventsList3(runtimeScene);} //End of subevents
}
gdjs.Class_323D_32ViewCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Class_323D_32ViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDOtherPlayersObjects4.length = 0;
gdjs.Class_323D_32ViewCode.GDPlayerObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDPlayerObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDPlayerObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDPlayerObjects4.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileJoystickObjects4.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDMobileButtonObjects4.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects4.length = 0;

gdjs.Class_323D_32ViewCode.eventsList4(runtimeScene);

return;

}

gdjs['Class_323D_32ViewCode'] = gdjs.Class_323D_32ViewCode;

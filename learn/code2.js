gdjs.ManageKitsCode = {};
gdjs.ManageKitsCode.GDTitleObjects1= [];
gdjs.ManageKitsCode.GDTitleObjects2= [];
gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1= [];
gdjs.ManageKitsCode.GDCurrentKitSelectorObjects2= [];
gdjs.ManageKitsCode.GDMaxButtonObjects1= [];
gdjs.ManageKitsCode.GDMaxButtonObjects2= [];
gdjs.ManageKitsCode.GDKitNameObjects1= [];
gdjs.ManageKitsCode.GDKitNameObjects2= [];
gdjs.ManageKitsCode.GDOnScreenControlsButtonObjects1= [];
gdjs.ManageKitsCode.GDOnScreenControlsButtonObjects2= [];


gdjs.ManageKitsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "kitsnumber");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "kitsnumber", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrentKitSelector"), gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length === 0 ) ? "" :gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[0].getBehavior("Text").getText())) > runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
/* Reuse gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1 */
{for(var i = 0, len = gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length ;i < len;++i) {
    gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrentKitSelector"), gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length === 0 ) ? "" :gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[0].getBehavior("Text").getText())) < 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1 */
{for(var i = 0, len = gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length ;i < len;++i) {
    gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[i].getBehavior("Text").setText("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrentKitSelector"), gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("kitsassigns", gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length === 0 ) ? "" :gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[0].getBehavior("Text").getText()))));
if (isConditionTrue_0) {
/* Reuse gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1 */
{gdjs.evtTools.storage.readNumberFromJSONFile("kitsassigns", gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length === 0 ) ? "" :gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[0].getBehavior("Text").getText())) - 1), runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KitName"), gdjs.ManageKitsCode.GDKitNameObjects1);
{for(var i = 0, len = gdjs.ManageKitsCode.GDKitNameObjects1.length ;i < len;++i) {
    gdjs.ManageKitsCode.GDKitNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaxButton"), gdjs.ManageKitsCode.GDMaxButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManageKitsCode.GDMaxButtonObjects1.length;i<l;++i) {
    if ( gdjs.ManageKitsCode.GDMaxButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManageKitsCode.GDMaxButtonObjects1[k] = gdjs.ManageKitsCode.GDMaxButtonObjects1[i];
        ++k;
    }
}
gdjs.ManageKitsCode.GDMaxButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrentKitSelector"), gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1);
{for(var i = 0, len = gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length ;i < len;++i) {
    gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Learn4TheGame: a project that aspires to make learning fun :)");
}}

}


};

gdjs.ManageKitsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ManageKitsCode.GDTitleObjects1.length = 0;
gdjs.ManageKitsCode.GDTitleObjects2.length = 0;
gdjs.ManageKitsCode.GDCurrentKitSelectorObjects1.length = 0;
gdjs.ManageKitsCode.GDCurrentKitSelectorObjects2.length = 0;
gdjs.ManageKitsCode.GDMaxButtonObjects1.length = 0;
gdjs.ManageKitsCode.GDMaxButtonObjects2.length = 0;
gdjs.ManageKitsCode.GDKitNameObjects1.length = 0;
gdjs.ManageKitsCode.GDKitNameObjects2.length = 0;
gdjs.ManageKitsCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.ManageKitsCode.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.ManageKitsCode.eventsList0(runtimeScene);

return;

}

gdjs['ManageKitsCode'] = gdjs.ManageKitsCode;

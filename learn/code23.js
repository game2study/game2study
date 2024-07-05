gdjs.gm4Code = {};
gdjs.gm4Code.localVariables = [];
gdjs.gm4Code.GDMPIndicatorObjects1= [];
gdjs.gm4Code.GDMPIndicatorObjects2= [];


gdjs.gm4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
}

}


};

gdjs.gm4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm4Code.GDMPIndicatorObjects1.length = 0;
gdjs.gm4Code.GDMPIndicatorObjects2.length = 0;

gdjs.gm4Code.eventsList0(runtimeScene);

return;

}

gdjs['gm4Code'] = gdjs.gm4Code;

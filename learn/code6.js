gdjs.gm1rs1Code = {};


gdjs.gm1rs1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1", false);
}}

}


};

gdjs.gm1rs1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.gm1rs1Code.eventsList0(runtimeScene);

return;

}

gdjs['gm1rs1Code'] = gdjs.gm1rs1Code;

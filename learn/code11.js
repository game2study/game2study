gdjs.as1rs1Code = {};
gdjs.as1rs1Code.GDMPIndicatorObjects1= [];
gdjs.as1rs1Code.GDMPIndicatorObjects2= [];


gdjs.as1rs1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnswerScreen", false);
}}

}


};

gdjs.as1rs1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.as1rs1Code.GDMPIndicatorObjects1.length = 0;
gdjs.as1rs1Code.GDMPIndicatorObjects2.length = 0;

gdjs.as1rs1Code.eventsList0(runtimeScene);

return;

}

gdjs['as1rs1Code'] = gdjs.as1rs1Code;

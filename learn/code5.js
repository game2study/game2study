gdjs.gm2lvl1Code = {};
gdjs.gm2lvl1Code.GDbgfadeinObjects1= [];
gdjs.gm2lvl1Code.GDbgfadeinObjects2= [];
gdjs.gm2lvl1Code.GDbgfadeinObjects3= [];
gdjs.gm2lvl1Code.GDLevelNameObjects1= [];
gdjs.gm2lvl1Code.GDLevelNameObjects2= [];
gdjs.gm2lvl1Code.GDLevelNameObjects3= [];
gdjs.gm2lvl1Code.GDStudentObjects1= [];
gdjs.gm2lvl1Code.GDStudentObjects2= [];
gdjs.gm2lvl1Code.GDStudentObjects3= [];
gdjs.gm2lvl1Code.GDShockwavePainterObjects1= [];
gdjs.gm2lvl1Code.GDShockwavePainterObjects2= [];
gdjs.gm2lvl1Code.GDShockwavePainterObjects3= [];
gdjs.gm2lvl1Code.GDProgressLabelObjects1= [];
gdjs.gm2lvl1Code.GDProgressLabelObjects2= [];
gdjs.gm2lvl1Code.GDProgressLabelObjects3= [];
gdjs.gm2lvl1Code.GDTesTextObjects1= [];
gdjs.gm2lvl1Code.GDTesTextObjects2= [];
gdjs.gm2lvl1Code.GDTesTextObjects3= [];
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1= [];
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2= [];
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects3= [];
gdjs.gm2lvl1Code.GDMPIndicatorObjects1= [];
gdjs.gm2lvl1Code.GDMPIndicatorObjects2= [];
gdjs.gm2lvl1Code.GDMPIndicatorObjects3= [];


gdjs.gm2lvl1Code.asyncCallback25368876 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("LevelName"), gdjs.gm2lvl1Code.GDLevelNameObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("bgfadein"), gdjs.gm2lvl1Code.GDbgfadeinObjects3);

{for(var i = 0, len = gdjs.gm2lvl1Code.GDbgfadeinObjects3.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDbgfadeinObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gm2lvl1Code.GDLevelNameObjects3.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDLevelNameObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.gm2lvl1Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.gm2lvl1Code.GDbgfadeinObjects2) asyncObjectsList.addObject("bgfadein", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.gm2lvl1Code.asyncCallback25368876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gm2lvl1Code.asyncCallback25367988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("bgfadein"), gdjs.gm2lvl1Code.GDbgfadeinObjects2);

{for(var i = 0, len = gdjs.gm2lvl1Code.GDbgfadeinObjects2.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDbgfadeinObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 3, false);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "A New Beginning.mp3", 1, false, 1, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 100, 1);
}
{ //Subevents
gdjs.gm2lvl1Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gm2lvl1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.gm2lvl1Code.GDbgfadeinObjects1) asyncObjectsList.addObject("bgfadein", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.gm2lvl1Code.asyncCallback25367988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gm2lvl1Code.asyncCallback25371436 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("IndustrialSpikes"), gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2);

{for(var i = 0, len = gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2[i].getBehavior("Tween").addObjectPositionTween2("attackrever", (gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2[i].getX()), (gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2[i].getY()) + 64, "linear", (((((1 / 100) * 140) / 4) / 2) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber()), false);
}
}}
gdjs.gm2lvl1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1) asyncObjectsList.addObject("IndustrialSpikes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((((((1 / 100) * 140) / 8) / 2) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber())), (runtimeScene) => (gdjs.gm2lvl1Code.asyncCallback25371436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gm2lvl1Code.asyncCallback25374164 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatPulsed"), false);
}}
gdjs.gm2lvl1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(((((1 / 100) * 140) / 4) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber())), (runtimeScene) => (gdjs.gm2lvl1Code.asyncCallback25374164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gm2lvl1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bgfadein"), gdjs.gm2lvl1Code.GDbgfadeinObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "bgfadein");
}{for(var i = 0, len = gdjs.gm2lvl1Code.GDbgfadeinObjects1.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDbgfadeinObjects1[i].setColor("0;0;0");
}
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "A New Beginning.mp3");
}
{ //Subevents
gdjs.gm2lvl1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bgfadein"), gdjs.gm2lvl1Code.GDbgfadeinObjects1);
{for(var i = 0, len = gdjs.gm2lvl1Code.GDbgfadeinObjects1.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDbgfadeinObjects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ProgressLabel"), gdjs.gm2lvl1Code.GDProgressLabelObjects1);
{for(var i = 0, len = gdjs.gm2lvl1Code.GDProgressLabelObjects1.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDProgressLabelObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(((gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1) / 60 * 140) / 12), 1)) + "%" + " (" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1) / 60 * 140)) + " beats)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatPulsed"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IndustrialSpikes"), gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1);
{for(var i = 0, len = gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1[i].getBehavior("Tween").addObjectPositionTween2("attack", (gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1[i].getX()), (gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1[i].getY()) - 64, "easeInOutExpo", (((((1 / 100) * 140) / 8) / 2) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber()), false);
}
}
{ //Subevents
gdjs.gm2lvl1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TesText"), gdjs.gm2lvl1Code.GDTesTextObjects1);
{for(var i = 0, len = gdjs.gm2lvl1Code.GDTesTextObjects1.length ;i < len;++i) {
    gdjs.gm2lvl1Code.GDTesTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.round(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1) / 60 * 140), runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber())));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(Math.round((gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1) / 60) * 140), runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatsPerActive").getAsNumber()) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatPulsed"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("active"), true);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("beatPulsed"), true);
}
{ //Subevents
gdjs.gm2lvl1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("active"), true);
}}

}


};

gdjs.gm2lvl1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm2lvl1Code.GDbgfadeinObjects1.length = 0;
gdjs.gm2lvl1Code.GDbgfadeinObjects2.length = 0;
gdjs.gm2lvl1Code.GDbgfadeinObjects3.length = 0;
gdjs.gm2lvl1Code.GDLevelNameObjects1.length = 0;
gdjs.gm2lvl1Code.GDLevelNameObjects2.length = 0;
gdjs.gm2lvl1Code.GDLevelNameObjects3.length = 0;
gdjs.gm2lvl1Code.GDStudentObjects1.length = 0;
gdjs.gm2lvl1Code.GDStudentObjects2.length = 0;
gdjs.gm2lvl1Code.GDStudentObjects3.length = 0;
gdjs.gm2lvl1Code.GDShockwavePainterObjects1.length = 0;
gdjs.gm2lvl1Code.GDShockwavePainterObjects2.length = 0;
gdjs.gm2lvl1Code.GDShockwavePainterObjects3.length = 0;
gdjs.gm2lvl1Code.GDProgressLabelObjects1.length = 0;
gdjs.gm2lvl1Code.GDProgressLabelObjects2.length = 0;
gdjs.gm2lvl1Code.GDProgressLabelObjects3.length = 0;
gdjs.gm2lvl1Code.GDTesTextObjects1.length = 0;
gdjs.gm2lvl1Code.GDTesTextObjects2.length = 0;
gdjs.gm2lvl1Code.GDTesTextObjects3.length = 0;
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects1.length = 0;
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects2.length = 0;
gdjs.gm2lvl1Code.GDIndustrialSpikesObjects3.length = 0;
gdjs.gm2lvl1Code.GDMPIndicatorObjects1.length = 0;
gdjs.gm2lvl1Code.GDMPIndicatorObjects2.length = 0;
gdjs.gm2lvl1Code.GDMPIndicatorObjects3.length = 0;

gdjs.gm2lvl1Code.eventsList4(runtimeScene);

return;

}

gdjs['gm2lvl1Code'] = gdjs.gm2lvl1Code;

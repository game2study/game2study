gdjs.mpsl1Code = {};
gdjs.mpsl1Code.localVariables = [];
gdjs.mpsl1Code.GDSplitscreenButtonObjects1= [];
gdjs.mpsl1Code.GDSplitscreenButtonObjects2= [];
gdjs.mpsl1Code.GDLANButtonObjects1= [];
gdjs.mpsl1Code.GDLANButtonObjects2= [];
gdjs.mpsl1Code.GDMPIndicatorObjects1= [];
gdjs.mpsl1Code.GDMPIndicatorObjects2= [];


gdjs.mpsl1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SplitscreenButton"), gdjs.mpsl1Code.GDSplitscreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mpsl1Code.GDSplitscreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.mpsl1Code.GDSplitscreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mpsl1Code.GDSplitscreenButtonObjects1[k] = gdjs.mpsl1Code.GDSplitscreenButtonObjects1[i];
        ++k;
    }
}
gdjs.mpsl1Code.GDSplitscreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mpsl2ss", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LANButton"), gdjs.mpsl1Code.GDLANButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mpsl1Code.GDLANButtonObjects1.length;i<l;++i) {
    if ( gdjs.mpsl1Code.GDLANButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mpsl1Code.GDLANButtonObjects1[k] = gdjs.mpsl1Code.GDLANButtonObjects1[i];
        ++k;
    }
}
gdjs.mpsl1Code.GDLANButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mpsl2lan", false);
}}

}


};

gdjs.mpsl1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mpsl1Code.GDSplitscreenButtonObjects1.length = 0;
gdjs.mpsl1Code.GDSplitscreenButtonObjects2.length = 0;
gdjs.mpsl1Code.GDLANButtonObjects1.length = 0;
gdjs.mpsl1Code.GDLANButtonObjects2.length = 0;
gdjs.mpsl1Code.GDMPIndicatorObjects1.length = 0;
gdjs.mpsl1Code.GDMPIndicatorObjects2.length = 0;

gdjs.mpsl1Code.eventsList0(runtimeScene);

return;

}

gdjs['mpsl1Code'] = gdjs.mpsl1Code;

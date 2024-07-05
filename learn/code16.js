gdjs.gm2sl1Code = {};
gdjs.gm2sl1Code.localVariables = [];
gdjs.gm2sl1Code.GDHeaderObjects1= [];
gdjs.gm2sl1Code.GDHeaderObjects2= [];
gdjs.gm2sl1Code.GDLevel1Objects1= [];
gdjs.gm2sl1Code.GDLevel1Objects2= [];
gdjs.gm2sl1Code.GDMPIndicatorObjects1= [];
gdjs.gm2sl1Code.GDMPIndicatorObjects2= [];


gdjs.gm2sl1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.gm2sl1Code.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm2sl1Code.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.gm2sl1Code.GDLevel1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gm2sl1Code.GDLevel1Objects1[k] = gdjs.gm2sl1Code.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.gm2sl1Code.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm2lvl1", false);
}}

}


};

gdjs.gm2sl1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm2sl1Code.GDHeaderObjects1.length = 0;
gdjs.gm2sl1Code.GDHeaderObjects2.length = 0;
gdjs.gm2sl1Code.GDLevel1Objects1.length = 0;
gdjs.gm2sl1Code.GDLevel1Objects2.length = 0;
gdjs.gm2sl1Code.GDMPIndicatorObjects1.length = 0;
gdjs.gm2sl1Code.GDMPIndicatorObjects2.length = 0;

gdjs.gm2sl1Code.eventsList0(runtimeScene);

return;

}

gdjs['gm2sl1Code'] = gdjs.gm2sl1Code;

gdjs.gm1pmenu1Code = {};
gdjs.gm1pmenu1Code.GDResumeButtonObjects1_1final = [];

gdjs.gm1pmenu1Code.GDTitleObjects1= [];
gdjs.gm1pmenu1Code.GDTitleObjects2= [];
gdjs.gm1pmenu1Code.GDResumeButtonObjects1= [];
gdjs.gm1pmenu1Code.GDResumeButtonObjects2= [];
gdjs.gm1pmenu1Code.GDDebugButtonObjects1= [];
gdjs.gm1pmenu1Code.GDDebugButtonObjects2= [];
gdjs.gm1pmenu1Code.GDMusicSliderObjects1= [];
gdjs.gm1pmenu1Code.GDMusicSliderObjects2= [];
gdjs.gm1pmenu1Code.GDVolumeSliderLabelObjects1= [];
gdjs.gm1pmenu1Code.GDVolumeSliderLabelObjects2= [];
gdjs.gm1pmenu1Code.GDSFXSliderObjects1= [];
gdjs.gm1pmenu1Code.GDSFXSliderObjects2= [];
gdjs.gm1pmenu1Code.GDVolumeSliderLabel2Objects1= [];
gdjs.gm1pmenu1Code.GDVolumeSliderLabel2Objects2= [];


gdjs.gm1pmenu1Code.eventsList0 = function(runtimeScene) {

{

gdjs.gm1pmenu1Code.GDResumeButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gm1pmenu1Code.GDResumeButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ResumeButton"), gdjs.gm1pmenu1Code.GDResumeButtonObjects2);
for (var i = 0, k = 0, l = gdjs.gm1pmenu1Code.GDResumeButtonObjects2.length;i<l;++i) {
    if ( gdjs.gm1pmenu1Code.GDResumeButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.gm1pmenu1Code.GDResumeButtonObjects2[k] = gdjs.gm1pmenu1Code.GDResumeButtonObjects2[i];
        ++k;
    }
}
gdjs.gm1pmenu1Code.GDResumeButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gm1pmenu1Code.GDResumeButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gm1pmenu1Code.GDResumeButtonObjects1_1final.indexOf(gdjs.gm1pmenu1Code.GDResumeButtonObjects2[j]) === -1 )
            gdjs.gm1pmenu1Code.GDResumeButtonObjects1_1final.push(gdjs.gm1pmenu1Code.GDResumeButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.gm1pmenu1Code.GDResumeButtonObjects1_1final, gdjs.gm1pmenu1Code.GDResumeButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DebugButton"), gdjs.gm1pmenu1Code.GDDebugButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm1pmenu1Code.GDDebugButtonObjects1.length;i<l;++i) {
    if ( gdjs.gm1pmenu1Code.GDDebugButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gm1pmenu1Code.GDDebugButtonObjects1[k] = gdjs.gm1pmenu1Code.GDDebugButtonObjects1[i];
        ++k;
    }
}
gdjs.gm1pmenu1Code.GDDebugButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Debug Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.gm1pmenu1Code.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SFXSlider"), gdjs.gm1pmenu1Code.GDSFXSliderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.gm1pmenu1Code.GDSFXSliderObjects1.length === 0 ) ? 0 :gdjs.gm1pmenu1Code.GDSFXSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.gm1pmenu1Code.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.gm1pmenu1Code.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SFXSlider"), gdjs.gm1pmenu1Code.GDSFXSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gm1pmenu1Code.GDSFXSliderObjects1.length;i<l;++i) {
    if ( !(gdjs.gm1pmenu1Code.GDSFXSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.gm1pmenu1Code.GDSFXSliderObjects1[k] = gdjs.gm1pmenu1Code.GDSFXSliderObjects1[i];
        ++k;
    }
}
gdjs.gm1pmenu1Code.GDSFXSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.gm1pmenu1Code.GDMusicSliderObjects1);
/* Reuse gdjs.gm1pmenu1Code.GDSFXSliderObjects1 */
{for(var i = 0, len = gdjs.gm1pmenu1Code.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu1Code.GDMusicSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gm1pmenu1Code.GDSFXSliderObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu1Code.GDSFXSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.gm1pmenu1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm1pmenu1Code.GDTitleObjects1.length = 0;
gdjs.gm1pmenu1Code.GDTitleObjects2.length = 0;
gdjs.gm1pmenu1Code.GDResumeButtonObjects1.length = 0;
gdjs.gm1pmenu1Code.GDResumeButtonObjects2.length = 0;
gdjs.gm1pmenu1Code.GDDebugButtonObjects1.length = 0;
gdjs.gm1pmenu1Code.GDDebugButtonObjects2.length = 0;
gdjs.gm1pmenu1Code.GDMusicSliderObjects1.length = 0;
gdjs.gm1pmenu1Code.GDMusicSliderObjects2.length = 0;
gdjs.gm1pmenu1Code.GDVolumeSliderLabelObjects1.length = 0;
gdjs.gm1pmenu1Code.GDVolumeSliderLabelObjects2.length = 0;
gdjs.gm1pmenu1Code.GDSFXSliderObjects1.length = 0;
gdjs.gm1pmenu1Code.GDSFXSliderObjects2.length = 0;
gdjs.gm1pmenu1Code.GDVolumeSliderLabel2Objects1.length = 0;
gdjs.gm1pmenu1Code.GDVolumeSliderLabel2Objects2.length = 0;

gdjs.gm1pmenu1Code.eventsList0(runtimeScene);

return;

}

gdjs['gm1pmenu1Code'] = gdjs.gm1pmenu1Code;

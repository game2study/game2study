gdjs.ImportFlashcardsCode = {};
gdjs.ImportFlashcardsCode.GDjsoninputObjects1= [];
gdjs.ImportFlashcardsCode.GDjsoninputObjects2= [];
gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1= [];
gdjs.ImportFlashcardsCode.GDConfirmButtonObjects2= [];
gdjs.ImportFlashcardsCode.GDBackButtonObjects1= [];
gdjs.ImportFlashcardsCode.GDBackButtonObjects2= [];
gdjs.ImportFlashcardsCode.GDMPIndicatorObjects1= [];
gdjs.ImportFlashcardsCode.GDMPIndicatorObjects2= [];


gdjs.ImportFlashcardsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ConfirmButton"), gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1.length;i<l;++i) {
    if ( gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1[k] = gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1[i];
        ++k;
    }
}
gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jsoninput"), gdjs.ImportFlashcardsCode.GDjsoninputObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtsExt__Flashcards__flashcardsToQuestions.func(runtimeScene, (( gdjs.ImportFlashcardsCode.GDjsoninputObjects1.length === 0 ) ? "" :gdjs.ImportFlashcardsCode.GDjsoninputObjects1[0].getBehavior("Text").getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.ImportFlashcardsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ImportFlashcardsCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.ImportFlashcardsCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ImportFlashcardsCode.GDBackButtonObjects1[k] = gdjs.ImportFlashcardsCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.ImportFlashcardsCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.ImportFlashcardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ImportFlashcardsCode.GDjsoninputObjects1.length = 0;
gdjs.ImportFlashcardsCode.GDjsoninputObjects2.length = 0;
gdjs.ImportFlashcardsCode.GDConfirmButtonObjects1.length = 0;
gdjs.ImportFlashcardsCode.GDConfirmButtonObjects2.length = 0;
gdjs.ImportFlashcardsCode.GDBackButtonObjects1.length = 0;
gdjs.ImportFlashcardsCode.GDBackButtonObjects2.length = 0;
gdjs.ImportFlashcardsCode.GDMPIndicatorObjects1.length = 0;
gdjs.ImportFlashcardsCode.GDMPIndicatorObjects2.length = 0;

gdjs.ImportFlashcardsCode.eventsList0(runtimeScene);

return;

}

gdjs['ImportFlashcardsCode'] = gdjs.ImportFlashcardsCode;

gdjs.Scene_32SelectionCode = {};
gdjs.Scene_32SelectionCode.GDTitleObjects1= [];
gdjs.Scene_32SelectionCode.GDTitleObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects2= [];
gdjs.Scene_32SelectionCode.GDCreditAmtObjects1= [];
gdjs.Scene_32SelectionCode.GDCreditAmtObjects2= [];
gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1= [];
gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects2= [];
gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1= [];
gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects2= [];
gdjs.Scene_32SelectionCode.GDHeading1Objects1= [];
gdjs.Scene_32SelectionCode.GDHeading1Objects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects2= [];
gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1= [];
gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects2= [];
gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1= [];
gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects2= [];
gdjs.Scene_32SelectionCode.GDImportKitInputObjects1= [];
gdjs.Scene_32SelectionCode.GDImportKitInputObjects2= [];
gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1= [];
gdjs.Scene_32SelectionCode.GDExportKitButtonObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects2= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1= [];
gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects2= [];


gdjs.Scene_32SelectionCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "credits");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditAmt"), gdjs.Scene_32SelectionCode.GDCreditAmtObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.Scene_32SelectionCode.GDCreditAmtObjects1.length ;i < len;++i) {
    gdjs.Scene_32SelectionCode.GDCreditAmtObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchAnswerScreen"), gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnswerScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchPropertyEditor"), gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Property Editor", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1"), gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AssignmentGamemode1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1pause"), gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1pmenu1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1shop"), gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1pmenu2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchQuestionsEditor"), gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionCreator", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchManageKits"), gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ManageKits", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchViewQuestions"), gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1[k] = gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViewCreatedQuestions", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CreditAmt"), gdjs.Scene_32SelectionCode.GDCreditAmtObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.Scene_32SelectionCode.GDCreditAmtObjects1.length ;i < len;++i) {
    gdjs.Scene_32SelectionCode.GDCreditAmtObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddCreditsButton"), gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1[k] = gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "gm1__coins");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "gm1__coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubtractCreditsButton"), gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1[k] = gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClearQuestionKitButton"), gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1[k] = gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExportKitButton"), gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1[k] = gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ImportQuestionKitButton"), gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1[k] = gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ImportKitInput"), gdjs.Scene_32SelectionCode.GDImportKitInputObjects1);
{gdjs.evtTools.network.jsonToVariableStructure((( gdjs.Scene_32SelectionCode.GDImportKitInputObjects1.length === 0 ) ? "" :gdjs.Scene_32SelectionCode.GDImportKitInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


};

gdjs.Scene_32SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_32SelectionCode.GDTitleObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDTitleObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchAnswerScreenObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchPropertyEditorObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1Objects2.length = 0;
gdjs.Scene_32SelectionCode.GDCreditAmtObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDCreditAmtObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDAddCreditsButtonObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSubtractCreditsButtonObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDHeading1Objects1.length = 0;
gdjs.Scene_32SelectionCode.GDHeading1Objects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1shopObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchGM1pauseObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDClearQuestionKitButtonObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDImportQuestionKitButtonObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDImportKitInputObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDImportKitInputObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDExportKitButtonObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDExportKitButtonObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchQuestionsEditorObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchManageKitsObjects2.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects1.length = 0;
gdjs.Scene_32SelectionCode.GDSceneSwitchViewQuestionsObjects2.length = 0;

gdjs.Scene_32SelectionCode.eventsList0(runtimeScene);

return;

}

gdjs['Scene_32SelectionCode'] = gdjs.Scene_32SelectionCode;

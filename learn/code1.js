gdjs.Debug_32MenuCode = {};
gdjs.Debug_32MenuCode.GDTitleObjects1= [];
gdjs.Debug_32MenuCode.GDTitleObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects2= [];
gdjs.Debug_32MenuCode.GDCreditAmtObjects1= [];
gdjs.Debug_32MenuCode.GDCreditAmtObjects2= [];
gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1= [];
gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects2= [];
gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1= [];
gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects2= [];
gdjs.Debug_32MenuCode.GDHeading1Objects1= [];
gdjs.Debug_32MenuCode.GDHeading1Objects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects2= [];
gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1= [];
gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects2= [];
gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1= [];
gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects2= [];
gdjs.Debug_32MenuCode.GDImportKitInputObjects1= [];
gdjs.Debug_32MenuCode.GDImportKitInputObjects2= [];
gdjs.Debug_32MenuCode.GDExportKitButtonObjects1= [];
gdjs.Debug_32MenuCode.GDExportKitButtonObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects2= [];
gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1= [];
gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects2= [];
gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1= [];
gdjs.Debug_32MenuCode.GDUploadKitButtonObjects2= [];
gdjs.Debug_32MenuCode.GDMPIndicatorObjects1= [];
gdjs.Debug_32MenuCode.GDMPIndicatorObjects2= [];


gdjs.Debug_32MenuCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("CreditAmt"), gdjs.Debug_32MenuCode.GDCreditAmtObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.Debug_32MenuCode.GDCreditAmtObjects1.length ;i < len;++i) {
    gdjs.Debug_32MenuCode.GDCreditAmtObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchAnswerScreen"), gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnswerScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchPropertyEditor"), gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Property Editor", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1"), gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1pause"), gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1pmenu1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchGM1shop"), gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1pmenu2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchQuestionsEditor"), gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionCreator", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchManageKits"), gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ManageKits", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchViewQuestions"), gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViewCreatedQuestions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneSwitchHome"), gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1[k] = gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CreditAmt"), gdjs.Debug_32MenuCode.GDCreditAmtObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.Debug_32MenuCode.GDCreditAmtObjects1.length ;i < len;++i) {
    gdjs.Debug_32MenuCode.GDCreditAmtObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AddCreditsButton"), gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1[k] = gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("SubtractCreditsButton"), gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1[k] = gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClearQuestionKitButton"), gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1[k] = gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExportKitButton"), gdjs.Debug_32MenuCode.GDExportKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDExportKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDExportKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDExportKitButtonObjects1[k] = gdjs.Debug_32MenuCode.GDExportKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDExportKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ImportQuestionKitButton"), gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1[k] = gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ImportKitInput"), gdjs.Debug_32MenuCode.GDImportKitInputObjects1);
{gdjs.evtTools.network.jsonToVariableStructure((( gdjs.Debug_32MenuCode.GDImportKitInputObjects1.length === 0 ) ? "" :gdjs.Debug_32MenuCode.GDImportKitInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__BackButton__onBackButtonPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadKitButton"), gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1[k] = gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1[i];
        ++k;
    }
}
gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UploadDownloadTextFile__UploadFinished.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


};

gdjs.Debug_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Debug_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Debug_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchAnswerScreenObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchPropertyEditorObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1Objects2.length = 0;
gdjs.Debug_32MenuCode.GDCreditAmtObjects1.length = 0;
gdjs.Debug_32MenuCode.GDCreditAmtObjects2.length = 0;
gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDAddCreditsButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSubtractCreditsButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDHeading1Objects1.length = 0;
gdjs.Debug_32MenuCode.GDHeading1Objects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1shopObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchGM1pauseObjects2.length = 0;
gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDClearQuestionKitButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDImportQuestionKitButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDImportKitInputObjects1.length = 0;
gdjs.Debug_32MenuCode.GDImportKitInputObjects2.length = 0;
gdjs.Debug_32MenuCode.GDExportKitButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDExportKitButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchQuestionsEditorObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchManageKitsObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchViewQuestionsObjects2.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects1.length = 0;
gdjs.Debug_32MenuCode.GDSceneSwitchHomeObjects2.length = 0;
gdjs.Debug_32MenuCode.GDUploadKitButtonObjects1.length = 0;
gdjs.Debug_32MenuCode.GDUploadKitButtonObjects2.length = 0;
gdjs.Debug_32MenuCode.GDMPIndicatorObjects1.length = 0;
gdjs.Debug_32MenuCode.GDMPIndicatorObjects2.length = 0;

gdjs.Debug_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Debug_32MenuCode'] = gdjs.Debug_32MenuCode;

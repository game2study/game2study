gdjs.SaveKitScreenCode = {};
gdjs.SaveKitScreenCode.localVariables = [];
gdjs.SaveKitScreenCode.GDNameInputObjects1= [];
gdjs.SaveKitScreenCode.GDNameInputObjects2= [];
gdjs.SaveKitScreenCode.GDNameInputObjects3= [];
gdjs.SaveKitScreenCode.GDSaveButtonObjects1= [];
gdjs.SaveKitScreenCode.GDSaveButtonObjects2= [];
gdjs.SaveKitScreenCode.GDSaveButtonObjects3= [];
gdjs.SaveKitScreenCode.GDExportButtonObjects1= [];
gdjs.SaveKitScreenCode.GDExportButtonObjects2= [];
gdjs.SaveKitScreenCode.GDExportButtonObjects3= [];
gdjs.SaveKitScreenCode.GDCopyButtonObjects1= [];
gdjs.SaveKitScreenCode.GDCopyButtonObjects2= [];
gdjs.SaveKitScreenCode.GDCopyButtonObjects3= [];
gdjs.SaveKitScreenCode.GDDoneButtonObjects1= [];
gdjs.SaveKitScreenCode.GDDoneButtonObjects2= [];
gdjs.SaveKitScreenCode.GDDoneButtonObjects3= [];
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1= [];
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2= [];
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects3= [];
gdjs.SaveKitScreenCode.GDBackButtonObjects1= [];
gdjs.SaveKitScreenCode.GDBackButtonObjects2= [];
gdjs.SaveKitScreenCode.GDBackButtonObjects3= [];
gdjs.SaveKitScreenCode.GDMPIndicatorObjects1= [];
gdjs.SaveKitScreenCode.GDMPIndicatorObjects2= [];
gdjs.SaveKitScreenCode.GDMPIndicatorObjects3= [];


gdjs.SaveKitScreenCode.asyncCallback33164500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SaveKitScreenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FeedbackDisplay"), gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2);

{for(var i = 0, len = gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2.length ;i < len;++i) {
    gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2[i].getBehavior("Text").setText("");
}
}gdjs.SaveKitScreenCode.localVariables.length = 0;
}
gdjs.SaveKitScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SaveKitScreenCode.localVariables);
for (const obj of gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1) asyncObjectsList.addObject("FeedbackDisplay", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SaveKitScreenCode.asyncCallback33164500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SaveKitScreenCode.asyncCallback33165804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SaveKitScreenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FeedbackDisplay"), gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2);

{for(var i = 0, len = gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2.length ;i < len;++i) {
    gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2[i].getBehavior("Text").setText("");
}
}gdjs.SaveKitScreenCode.localVariables.length = 0;
}
gdjs.SaveKitScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SaveKitScreenCode.localVariables);
for (const obj of gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1) asyncObjectsList.addObject("FeedbackDisplay", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SaveKitScreenCode.asyncCallback33165804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SaveKitScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__URLTools__URLAttribute.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "hash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != gdjs.evtsExt__URLTools__EscapeCharacters.func(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtsExt__URLTools__URLAttribute.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "hash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__URLTools__URLAttribute.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "hash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == gdjs.evtsExt__URLTools__EscapeCharacters.func(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, gdjs.evtsExt__URLTools__ChangeURLAttribute.func(runtimeScene, gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "hash", gdjs.evtsExt__URLTools__EscapeCharacters.func(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.SaveKitScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeedbackDisplay"), gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1);
{for(var i = 0, len = gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1.length ;i < len;++i) {
    gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1[i].getBehavior("Text").setText("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "kitsnumber");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "kitsnumber", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("storage", "kitsnumber"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "kitsnumber", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.SaveKitScreenCode.GDSaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SaveKitScreenCode.GDSaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.SaveKitScreenCode.GDSaveButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SaveKitScreenCode.GDSaveButtonObjects1[k] = gdjs.SaveKitScreenCode.GDSaveButtonObjects1[i];
        ++k;
    }
}
gdjs.SaveKitScreenCode.GDSaveButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeedbackDisplay"), gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.SaveKitScreenCode.GDNameInputObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("kits", (( gdjs.SaveKitScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.SaveKitScreenCode.GDNameInputObjects1[0].getBehavior("Text").getText()), gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{gdjs.evtTools.storage.writeStringInJSONFile("kitassigns", gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()), (( gdjs.SaveKitScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.SaveKitScreenCode.GDNameInputObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "kitsnumber", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1.length ;i < len;++i) {
    gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1[i].getBehavior("Text").setText("Saved!");
}
}
{ //Subevents
gdjs.SaveKitScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.SaveKitScreenCode.GDCopyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SaveKitScreenCode.GDCopyButtonObjects1.length;i<l;++i) {
    if ( gdjs.SaveKitScreenCode.GDCopyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SaveKitScreenCode.GDCopyButtonObjects1[k] = gdjs.SaveKitScreenCode.GDCopyButtonObjects1[i];
        ++k;
    }
}
gdjs.SaveKitScreenCode.GDCopyButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeedbackDisplay"), gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1);
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1.length ;i < len;++i) {
    gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1[i].getBehavior("Text").setText("Copied!");
}
}
{ //Subevents
gdjs.SaveKitScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExportButton"), gdjs.SaveKitScreenCode.GDExportButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SaveKitScreenCode.GDExportButtonObjects1.length;i<l;++i) {
    if ( gdjs.SaveKitScreenCode.GDExportButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SaveKitScreenCode.GDExportButtonObjects1[k] = gdjs.SaveKitScreenCode.GDExportButtonObjects1[i];
        ++k;
    }
}
gdjs.SaveKitScreenCode.GDExportButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.SaveKitScreenCode.GDNameInputObjects1);
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, (( gdjs.SaveKitScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.SaveKitScreenCode.GDNameInputObjects1[0].getBehavior("Text").getText()) + ".json", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SaveKitScreenCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SaveKitScreenCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.SaveKitScreenCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SaveKitScreenCode.GDBackButtonObjects1[k] = gdjs.SaveKitScreenCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.SaveKitScreenCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoneButton"), gdjs.SaveKitScreenCode.GDDoneButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SaveKitScreenCode.GDDoneButtonObjects1.length;i<l;++i) {
    if ( gdjs.SaveKitScreenCode.GDDoneButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SaveKitScreenCode.GDDoneButtonObjects1[k] = gdjs.SaveKitScreenCode.GDDoneButtonObjects1[i];
        ++k;
    }
}
gdjs.SaveKitScreenCode.GDDoneButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Debug Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Learn4TheGame: a project that aspires to make learning fun :)");
}
{ //Subevents
gdjs.SaveKitScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__BackButton__onBackButtonPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.sendAsyncRequest("", "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}}

}


};

gdjs.SaveKitScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SaveKitScreenCode.GDNameInputObjects1.length = 0;
gdjs.SaveKitScreenCode.GDNameInputObjects2.length = 0;
gdjs.SaveKitScreenCode.GDNameInputObjects3.length = 0;
gdjs.SaveKitScreenCode.GDSaveButtonObjects1.length = 0;
gdjs.SaveKitScreenCode.GDSaveButtonObjects2.length = 0;
gdjs.SaveKitScreenCode.GDSaveButtonObjects3.length = 0;
gdjs.SaveKitScreenCode.GDExportButtonObjects1.length = 0;
gdjs.SaveKitScreenCode.GDExportButtonObjects2.length = 0;
gdjs.SaveKitScreenCode.GDExportButtonObjects3.length = 0;
gdjs.SaveKitScreenCode.GDCopyButtonObjects1.length = 0;
gdjs.SaveKitScreenCode.GDCopyButtonObjects2.length = 0;
gdjs.SaveKitScreenCode.GDCopyButtonObjects3.length = 0;
gdjs.SaveKitScreenCode.GDDoneButtonObjects1.length = 0;
gdjs.SaveKitScreenCode.GDDoneButtonObjects2.length = 0;
gdjs.SaveKitScreenCode.GDDoneButtonObjects3.length = 0;
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects1.length = 0;
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects2.length = 0;
gdjs.SaveKitScreenCode.GDFeedbackDisplayObjects3.length = 0;
gdjs.SaveKitScreenCode.GDBackButtonObjects1.length = 0;
gdjs.SaveKitScreenCode.GDBackButtonObjects2.length = 0;
gdjs.SaveKitScreenCode.GDBackButtonObjects3.length = 0;
gdjs.SaveKitScreenCode.GDMPIndicatorObjects1.length = 0;
gdjs.SaveKitScreenCode.GDMPIndicatorObjects2.length = 0;
gdjs.SaveKitScreenCode.GDMPIndicatorObjects3.length = 0;

gdjs.SaveKitScreenCode.eventsList3(runtimeScene);

return;

}

gdjs['SaveKitScreenCode'] = gdjs.SaveKitScreenCode;

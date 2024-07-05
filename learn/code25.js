gdjs.Account_32CreatorCode = {};
gdjs.Account_32CreatorCode.localVariables = [];
gdjs.Account_32CreatorCode.GDEmailInputObjects1= [];
gdjs.Account_32CreatorCode.GDEmailInputObjects2= [];
gdjs.Account_32CreatorCode.GDEmailInputObjects3= [];
gdjs.Account_32CreatorCode.GDEmailInputObjects4= [];
gdjs.Account_32CreatorCode.GDPasswordInputObjects1= [];
gdjs.Account_32CreatorCode.GDPasswordInputObjects2= [];
gdjs.Account_32CreatorCode.GDPasswordInputObjects3= [];
gdjs.Account_32CreatorCode.GDPasswordInputObjects4= [];
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1= [];
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects2= [];
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects3= [];
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects4= [];
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1= [];
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects2= [];
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects3= [];
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects4= [];
gdjs.Account_32CreatorCode.GDHomeButtonObjects1= [];
gdjs.Account_32CreatorCode.GDHomeButtonObjects2= [];
gdjs.Account_32CreatorCode.GDHomeButtonObjects3= [];
gdjs.Account_32CreatorCode.GDHomeButtonObjects4= [];
gdjs.Account_32CreatorCode.GDUsernameInputObjects1= [];
gdjs.Account_32CreatorCode.GDUsernameInputObjects2= [];
gdjs.Account_32CreatorCode.GDUsernameInputObjects3= [];
gdjs.Account_32CreatorCode.GDUsernameInputObjects4= [];
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1= [];
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects2= [];
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects3= [];
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects4= [];
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1= [];
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects2= [];
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects3= [];
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects4= [];
gdjs.Account_32CreatorCode.GDMPIndicatorObjects1= [];
gdjs.Account_32CreatorCode.GDMPIndicatorObjects2= [];
gdjs.Account_32CreatorCode.GDMPIndicatorObjects3= [];
gdjs.Account_32CreatorCode.GDMPIndicatorObjects4= [];


gdjs.Account_32CreatorCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "ok";
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UsernameInput"), gdjs.Account_32CreatorCode.GDUsernameInputObjects3);
{gdjs.evtTools.firebaseTools.auth.userManagement.setDisplayName((( gdjs.Account_32CreatorCode.GDUsernameInputObjects3.length === 0 ) ? "" :gdjs.Account_32CreatorCode.GDUsernameInputObjects3[0].getBehavior("Text").getText()));
}{gdjs.evtTools.firebaseTools.auth.userManagement.sendVerificationEmail();
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "Success! Please verify your email with the link sent to your provided email.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("EmailInput"), gdjs.Account_32CreatorCode.GDEmailInputObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("PasswordInput"), gdjs.Account_32CreatorCode.GDPasswordInputObjects2);

{for(var i = 0, len = gdjs.Account_32CreatorCode.GDEmailInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32CreatorCode.GDPasswordInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32CreatorCode.GDEmailInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32CreatorCode.GDPasswordInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32CreatorCode.GDPasswordInputObjects2.length ;i < len;++i) {
    gdjs.Account_32CreatorCode.GDPasswordInputObjects2[i].getBehavior("Text").setText("");
}
}}

}


};gdjs.Account_32CreatorCode.asyncCallback28024092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Account_32CreatorCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Message_Print"), gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects2);

{for(var i = 0, len = gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects2.length ;i < len;++i) {
    gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects2[i].getBehavior("Text").setText("Waiting..");
}
}
{ //Subevents
gdjs.Account_32CreatorCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Account_32CreatorCode.localVariables.length = 0;
}
gdjs.Account_32CreatorCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Account_32CreatorCode.localVariables);
for (const obj of gdjs.Account_32CreatorCode.GDEmailInputObjects1) asyncObjectsList.addObject("EmailInput", obj);
for (const obj of gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1) asyncObjectsList.addObject("Message_Print", obj);
for (const obj of gdjs.Account_32CreatorCode.GDPasswordInputObjects1) asyncObjectsList.addObject("PasswordInput", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Account_32CreatorCode.asyncCallback28024092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Account_32CreatorCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CreateAccountButton"), gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1.length;i<l;++i) {
    if ( gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1[k] = gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1[i];
        ++k;
    }
}
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs.Account_32CreatorCode.GDEmailInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message_Print"), gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1);
gdjs.copyArray(runtimeScene.getObjects("PasswordInput"), gdjs.Account_32CreatorCode.GDPasswordInputObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.Account_32CreatorCode.GDEmailInputObjects1.length === 0 ) ? "" :gdjs.Account_32CreatorCode.GDEmailInputObjects1[0].getBehavior("Text").getText()), (( gdjs.Account_32CreatorCode.GDPasswordInputObjects1.length === 0 ) ? "" :gdjs.Account_32CreatorCode.GDPasswordInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1.length ;i < len;++i) {
    gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1[i].getBehavior("Text").setText("Checking..");
}
}
{ //Subevents
gdjs.Account_32CreatorCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Account_32CreatorCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32CreatorCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.Account_32CreatorCode.GDHomeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32CreatorCode.GDHomeButtonObjects1[k] = gdjs.Account_32CreatorCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.Account_32CreatorCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadPFPButton"), gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1.length;i<l;++i) {
    if ( gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1[k] = gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1[i];
        ++k;
    }
}
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.storage.uploadFile(gdjs.evtTools.firebaseTools.auth.userManagement.getUID() + " pfp", "", "/userdata/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "data_url", gdjs.VariablesContainer.badVariable, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadPFPButton2"), gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1.length;i<l;++i) {
    if ( gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1[k] = gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1[i];
        ++k;
    }
}
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.userManagement.setPhotoURL(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


};

gdjs.Account_32CreatorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Account_32CreatorCode.GDEmailInputObjects1.length = 0;
gdjs.Account_32CreatorCode.GDEmailInputObjects2.length = 0;
gdjs.Account_32CreatorCode.GDEmailInputObjects3.length = 0;
gdjs.Account_32CreatorCode.GDEmailInputObjects4.length = 0;
gdjs.Account_32CreatorCode.GDPasswordInputObjects1.length = 0;
gdjs.Account_32CreatorCode.GDPasswordInputObjects2.length = 0;
gdjs.Account_32CreatorCode.GDPasswordInputObjects3.length = 0;
gdjs.Account_32CreatorCode.GDPasswordInputObjects4.length = 0;
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects1.length = 0;
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects2.length = 0;
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects3.length = 0;
gdjs.Account_32CreatorCode.GDCreateAccountButtonObjects4.length = 0;
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects1.length = 0;
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects2.length = 0;
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects3.length = 0;
gdjs.Account_32CreatorCode.GDMessage_9595PrintObjects4.length = 0;
gdjs.Account_32CreatorCode.GDHomeButtonObjects1.length = 0;
gdjs.Account_32CreatorCode.GDHomeButtonObjects2.length = 0;
gdjs.Account_32CreatorCode.GDHomeButtonObjects3.length = 0;
gdjs.Account_32CreatorCode.GDHomeButtonObjects4.length = 0;
gdjs.Account_32CreatorCode.GDUsernameInputObjects1.length = 0;
gdjs.Account_32CreatorCode.GDUsernameInputObjects2.length = 0;
gdjs.Account_32CreatorCode.GDUsernameInputObjects3.length = 0;
gdjs.Account_32CreatorCode.GDUsernameInputObjects4.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects1.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects2.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects3.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButtonObjects4.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects1.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects2.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects3.length = 0;
gdjs.Account_32CreatorCode.GDUploadPFPButton2Objects4.length = 0;
gdjs.Account_32CreatorCode.GDMPIndicatorObjects1.length = 0;
gdjs.Account_32CreatorCode.GDMPIndicatorObjects2.length = 0;
gdjs.Account_32CreatorCode.GDMPIndicatorObjects3.length = 0;
gdjs.Account_32CreatorCode.GDMPIndicatorObjects4.length = 0;

gdjs.Account_32CreatorCode.eventsList2(runtimeScene);

return;

}

gdjs['Account_32CreatorCode'] = gdjs.Account_32CreatorCode;

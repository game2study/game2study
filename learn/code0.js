gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.GDHeaderObjects1= [];
gdjs.HomeCode.GDHeaderObjects2= [];
gdjs.HomeCode.GDLoadAKitSubheaderObjects1= [];
gdjs.HomeCode.GDLoadAKitSubheaderObjects2= [];
gdjs.HomeCode.GDStartAGameSubheaderObjects1= [];
gdjs.HomeCode.GDStartAGameSubheaderObjects2= [];
gdjs.HomeCode.GDManageKitsButtonObjects1= [];
gdjs.HomeCode.GDManageKitsButtonObjects2= [];
gdjs.HomeCode.GDGenericLabel1Objects1= [];
gdjs.HomeCode.GDGenericLabel1Objects2= [];
gdjs.HomeCode.GDKitJsonInputObjects1= [];
gdjs.HomeCode.GDKitJsonInputObjects2= [];
gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1= [];
gdjs.HomeCode.GDLoadInputtedJsonButtonObjects2= [];
gdjs.HomeCode.GDUploadJsonButtonObjects1= [];
gdjs.HomeCode.GDUploadJsonButtonObjects2= [];
gdjs.HomeCode.GDCreateNewKitButtonObjects1= [];
gdjs.HomeCode.GDCreateNewKitButtonObjects2= [];
gdjs.HomeCode.GDNewGameButtonGM1Objects1= [];
gdjs.HomeCode.GDNewGameButtonGM1Objects2= [];
gdjs.HomeCode.GDClearKitButtonObjects1= [];
gdjs.HomeCode.GDClearKitButtonObjects2= [];
gdjs.HomeCode.GDCreditsLabelObjects1= [];
gdjs.HomeCode.GDCreditsLabelObjects2= [];
gdjs.HomeCode.GDTesterLabelObjects1= [];
gdjs.HomeCode.GDTesterLabelObjects2= [];
gdjs.HomeCode.GDPracticeKitButtonObjects1= [];
gdjs.HomeCode.GDPracticeKitButtonObjects2= [];
gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1= [];
gdjs.HomeCode.GDNewGameButtonGM2WIPObjects2= [];
gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1= [];
gdjs.HomeCode.GDNewGameButtonGM3WIPObjects2= [];
gdjs.HomeCode.GDImportFlashcardsObjects1= [];
gdjs.HomeCode.GDImportFlashcardsObjects2= [];
gdjs.HomeCode.GDMPLabelObjects1= [];
gdjs.HomeCode.GDMPLabelObjects2= [];
gdjs.HomeCode.GDAssignmentsManagerObjects1= [];
gdjs.HomeCode.GDAssignmentsManagerObjects2= [];
gdjs.HomeCode.GDClassManagerObjects1= [];
gdjs.HomeCode.GDClassManagerObjects2= [];
gdjs.HomeCode.GDLoginButtonObjects1= [];
gdjs.HomeCode.GDLoginButtonObjects2= [];
gdjs.HomeCode.GDSignupButtonObjects1= [];
gdjs.HomeCode.GDSignupButtonObjects2= [];
gdjs.HomeCode.GDLogoutButtonObjects1= [];
gdjs.HomeCode.GDLogoutButtonObjects2= [];
gdjs.HomeCode.GDPFPDisplayObjects1= [];
gdjs.HomeCode.GDPFPDisplayObjects2= [];
gdjs.HomeCode.GDUsernameDisplayObjects1= [];
gdjs.HomeCode.GDUsernameDisplayObjects2= [];
gdjs.HomeCode.GDMPIndicatorObjects1= [];
gdjs.HomeCode.GDMPIndicatorObjects2= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("KitJsonInput"), gdjs.HomeCode.GDKitJsonInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDKitJsonInputObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDKitJsonInputObjects1[i].getBehavior("SecretCode").CodeEntered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDKitJsonInputObjects1[k] = gdjs.HomeCode.GDKitJsonInputObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDKitJsonInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDKitJsonInputObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDKitJsonInputObjects1[i].getBehavior("Text").getText() == "sg631d-bug" ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDKitJsonInputObjects1[k] = gdjs.HomeCode.GDKitJsonInputObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDKitJsonInputObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Debug Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KitJsonInput"), gdjs.HomeCode.GDKitJsonInputObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDKitJsonInputObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDKitJsonInputObjects1[i].getBehavior("SecretCode").AcceptCode(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("CreditsLabel"), gdjs.HomeCode.GDCreditsLabelObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.HomeCode.GDCreditsLabelObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDCreditsLabelObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadJsonButton"), gdjs.HomeCode.GDUploadJsonButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDUploadJsonButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDUploadJsonButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDUploadJsonButtonObjects1[k] = gdjs.HomeCode.GDUploadJsonButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDUploadJsonButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), "application/json", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UploadDownloadTextFile__UploadFinished.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TesterLabel"), gdjs.HomeCode.GDTesterLabelObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5));
}{for(var i = 0, len = gdjs.HomeCode.GDTesterLabelObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTesterLabelObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClearKitButton"), gdjs.HomeCode.GDClearKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDClearKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDClearKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDClearKitButtonObjects1[k] = gdjs.HomeCode.GDClearKitButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDClearKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewGameButtonGM1"), gdjs.HomeCode.GDNewGameButtonGM1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDNewGameButtonGM1Objects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDNewGameButtonGM1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDNewGameButtonGM1Objects1[k] = gdjs.HomeCode.GDNewGameButtonGM1Objects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDNewGameButtonGM1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PracticeKitButton"), gdjs.HomeCode.GDPracticeKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDPracticeKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDPracticeKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDPracticeKitButtonObjects1[k] = gdjs.HomeCode.GDPracticeKitButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDPracticeKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnswerScreen", false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadInputtedJsonButton"), gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1[k] = gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KitJsonInput"), gdjs.HomeCode.GDKitJsonInputObjects1);
{gdjs.evtTools.network.jsonToVariableStructure((( gdjs.HomeCode.GDKitJsonInputObjects1.length === 0 ) ? "" :gdjs.HomeCode.GDKitJsonInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreateNewKitButton"), gdjs.HomeCode.GDCreateNewKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDCreateNewKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDCreateNewKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDCreateNewKitButtonObjects1[k] = gdjs.HomeCode.GDCreateNewKitButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDCreateNewKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionCreator", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewGameButtonGM2WIP"), gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1[k] = gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm2sl1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewGameButtonGM3WIP"), gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1[k] = gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gm3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ImportFlashcards"), gdjs.HomeCode.GDImportFlashcardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDImportFlashcardsObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDImportFlashcardsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDImportFlashcardsObjects1[k] = gdjs.HomeCode.GDImportFlashcardsObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDImportFlashcardsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ImportFlashcards", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoginButton"), gdjs.HomeCode.GDLoginButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDLoginButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDLoginButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDLoginButtonObjects1[k] = gdjs.HomeCode.GDLoginButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDLoginButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Account Sign-in", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SignupButton"), gdjs.HomeCode.GDSignupButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDSignupButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDSignupButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDSignupButtonObjects1[k] = gdjs.HomeCode.GDSignupButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDSignupButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Account Creator", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LogoutButton"), gdjs.HomeCode.GDLogoutButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDLogoutButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDLogoutButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDLogoutButtonObjects1[k] = gdjs.HomeCode.GDLogoutButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDLogoutButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
}
if (isConditionTrue_0) {
{firebase.auth().signOut();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClassManager"), gdjs.HomeCode.GDClassManagerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDClassManagerObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDClassManagerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDClassManagerObjects1[k] = gdjs.HomeCode.GDClassManagerObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDClassManagerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Classes Manager", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MPIndicator"), gdjs.HomeCode.GDMPIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMPIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMPIndicatorObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMPIndicatorObjects1[k] = gdjs.HomeCode.GDMPIndicatorObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDMPIndicatorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mpsl1", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewGameButtonGM2WIP"), gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGameButtonGM3WIP"), gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1[i].getBehavior("Opacity").setOpacity(255 * 3 / 4);
}
for(var i = 0, len = gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1[i].getBehavior("Opacity").setOpacity(255 * 3 / 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoginButton"), gdjs.HomeCode.GDLoginButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoutButton"), gdjs.HomeCode.GDLogoutButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PFPDisplay"), gdjs.HomeCode.GDPFPDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("SignupButton"), gdjs.HomeCode.GDSignupButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameDisplay"), gdjs.HomeCode.GDUsernameDisplayObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDLoginButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLoginButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDSignupButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDSignupButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDLogoutButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoutButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HomeCode.GDPFPDisplayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDPFPDisplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HomeCode.GDUsernameDisplayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDUsernameDisplayObjects1[i].hide(false);
}
}{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.func(runtimeScene, gdjs.evtTools.firebaseTools.auth.userManagement.getPhotoURL(), "PFPDisplay", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.firebaseTools.auth.userManagement.getPhotoURL(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.HomeCode.GDLoginButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLoginButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HomeCode.GDSignupButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDSignupButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HomeCode.GDUsernameDisplayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDUsernameDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoginButton"), gdjs.HomeCode.GDLoginButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoutButton"), gdjs.HomeCode.GDLogoutButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PFPDisplay"), gdjs.HomeCode.GDPFPDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("SignupButton"), gdjs.HomeCode.GDSignupButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameDisplay"), gdjs.HomeCode.GDUsernameDisplayObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDLoginButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLoginButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HomeCode.GDSignupButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDSignupButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HomeCode.GDLogoutButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoutButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDPFPDisplayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDPFPDisplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDUsernameDisplayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDUsernameDisplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDLoginButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLoginButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HomeCode.GDSignupButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDSignupButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDHeaderObjects1.length = 0;
gdjs.HomeCode.GDHeaderObjects2.length = 0;
gdjs.HomeCode.GDLoadAKitSubheaderObjects1.length = 0;
gdjs.HomeCode.GDLoadAKitSubheaderObjects2.length = 0;
gdjs.HomeCode.GDStartAGameSubheaderObjects1.length = 0;
gdjs.HomeCode.GDStartAGameSubheaderObjects2.length = 0;
gdjs.HomeCode.GDManageKitsButtonObjects1.length = 0;
gdjs.HomeCode.GDManageKitsButtonObjects2.length = 0;
gdjs.HomeCode.GDGenericLabel1Objects1.length = 0;
gdjs.HomeCode.GDGenericLabel1Objects2.length = 0;
gdjs.HomeCode.GDKitJsonInputObjects1.length = 0;
gdjs.HomeCode.GDKitJsonInputObjects2.length = 0;
gdjs.HomeCode.GDLoadInputtedJsonButtonObjects1.length = 0;
gdjs.HomeCode.GDLoadInputtedJsonButtonObjects2.length = 0;
gdjs.HomeCode.GDUploadJsonButtonObjects1.length = 0;
gdjs.HomeCode.GDUploadJsonButtonObjects2.length = 0;
gdjs.HomeCode.GDCreateNewKitButtonObjects1.length = 0;
gdjs.HomeCode.GDCreateNewKitButtonObjects2.length = 0;
gdjs.HomeCode.GDNewGameButtonGM1Objects1.length = 0;
gdjs.HomeCode.GDNewGameButtonGM1Objects2.length = 0;
gdjs.HomeCode.GDClearKitButtonObjects1.length = 0;
gdjs.HomeCode.GDClearKitButtonObjects2.length = 0;
gdjs.HomeCode.GDCreditsLabelObjects1.length = 0;
gdjs.HomeCode.GDCreditsLabelObjects2.length = 0;
gdjs.HomeCode.GDTesterLabelObjects1.length = 0;
gdjs.HomeCode.GDTesterLabelObjects2.length = 0;
gdjs.HomeCode.GDPracticeKitButtonObjects1.length = 0;
gdjs.HomeCode.GDPracticeKitButtonObjects2.length = 0;
gdjs.HomeCode.GDNewGameButtonGM2WIPObjects1.length = 0;
gdjs.HomeCode.GDNewGameButtonGM2WIPObjects2.length = 0;
gdjs.HomeCode.GDNewGameButtonGM3WIPObjects1.length = 0;
gdjs.HomeCode.GDNewGameButtonGM3WIPObjects2.length = 0;
gdjs.HomeCode.GDImportFlashcardsObjects1.length = 0;
gdjs.HomeCode.GDImportFlashcardsObjects2.length = 0;
gdjs.HomeCode.GDMPLabelObjects1.length = 0;
gdjs.HomeCode.GDMPLabelObjects2.length = 0;
gdjs.HomeCode.GDAssignmentsManagerObjects1.length = 0;
gdjs.HomeCode.GDAssignmentsManagerObjects2.length = 0;
gdjs.HomeCode.GDClassManagerObjects1.length = 0;
gdjs.HomeCode.GDClassManagerObjects2.length = 0;
gdjs.HomeCode.GDLoginButtonObjects1.length = 0;
gdjs.HomeCode.GDLoginButtonObjects2.length = 0;
gdjs.HomeCode.GDSignupButtonObjects1.length = 0;
gdjs.HomeCode.GDSignupButtonObjects2.length = 0;
gdjs.HomeCode.GDLogoutButtonObjects1.length = 0;
gdjs.HomeCode.GDLogoutButtonObjects2.length = 0;
gdjs.HomeCode.GDPFPDisplayObjects1.length = 0;
gdjs.HomeCode.GDPFPDisplayObjects2.length = 0;
gdjs.HomeCode.GDUsernameDisplayObjects1.length = 0;
gdjs.HomeCode.GDUsernameDisplayObjects2.length = 0;
gdjs.HomeCode.GDMPIndicatorObjects1.length = 0;
gdjs.HomeCode.GDMPIndicatorObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;

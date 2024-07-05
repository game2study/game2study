gdjs.Account_32Sign_45inCode = {};
gdjs.Account_32Sign_45inCode.localVariables = [];
gdjs.Account_32Sign_45inCode.GDEmailInputObjects1= [];
gdjs.Account_32Sign_45inCode.GDEmailInputObjects2= [];
gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1= [];
gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2= [];
gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1= [];
gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects2= [];
gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1= [];
gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects2= [];
gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1= [];
gdjs.Account_32Sign_45inCode.GDHomeButtonObjects2= [];
gdjs.Account_32Sign_45inCode.GDMPIndicatorObjects1= [];
gdjs.Account_32Sign_45inCode.GDMPIndicatorObjects2= [];


gdjs.Account_32Sign_45inCode.asyncCallback28062812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Account_32Sign_45inCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EmailInput"), gdjs.Account_32Sign_45inCode.GDEmailInputObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Message_Print"), gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("PasswordInput"), gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2);

{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects2.length ;i < len;++i) {
    gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects2[i].getBehavior("Text").setText("Waiting..");
}
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDEmailInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDEmailInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2.length ;i < len;++i) {
    ;
}
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2.length ;i < len;++i) {
    gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2[i].getBehavior("Text").setText("");
}
}gdjs.Account_32Sign_45inCode.localVariables.length = 0;
}
gdjs.Account_32Sign_45inCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Account_32Sign_45inCode.localVariables);
for (const obj of gdjs.Account_32Sign_45inCode.GDEmailInputObjects1) asyncObjectsList.addObject("EmailInput", obj);
for (const obj of gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1) asyncObjectsList.addObject("Message_Print", obj);
for (const obj of gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1) asyncObjectsList.addObject("PasswordInput", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Account_32Sign_45inCode.asyncCallback28062812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Account_32Sign_45inCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CreateAccountButton"), gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1.length;i<l;++i) {
    if ( gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1[k] = gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1[i];
        ++k;
    }
}
gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs.Account_32Sign_45inCode.GDEmailInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message_Print"), gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1);
gdjs.copyArray(runtimeScene.getObjects("PasswordInput"), gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.Account_32Sign_45inCode.GDEmailInputObjects1.length === 0 ) ? "" :gdjs.Account_32Sign_45inCode.GDEmailInputObjects1[0].getBehavior("Text").getText()), (( gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1.length === 0 ) ? "" :gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1.length ;i < len;++i) {
    gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1[i].getBehavior("Text").setText("Checking..");
}
}
{ //Subevents
gdjs.Account_32Sign_45inCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1[k] = gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.Account_32Sign_45inCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Account_32Sign_45inCode.GDEmailInputObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDEmailInputObjects2.length = 0;
gdjs.Account_32Sign_45inCode.GDPasswordInputObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDPasswordInputObjects2.length = 0;
gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDCreateAccountButtonObjects2.length = 0;
gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDMessage_9595PrintObjects2.length = 0;
gdjs.Account_32Sign_45inCode.GDHomeButtonObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDHomeButtonObjects2.length = 0;
gdjs.Account_32Sign_45inCode.GDMPIndicatorObjects1.length = 0;
gdjs.Account_32Sign_45inCode.GDMPIndicatorObjects2.length = 0;

gdjs.Account_32Sign_45inCode.eventsList1(runtimeScene);

return;

}

gdjs['Account_32Sign_45inCode'] = gdjs.Account_32Sign_45inCode;

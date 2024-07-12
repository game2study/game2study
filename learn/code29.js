gdjs.Class_32Student_32ViewCode = {};
gdjs.Class_32Student_32ViewCode.localVariables = [];
gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects1= [];
gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects2= [];
gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects3= [];
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects1= [];
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects2= [];
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects3= [];
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1= [];
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects2= [];
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects3= [];
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects1= [];
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects2= [];
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects3= [];
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects1= [];
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects2= [];
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects3= [];
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects1= [];
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects2= [];
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects3= [];
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects1= [];
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2= [];
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3= [];
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects1= [];
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects2= [];
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects3= [];
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects1= [];
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects2= [];
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects3= [];
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects1= [];
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects2= [];
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects3= [];
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects1= [];
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2= [];
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3= [];
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1= [];
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects2= [];
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3= [];
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects1= [];
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects2= [];
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects3= [];


gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDCopyIdButtonObjects1Objects = Hashtable.newFrom({"CopyIdButton": gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1});
gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDCopyIdButtonObjects1Objects = Hashtable.newFrom({"CopyIdButton": gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1});
gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDAnnouncementDisplayObjects3Objects = Hashtable.newFrom({"AnnouncementDisplay": gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3});
gdjs.Class_32Student_32ViewCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

};gdjs.Class_32Student_32ViewCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


const repeatCount3 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("posts").getChild("announcements"));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2, gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDAnnouncementDisplayObjects3Objects, 10, 380 + gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3[i].getBehavior("Resizable").setSize(250, 35);
}
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("posts").getChild("announcements").getChild(gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("content").getAsString());
}
}{gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).add(1);
}}
}

}


};gdjs.Class_32Student_32ViewCode.asyncCallback33533300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Class_32Student_32ViewCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("AnnouncementDisplay"), gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2);
{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Class_32Student_32ViewCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Class_32Student_32ViewCode.localVariables.length = 0;
}
gdjs.Class_32Student_32ViewCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Class_32Student_32ViewCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Class_32Student_32ViewCode.asyncCallback33533300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Class_32Student_32ViewCode.eventsList3 = function(runtimeScene) {

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


};gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDAssignmentNamesDispayObjects3Objects = Hashtable.newFrom({"AssignmentNamesDispay": gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3});
gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDOpenAssignmentButtonObjects3Objects = Hashtable.newFrom({"OpenAssignmentButton": gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3});
gdjs.Class_32Student_32ViewCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

};gdjs.Class_32Student_32ViewCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


const repeatCount3 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("posts").getChild("assignments"));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2, gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3);

gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDAssignmentNamesDispayObjects3Objects, 330, 370 + gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber() * 45, "");
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3[i].getBehavior("Resizable").setSize(300, 40);
}
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("posts").getChild("assignments").getChild(gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("title").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDOpenAssignmentButtonObjects3Objects, 640, 370 + gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber() * 45, "");
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3[i].getBehavior("Resizable").setSize(200, 40);
}
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3[i].returnVariable(gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{gdjs.Class_32Student_32ViewCode.localVariables[0].getFromIndex(0).add(1);
}}
}

}


};gdjs.Class_32Student_32ViewCode.asyncCallback33551876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Class_32Student_32ViewCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("AssignmentNamesDispay"), gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2);
{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Class_32Student_32ViewCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Class_32Student_32ViewCode.localVariables.length = 0;
}
gdjs.Class_32Student_32ViewCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Class_32Student_32ViewCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Class_32Student_32ViewCode.asyncCallback33551876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Class_32Student_32ViewCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClassNameInput"), gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects1);
{gdjs.evtTools.firebaseTools.firestore.getField("classes", runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString(), "displayname", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.firestore.getField("classes", runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString(), "assets.images.banner", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.firestore.getDocument("classes", runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects1.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IdDisplay"), gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleDisplay"), gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects1);
{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects1.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects1.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyIdButton"), gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDCopyIdButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1 */
{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1[i].setColor("204;204;204");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyIdButton"), gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Class_32Student_32ViewCode.mapOfGDgdjs_9546Class_959532Student_959532ViewCode_9546GDCopyIdButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1 */
{for(var i = 0, len = gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1.length ;i < len;++i) {
    gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyIdButton"), gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1.length;i<l;++i) {
    if ( gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1[k] = gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1[i];
        ++k;
    }
}
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33548516);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != "";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != "0";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33524884);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "ClassBannerReplacement2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("iterations", variable);
}
gdjs.Class_32Student_32ViewCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Class_32Student_32ViewCode.eventsList2(runtimeScene);} //End of subevents
}
gdjs.Class_32Student_32ViewCode.localVariables.pop();

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
gdjs.Class_32Student_32ViewCode.eventsList3(runtimeScene);} //End of subevents
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


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("iterations", variable);
}
gdjs.Class_32Student_32ViewCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Class_32Student_32ViewCode.eventsList6(runtimeScene);} //End of subevents
}
gdjs.Class_32Student_32ViewCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenAssignmentButton"), gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1.length;i<l;++i) {
    if ( gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1[k] = gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1[i];
        ++k;
    }
}
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1 */
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("posts").getChild("assignments").getChild(((gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("kit")), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


};

gdjs.Class_32Student_32ViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDTitleDisplayObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDIdDisplayObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDCopyIdButtonObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassNameInputObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDClassBannerObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDAlertBGObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDAnnouncementDisplayObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDSendChatMSGButtonObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDJoin3DViewButtonObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDViewAssignmentsButtonObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDAssignmentNamesDispayObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDOpenAssignmentButtonObjects3.length = 0;
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects1.length = 0;
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects2.length = 0;
gdjs.Class_32Student_32ViewCode.GDMPIndicatorObjects3.length = 0;

gdjs.Class_32Student_32ViewCode.eventsList7(runtimeScene);

return;

}

gdjs['Class_32Student_32ViewCode'] = gdjs.Class_32Student_32ViewCode;

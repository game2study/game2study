gdjs.Class_323D_32ViewCode = {};
gdjs.Class_323D_32ViewCode.localVariables = [];
gdjs.Class_323D_32ViewCode.GDObjectObjects1= [];
gdjs.Class_323D_32ViewCode.GDObjectObjects2= [];
gdjs.Class_323D_32ViewCode.GDObjectObjects3= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects1= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects2= [];
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects3= [];


gdjs.Class_323D_32ViewCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.isAuthenticated());
if (isConditionTrue_0) {
}

}


};gdjs.Class_323D_32ViewCode.asyncCallback28496532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Class_323D_32ViewCode.localVariables);

{ //Subevents
gdjs.Class_323D_32ViewCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Class_323D_32ViewCode.localVariables.length = 0;
}
gdjs.Class_323D_32ViewCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Class_323D_32ViewCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Class_323D_32ViewCode.asyncCallback28496532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Class_323D_32ViewCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.isAuthenticated());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Class_323D_32ViewCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Class_323D_32ViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Class_323D_32ViewCode.GDObjectObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDObjectObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDObjectObjects3.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects1.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects2.length = 0;
gdjs.Class_323D_32ViewCode.GDMPIndicatorObjects3.length = 0;

gdjs.Class_323D_32ViewCode.eventsList2(runtimeScene);

return;

}

gdjs['Class_323D_32ViewCode'] = gdjs.Class_323D_32ViewCode;

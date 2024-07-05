gdjs.Classes_32ManagerCode = {};
gdjs.Classes_32ManagerCode.localVariables = [];
gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects1= [];
gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects2= [];
gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects1= [];
gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects2= [];
gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects1= [];
gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects2= [];
gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDOpenLearningClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDOpenLearningClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects1= [];
gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects2= [];
gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects1= [];
gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects2= [];
gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1= [];
gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects2= [];
gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1= [];
gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects2= [];
gdjs.Classes_32ManagerCode.GDHeaderObjects1= [];
gdjs.Classes_32ManagerCode.GDHeaderObjects2= [];
gdjs.Classes_32ManagerCode.GDTeachingHeaderObjects1= [];
gdjs.Classes_32ManagerCode.GDTeachingHeaderObjects2= [];
gdjs.Classes_32ManagerCode.GDLearningHeaderObjects1= [];
gdjs.Classes_32ManagerCode.GDLearningHeaderObjects2= [];
gdjs.Classes_32ManagerCode.GDMPIndicatorObjects1= [];
gdjs.Classes_32ManagerCode.GDMPIndicatorObjects2= [];


gdjs.Classes_32ManagerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CreateClassButton"), gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreateClassNameField"), gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects1);
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("members").getChild("students"));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("members").getChild("teachers"));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("posts").getChild("assignments"));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("posts").getChild("announcements"));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("displayname").setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("displayname").setString((( gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects1.length === 0 ) ? "" :gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("members").getChild("teachers"), gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.firestore.addDocument("/classes/", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JoinClassButton"), gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JoinClassIdField"), gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1);
{gdjs.evtTools.firebaseTools.firestore.getDocument("classes", (( gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1.length === 0 ) ? "" :gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(5).getChild("members").getChild("students"), gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.firestore.updateDocument("classes", (( gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1.length === 0 ) ? "" :gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreateClassButton"), gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreateClassButton"), gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("GetTeachingClasses", "classes");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("GetTeachingClasses", "members.teachers", "array-contains", gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("GetTeachingClasses", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("GetLearningClasses", "classes");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("GetLearningClasses", "members.students", "array-contains", gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("GetLearningClasses", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LearningClassesIdDisplay"), gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("LearningClassesNameDisplay"), gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeachingClassesIdDisplay"), gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeachingClassesNameDisplay"), gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("displayname").getAsString());
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("id").getAsString());
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getChild("data").getChild("displayname").getAsString());
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getChild("id").getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PreviousTeachingClassButton"), gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PreviousTeachingClassButton"), gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextTeachingClassButton"), gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextTeachingClassButton"), gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1);
{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length ;i < len;++i) {
    gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextTeachingClassButton"), gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PreviousTeachingClassButton"), gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLearningClassButton"), gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PreviousLearningClassButton"), gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyTeachingClassIdButton"), gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("id").getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyTeachingClassNameButton"), gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("displayname").getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyLearningClassIdButton"), gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getChild("id").getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyLearningClassNameButton"), gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getChild("data").getChild("displayname").getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenTeachingClassButton"), gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1.length;i<l;++i) {
    if ( gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1[k] = gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1[i];
        ++k;
    }
}
gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Class Teacher View", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("ID").setString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("id").getAsString());
}}

}


};

gdjs.Classes_32ManagerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCreateClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCreateClassNameFieldObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingClassesNameDisplayObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDOpenTeachingClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDNextTeachingClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDPreviousTeachingClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingClassesIdDisplayObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCopyTeachingClassIdButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCopyTeachingClassNameButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDOpenLearningClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDOpenLearningClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDLearningClassesNameDisplayObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDLearningClassesIdDisplayObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDNextLearningClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDPreviousLearningClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCopyLearningClassIdButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDCopyLearningClassNameButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDJoinClassIdFieldObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDJoinClassButtonObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDHeaderObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDHeaderObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingHeaderObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDTeachingHeaderObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDLearningHeaderObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDLearningHeaderObjects2.length = 0;
gdjs.Classes_32ManagerCode.GDMPIndicatorObjects1.length = 0;
gdjs.Classes_32ManagerCode.GDMPIndicatorObjects2.length = 0;

gdjs.Classes_32ManagerCode.eventsList0(runtimeScene);

return;

}

gdjs['Classes_32ManagerCode'] = gdjs.Classes_32ManagerCode;

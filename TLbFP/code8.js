gdjs.QuestionCreatorCode = {};
gdjs.QuestionCreatorCode.GDNameCreatorObjects1= [];
gdjs.QuestionCreatorCode.GDNameCreatorObjects2= [];
gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects1= [];
gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects2= [];
gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects1= [];
gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects2= [];
gdjs.QuestionCreatorCode.GDAns1CreatorObjects1= [];
gdjs.QuestionCreatorCode.GDAns1CreatorObjects2= [];
gdjs.QuestionCreatorCode.GDAns2CreatorObjects1= [];
gdjs.QuestionCreatorCode.GDAns2CreatorObjects2= [];
gdjs.QuestionCreatorCode.GDAns3CreatorObjects1= [];
gdjs.QuestionCreatorCode.GDAns3CreatorObjects2= [];
gdjs.QuestionCreatorCode.GDAns4CreatorObjects1= [];
gdjs.QuestionCreatorCode.GDAns4CreatorObjects2= [];
gdjs.QuestionCreatorCode.GDLabel1Objects1= [];
gdjs.QuestionCreatorCode.GDLabel1Objects2= [];
gdjs.QuestionCreatorCode.GDLabel2Objects1= [];
gdjs.QuestionCreatorCode.GDLabel2Objects2= [];
gdjs.QuestionCreatorCode.GDCreateButtonObjects1= [];
gdjs.QuestionCreatorCode.GDCreateButtonObjects2= [];
gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1= [];
gdjs.QuestionCreatorCode.GDAnsQsButtonObjects2= [];
gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1= [];
gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects2= [];
gdjs.QuestionCreatorCode.GDBackBttnObjects1= [];
gdjs.QuestionCreatorCode.GDBackBttnObjects2= [];


gdjs.QuestionCreatorCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreateButton"), gdjs.QuestionCreatorCode.GDCreateButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuestionCreatorCode.GDCreateButtonObjects1.length;i<l;++i) {
    if ( gdjs.QuestionCreatorCode.GDCreateButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QuestionCreatorCode.GDCreateButtonObjects1[k] = gdjs.QuestionCreatorCode.GDCreateButtonObjects1[i];
        ++k;
    }
}
gdjs.QuestionCreatorCode.GDCreateButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ans1Creator"), gdjs.QuestionCreatorCode.GDAns1CreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ans2Creator"), gdjs.QuestionCreatorCode.GDAns2CreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ans3Creator"), gdjs.QuestionCreatorCode.GDAns3CreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ans4Creator"), gdjs.QuestionCreatorCode.GDAns4CreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ChoiceAmountCreator"), gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("CorrectAnswerCreator"), gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("NameCreator"), gdjs.QuestionCreatorCode.GDNameCreatorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("a1").setString((( gdjs.QuestionCreatorCode.GDAns1CreatorObjects1.length === 0 ) ? "" :gdjs.QuestionCreatorCode.GDAns1CreatorObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("a2").setString((( gdjs.QuestionCreatorCode.GDAns2CreatorObjects1.length === 0 ) ? "" :gdjs.QuestionCreatorCode.GDAns2CreatorObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("a3").setString((( gdjs.QuestionCreatorCode.GDAns3CreatorObjects1.length === 0 ) ? "" :gdjs.QuestionCreatorCode.GDAns3CreatorObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("a4").setString((( gdjs.QuestionCreatorCode.GDAns4CreatorObjects1.length === 0 ) ? "" :gdjs.QuestionCreatorCode.GDAns4CreatorObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.QuestionCreatorCode.GDNameCreatorObjects1.length === 0 ) ? "" :gdjs.QuestionCreatorCode.GDNameCreatorObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("correctans").setNumber((( gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects1.length === 0 ) ? 0 :gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ansamount").setNumber((( gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects1.length === 0 ) ? 0 :gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getGame().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AnsQsButton"), gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1.length;i<l;++i) {
    if ( gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1[k] = gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1[i];
        ++k;
    }
}
gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "AnswerScreen");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ViewCreatedQsButton"), gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1.length;i<l;++i) {
    if ( gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1[k] = gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1[i];
        ++k;
    }
}
gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViewCreatedQuestions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBttn"), gdjs.QuestionCreatorCode.GDBackBttnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuestionCreatorCode.GDBackBttnObjects1.length;i<l;++i) {
    if ( gdjs.QuestionCreatorCode.GDBackBttnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QuestionCreatorCode.GDBackBttnObjects1[k] = gdjs.QuestionCreatorCode.GDBackBttnObjects1[i];
        ++k;
    }
}
gdjs.QuestionCreatorCode.GDBackBttnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene Selection", false);
}}

}


};

gdjs.QuestionCreatorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuestionCreatorCode.GDNameCreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDNameCreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDChoiceAmountCreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDCorrectAnswerCreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDAns1CreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDAns1CreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDAns2CreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDAns2CreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDAns3CreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDAns3CreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDAns4CreatorObjects1.length = 0;
gdjs.QuestionCreatorCode.GDAns4CreatorObjects2.length = 0;
gdjs.QuestionCreatorCode.GDLabel1Objects1.length = 0;
gdjs.QuestionCreatorCode.GDLabel1Objects2.length = 0;
gdjs.QuestionCreatorCode.GDLabel2Objects1.length = 0;
gdjs.QuestionCreatorCode.GDLabel2Objects2.length = 0;
gdjs.QuestionCreatorCode.GDCreateButtonObjects1.length = 0;
gdjs.QuestionCreatorCode.GDCreateButtonObjects2.length = 0;
gdjs.QuestionCreatorCode.GDAnsQsButtonObjects1.length = 0;
gdjs.QuestionCreatorCode.GDAnsQsButtonObjects2.length = 0;
gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects1.length = 0;
gdjs.QuestionCreatorCode.GDViewCreatedQsButtonObjects2.length = 0;
gdjs.QuestionCreatorCode.GDBackBttnObjects1.length = 0;
gdjs.QuestionCreatorCode.GDBackBttnObjects2.length = 0;

gdjs.QuestionCreatorCode.eventsList0(runtimeScene);

return;

}

gdjs['QuestionCreatorCode'] = gdjs.QuestionCreatorCode;

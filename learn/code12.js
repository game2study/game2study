gdjs.ViewCreatedQuestionsCode = {};
gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects1= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects2= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects1= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects2= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects1= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects2= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects1= [];
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects2= [];
gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects2= [];
gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1= [];
gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects2= [];


gdjs.ViewCreatedQuestionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CurrQSelector"), gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText())) <= gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ChoiceDisplay1"), gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ChoiceDisplay2"), gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ChoiceDisplay3"), gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ChoiceDisplay4"), gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects1);
gdjs.copyArray(runtimeScene.getObjects("CorrectDisplay"), gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects1);
/* Reuse gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionNameDisplay"), gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects1);
{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("name")));
}
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("a1")));
}
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("a2")));
}
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("a3")));
}
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("a4")));
}
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects1[i].getBehavior("Text").setText("Correct Choice Number: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText()))).getChild("correctans")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrQSelector"), gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaxBttn"), gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1.length;i<l;++i) {
    if ( gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1[k] = gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1[i];
        ++k;
    }
}
gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText())) < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1 */
{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrQSelector"), gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText())) > gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1 */
{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").setText("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeleteBttn"), gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1.length;i<l;++i) {
    if ( gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1[k] = gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1[i];
        ++k;
    }
}
gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrQSelector"), gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1);
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getGame().getVariables().getFromIndex(5), gdjs.evtTools.common.toNumber((( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length === 0 ) ? "" :gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[0].getBehavior("Text").getText())));
}{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").getText())) + 1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrQSelector"), gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length;i<l;++i) {
    if ( gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").getText() == "-1" ) {
        isConditionTrue_0 = true;
        gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[k] = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i];
        ++k;
    }
}
gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1 */
{for(var i = 0, len = gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length ;i < len;++i) {
    gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1[i].getBehavior("Text").setText("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBttn"), gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1.length;i<l;++i) {
    if ( gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1[k] = gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1[i];
        ++k;
    }
}
gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionCreator", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveKitButton"), gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1.length;i<l;++i) {
    if ( gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1[k] = gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1[i];
        ++k;
    }
}
gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SaveKitScreen", false);
}}

}


};

gdjs.ViewCreatedQuestionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDQuestionNameDisplayObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDCurrQSelectorObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDMaxBttnObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDDeleteBttnObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay1Objects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay2Objects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay3Objects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDChoiceDisplay4Objects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDCorrectDisplayObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDBackBttnObjects2.length = 0;
gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects1.length = 0;
gdjs.ViewCreatedQuestionsCode.GDSaveKitButtonObjects2.length = 0;

gdjs.ViewCreatedQuestionsCode.eventsList0(runtimeScene);

return;

}

gdjs['ViewCreatedQuestionsCode'] = gdjs.ViewCreatedQuestionsCode;

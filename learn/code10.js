gdjs.AnswerScreenCode = {};
gdjs.AnswerScreenCode.localVariables = [];
gdjs.AnswerScreenCode.GDChoice1Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice2Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice3Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice4Objects1_1final = [];

gdjs.AnswerScreenCode.GDQuestionNameObjects1= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects2= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects3= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects4= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects5= [];
gdjs.AnswerScreenCode.GDChoice1Objects1= [];
gdjs.AnswerScreenCode.GDChoice1Objects2= [];
gdjs.AnswerScreenCode.GDChoice1Objects3= [];
gdjs.AnswerScreenCode.GDChoice1Objects4= [];
gdjs.AnswerScreenCode.GDChoice1Objects5= [];
gdjs.AnswerScreenCode.GDChoice2Objects1= [];
gdjs.AnswerScreenCode.GDChoice2Objects2= [];
gdjs.AnswerScreenCode.GDChoice2Objects3= [];
gdjs.AnswerScreenCode.GDChoice2Objects4= [];
gdjs.AnswerScreenCode.GDChoice2Objects5= [];
gdjs.AnswerScreenCode.GDChoice3Objects1= [];
gdjs.AnswerScreenCode.GDChoice3Objects2= [];
gdjs.AnswerScreenCode.GDChoice3Objects3= [];
gdjs.AnswerScreenCode.GDChoice3Objects4= [];
gdjs.AnswerScreenCode.GDChoice3Objects5= [];
gdjs.AnswerScreenCode.GDChoice4Objects1= [];
gdjs.AnswerScreenCode.GDChoice4Objects2= [];
gdjs.AnswerScreenCode.GDChoice4Objects3= [];
gdjs.AnswerScreenCode.GDChoice4Objects4= [];
gdjs.AnswerScreenCode.GDChoice4Objects5= [];
gdjs.AnswerScreenCode.GDValidatorObjects1= [];
gdjs.AnswerScreenCode.GDValidatorObjects2= [];
gdjs.AnswerScreenCode.GDValidatorObjects3= [];
gdjs.AnswerScreenCode.GDValidatorObjects4= [];
gdjs.AnswerScreenCode.GDValidatorObjects5= [];
gdjs.AnswerScreenCode.GDHomeTPObjects1= [];
gdjs.AnswerScreenCode.GDHomeTPObjects2= [];
gdjs.AnswerScreenCode.GDHomeTPObjects3= [];
gdjs.AnswerScreenCode.GDHomeTPObjects4= [];
gdjs.AnswerScreenCode.GDHomeTPObjects5= [];
gdjs.AnswerScreenCode.GDMPIndicatorObjects1= [];
gdjs.AnswerScreenCode.GDMPIndicatorObjects2= [];
gdjs.AnswerScreenCode.GDMPIndicatorObjects3= [];
gdjs.AnswerScreenCode.GDMPIndicatorObjects4= [];
gdjs.AnswerScreenCode.GDMPIndicatorObjects5= [];


gdjs.AnswerScreenCode.eventsList0 = function(runtimeScene) {

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


};gdjs.AnswerScreenCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33007236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33007236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback32988420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback32988420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice1Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDChoice1Objects2[k] = gdjs.AnswerScreenCode.GDChoice1Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AnswerScreenCode.GDChoice1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects2);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects2);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects2[i].getBehavior("Text").setText("Correct!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.AnswerScreenCode.GDChoice2Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice3Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AnswerScreenCode.GDChoice2Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice2Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice2Objects2[k] = gdjs.AnswerScreenCode.GDChoice2Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice2Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice2Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice2Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice3Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice3Objects2[k] = gdjs.AnswerScreenCode.GDChoice3Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice3Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice3Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice3Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice4Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice4Objects2[k] = gdjs.AnswerScreenCode.GDChoice4Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice4Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice4Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice4Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice2Objects1_1final, gdjs.AnswerScreenCode.GDChoice2Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice3Objects1_1final, gdjs.AnswerScreenCode.GDChoice3Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice4Objects1_1final, gdjs.AnswerScreenCode.GDChoice4Objects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects1);
/* Reuse gdjs.AnswerScreenCode.GDChoice2Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice3Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects1[i].getBehavior("Text").setText("Incorrect!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33013060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33013060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33017636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33017636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice2Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDChoice2Objects2[k] = gdjs.AnswerScreenCode.GDChoice2Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice2Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
/* Reuse gdjs.AnswerScreenCode.GDChoice2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects2);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects2);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects2[i].getBehavior("Text").setText("Correct!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.AnswerScreenCode.GDChoice1Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice3Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AnswerScreenCode.GDChoice1Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice1Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice1Objects2[k] = gdjs.AnswerScreenCode.GDChoice1Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice1Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice1Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice1Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice3Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice3Objects2[k] = gdjs.AnswerScreenCode.GDChoice3Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice3Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice3Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice3Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice4Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice4Objects2[k] = gdjs.AnswerScreenCode.GDChoice4Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice4Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice4Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice4Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice1Objects1_1final, gdjs.AnswerScreenCode.GDChoice1Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice3Objects1_1final, gdjs.AnswerScreenCode.GDChoice3Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice4Objects1_1final, gdjs.AnswerScreenCode.GDChoice4Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AnswerScreenCode.GDChoice1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects1);
/* Reuse gdjs.AnswerScreenCode.GDChoice3Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects1[i].getBehavior("Text").setText("Incorrect!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33021452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33021452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33026092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33026092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice3Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDChoice3Objects2[k] = gdjs.AnswerScreenCode.GDChoice3Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice3Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
/* Reuse gdjs.AnswerScreenCode.GDChoice3Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects2);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects2);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects2[i].getBehavior("Text").setText("Correct!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.AnswerScreenCode.GDChoice1Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice2Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AnswerScreenCode.GDChoice1Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice1Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice1Objects2[k] = gdjs.AnswerScreenCode.GDChoice1Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice1Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice1Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice1Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice2Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice2Objects2[k] = gdjs.AnswerScreenCode.GDChoice2Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice2Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice2Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice2Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice4Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice4Objects2[k] = gdjs.AnswerScreenCode.GDChoice4Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice4Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice4Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice4Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice1Objects1_1final, gdjs.AnswerScreenCode.GDChoice1Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice2Objects1_1final, gdjs.AnswerScreenCode.GDChoice2Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice4Objects1_1final, gdjs.AnswerScreenCode.GDChoice4Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AnswerScreenCode.GDChoice1Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects1);
/* Reuse gdjs.AnswerScreenCode.GDChoice4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects1[i].getBehavior("Text").setText("Incorrect!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.eventsList22 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("active"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList22(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33029684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33029684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList25 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}

}


};gdjs.AnswerScreenCode.eventsList26 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.AnswerScreenCode.eventsList25(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback33034476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);

{ //Subevents
gdjs.AnswerScreenCode.eventsList26(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AnswerScreenCode.localVariables.length = 0;
}
gdjs.AnswerScreenCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AnswerScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback33034476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice4Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDChoice4Objects2[k] = gdjs.AnswerScreenCode.GDChoice4Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
/* Reuse gdjs.AnswerScreenCode.GDChoice4Objects2 */
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects2);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects2);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects2[i].getBehavior("Text").setText("Correct!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.AnswerScreenCode.GDChoice1Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice2Objects1.length = 0;

gdjs.AnswerScreenCode.GDChoice3Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AnswerScreenCode.GDChoice1Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects1_1final.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice1Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice1Objects2[k] = gdjs.AnswerScreenCode.GDChoice1Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice1Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice1Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice1Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice2Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice2Objects2[k] = gdjs.AnswerScreenCode.GDChoice2Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice2Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice2Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice2Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects2);
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDChoice3Objects2.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDChoice3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AnswerScreenCode.GDChoice3Objects2[k] = gdjs.AnswerScreenCode.GDChoice3Objects2[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDChoice3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AnswerScreenCode.GDChoice3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.AnswerScreenCode.GDChoice3Objects1_1final.indexOf(gdjs.AnswerScreenCode.GDChoice3Objects2[j]) === -1 )
            gdjs.AnswerScreenCode.GDChoice3Objects1_1final.push(gdjs.AnswerScreenCode.GDChoice3Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice1Objects1_1final, gdjs.AnswerScreenCode.GDChoice1Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice2Objects1_1final, gdjs.AnswerScreenCode.GDChoice2Objects1);
gdjs.copyArray(gdjs.AnswerScreenCode.GDChoice3Objects1_1final, gdjs.AnswerScreenCode.GDChoice3Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AnswerScreenCode.GDChoice1Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice2Objects1 */
/* Reuse gdjs.AnswerScreenCode.GDChoice3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects1);
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Validator"), gdjs.AnswerScreenCode.GDValidatorObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDValidatorObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDValidatorObjects1[i].getBehavior("Text").setText("Incorrect!");
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDHomeTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDHomeTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.mapOfGDgdjs_9546AnswerScreenCode_9546GDHomeTPObjects1Objects = Hashtable.newFrom({"HomeTP": gdjs.AnswerScreenCode.GDHomeTPObjects1});
gdjs.AnswerScreenCode.eventsList29 = function(runtimeScene) {

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
gdjs.AnswerScreenCode.eventsList0(runtimeScene);} //End of subevents
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1));
}{gdjs.evtsExt__ThreeDimensionsPlatforming__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionName"), gdjs.AnswerScreenCode.GDQuestionNameObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDQuestionNameObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("name")));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("a1")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("a2")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("a3")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("a4")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "1");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "4");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("ansamount")) == "2");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice2"), gdjs.AnswerScreenCode.GDChoice2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].setY(gdjs.AnswerScreenCode.GDChoice1Objects1[i].getY() + (100));
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice2Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice2Objects1[i].setY(gdjs.AnswerScreenCode.GDChoice2Objects1[i].getY() + (100));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("ansamount")) == "3");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Choice3"), gdjs.AnswerScreenCode.GDChoice3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Choice4"), gdjs.AnswerScreenCode.GDChoice4Objects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice4Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].getBehavior("Scale").setScaleX(2);
}
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice3Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice3Objects1[i].setX(gdjs.AnswerScreenCode.GDChoice3Objects1[i].getX() + ((gdjs.AnswerScreenCode.GDChoice3Objects1[i].getX()) * 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDHomeTPObjects1.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDHomeTPObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDHomeTPObjects1[k] = gdjs.AnswerScreenCode.GDHomeTPObjects1[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDHomeTPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("QuestionName"), gdjs.AnswerScreenCode.GDQuestionNameObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDQuestionNameObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuestionName"), gdjs.AnswerScreenCode.GDQuestionNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDQuestionNameObjects1.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].isCollidingWithPoint(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - 20, (gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDQuestionNameObjects1[k] = gdjs.AnswerScreenCode.GDQuestionNameObjects1[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDQuestionNameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AnswerScreenCode.GDQuestionNameObjects1 */
{for(var i = 0, len = gdjs.AnswerScreenCode.GDQuestionNameObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].setCharacterSize(gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].getCharacterSize() - (5));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HomeTP"), gdjs.AnswerScreenCode.GDHomeTPObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionName"), gdjs.AnswerScreenCode.GDQuestionNameObjects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDQuestionNameObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDQuestionNameObjects1[i].separateFromObjectsList(gdjs.AnswerScreenCode.mapOfGDgdjs_9546AnswerScreenCode_9546GDHomeTPObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Choice1"), gdjs.AnswerScreenCode.GDChoice1Objects1);
{for(var i = 0, len = gdjs.AnswerScreenCode.GDChoice1Objects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDChoice1Objects1[i].ChangeFontSize("+ (add)", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.AnswerScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AnswerScreenCode.GDQuestionNameObjects1.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects2.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects3.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects4.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects5.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects4.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects5.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects4.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects5.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects4.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects5.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects4.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects5.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects1.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects2.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects3.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects4.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects5.length = 0;
gdjs.AnswerScreenCode.GDHomeTPObjects1.length = 0;
gdjs.AnswerScreenCode.GDHomeTPObjects2.length = 0;
gdjs.AnswerScreenCode.GDHomeTPObjects3.length = 0;
gdjs.AnswerScreenCode.GDHomeTPObjects4.length = 0;
gdjs.AnswerScreenCode.GDHomeTPObjects5.length = 0;
gdjs.AnswerScreenCode.GDMPIndicatorObjects1.length = 0;
gdjs.AnswerScreenCode.GDMPIndicatorObjects2.length = 0;
gdjs.AnswerScreenCode.GDMPIndicatorObjects3.length = 0;
gdjs.AnswerScreenCode.GDMPIndicatorObjects4.length = 0;
gdjs.AnswerScreenCode.GDMPIndicatorObjects5.length = 0;

gdjs.AnswerScreenCode.eventsList29(runtimeScene);

return;

}

gdjs['AnswerScreenCode'] = gdjs.AnswerScreenCode;

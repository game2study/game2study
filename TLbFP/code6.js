gdjs.AnswerScreenCode = {};
gdjs.AnswerScreenCode.GDChoice1Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice2Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice3Objects1_1final = [];

gdjs.AnswerScreenCode.GDChoice4Objects1_1final = [];

gdjs.AnswerScreenCode.GDQuestionNameObjects1= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects2= [];
gdjs.AnswerScreenCode.GDQuestionNameObjects3= [];
gdjs.AnswerScreenCode.GDCurrentQuestionObjects1= [];
gdjs.AnswerScreenCode.GDCurrentQuestionObjects2= [];
gdjs.AnswerScreenCode.GDCurrentQuestionObjects3= [];
gdjs.AnswerScreenCode.GDChoice1Objects1= [];
gdjs.AnswerScreenCode.GDChoice1Objects2= [];
gdjs.AnswerScreenCode.GDChoice1Objects3= [];
gdjs.AnswerScreenCode.GDChoice2Objects1= [];
gdjs.AnswerScreenCode.GDChoice2Objects2= [];
gdjs.AnswerScreenCode.GDChoice2Objects3= [];
gdjs.AnswerScreenCode.GDChoice3Objects1= [];
gdjs.AnswerScreenCode.GDChoice3Objects2= [];
gdjs.AnswerScreenCode.GDChoice3Objects3= [];
gdjs.AnswerScreenCode.GDChoice4Objects1= [];
gdjs.AnswerScreenCode.GDChoice4Objects2= [];
gdjs.AnswerScreenCode.GDChoice4Objects3= [];
gdjs.AnswerScreenCode.GDValidatorObjects1= [];
gdjs.AnswerScreenCode.GDValidatorObjects2= [];
gdjs.AnswerScreenCode.GDValidatorObjects3= [];
gdjs.AnswerScreenCode.GDDebugTPObjects1= [];
gdjs.AnswerScreenCode.GDDebugTPObjects2= [];
gdjs.AnswerScreenCode.GDDebugTPObjects3= [];


gdjs.AnswerScreenCode.asyncCallback16118748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16118748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.asyncCallback16122316 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16122316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects2);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects1);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback16125340 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16125340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.asyncCallback16127476 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16127476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList5 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects2);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects1);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback16131620 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16131620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.asyncCallback16133756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16133756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList8 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects2);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList6(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects1);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.asyncCallback16137940 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16137940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.asyncCallback16140076 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "as1rs1", false);
}}
gdjs.AnswerScreenCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AnswerScreenCode.asyncCallback16140076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AnswerScreenCode.eventsList11 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects2);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects2.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList9(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects1);
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
}{for(var i = 0, len = gdjs.AnswerScreenCode.GDDebugTPObjects1.length ;i < len;++i) {
    gdjs.AnswerScreenCode.GDDebugTPObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "credits", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() + 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "credits", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.AnswerScreenCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.AnswerScreenCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5)) - 1));
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
gdjs.AnswerScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getChild("correctans")) == "4");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AnswerScreenCode.eventsList11(runtimeScene);} //End of subevents
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

gdjs.copyArray(runtimeScene.getObjects("DebugTP"), gdjs.AnswerScreenCode.GDDebugTPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AnswerScreenCode.GDDebugTPObjects1.length;i<l;++i) {
    if ( gdjs.AnswerScreenCode.GDDebugTPObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AnswerScreenCode.GDDebugTPObjects1[k] = gdjs.AnswerScreenCode.GDDebugTPObjects1[i];
        ++k;
    }
}
gdjs.AnswerScreenCode.GDDebugTPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.AnswerScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AnswerScreenCode.GDQuestionNameObjects1.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects2.length = 0;
gdjs.AnswerScreenCode.GDQuestionNameObjects3.length = 0;
gdjs.AnswerScreenCode.GDCurrentQuestionObjects1.length = 0;
gdjs.AnswerScreenCode.GDCurrentQuestionObjects2.length = 0;
gdjs.AnswerScreenCode.GDCurrentQuestionObjects3.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice1Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice2Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice3Objects3.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects1.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects2.length = 0;
gdjs.AnswerScreenCode.GDChoice4Objects3.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects1.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects2.length = 0;
gdjs.AnswerScreenCode.GDValidatorObjects3.length = 0;
gdjs.AnswerScreenCode.GDDebugTPObjects1.length = 0;
gdjs.AnswerScreenCode.GDDebugTPObjects2.length = 0;
gdjs.AnswerScreenCode.GDDebugTPObjects3.length = 0;

gdjs.AnswerScreenCode.eventsList12(runtimeScene);

return;

}

gdjs['AnswerScreenCode'] = gdjs.AnswerScreenCode;

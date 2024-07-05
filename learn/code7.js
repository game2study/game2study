gdjs.gm1pmenu2Code = {};
gdjs.gm1pmenu2Code.localVariables = [];
gdjs.gm1pmenu2Code.GDTitleObjects1= [];
gdjs.gm1pmenu2Code.GDTitleObjects2= [];
gdjs.gm1pmenu2Code.GDAK47Objects1= [];
gdjs.gm1pmenu2Code.GDAK47Objects2= [];
gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects1= [];
gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects2= [];
gdjs.gm1pmenu2Code.GDCoinImgObjects1= [];
gdjs.gm1pmenu2Code.GDCoinImgObjects2= [];
gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects1= [];
gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects2= [];
gdjs.gm1pmenu2Code.GDCreditLabelObjects1= [];
gdjs.gm1pmenu2Code.GDCreditLabelObjects2= [];
gdjs.gm1pmenu2Code.GDCoinLabelObjects1= [];
gdjs.gm1pmenu2Code.GDCoinLabelObjects2= [];
gdjs.gm1pmenu2Code.GDMPIndicatorObjects1= [];
gdjs.gm1pmenu2Code.GDMPIndicatorObjects2= [];


gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects = Hashtable.newFrom({"AK47": gdjs.gm1pmenu2Code.GDAK47Objects1});
gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects = Hashtable.newFrom({"AK47": gdjs.gm1pmenu2Code.GDAK47Objects1});
gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects = Hashtable.newFrom({"AK47": gdjs.gm1pmenu2Code.GDAK47Objects1});
gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects = Hashtable.newFrom({"AK47": gdjs.gm1pmenu2Code.GDAK47Objects1});
gdjs.gm1pmenu2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CreditLabel"), gdjs.gm1pmenu2Code.GDCreditLabelObjects1);
{for(var i = 0, len = gdjs.gm1pmenu2Code.GDCreditLabelObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu2Code.GDCreditLabelObjects1[i].getBehavior("Text").setText("Credits: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AK47"), gdjs.gm1pmenu2Code.GDAK47Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AK47"), gdjs.gm1pmenu2Code.GDAK47Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "auto", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AK47"), gdjs.gm1pmenu2Code.GDAK47Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("ak47");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "owns__ak47");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "gm1__owns__ak47", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("storage", "gm1__coins");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "gm1__coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AK47"), gdjs.gm1pmenu2Code.GDAK47Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gm1pmenu2Code.mapOfGDgdjs_9546gm1pmenu2Code_9546GDAK47Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 50;
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "gm1__owns__ak47", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AK47CostCoins"), gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("AK47CostCredits"), gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects1);
{for(var i = 0, len = gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects1[i].getBehavior("Text").setText("Owned");
}
}{for(var i = 0, len = gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects1[i].getBehavior("Text").setText("Owned");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinLabel"), gdjs.gm1pmenu2Code.GDCoinLabelObjects1);
{for(var i = 0, len = gdjs.gm1pmenu2Code.GDCoinLabelObjects1.length ;i < len;++i) {
    gdjs.gm1pmenu2Code.GDCoinLabelObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}}

}


};

gdjs.gm1pmenu2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gm1pmenu2Code.GDTitleObjects1.length = 0;
gdjs.gm1pmenu2Code.GDTitleObjects2.length = 0;
gdjs.gm1pmenu2Code.GDAK47Objects1.length = 0;
gdjs.gm1pmenu2Code.GDAK47Objects2.length = 0;
gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects1.length = 0;
gdjs.gm1pmenu2Code.GDAK47CostCoinsObjects2.length = 0;
gdjs.gm1pmenu2Code.GDCoinImgObjects1.length = 0;
gdjs.gm1pmenu2Code.GDCoinImgObjects2.length = 0;
gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects1.length = 0;
gdjs.gm1pmenu2Code.GDAK47CostCreditsObjects2.length = 0;
gdjs.gm1pmenu2Code.GDCreditLabelObjects1.length = 0;
gdjs.gm1pmenu2Code.GDCreditLabelObjects2.length = 0;
gdjs.gm1pmenu2Code.GDCoinLabelObjects1.length = 0;
gdjs.gm1pmenu2Code.GDCoinLabelObjects2.length = 0;
gdjs.gm1pmenu2Code.GDMPIndicatorObjects1.length = 0;
gdjs.gm1pmenu2Code.GDMPIndicatorObjects2.length = 0;

gdjs.gm1pmenu2Code.eventsList0(runtimeScene);

return;

}

gdjs['gm1pmenu2Code'] = gdjs.gm1pmenu2Code;

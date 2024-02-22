
gdjs.evtsExt__SelectionTools__SelectionPainter = gdjs.evtsExt__SelectionTools__SelectionPainter || {};

/**
 * Behavior generated from Selection painter
 */
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter = class SelectionPainter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Selection painter
 */
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.SharedData = class SelectionPainterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SelectionTools_SelectionPainterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SelectionTools_SelectionPainterSharedData = new gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.SharedData(
      initialData
    );
  }
  return instanceContainer._SelectionTools_SelectionPainterSharedData;
}

// Methods:
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].clear();
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].beginFillPath(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(1)));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(2)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(1)));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(2)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(3)));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(3)));
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].closePath();
}
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex")) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(2)) != Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(3)) != Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), 3);
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), 2);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(1)), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) > 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex")) == 4;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices")) - 1).getChild(0)) == Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices")) - 1).getChild(1)) == Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopLastVertex"), true);
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4[i].clear();
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4[i].beginFillPath(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopLastVertex"), true);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"), gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices")) - 1);
}}

}


{


const valueIteratorReference5 = runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex");
const iterableReference5 = runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices");
if(!iterableReference5.isPrimitive()) {
for(
    const iteratorKey5 in 
    iterableReference5.getType() === "structure"
      ? iterableReference5.getAllChildren()
      : iterableReference5.getType() === "array"
        ? iterableReference5.getAllChildrenArray()
        : []
) {
    const structureChildVariable5 = iterableReference5.getChild(iteratorKey5)
    valueIteratorReference5.castTo(structureChildVariable5.getType())
    if(structureChildVariable5.isPrimitive()) {
        valueIteratorReference5.setValue(structureChildVariable5.getValue());
    } else if (structureChildVariable5.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference5.replaceChildren(structureChildVariable5.getAllChildren());
    } else if (structureChildVariable5.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference5.replaceChildrenArray(structureChildVariable5.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects5);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects5[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex").getChild(1)));
}
}}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4[i].closePath();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].drawPathLineTo(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MaximumVertexCount"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(1)), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SideLength")));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"), runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"));
}{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount").add(1);
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) > 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(1)), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MergeProximity")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15313364);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), true);
}
{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount").setNumber(0);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopLastVertex"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("TruePolygon"), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("TruePolygon"), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
{let isConditionTrue_4 = false;
isConditionTrue_4 = false;
isConditionTrue_4 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_4) {
isConditionTrue_4 = false;
isConditionTrue_4 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) != 0;
}
isConditionTrue_3 = isConditionTrue_4;
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
{let isConditionTrue_4 = false;
isConditionTrue_4 = false;
isConditionTrue_4 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_4) {
isConditionTrue_4 = false;
isConditionTrue_4 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) == 0;
}
isConditionTrue_3 = isConditionTrue_4;
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].clear();
}
}{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3[i].beginFillPath(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices").getChild(0).getChild(1)));
}
}}

}


{


const valueIteratorReference4 = runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex");
const iterableReference4 = runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices");
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex").getChild(1)));
}
}}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].closePath();
}
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) < 3;
if (isConditionTrue_0) {
{gdjs.evtsExt__SelectionTools__ClearSelection.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}
{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount").setNumber(0);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CanDrawSelection"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MaximumVertexCount"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex").getChild(1)), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SideLength")));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"), runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex"));
}{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount").add(1);
}}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Rectangular";
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Polygonal";
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Lasso";
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ClearPainter"), true);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].clear();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ClearPainter"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Active"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SelectionTools::SelectionPainter", gdjs.evtsExt__SelectionTools__SelectionPainter.SelectionPainter);

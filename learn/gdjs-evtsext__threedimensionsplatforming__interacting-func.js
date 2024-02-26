
if (typeof gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting !== "undefined") {
  gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting = {};
gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1_1final = [];

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1= [];
gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2= [];


gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("KeyBoardKey") : ""));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("InteractButton"), gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2[k] = gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1_1final.indexOf(gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2[j]) === -1 )
            gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1_1final.push(gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1_1final, gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.func = function(runtimeScene, InteractButton, KeyBoardKey, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"InteractButton": InteractButton
},
  _objectArraysMap: {
"InteractButton": gdjs.objectsListsToArray(InteractButton)
},
  _behaviorNamesMap: {
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
if (argName === "KeyBoardKey") return KeyBoardKey;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects1.length = 0;
gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.GDInteractButtonObjects2.length = 0;

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__Interacting.registeredGdjsCallbacks = [];

if (typeof gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX !== "undefined") {
  gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX = {};


gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.userFunc0x132e150 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = gdjs._MousePointerLockExtension.movement.x || 0;
};
gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.userFunc0x132e150(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ThreeDimensionsPlatforming"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ThreeDimensionsPlatforming"),
  localVariables: [],
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__MouseMovementX.registeredGdjsCallbacks = [];
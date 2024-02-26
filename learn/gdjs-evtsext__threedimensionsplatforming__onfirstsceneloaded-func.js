
if (typeof gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded = {};


gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.userFunc0x10a0a08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();

gdjs._MousePointerLockExtension = {};
gdjs._MousePointerLockExtension.movement = { x: 0, y: 0 };

canvas.addEventListener("mousemove", (e) => {
    gdjs._MousePointerLockExtension.movement.x += e.movementX || 0;
    gdjs._MousePointerLockExtension.movement.y += e.movementY || 0;
}, false);
};
gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.userFunc0x10a0a08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__ThreeDimensionsPlatforming__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);

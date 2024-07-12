
if (typeof gdjs.evtsExt__Skybox__SetSkybox !== "undefined") {
  gdjs.evtsExt__Skybox__SetSkybox.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Skybox__SetSkybox = {};


gdjs.evtsExt__Skybox__SetSkybox.userFunc0xd0fce8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const ThreeRenderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!ThreeRenderer) {
    return;
}
if (!ThreeRenderer._Skybox) {
    ThreeRenderer._Skybox = {};
    ThreeRenderer._Skybox.render = ThreeRenderer.render;
    ThreeRenderer.render = (S, C) => {
        if (ThreeRenderer._Skybox.texture) {
            runtimeScene.getLayer("").getRenderer().getThreeScene().background = ThreeRenderer._Skybox.texture;
        }
        ThreeRenderer._Skybox.render.call(ThreeRenderer, S, C);
    };
}
if (ThreeRenderer._Skybox.texture) {
    ThreeRenderer._Skybox.texture.dispose();
}
//
const Front = eventsFunctionContext.getArgument("Front");
const Back = eventsFunctionContext.getArgument("Back");
const Left = eventsFunctionContext.getArgument("Left");
const Right = eventsFunctionContext.getArgument("Right");
const Top = eventsFunctionContext.getArgument("Top");
const Bottom = eventsFunctionContext.getArgument("Bottom");
const FrontResource = runtimeScene.getGame().getImageManager().getPIXITexture(Front).baseTexture.resource;
const BackResource = runtimeScene.getGame().getImageManager().getPIXITexture(Back).baseTexture.resource;
const LeftResource = runtimeScene.getGame().getImageManager().getPIXITexture(Left).baseTexture.resource;
const RightResource = runtimeScene.getGame().getImageManager().getPIXITexture(Right).baseTexture.resource;
const TopResource = runtimeScene.getGame().getImageManager().getPIXITexture(Top).baseTexture.resource;
const BottomResource = runtimeScene.getGame().getImageManager().getPIXITexture(Bottom).baseTexture.resource;
//
const CubeTexture = new THREE.CubeTexture([LeftResource.source, RightResource.source, FrontResource.source, BackResource.source, TopResource.source, BottomResource.source]);
CubeTexture.colorSpace = THREE.SRGBColorSpace;
CubeTexture.needsUpdate = true;//必須
ThreeRenderer._Skybox.texture = CubeTexture;


};
gdjs.evtsExt__Skybox__SetSkybox.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Skybox__SetSkybox.userFunc0xd0fce8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Skybox__SetSkybox.func = function(runtimeScene, Front, Back, Left, Right, Top, Bottom, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Skybox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Skybox"),
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
if (argName === "Front") return Front;
if (argName === "Back") return Back;
if (argName === "Left") return Left;
if (argName === "Right") return Right;
if (argName === "Top") return Top;
if (argName === "Bottom") return Bottom;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Skybox__SetSkybox.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Skybox__SetSkybox.registeredGdjsCallbacks = [];
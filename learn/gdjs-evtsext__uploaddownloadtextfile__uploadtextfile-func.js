
if (typeof gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile !== "undefined") {
  gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile = {};


gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.userFunc0x160b208 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const allowedFileTypes = [eventsFunctionContext.getArgument("allowedfiletype")];

const InputElement = document.createElement('input');
InputElement.type = "file";

InputElement.addEventListener("change", handleFiles, false);
InputElement.click();

const SceneVariable = eventsFunctionContext.getArgument("SceneVariable");
const Uploading = runtimeScene.getVariables().get("__UploadDownloadTextFile");

Uploading.fromJSObject({Uploading:false});

async function handleFiles() {
  const files = this.files;
  
  if (!files.length) {
    SceneVariable.setString("No Files Selected!");
  } else if(!allowedFileTypes.includes(files[0].type)) {
    SceneVariable.setString("Please choose text files only.");
  } else {
    SceneVariable.setString(await files[0].text());
  }

  Uploading.fromJSObject({Uploading:true});
  InputElement.remove();
}
};
gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.userFunc0x160b208(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.func = function(runtimeScene, SceneVariable, allowedfiletype, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("UploadDownloadTextFile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("UploadDownloadTextFile"),
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
if (argName === "SceneVariable") return SceneVariable;
if (argName === "allowedfiletype") return allowedfiletype;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.registeredGdjsCallbacks = [];
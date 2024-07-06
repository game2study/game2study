
if (typeof gdjs.evtsExt__DataURLCreator__FileToDataURL !== "undefined") {
  gdjs.evtsExt__DataURLCreator__FileToDataURL.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DataURLCreator__FileToDataURL = {};


gdjs.evtsExt__DataURLCreator__FileToDataURL.userFunc0xc5a7f0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Function to handle file selection
const handleFileSelection = function(event, resultVariable, progressVariable) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      console.log('Data URL generated:', dataUrl); // Optional: Log data URL for debugging
      // Set the data URL in the specified variable
      resultVariable.setString(dataUrl);
      progressVariable.setNumber(1);
    };
    reader.readAsDataURL(file);
  } else {
    console.error('Please select an image file.'); // Log error to console
  }
};

// Simulate a click to open the file picker
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '*/*'; // Adjust for desired file type
fileInput.style.display = 'none'; // Hide the element

fileInput.addEventListener('change', function(event) {
  // Call the handleFileSelection function and pass the result variable as an argument
  handleFileSelection(event, eventsFunctionContext.getArgument("ResultVariable"), eventsFunctionContext.getArgument("ProgressVariable"));
});
// Simulate a click to open the file picker
eventsFunctionContext.getArgument("ProgressVariable").setNumber(0);
fileInput.click();
// Remove the file input element after use (optional)
fileInput.remove();
};
gdjs.evtsExt__DataURLCreator__FileToDataURL.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__DataURLCreator__FileToDataURL.userFunc0xc5a7f0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DataURLCreator__FileToDataURL.func = function(runtimeScene, ResultVariable, ProgressVariable, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DataURLCreator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DataURLCreator"),
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
if (argName === "ResultVariable") return ResultVariable;
if (argName === "ProgressVariable") return ProgressVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DataURLCreator__FileToDataURL.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DataURLCreator__FileToDataURL.registeredGdjsCallbacks = [];
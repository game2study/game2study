
gdjs.evtsExt__DropDownMenu__DropdownObject = gdjs.evtsExt__DropDownMenu__DropdownObject || {};

/**
 * Object generated from Dropdown Menu
 */
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject = class DropdownObject extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Options = objectData.content.Options !== undefined ? objectData.content.Options : "[\"Option 1\", \"Option 2\"]";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Options !== newObjectData.content.Options)
      this._objectData.Options = newObjectData.content.Options;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getOptions() {
    return this._objectData.Options !== undefined ? this._objectData.Options : "[\"Option 1\", \"Option 2\"]";
  }
  _setOptions(newValue) {
    this._objectData.Options = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext = {};
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.userFunc0x229a748 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const dropdownObject = document.createElement("select");
document.body.appendChild(dropdownObject);
dropdownObject.className = "__dropdownMenuExtension_Objects"

dropdownObject.style = "display:block;position:absolute;left: 35px;top: 35px;height:10%;width:20%;";
};
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.userFunc0x229a748(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DropDownMenu"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DropDownMenu"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setNumber((( gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1[0].getX()));
}{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setNumber((( gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1[0].getY()));
}}

}


};

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DropDownMenu"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DropDownMenu"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("DropDownMenu::DropdownObject", gdjs.evtsExt__DropDownMenu__DropdownObject.DropdownObject);

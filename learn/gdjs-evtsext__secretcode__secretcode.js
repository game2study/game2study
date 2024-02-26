
gdjs.evtsExt__SecretCode__SecretCode = gdjs.evtsExt__SecretCode__SecretCode || {};

/**
 * Behavior generated from Secret Code
 */
gdjs.evtsExt__SecretCode__SecretCode.SecretCode = class SecretCode extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Code = behaviorData.Code !== undefined ? behaviorData.Code : "Up Up Down Down Left Right Left Right b a";
    this._behaviorData.Count = Number("0") || 0;
    this._behaviorData.CodeEntered = false;
    this._behaviorData.AcceptingCode = true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Code !== newBehaviorData.Code)
      this._behaviorData.Code = newBehaviorData.Code;
    if (oldBehaviorData.Count !== newBehaviorData.Count)
      this._behaviorData.Count = newBehaviorData.Count;
    if (oldBehaviorData.CodeEntered !== newBehaviorData.CodeEntered)
      this._behaviorData.CodeEntered = newBehaviorData.CodeEntered;
    if (oldBehaviorData.AcceptingCode !== newBehaviorData.AcceptingCode)
      this._behaviorData.AcceptingCode = newBehaviorData.AcceptingCode;

    return true;
  }

  // Properties:
  
  _getCode() {
    return this._behaviorData.Code !== undefined ? this._behaviorData.Code : "Up Up Down Down Left Right Left Right b a";
  }
  _setCode(newValue) {
    this._behaviorData.Code = newValue;
  }
  _getCount() {
    return this._behaviorData.Count !== undefined ? this._behaviorData.Count : Number("0") || 0;
  }
  _setCount(newValue) {
    this._behaviorData.Count = newValue;
  }
  _getCodeEntered() {
    return this._behaviorData.CodeEntered !== undefined ? this._behaviorData.CodeEntered : false;
  }
  _setCodeEntered(newValue) {
    this._behaviorData.CodeEntered = newValue;
  }
  _toggleCodeEntered() {
    this._setCodeEntered(!this._getCodeEntered());
  }
  _getAcceptingCode() {
    return this._behaviorData.AcceptingCode !== undefined ? this._behaviorData.AcceptingCode : true;
  }
  _setAcceptingCode(newValue) {
    this._behaviorData.AcceptingCode = newValue;
  }
  _toggleAcceptingCode() {
    this._setAcceptingCode(!this._getAcceptingCode());
  }
}

/**
 * Shared data generated from Secret Code
 */
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.SharedData = class SecretCodeSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SecretCode_SecretCodeSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SecretCode_SecretCodeSharedData = new gdjs.evtsExt__SecretCode__SecretCode.SecretCode.SharedData(
      initialData
    );
  }
  return instanceContainer._SecretCode_SecretCodeSharedData;
}

// Methods:
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595SecretCode_9595_9595SecretCode_9546SecretCode_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1});
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCode() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1 */
{gdjs.evtsExt__SecretCode__StringToStringListObjectVar.func(runtimeScene, (( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCode()), " ", "CodeSequence", gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595SecretCode_9595_9595SecretCode_9546SecretCode_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2[0].getVariables()).get("CodeSequence").getChild((( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCount()))))));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCount(0);
}
}}

}


{

/* Reuse gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[0].getVariables()).get("CodeSequence").getChild((( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCount())))));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCount(gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCount() + (1));
}
}}

}


};gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCount()) == (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[0].getVariables()).get("CodeSequence"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19039084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCodeEntered(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCodeEntered()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceptingCode() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCodeEntered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1[k] = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEntered = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.CodeEnteredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCodeEntered(false);
}
}{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCount(0);
}
}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEntered = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ResetCodeEnteredContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceptingCode() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1[k] = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.IsAcceptingCodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Accepting") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceptingCode(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Accepting") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceptingCode(false);
}
}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCode = function(Accepting, parentEventsFunctionContext) {

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
if (argName === "Accepting") return Accepting;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.AcceptCodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext = {};
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects1= [];
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects2= [];


gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.mapOfGDgdjs_9546evtsExt_9595_9595SecretCode_9595_9595SecretCode_9546SecretCode_9546prototype_9546ChangeCodeContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects1});
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Code") : "") != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects1);
{gdjs.evtsExt__SecretCode__StringToStringListObjectVar.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Code") : ""), " ", "CodeSequence", gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.mapOfGDgdjs_9546evtsExt_9595_9595SecretCode_9595_9595SecretCode_9546SecretCode_9546prototype_9546ChangeCodeContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCode = function(Code, parentEventsFunctionContext) {

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
if (argName === "Code") return Code;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SecretCode__SecretCode.SecretCode.prototype.ChangeCodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SecretCode::SecretCode", gdjs.evtsExt__SecretCode__SecretCode.SecretCode);

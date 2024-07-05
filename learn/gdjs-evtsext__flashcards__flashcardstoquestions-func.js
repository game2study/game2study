
if (typeof gdjs.evtsExt__Flashcards__flashcardsToQuestions !== "undefined") {
  gdjs.evtsExt__Flashcards__flashcardsToQuestions.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Flashcards__flashcardsToQuestions = {};


gdjs.evtsExt__Flashcards__flashcardsToQuestions.userFunc0x24da9a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.myExtension = {};
// Get parameters from the events function context
const flashcards = eventsFunctionContext.getArgument("flashcards");
const reverse = false;

// Split flashcards into terms and definitions
const flashcardEntries = flashcards.split('\n');
const termsAndDefinitions = flashcardEntries.map(card => card.split('\t'));

// Initialize an array to store the transformed questions
const questions = [];

// Iterate over each term and definition pair
termsAndDefinitions.forEach(([term, correctAnswer]) => {
    // Randomly select a slot for the correct answer
    const correctSlot = Math.floor(Math.random() * 4) + 1;

    // Initialize an array to store answer choices
    const answerChoices = [];

    // Push correct answer to the correct slot
    if (reverse) {
        answerChoices[correctSlot - 1] = term.trim();
    } else {
        answerChoices[correctSlot - 1] = correctAnswer.trim();
    }

    // Fill the rest of the slots with random terms or definitions
    for (let i = 0; i < 4; i++) {
        if (i + 1 !== correctSlot) {
            let randomIndex = Math.floor(Math.random() * termsAndDefinitions.length);
            // Ensure the random term/definition is not the correct one
            while (termsAndDefinitions[randomIndex][1] === correctAnswer) {
                randomIndex = Math.floor(Math.random() * termsAndDefinitions.length);
            }
            if (reverse) {
                answerChoices[i] = termsAndDefinitions[randomIndex][0].trim();
            } else {
                answerChoices[i] = termsAndDefinitions[randomIndex][1].trim();
            }
        }
    }

    // Create the question object
    const question = {
        a1: answerChoices[0],
        a2: answerChoices[1],
        a3: answerChoices[2],
        a4: answerChoices[3],
        ansamount: 4,
        correctans: correctSlot,
        name: reverse ? correctAnswer.trim() : term.trim()
    };

    // Push the question object to the array
    questions.push(question);
});

// Return the questions array
eventsFunctionContext.returnValue = JSON.stringify(questions)

};
gdjs.evtsExt__Flashcards__flashcardsToQuestions.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Flashcards__flashcardsToQuestions.userFunc0x24da9a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Flashcards__flashcardsToQuestions.func = function(runtimeScene, flashcards, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flashcards"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flashcards"),
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
if (argName === "flashcards") return flashcards;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Flashcards__flashcardsToQuestions.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Flashcards__flashcardsToQuestions.registeredGdjsCallbacks = [];
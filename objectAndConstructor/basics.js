const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff
    }
};

// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'

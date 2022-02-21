let parentObject = {parentValue: 'parentVal'};
let childObject = Object.create(parentObject);

// Parent field added
console.log('01:', childObject.parentValue);

// Child field added
childObject.childValue = 'childVal';
console.log('02:', childObject.parentValue, childObject.childValue);

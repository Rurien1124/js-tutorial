let parentObject = {parentValue: 'parentVal'};
let childObject = {childValue: 'childVal'};

console.log('01:', childObject.parentValue);

// Parent field added
childObject.__proto__ = parentObject;
console.log('02:', childObject.parentValue);

// Parent field not modified
childObject.superValue = 'modifiedParentVal';
console.log('03:', childObject.parentValue);
function areSameObject(obj1, obj2) {
  return obj1 === obj2;
}

function haveSamePropertiesNumber(obj1, obj2) {
  var obj1Keys = Object.keys(obj1).sort();
  var obj2Keys = Object.keys(obj2).sort();

  return obj1Keys.length === obj2Keys.length;
}

function haveSameKeys(obj1, obj2) {
  var obj1Keys = Object.keys(obj1).sort();
  var obj2Keys = Object.keys(obj2).sort();

  return obj1Keys.every(function (key, index) {
    return key === obj2Keys[index];
  });
}

function haveSameValues(obj1, obj2) {
  var obj1Keys = Object.keys(obj1).sort();
  var obj2Keys = Object.keys(obj2).sort();

  return obj1Keys.every(function (key) {
    return objectsEqual(obj1[key], obj2[key]);
  });
}

function objectsEqual(obj1, obj2) {
  if (areSameObject(obj1, obj2)) {
    return true;
  }

  return haveSamePropertiesNumber(obj1, obj2) && haveSameKeys(obj1, obj2) && haveSameValues(obj1, obj2);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})); // false

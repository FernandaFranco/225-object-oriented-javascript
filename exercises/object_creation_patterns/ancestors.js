// name property added to make objects easier to identify
var foo = {name: 'foo'};
Object.prototype.ancestors = function() {
  var protoObj = Object.getPrototypeOf(this);
  if (this !== Object.prototype) {
    return [protoObj].concat(protoObj.ancestors());
  } else {
    return [];
  }
}
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns [baz, bar, foo, Object.prototype]
console.log(baz.ancestors());  // returns [bar, foo, Object.prototype]
console.log(bar.ancestors());  // returns [foo, Object.prototype]
console.log(foo.ancestors());  // returns [Object.prototype]

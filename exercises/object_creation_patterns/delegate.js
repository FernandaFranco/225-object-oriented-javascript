function delegate(object, methodName) {
  var args = [].slice.call(arguments, 2);
  return function() {
    return object[methodName].apply(object, args);
  }
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
}

baz.qux('heyp');   // logs 'hello test';

foo.bar = function() { console.log('changed'); }

baz.qux();          // logs 'changed'

function makeListTransformer(func) {
  return function(list) {
    return list.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]

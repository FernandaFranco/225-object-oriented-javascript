function newPerson(name) {
  var person = {
    name: name,
  };

  return Object.defineProperties(person, {
    log: {
      value: function() {
        console.log(person.name);
      },
      writable: false,
    },
  });
}

var me = newPerson('Shane Riley');
me.log();     // Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // Shane Riley

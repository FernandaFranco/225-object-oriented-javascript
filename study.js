function createGreeter(name) {
  var morning = 'Good Morning';
  var afternoon = 'Good Afternoon';
  var evening = 'Good Evening';
  return {
    greet: function(timeOfDay) {
      var msg = ''
      switch (timeOfDay) {
        case 'morning':
          msg += morning + ' ' + name;
          break;
        case 'afternoon':
          msg += afternoon + ' ' + name;
          break;
        case 'evening':
          msg += evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

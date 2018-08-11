function makeList() {
  var items = [];

  return {
    add: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {console.log(item)});
      }
    },
    remove: function(item) {
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
  };
}

var list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
list.remove('corn');
list.list();
list.remove('corn');

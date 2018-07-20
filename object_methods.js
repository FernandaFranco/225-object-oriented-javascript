var fernanda = {
  firstName: 'Fernanda',
  lastName: 'Franco',
};

var lucas = {};
lucas.firstName = 'Lucas';
lucas.lastName = 'Alves';
lucas.appearence = 'LINDAO!!!!1111'

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

// fullName(fernanda);
// fullName(lucas);

// var people = [];
// people.push(fernanda);
// people.push(lucas);

// console.log(people);

// function rollCall(collection) {
//   var i;

//   for (i = 0; i < collection.length; i += 1) {
//     fullName(collection[i]);
//   }
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

var people = {
  collection: [fernanda, lucas],
  // personId: people.collection.length,
  nextId: function() {
    return this.collection.length;
  },
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.id = this.nextId();

    this.collection.push(person);
  },
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
      comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },
  remove: function(person) {
    var index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);

    console.log(index);
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },
  update : function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();

people.add({firstName: 'Flavia', lastName: 'Calina'});

people.rollCall();

console.log(people.get({firstName: 'Flavia', lastName: 'Calina'}));


var otavia = {firstName: 'Otavia', lastName: 'Molina'};

people.add(otavia);

people.rollCall();

console.log(people.getIndex(otavia));
people.remove(otavia);
console.log(people.getIndex(otavia));
people.remove({firstName: 'Otavia', lastName: 'Molina'});
people.remove({firstName: 'Otavia', lastName: 'Calina'});
people.remove({firstName: 11, lastName: 'Calina'});

people.add({firstName: 11, lastName: 'Calina'});
people.rollCall();


people.update({firstName: 'Flavia', lastName: 'Calina', occupation: 'Youtuber'})
people.rollCall();

console.log(people.get({firstName: 'Lucas', lastName: 'Alves'}));


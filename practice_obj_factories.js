function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    visitCountry: function() {
      this.visited = true;
    },
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '. ' +
             'I have' + (this.visited ? '' : 'n\'t') + ' visited ' + this.name + '.';
    },
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');
var brazil = makeCountry('The Federative Republic of Brazil', 'South America', true);

console.log(chile.getDescription());
console.log(canada.getDescription());
console.log(southAfrica.getDescription());
console.log(brazil.getDescription());
console.log(brazil.visited);
console.log(chile.visited);
canada.visitCountry();
console.log(canada.visited);
console.log(canada.getDescription());
console.log(chile.getDescription());


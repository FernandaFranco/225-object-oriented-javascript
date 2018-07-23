function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    describe: function() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
    setPrice: function(newPrice) {
      if (newPrice < 0) {
        alert('Invalid price!');
      } else {
        this.price = newPrice;
      }
    },
  };
}

var scissors = createProduct(0, 'Scissors', 8, 10);
scissors.describe();

var drill = createProduct(1, 'Cordless Drill', 15, 45);
drill.describe();

var wrench = createProduct(2, 'Wrench', 10, 10);
wrench.describe();

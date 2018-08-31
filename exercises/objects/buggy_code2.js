var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
};

function discountItem(item, percent) {
  var discount = item.price * percent / 100;
  var price = item.price - discount;

  return price;
}

console.log(discountItem(item, 20));
console.log(discountItem(item, 50));
console.log(discountItem(item, 25));

function Item(itemName, category, quantity) {
  this.itemName = itemName;
  this.category = category;
  this.quantity = quantity;
  this.skuCode = this.itemName.replace(' ', '').slice(0, 3) + this.category.slice(0, 2);
}

var itemManager = {
  items: [],
  create: function(itemName, category, quantity) {
    var newItem = Item(itemName, category, quantity);
    items.push(newItem);
    return newItem;
  },
  update: function(skuCode, updatedInfo) {
    var i;

    for (i = 0; i < items.length; i += 1) {
      if (items[i].skuCode === skucode) {
        items[i];
      }
    }
  },
  delete: function(skuCode) {
    var i;

    for (i = 0; i < items.length; i += 1) {
      if (items[i].skuCode === skucode) {
        items.splice(i, 1);
      }
    }
  },
}

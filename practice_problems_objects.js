function p(message) {
  console.log(message);
}

var invoices = {
  unpaid: [],
};

invoices.add = function(clientName, amountOwed) {
  var newInput = {
    name: clientName,
    amount: amountOwed,
  }

  this.unpaid.push(newInput);
}

p(invoices);
// invoices.add('Hardware store', 5612);
p(invoices);

invoices.totalDue = function() {
  return this.unpaid.reduce(function(total, unpaidInvoice) {
    return total + unpaidInvoice.amount;
  }, 0);
}

p(invoices.totalDue());

// invoices.add('Starbucks', 300);

p(invoices.totalDue());

invoices.add('Due North Development', 250)
invoices.add('Moonbeam Interactive', 187.50)
invoices.add('Slough Digital', 300)
p(invoices.totalDue());

invoices.paid = [];
p(invoices);

invoices.payInvoice = function(clientName) {
  var newUnpaid = [];
  var i;

  for (i = 0; i < this.unpaid.length; i += 1) {
    if (this.unpaid[i].name === clientName) {
      this.paid.push(this.unpaid[i]);
    } else {
      newUnpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = newUnpaid;
}

invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
p(invoices);

invoices.totalPaid = function() {
  return this.paid.reduce(function(total, paidInvoice) {
    return total + paidInvoice.amount;
  }, 0);
}

p(invoices.totalPaid());
p(invoices.totalDue());



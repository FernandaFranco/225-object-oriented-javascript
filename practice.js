function createPayment(services) {
  var services = services || {};
  var payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // 24000

function createInvoice(services) {
  var invoice = services || {};
  if (!invoice.phone) {
    invoice.phone = 3000;
  }
  if (!invoice.internet) {
    invoice.internet = 5500;
  }

  invoice.total = function() {
    return this.phone + this.internet;
  };

  invoice.payments = [];
  invoice.addPayment = function(payment) {
    invoice.payments.push(payment);
  };

  invoice.addPayments = function(payments) {
    var self = this;
    payments.forEach(function(payment) {
      self.addPayment(payment);
    });
  };

  invoice.paymentTotal = function() {
    var totalPaid = 0;
    this.payments.forEach(function (payment) {
      totalPaid += payment.total();
    });

    return totalPaid;
  };

  invoice.amountDue = function() {
    return this.total() - this.paymentTotal();
  };

  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // 31000

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0

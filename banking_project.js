function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];
    return {
      number: function() {
        return number;
      },
      balance: function() {
        return balance;
      },
      transactions: function() {
        return transactions;
      },
      deposit: function(value) {
        balance += value;
        transactions.push({type: 'deposit', amount: value});
        return value;
      },
      withdraw: function(value) {
        if (balance < value) {
          value = balance;
        }

        balance -= value;
        transactions.push({type: 'withdraw', amount: value});
        return value;
      },
    };
  }

  return {
    openAccount: function() {
      var number = 101 + accounts.length;
      var newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(accountFrom, accountTo, value) {
      accountFrom.withdraw(value);
      accountTo.deposit(value);
      return value;
    }
  };
}

var bank = makeBank();
var account = bank.openAccount();
console.log(account.balance());
console.log(account.deposit(17));
var secondAccount = bank.openAccount();
console.log(secondAccount.number());
console.log(account.transactions());

console.log(bank.accounts);

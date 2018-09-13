var Account = (function() {
  var data = {};

  function isValidPassword(testPassword, password) {
    return testPassword === password;
  }

  function getRandomLetterNumber() {
    var randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function anonymize() {
    var result = '';
    var i;

    for (i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }


  return {
    init: function(email, password, firstName, lastName) {
      this.displayName = anonymize();
      data[this.displayName] = {
        userEmail: email,
        userPassword: password,
        userFirstName: firstName,
        userLastName: lastName,
      }

      return this;
    },
      reanonymize: function(currentPassword) {
        if (isValidPassword(currentPassword, data[this.displayName].userPassword)) {
          var oldDisplayName = this.displayName;
          this.displayName = anonymize();
          // data[this.displayName] = Object.assign({}, data[oldDisplayName]);
          data[this.displayName] = data[oldDisplayName];
          delete data[oldDisplayName];
          return true;
        } else {
          return 'Invalid Password';
        }
      },

      resetPassword: function(currentPassword, newPassword) {
        if (isValidPassword(currentPassword, data[this.displayName].userPassword)) {
          data[this.displayName].userPassword = newPassword;
          return true;
        } else {
          return 'Invalid Password';
        }
      },

      firstName: function(currentPassword) {
        if (isValidPassword(currentPassword, data[this.displayName].userPassword)) {
          return data[this.displayName].userFirstName;
        } else {
          return 'Invalid Password';
        }
      },

      lastName: function(currentPassword) {
        if (isValidPassword(currentPassword, data[this.displayName].userPassword)) {
          return data[this.displayName].userLastName;
        } else {
          return 'Invalid Password';
        }
      },

      email: function(currentPassword) {
        if (isValidPassword(currentPassword, data[this.displayName].userPassword)) {
          return data[this.displayName].userEmail;
        } else {
          return 'Invalid Password';
        }
      },
  };
})();

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux);
console.log(bazQux.reanonymize('123456'));
console.log(bazQux);
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log 'Invalid password'.
console.log(bazQux.firstName('123456'));           // logs 'baz'
console.log(fooBar.firstName('abc'));              // logs 'foo'
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'Invalid password'
console.log(bazQux.email('123456'));               // 'baz@qux.com'
console.log(fooBar.email('abc'));                  // 'foo@bar.com'

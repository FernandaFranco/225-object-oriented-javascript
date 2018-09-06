var Account = (function() {
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
      var userEmail = email;
      var userPassword = password;
      var userFirstName = firstName;
      var userLastName = lastName;
      this.displayName = anonymize();

      this.reanonymize = function(currentPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          this.displayName = anonymize();
          return true;
        } else {
          return 'Invalid Password';
        }
      };

      this.resetPassword = function(currentPassword, newPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          userPassword = newPassword;
          return true;
        } else {
          return 'Invalid Password';
        }
      };

      this.firstName = function(currentPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          return userFirstName;
        } else {
          return 'Invalid Password';
        }
      };

      this.lastName = function(currentPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          return userLastName;
        } else {
          return 'Invalid Password';
        }
      };

      this.email = function(currentPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          return userEmail;
        } else {
          return 'Invalid Password';
        }
      };

      return this;
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
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log 'Invalid password'.
console.log(bazQux.firstName('123456'));           // logs 'baz'
console.log(fooBar.firstName('abc'));              // logs 'foo'
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'Invalid password'
console.log(bazQux.email('123456'));               // 'baz@qux.com'
console.log(fooBar.email('abc'));                  // 'foo@bar.com'

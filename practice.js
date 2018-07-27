var foo = {
  a: 0,
  incrementA: function() {
    var increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

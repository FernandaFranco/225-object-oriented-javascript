Methods vs Functions

- Object methods are properties that happen to have a Function value
- Object methods can be invoked using a function invocation:

```javascript
var greeter = {
  morning: function() {
    console.log('Good morning!');
  },
};

// Method invocation: executing a method
greeter.morning(); // logs 'Good morning!'

// Create a variable which points at the greeter.morning method
var functionGreeter = greeter.morning; // returns [Function: morning]

// Function invocation: executing a function
functionGreeter();  // logs 'Good morning!'
```

Function context

- Every function has a context assigned at execution time. JavaScript assigns the context automatically when a function call uses the () syntax (we'll see other ways to call functions and specify the context)

- Global Window context

- Parent object context

- The context of a function/method is it's immediate parent? No reference to the 'grandparent' with 'this'?

- only methods (properties whose values are functions) have access to 'this'?

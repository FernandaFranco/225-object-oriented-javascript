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

Mutating Objects

- Functions can alter the content of Objects passed in as arguments: side effect. Any other code that references that Object sees those same changes.

- A Function can't change the value of a variable that it received as an argument. But it can mutate the original object the variable references, if it is a mutable object.

Stack vs Heap

- When a primitive value is assigned to a variable, the variable stores the value (stack);
- But when an object is assigned to a variable, the variable stores a pointer (stack) to the object (heap);


Functions as Object Factories

A straightforward way to create objects using functions, a so-called object factory.

OOP with JS

The object-oriented approach to programming puts data and procedures that manipulate that data into containers or objects. Maintenance is easier when we can limit the scope of changes.

Object-based code is much easier to understand; the relationship between it and the data is readily evident.

The Global Object

- Undeclared global variables can be deleted, but not declared global variables. Also, global variables added explicitly to the global object as properties can be deleted just like undeclared variables.

Execution Context

- this is the current execution context of a function.

- Which object 'this' refers to depends on how the function was invoked.

- Functions are initially unbound, but dynamically bound to a context object at execution time.

 - Binding a function to a context object occurs when you execute the function, not when you define it.

 Internal Function Losing Method Context

 Tricky. Needs to be reviewed: https://launchschool.com/lessons/c9200ad2/assignments/022f50f4

 - The execution context for any method invoked without an explicit context provided is the owning object.

 Higher Order Functions

 - A higher-order function is one where either an input or output value is a function.

 Closure and Objects

 - Making data private can make it harder to extend the code.

- JavaScript is a garbage-collected language, which means that the JS runtime, rather than the developer, handles memory deallocation.

- Values referenced by global variables: Only after the script finishes running the value will be eligible for garbage collection.

Partial function application

- Closures lets us define private data that persists for the function's lifetime. This technique is useful when we need to package both data and functionality together.

Immediately Invoked Function Expressions

- The IIFE pattern provides a way to create a "module" of sorts.



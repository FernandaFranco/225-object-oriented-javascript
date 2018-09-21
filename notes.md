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

- The context of a function/method is it's immediate parent? No reference to the 'grandparent' with 'this'? YEP

- only methods (properties whose values are functions) have access to 'this'? YES

Mutating Objects

- Functions can alter the content of Objects passed in as arguments: side effect. Any other code that references that Object sees those same changes.

- A Function can't change the value of a variable that it received as an argument. But it can mutate the original object the variable references, if it is a mutable value like object.

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

Prototypal Inheritance /  Behavior Delegation

-  A term better suited than prototypal inheritance to JavaScript is prototypal delegation. When a new object is created from another object in JavaScript, it links back to the parent object’s prototype properties and methods as opposed to copying them.

- In a true object oriented (as opposed to "class oriented") way, objects can be created directly from other objects and behaviors (methods) can be shared via the prototype chain.

- The approach of defining shared behaviors on the constructor's .prototype property is called the "Prototype Pattern" of object creation.

Prototype Chain

- I don't 100% get it: https://launchschool.com/lessons/24a4613a/assignments/5de6e5a0

- Those problems are not trivial! I don't feel very confident moving on before fully grokking it: https://launchschool.com/lessons/24a4613a/assignments/cbb1afa7

The Factory Pattern

- JavaScript’s Factory Pattern employs a factory function to create new objects. It was conceived as a DRY means to abstract the process of creating objects. However, there are couple problems with it:

- Efficiency — Methods created on the factory function are copied to all new object instances. This is inefficient.
- Type Determination — Because the factory function returns a new object, it makes type determination of object instances difficult. New object instances are typed as “Object”, with no indication of the instances’ context.

The type determination problem led to the creation of the Constructor Pattern.

The Constructor Pattern

- The main problem with the Constructor Pattern is, as in the Factory Pattern, inefficiency. In the Constructor Pattern, methods are [still] copied to all new object instances. This problem led to the creation of the Combination Constructor/Prototype Pattern.

The Pseudo-classical Pattern: Combination Constructor/Prototype Pattern

- The Pseudo-classical pattern is a combination of the constructor pattern and the prototype pattern. With this pattern, we use a constructor to set object states, and put shared methods on the constructor function's prototype.

- It allows for unique (non-shared) instance properties to be created within a constructor function, as well as shared properties and methods on the constructor function’s prototype.

- If you wish to assign a new object to a prototype and maintain the constructor relationship, you will need to recreate the constructor property and assign it the proper value. Stick with the dot notation — to augment the default prototype object on a constructor function, rather than replacing it with a new object literal.

- Use Function.prototype.call to have the subclass "inherit" properties from the parent class.
- Use Function.prototype = Object.create(obj) to "inherit" methods from the parent class.
- Use Function.prototype.constructor to manually reset the property to point back to the appropriate constructor.

The OLOO Pattern

- OLOO which stands for "Object Linking to Other Objects," is first popularized by Kyle Simpson. JavaScript sheds its pretense as a "class oriented" language, where it uses constructor functions as fake classes. Instead, it embraces its prototype based object model. With the OLOO pattern, we define the shared behaviors on a prototype object, then use Object.create() to create objects that inherit directly from that object, without going through the roundabout way that involves "constructors and their prototype properties."

- It’s important to note that in OLOO there are no constructors. While the first letter of the Car object is still capitalized, it is done so only to remain consistent with the accepted convention.

- OLOO allows/forces you to create and initialize your objects at separate times, rather than bundling both object creation and initialization together.

- Because there is no constructor in the OLOO Pattern, calling johnCar instanceof Car will throw an error. Also, calling johnCar.constructor will delegate up the prototype chain to Object.prototype.constructor and return the native method. You can test the Car object’s relationship to johnCar with Car.isPrototypeOf(johnCar), which returns true.


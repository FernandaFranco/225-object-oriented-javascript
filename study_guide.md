* Objects

  * Organizing code into appropriate objects

    Object is a useful organization tool. Related data and behavior are grouped together. OOP is a pattern that uses objects as the basic building blocks of a program instead of local variables and functions.
    Prototype of an object: should collect behavior that is shared.

  * Object factories

    Advantage of a object factory: Ability of moving two or more object similarities to one location while setting the differences when we define individual objects.

    2 problems with object factories:
      * Each object created by a object factory will have its own copy of every property, which isn't very DRY. We want objs to have its own copy of data, but the shared behavior represented by methods could be in their prototype, for example;
      * No way of knowing if the object created came from a factory function. Object's "type" will be Object?

* Determining/setting function execution context (this)

  * What is `this`?

    `this` is a keyword that gives us access to an object called the execution context of a function invocation. It is the current execution context of a JavaScript function at any given point in the program. The context associated with the `this` keyword depends on how the function is defined (is it the return value of a bind invocation?) and invoked (method or function? , parenthesis invocation, call or apply?). Although variable scope is determined at the time of writing the code, `this` gets bound based on how a function is invoked.

    Note that first-class Functions initially have no context; they receive one when the program executes them. A function default execution context (where no other context rules applies) is the Global Object.

    Also, we won't know the context of a function until execution time! Don't assume the context of a function/method definition until it's invoked!

  * Implicit function execution context

    Implicit binding for functions is the context for a function that you invoke without supplying an explicit context. JavaScript binds such functions to the global object. Remember that running `foo()` is like running `window.foo()`; the function's execution context is the global object, `window`.

    In the case of methods, JavaScript implicitly binds methods invoked in this manner to the owning or calling object.

  * Explicit function execution context

    * Call, apply.
    * `var args = [].slice.call(arguments);`

  * Dealing with context loss

    * `self` or `that`;
    * `call` and `apply`;
    * `bind` the function expression (not declaration!!!) to a permanent context;
    * Sometimes there are more than 1 one of fixing context loss;
    * Consider passing the context lost as a additional `thisArg` or `context` argument, then using call, apply or bind.
    * Remember that functions as arguments, as well as inner functions,  lose the surrounding context;

* Scope and Closures

  * What is a closure?

    Definition: closure is the ability of a function to retain access to all the variables visible (in scope) to them upon declaration. It is created when a function is declared, and allow the function to retain access to all of the variables visible to it inside of the scope where it was declared.

    Another definition: Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

    Closures have a lot of similarities to objects. They both provide the means to organize code into data and a chunk of behavior that relies on that data.

  * What is scope?

    Definition: A variable's scope is the part of the program that can access the variable by name.

    There's Global Scope, there's function scope.

    The function lexical scoping rules are:
    * Functions can access any variables defined within it.
    * Functions can access any variables that were in scope based on the context where the function was defined.

  * Creating and using private data

    Using closures to restrict data access is a good way to force other developers to use the intended interface. By keeping the collection of items private, we enforce access via the provided methods. These benefits have a cost. For instance, making data private can make it harder to extend the code.

  * Garbage Collecting

    A variable that is function scoped has its reference to a value broken after the function execution, unless a closure exists. Global variables are not collected until the program finishes executing.

  * Partial Functions

    We've been using bind to set an explicit execution context. However, we can also use it to make a function with pre-specified initial arguments (use `null` as the context when not needed).

  * IIFEs

    We can omit the parentheses around an IIFE when the function definition is an expression that doesn't occur at the beginning of a line.

    A named function expression (not function declaration when it's not at the beginning of a line) can be immediately invoked, although the function name will be isolated from the outer scope.

* Object creation patterns

  * Constructor functions

    Don't forget to use `new`!

  * Methods/Expressions to remember:

    ```javascript
    Object.getPrototypeOf(obj)
    obj.isPrototypeOf(foo)
    var bar = Object.create(foo)
    bar.hasOwnProperty('a')
    Object.getOwnPropertyNames(bar)
    obj instanceof Obj
    Object.defineProperties // add a property to an object that can't be modified when writable: false
    Object.freeze
    ```

    ```javascript
    Object.getPrototypeOf([]) === Array.prototype;    // true

    function NewArray() {}
    NewArray.prototype = Object.create(Object.getPrototypeOf([]));
    ```
  * Prototype objects

    If you don't create an object from a prototype, its prototype is the Object.prototype object.

    `Object.Prototype.isPrototypeOf(foo)` can return true for more than 1 prototype (prototype chain);

  * Behavior delegation (Prototypal Inheritance)

     JavaScript doesn't have true classes, but in a true object oriented (as opposed to "class oriented") way, objects can be created directly from other objects and behaviors (methods) can be shared via the prototype chain.

     If you chain prototypes using `Child.prototype = Object.create(Parent.prototype)`, we are able to only share behavior, as opposed to `Child.prototype = new Parent(arg)` where Child objects would have access to properties defined in the Parent constructor function.

  * OLOO and Pseudo-Classical patterns

    * Pseudo-Classical pattern

      * use new to create objects
      * use instanceof to check type
      * instanceof will also return true for constructors higher in the prototype chain, not just the constructor function used to create the object.
      * Inheritance:
      ```javascript
      function Teacher(first, last, age, gender, interests, subject) {
        Person.call(this, first, last, age, gender, interests);

        this.subject = subject;
      }

      Teacher.prototype = Object.create(Person.prototype);
      Teacher.prototype.constructor = Teacher;
      ```

    * Extend and delegate with Mixin: manually delegate methods to a mixin object, simulating having extra prototypes?

    * OLOO

      * init method to set states
      * use isPrototypeOf to check type
      * Inheritance:
      ```javascript
      var Teacher = Object.create(Person);
      Teacher.init = function(first, last, age, gender, interests, subject) {
        Person.init.call(this, first, last, age, gender, interests);

        this.subject = subject;

        return this;
      };

      var mrsJohnson = Object.create(Teacher).init('Linda', 'Johnson', 87, female, 'Knitting', 'English');
      ```


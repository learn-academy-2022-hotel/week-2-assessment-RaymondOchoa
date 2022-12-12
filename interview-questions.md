# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter refers to the part of the code that gives the array or function the source of information to pull from in order to complete a function. An argument is information presented in the code, in between parenthesis after the method.

Researched answer: Function parameters are the names listen in the function's definition. The most common kind of parameters are called input parameters. These behave more like a placeholder for a value or values in a mapping. There are also output parameters that primarily return multiple values from a function. An argument is a value (can be primitive or object) passed as an input to a function. A good way to visualize the difference is if you have (x, y) { return x + y } these would be the parameters whereas the arguments would look like add (2, 3) these would be the actual values entered.
2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The three predefined parameters that the built in method .map() takes in are the value, index, and array. The value parameter is the only one that is required, the index and array are both optional.

Researched answer: The .map() method is a built in method that iterates through an array and returns a new array of the same length. To utilize this built in method it is required to include the value of the array at the current iteration. While naming these parameters it is important to remember that the names are arbitruary but the order must stay the same. This high order function can take 2-3 arguments if needed, those being the index and the array the function is calling on.

3. What is the difference between map and filter?

Your answer: The built in method .filter() is ran and it returns an array with the values that are passable through the function. The difference with .map() is that it takes whatever action is in place and applies it to each individual value in the array. 

Researched answer: The difference between map and filter is that .map() will do something to each item in an array and return an array of the same length while .filter() will more so make a decision about each item in an array and return a subset based on the criteria given. For example you can use the .map() to return all the numbers in a given array as a new array with the numbers being multipled by 2. .filter() can be used when you need to return an array containing only even numbers. 

4. What is iteration?

Your answer: Iteration is the process of executing a code over and over until a condition is met. 

Researched answer:  Iteration is explained as the process of performing a particular action a certain number of times or until a condition is met. A common form of iteration is called a for loop. These loops define a variable and increments/decrements the variable on each iteration.

5. What is the difference between a class and an object?

Your answer: An Object is a data type that contains key value pairs and sometimes methods  in the curly braces. Classes are also collections of data and actions but are sometimes referred to as recipe for making objects.

Researched answer: Objects are a Javascript data type that has collections of key value pairs. Objects can contain static information as well as actions in the form of methods. Objects consist of collections of key:value pairs where the key is a data type of symbol and the value is a valid data type in Javascript. Classes also contain data and behavior but classes are more like the blueprint of objects, if you incorporate instantiation you can pass information through the class interchangeably.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting has to do with changing the position of the information to the top of the scop prior to the actual code being executed.

Researched answer: Hoisting is javascript's default behavior of moving all declarations to the top of the current scope. This allows the variable to be used before it has been declared. This is also done as good practice to avoid bugs/errors since javascript interprets the code in that order it makes for a cleaner display.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is a description of a specific feature of an application a user will be able to use once the app is developed. The user story is typically written out using the "users should be able to __. As a user, i want to do __ because __..." framework.

2. Spread operator: The spread operator allows you to quickly copy all or part of an existing array or object into another array or object, often used in combination with destructuring.

3. React state: State is a javascript object that is used to contain data or information about the component.

4. React props: Props stands for properties, it refers to a user-defined component that had passed jsx attributes to this component as a single object.

5. DOM events: DOM events allow Javascript to register different event handlers on elements in an HTML document. The events are typically used in combination with functions and the functions will not be executed before the event occurs. Events can be when a 

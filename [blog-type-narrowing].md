Sometimes a variable can be more than one type, like a string or a number. This is called a union type. Type narrowing helps TypeScript understand the exact type of a variable at a specific time.


Why Do We Need It : 

When a variable has multiple types, we cannot use string or number methods directly. Type narrowing checks the type first so we can use it safely.

Here are two easy ways to do type narrowing: 


1. Using typeof
The typeof operator checks if a value is a string, number, or boolean.

Example ->

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // TypeScript knows 'id' is a string here
  } else {
    console.log(id); // TypeScript knows 'id' is a number here
  }
}

2. Using in and instanceof
We can also check if a property exists inside an object using the in operator, or check a class type using instanceof.



Conclusion : 

Type narrowing makes our code safe and clean. It bridges the gap between flexible JavaScript and strict TypeScript rules.

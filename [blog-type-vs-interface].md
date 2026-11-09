Difference Between Type Alias and Interface in TypeScript : 

When we learn TypeScript, we often get confused between type and interface. Both are used to define the shape of an object. But they have some differences.


Interface : 

An interface is used to name object types. It is great for working with objects and classes. If I write the same interface two times, TypeScript will join them together. This is called declaration merging.

Example -> 

interface User {
  name: string;
  age: number;
}


Type Alias : 

A type alias gives a new name to a type. I can use it for objects, primitive types like string or number, and unions. But it cannot join duplicate declarations like an interface.

Example -> 

type UserType = {
  name: string;
  age: number;
};



Which One I should Choose : 


I will use interface when I want to build object structures and classes that may change or extend later.On the other hand I will use type when I need union types or simple primitive values.


Conclusion
Both type and interface are very useful. For normal objects, using interface is a good and safe choice for beginners.
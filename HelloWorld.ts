console.log("Hello World");
let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let myName: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${myName}. I\'ll be ${age + 1} years old next month.`;

console.log(sentence);

// array, two types
let listSampleOne: number[] = [1, 2, 3];
let listSampleTwo: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
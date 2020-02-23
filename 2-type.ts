// Basic Types
const yes : boolean = true;
// yes = 1;
const myStr : string = 'Hello World!';
const myInt : number = 5.5; // number - works for both integers and floats

// String literal type
// A type whose expected value is the text content of the literal
let stringLiteralType : 'I am string literal';

// Not allowed since this is a string literal type 
//stringLiteralType = 'something else';


// typed arrays
let myArray : number[] = [1,2,3,4];
//myArray.push('error'); // Error in TS not in JS






// enums - way to organize a collection of related things
// enum values are number based
enum Color {  Red,   // 0
              Blue,  // 1
              Green};// 2
let c : Color = Color.Blue;
console.log(c); // prints 1
//let c2 : Color = {"White"}; // error

enum Color {
    Yellow = 3,
    White
}

namespace Color { 
    export function isPrimaryColor(c: Color) : boolean {
        switch(c) {
            case Color.Yellow:
            case Color.White:
                return false;
            default:
                return true;
        }
    }
}

const red = Color.Red;
const yellow = Color.Yellow;

console.log(Color.isPrimaryColor(red)); // true
console.log(Color.isPrimaryColor(yellow)); // false







// Tuples (group your types)
// an array with a fixed number of elements whose types are known
let myTuple : [number, string];
myTuple = [1, 'TypeScript'];
//myTuple = ['TypeScript' , 1]; // error

// where are tuples really useful?
// for data which is related to each other in a sequential manner
// LatLong, Point3D





// Type Inference 
let num = 100;
//num = "String";




// Union type
let unionTypeVar : number | string;
unionTypeVar = 5;
unionTypeVar = "TypeScript";
//unionTypeVar = true;




// Use of String literals in Union Types
type Shape = "Rectangle" | "Square" | "Circle";
function processShape(shape : Shape) : void {
    // if (shape === 'Diamond') {

    // }
}

// Union types and enums -- what's the difference?
// Union types are a compile only contruct and disappear in transpiled code
// enums get transpiled to actual JS code


// Type Alias
type numStrTypeAlias = number | string;
let numOrStr : numStrTypeAlias;



// Type Guard
// narrow down the type of an object within a conditional block.
function typeGuardExample(input: numStrTypeAlias) {
    if (typeof  input === 'string') {
        // Use methods available on string
        input.substring(1, 4);
        
    } else {
    
        input.toExponential(2);
    }
}

// Type Alias name is not used in the error message.
// Better alternative is to use interfaces as those names are used in error messages
//typeGuardExample(true);


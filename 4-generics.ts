// Generics - parameterized types
// When to use generics?
// When your function, interface or class will work with a variety of data types
// When your function, interface or class uses that data type in several places

// Identity Function that takes in a parameter of a certain type
// and returns the same parameter
function identity(arg : number) : number {
    return arg;
}

// How do we make the identity function work with different types?

// Use any - but we are losing the type information here
function identity2(arg: any) : any {
    return arg;
}

let a : number = 6;
let b = identity2(a);

// T is a parameterized type - placeholder for a type
// TypeScript does not know what type this is but knows
// that return type is same as input type
function identity3<T>(arg: T) : T {
    return arg;
}

let x : number = 6;
let y = identity3(x); 
// Not Ok - TypeScript knows the return type based on input type
//let z : string = identity3(x);

// Generic example on restricting a type 
class Vehicle {}

class Bus extends Vehicle{}
class Car extends Vehicle{}

function moveVehicle<T extends Vehicle> (vehicle : T) : T {
    return vehicle;
}

let myVehicle = moveVehicle(new Vehicle());
let myBus = moveVehicle(new Bus());
let myCar = moveVehicle(new Car());

// Use of generics in Interfaces and Classes
interface Catalog<T> {
    addItem : (newItem : T) => void;
    getAllItems : () => Array<T>;
}
class Book {};
class Toy {};

let bookCatalog : Catalog<Book>;
let toyCatalog : Catalog<Toy>;

class Store<T> implements Catalog<T> {
    private items = new Array<T>();
    addItem(newItem : T) {
        this.items.push(newItem);
    }

    getAllItems() {
        return this.items;
    }
}
import { Address } from "./address";

// Define the structure
export interface IPerson {
    // properties with types
    iFirstName : string;
    iLastName : string;
    iAge: number;
    // optional parameter
    residentialAddress? : Address;

    // Method signature only (no implementation)
    getFullName() : string;
    sayHello() : string;
}
// Implements keyword to implement an interface
export class Teacher implements IPerson {
    iFirstName : string;
    iLastName : string;
    iAge: number;
    residentialAddress? : Address;

    constructor(f: string, l: string, a: number) {
        this.iFirstName = f;
        this.iLastName = l;
        this.iAge = a;
    }

    // Provide definition of the methods in the class
    getFullName() : string {
        return this.iFirstName + this.iLastName;
    }

    sayHello() : string {
        return "Hello I am " + this.getFullName() + " , a Teacher";
    }

    setAddress(addr : Address) {
        this.residentialAddress = addr;
    }
}

// Create an object of type Teacher
let aTeacher : IPerson = new Teacher('Mary', 'Smith', 20);

// An object literal that does not explicitly implement Person
// It has all the required properties of Type Person
let someObject = {
    iFirstName : 'Test',
    iLastName : 'Test',
    iAge : 30,
    getFullName : () => 'Test',
    sayHello : () => 'Test',
    // extra properties not in Type Person
    extraProperty : 'Test'
};

// Duck Typing or Structural typine allows aTeacher of Type Person to be assigned to
// someObject which has the same structure as the Type Person
// someObject needs to have all required properties of Type Person
aTeacher = someObject;

// Can't access this extraProperty as it is not part of Type Person
//aTeacher.extraProperty;

interface IOccupation {
    occupation : string
}

// Extend multiple interfaces
// Useful because JavaScript and TypeScript don't allow
// multiple class inheritance
interface IMember extends IPerson, IOccupation {
}

// Class or Interface ?
// Use an Interface to define a contract
// Interfaces have lower app bundle size - prefer Interface

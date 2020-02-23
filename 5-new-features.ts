import { IPerson, Teacher } from "./3-interface";

// Optional chaining is Issue #16 on TypeScript Issue Tracker opened in July 2014
// Added as a feature in 3.7 TS release and issue closed in Sept 2019

let me : Teacher = new Teacher('Mary', 'Smith', 21);
me.setAddress({"addressLine1" : "a1", "addressLine2": "a2", "city": "Atlanta",
                "state": "GA"});

const state = me.residentialAddress?.state; 

// replacing code that would look like this
if (me !== null && me !== undefined &&
    me.residentialAddress !== null && me.residentialAddress !== undefined) {
        const state = me.residentialAddress.state
}

console.log(state); // GA


// Nullish coalescing available in TS 3.7
// Upcoming ECMAScript feature
// Use the value of state if available, else use a default value
const zip = me.residentialAddress?.zip ?? '12345';

console.log(zip); // Zip is undefined hence gets set to default value 12345


//@ts-nocheck

// Introducing @ts-nocheck to disable semantic checks in TS 3.7
// for easier JavaScript to TypeScript migrations
let n = 10;
n = "str";



// ECMAScript private fields proposal available in TS 3.8 Beta
// Use the # to mark class fields private.
// How is it different from Typescript private keyword?
export class Point2D {
    # x: number;
    private y: number;

    constructor(n1: number, n2: number) {
        this.x = n1;
        this.y = n2;
    }
}

let aPoint = new Point2D(2,3);
console.log(aPoint.x);
console.log(aPoint.y);
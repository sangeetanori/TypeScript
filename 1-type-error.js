var foo = 1;

// ERROR :: no name attribute in foo 
var bar = foo.name;
console.log("ERROR => bar initialized to foo.name that does not exist \n");

// But JavaScript throws error here
console.log("attempting to print bar value");
console.log("bar is " + bar);
//string concatenation

let s1 = "a";
let s2 = "b";
let s3 = "c";

console.log(s1+" "+s2+" "+s3);


let w1 = "This";
let w2 = "is";
let w3 = "my";
let w4 = "first";
let w5 = "js";
let w6 = "code.";

console.log(w1+" "+w2+" "+w3+" "+w4+" "+w5+" "+w6);
let sent = (w1+" "+w2+" "+w3+" "+w4+" "+w5+" "+w6);

//upper and lower case
let up = sent.toUpperCase();
let lw = sent.toLowerCase();
console.log(up);
console.log(lw);

//string slicing
let slice1 = sent.slice(0,4);
console.log(slice1);
let slice2 = sent.slice(10,12);
console.log(slice2);

//string length
console.log(sent.length);

// template literals
let Name = "Ankit";
let age = 22;
let city = "Patna";
let info = `My name is ${Name}. I am ${age} years old and I live in ${city}.`;
console.log(info);



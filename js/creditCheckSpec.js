// Can you translate this driver code to unit tests?

var cc = require("./creditCheck");

console.log(cc('5541808923795240') === "The number is valid!");
console.log(cc("402400713651380") === "The number is valid!");
console.log(cc("6011797668867828") === "The number is valid!");

console.log(cc("5541801923795240") === "The number is invalid!");
console.log(cc("4024007106512380") === "The number is invalid!");
console.log(cc("6011797668868728") === "The number is invalid!");

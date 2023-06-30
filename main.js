// count the digits

let value = parseInt(prompt("Enter a the number:"));
var count = 0;
while (value != 0) {
    value = Math.floor(value / 10);
    count++;
}
console.log("number digit:" + count);
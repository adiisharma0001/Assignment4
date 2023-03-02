
const num1 = parseFloat(prompt());
const num2 = parseFloat(prompt());
const num3 = parseFloat(prompt());
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}


console.log(largest);
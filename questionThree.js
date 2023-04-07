let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the four number:");
let num5 = prompt("Enter the five number:");

// Convert the input strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);
num4 = parseFloat(num4);
num5 = parseFloat(num5);

// Determine the larger number
let largerNum;
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  largerNum = num1;
}
if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  largerNum = num2;
}
if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  largerNum = num3;
}
if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  largerNum = num4;
}
if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
  largerNum = num5;
}

// Display the larger number in the console
console.log("The larger number is: " + largerNum);

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the input strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Determine the larger number
let largerNum;
if (num1 > num2) {
  largerNum = num1;
} else {
  largerNum = num2;
}

// Display the larger number in the console
console.log("The larger number is: ");

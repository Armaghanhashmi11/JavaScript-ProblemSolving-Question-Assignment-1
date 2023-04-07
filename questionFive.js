let marks = prompt("Enter a number:");
marks = parseFloat(marks);
if (marks < 60) {
  console.log("Grade F");
} else if (marks < 70) {
  console.log("Grade D");
} else if (marks < 80) {
  console.log("Grade C");
} else if (marks < 90) {
  console.log("Grade B");
} else if (marks < 100) {
  console.log("Grade A");
} else {
  console.log("grade W");
}

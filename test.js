/**
 * A playground for my Calculator project.
 *
 * @author Tegar Wijaya Kusuma
 * @date 10 November 2025
 */

import { Calculator } from "./CalculatorClass";

let value1 = 5;
let value2 = 0;

// Ask the user for what operation they want to do.
console.log("\nSupported Arithmetics:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplying");
console.log("4. Division");

let calcOperation = Number(prompt("\nChoose a number:", ["1-4:"]));

if (calcOperation === 1) {
  const myCalc = new Calculator(value1, value2);
  myCalc.addition();
} else if (calcOperation === 2) {
  const myCalc = new Calculator(value1, value2);
  myCalc.subtraction();
} else if (calcOperation === 3) {
  const myCalc = new Calculator(value1, value2);
  myCalc.multiplying();
} else if (calcOperation === 4) {
  if (value1 || value2 <= 0) {
    console.log("Cannot divide by zero.");
  } else {
    const myCalc = new Calculator(value1, value2);
    myCalc.division();
  }
} else {
  console.log("Error");
}

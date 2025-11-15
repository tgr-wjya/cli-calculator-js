/**
 * My humble CLI Calculator:
 *
 * @features
 * 1. Strict type-checking on input.
 * 2. Nested loops for re-entry and new calculations.
 *
 * @author Tegar Wijaya Kusuma
 * @date 10 November 2025
 */

import { Calculator } from "./CalculatorClass";

// Add simple welcome message here
console.log("Welcome to my simple calculator CLI!\n");

let loopOrNotValue = null;
let loopOrNotArithmetic = null;

// I fixed the loop for when user want to re-enter value
do {
  // Ask the user for value
  // I ensured the data types returned `number`;
  let value1 = Number(prompt("Enter value 1: "));
  let value2 = Number(prompt("Enter value 2: "));

  // Showed the user what they entered for the value
  console.log("\nYou entered...");
  console.log(`Value 1: ${value1}`);
  console.log(`Value 2: ${value2}`);

  loopOrNotValue = confirm("Do you want to re-enter value?");

  // Adding if conditional asking the user to continue calculation or not
  // I've added typecheck to ensure division method cannot divide by zero.
  if (loopOrNotValue === false) {
    do {
      // Ask the user for what operation they want to do.
      console.log("\nSupported Arithmetics:");
      console.log("1. Addition");
      console.log("2. Subtraction");
      console.log("3. Multiplying");
      console.log("4. Division");

      let calcOperation = Number(prompt("\nChoose a number:", ["1-4:"]));

      // Add a if conditional for when user wants different arithmetic operation.
      if (calcOperation === 1) {
        // ADDITION
        const myCalc = new Calculator(value1, value2);
        myCalc.addition();
      } else if (calcOperation === 2) {
        // SUBTRACTION
        const myCalc = new Calculator(value1, value2);
        myCalc.subtraction();
      } else if (calcOperation === 3) {
        // MULTIPLYING
        const myCalc = new Calculator(value1, value2);
        myCalc.multiplying();
      } else if (calcOperation === 4) {
        // DIVISION
        const myCalc = new Calculator(value1, value2);
        myCalc.division();
      } else {
        // Handle invalid operation choice.
        console.log("Please enter the arithmetic operation again");
        loopOrNotArithmetic = false;
      }
    } while (loopOrNotArithmetic === false);
  } else {
    console.log("\nPlease re-enter value...");
  }
} while (loopOrNotValue === true);

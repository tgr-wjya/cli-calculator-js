/**
 * My humble CLI Calculator Class:
 *
 * @features
 * 1. 4 different method for basic arithmetic operations
 *
 * @author Tegar Wijaya Kusuma
 * @date 10 November 2025
 */

export class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.result = 0;
  }

  addition() {
    this.result = this.a + this.b;

    console.log(`Result: ${this.result}`);
  }

  subtraction() {
    this.result = this.a - this.b;

    console.log(`Result: ${this.result}`);
  }

  multiplying() {
    this.result = this.a * this.b;

    console.log(`Result: ${this.result}`);
  }
  // FIX the cannot divide by zero.
  // ? Look into this later, it works for now.
  division() {
    if (this.a || this.b === 0) {
      console.log("Cannot divide by zero.");
    } else {
      this.result = this.a / this.b;

      console.log(`Result: ${this.result}`);
    }
  }
}

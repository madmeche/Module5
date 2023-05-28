//slide 51
class Calculator {
  constructor() {
    this.id = Date.now();
    // this.id = Math.floor(Math.random()*9) //multiply by max random number Math.floor rounds numbers up into whole numbers
  }
  #log = (value) => {
    console.log(`[Calculator: ${this.id}]: ${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }

  mult(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  square(num1) {
    const value = num1 * num1;
    this.#log(value);
    return value;
  }

  sqRt(num1) {
    const value = Math.sqrt(num1)
    this.#log(value);
    return value;
  }

  

}

// test(first_name, last_name, age)

module.exports = Calculator;

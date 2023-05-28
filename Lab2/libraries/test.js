class Testing {
    constructor() {
      // this.id = Date.now();
      this.id = this.#randomNum 
    }
    #randomNum = (value) => {
        const random = Math.floor(Math.random()*10) //multiply by max random number Math.floor rounds numbers up into whole numbers
        return random
    }
    #log = (value) => {
      console.log(`[Calculator: ${this.id}]: ${value}`);
    };
  
    add(num1, num2) {
      const value = num1 + num2;
      this.#log(value);
      return value;
    }
}
module.exports = Testing
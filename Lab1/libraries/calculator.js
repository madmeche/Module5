//slide 51
class Calculator {
    constructor(){
        this.id = Date.now()
        }
#log = (value) => {
    console.log(`[Calculator: ${this.id}]: ${value}`)
}

add(num1,num2) {  
    const value = num1 + num2
    this.#log(value)
    return value;
    }
}

// test(first_name, last_name, age)


module.exports = Calculator
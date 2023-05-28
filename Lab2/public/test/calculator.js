let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      console.log(input.value);
      //let i = 0 is declaring new variable; while input.value is less than i; increase i by 1
      // 987 element zero = 9, element 1 = 8, element 3 = 7
      //test element zero = t, ...
      let operator = "";
      for (let i = 0; i < input.value.length; i++) {
        //check if element= operator
        if (
          input.value[i] === "+" ||
          input.value[i] === "-" ||
          input.value[i] === "/" ||
          input.value[i] === "*"
        ) {
          operator = input.value[i];
        }
      }
      // .split returns an array
      //123 + 456 split at plus creates new array. new array will have before and after
      // anything before operator will be index 0 and anything after will be index 1

      const values = input.value.split(operator);
      const num1 = values[0];
      const num2 = values[1];

      console.log(values[0]);

      let route = "";
      switch (operator) {
        case "+":
          route = "add";
          break;
        case "-":
          route = "sub";
          break;
        case "/":
          route = "div";
          break;
        case "*":
          route = "mult";
          break;

        default: 
        route = 'undefined'
        console.log('User Error: Route undefined')
          break;
      }

      fetch(`http://localhost:3000/calculator/${route}?num1=${num1}&num2=${num2}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          input.value = data.result
        });
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

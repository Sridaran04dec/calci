let screen = '';
let operator = '';
let firstOperand = '';

    function num(value) {
      screen += value;
      document.getElementById('display').value = screen;
    }

    function setOperator(op) {
      operator = op;
      firstOperand = screen;
      screen = '';
    }

    function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    function multiply(a, b) {
      return a * b;
    }

    function divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Error';
      }
    }

    function equal() {
      const secondOperand = screen;
      let result;

      switch (operator) {
        case '+':
          result = add(parseFloat(firstOperand), parseFloat(secondOperand));
          break;
        case '-':
          result = subtract(parseFloat(firstOperand), parseFloat(secondOperand));
          break;
        case '*':
          result = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
          break;
        case '/':
          result = divide(parseFloat(firstOperand), parseFloat(secondOperand));
          break;
        default:
          result = 'Error';
      }

      document.getElementById('display').value = result;
    }

    function clearDisplay() {
      screen = '';
      document.getElementById('display').value = screen;
    }












































    // var outputScreen = document.getElementById("screen");

// function num(enterValues){
//     outputScreen.value +=enterValues;
// }

// function equal(){
//     outputScreen.value = eval(outputScreen.value);
// }

// function clearScreen(){
//     outputScreen.value ="";
// }


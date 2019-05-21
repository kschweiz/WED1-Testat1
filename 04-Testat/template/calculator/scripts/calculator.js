'use strict';
/**
 * core
 */
class Calculator {
    firstNumber = "";
    secondNumber = "";
    operator = "";

    constructor() {}

    clear(){
        this.firstNumber = "";
        this.secondNumber = "";
        this.operator = "";
    }

    inputNumber(number){
        if(isNaN(this.firstNumber) || this.firstNumber == ""){
            this.firstNumber = number;
        }else{
            this.firstNumber = parseInt(this.firstNumber)*10 + number;
        }
    }

    inputOperator(op){
        if(this.operator == ""){
            this.secondNumber = this.firstNumber;
            this.firstNumber = "";
        }
        this.operator = op;
    }

    /*
    * returns true on error
    */
    calculate(){
        if((this.firstNumber == "" || this.secondNumber == "" || this.operator == "")
        || (this.firstNumber == 0 && this.operator == '/'))
        {
            this.operator = ""
            this.secondNumber = "Invalid calculation"
            return true;
        }

        const operators = {
            '+': (left, right) => left + right,
            '-': (left, right) => left - right,
            '*': (left, right) => left * right,
            '/': (left, right) => left / right
        };

        this.firstNumber = operators[this.operator](this.firstNumber,this.secondNumber);
        this.secondNumber = "";
        this.operator = "";
        return false;
    }
}
/**
 * UI
 */
window.addEventListener('DOMContentLoaded', function() {
    const calculator = new Calculator();
    document.querySelector("#output").innerHTML = "Welcome";
    document.querySelector("form").addEventListener("click", () => {
        switch(event.target.className){
            case "number":
                calculator.inputNumber(parseInt(event.target.value));
                break;
            case "operator":
                calculator.inputOperator(event.target.value);
                break;
            case "command":
                switch(event.target.id){
                    case "key-c":
                        calculator.clear();
                        break;
                    case "key-=":
                        calculator.calculate();
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        document.querySelector("#output").innerHTML = calculator.secondNumber + " " + calculator.operator;
        document.querySelector("#input").innerHTML = calculator.firstNumber;
    });
});


/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
var console = console; //only needed for validator
testCalc.inputNumber(1);
testCalc.inputNumber(1);
testCalc.inputOperator("+");
testCalc.inputNumber(6);
testCalc.calculate();
console.log(testCalc.firstNumber, "should be", 17);

testCalc.inputOperator("-");
testCalc.inputNumber(2);
testCalc.calculate();
console.log(testCalc.firstNumber, "should be", 15);

testCalc.inputOperator("*");
testCalc.inputNumber(2);
testCalc.calculate();
console.log(testCalc.firstNumber, "should be", 30);

testCalc.clear();
testCalc.inputOperator("*");
testCalc.inputOperator("+");
testCalc.inputOperator("-");
testCalc.inputOperator("/");
testCalc.inputNumber(4);
console.log(testCalc.calculate(), "should be", true);
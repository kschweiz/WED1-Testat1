'use strict';
/**
 * core
 */
class Calculator {

    constructor(){
        
        this.clear();

    }

    inputNumber(number){
        if(this.firstNumber == ""){
            this.firstNumber = number;
        }else{
            this.firstNumber = this.firstNumber*10 + parseInt(number);
        }
    }

    inputOperator(op){
        if(this.operator == ""){
            this.secondNumber = this.firstNumber;
            this.firstNumber = "";
        }
        this.operator = op;
    }

    calculate(){
        if((this.firstNumber === "" || this.secondNumber === "" || this.operator === "") || (this.firstNumber === 0 && this.operator === '/'))
        {
            this.operator = "";
            this.secondNumber = "Invalid calculation";
            return true;
        }

        const operators = {
            '+': (left, right) => left + right,
            '-': (left, right) => left - right,
            '*': (left, right) => left * right,
            '/': (left, right) => left / right  
        };

        this.firstNumber = operators[this.operator](this.secondNumber,this.firstNumber);
        this.secondNumber = "";
        this.operator = "";
        return false;
    }

    clear(){
        this.firstNumber = "";
        this.secondNumber = "";
        this.operator = "";
    }
}
/**
 * UI
 */
window.addEventListener('DOMContentLoaded', function() {
    const calculator = new Calculator();
    let output= document.getElementById("output");
    output.innerHTML = "Welcome";
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
        output.innerHTML = calculator.secondNumber + " " + calculator.operator;
        document.getElementById("input").innerHTML = calculator.firstNumber;
    });
});


/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
console.log("" == "");
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
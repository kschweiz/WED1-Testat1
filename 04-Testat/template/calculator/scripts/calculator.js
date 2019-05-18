/**
 * core
 */

"use strict"

var keynumbers = document.getElementById("keyboard");
var number1 = "";
var number2 = "";
var display = "";
var operation3 = "";


function buttonNumClickHandler(){
    var content = this.value;
    
    if(operation3 === ""){
        number1 += content;
        display += content;
        writeInput(display);
    }else{
        number2 += content;
        display += content;
        writeInput(display);
    }
}

function buttonOpClickHandler(){
    var content = this.value;
    if(operation3 === "" && number1 !== ""){
        operation3 = content;
        display += content;
        writeInput(display);
    }
}

function buttonCommandHandler(){
    if(operation3 === "/" && parseFloat(number2, 10) === 0){
        buttonClearHandler();
        writeOutput("Divsion by Zero not allowed!")
    }else{
        var result = "";
        if(operation3 === "+"){
            result = parseFloat(number1, 10) + parseFloat(number2, 10);
        }else if(operation3 === "-"){
            result = parseFloat(number1, 10) - parseFloat(number2, 10);
        }else if(operation3 === "*"){
            result = parseFloat(number1, 10) * parseFloat(number2, 10);
        }else if(operation3 === "/"){
            result = parseFloat(number1, 10) / parseFloat(number2, 10);
        }else{
            writeOutput("ERROR")
        }
    
        number1 = result;
        number2 = "";
        display = result;
        operation3 = "";
        writeInput(result);
        writeOutput(result);
    }   
}

function buttonClearHandler(){
    number1 = "";
    number2 = "";
    display = "";
    operation3 = "";
    writeInput("");
    writeOutput("");
}


/**
 * UI
 */
function writeOutput(output){
    document.getElementById("output").innerHTML = output;
}

function writeInput(input){
    document.getElementById("input").innerHTML = input;
}


$(document).on("ready", function() {
    $("#output").text("Welcome");
    $(".number").on("click", buttonNumClickHandler);
    $(".operator").on("click", buttonOpClickHandler);
    $(".command").on("click", buttonCommandHandler);
    $(".clear").on("click", buttonClearHandler);
 });




/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
console.log(""/*TODO*/, "should be", 17);
console.log(""/*TODO*/, "should be", 15);
console.log(""/*TODO*/, "should be", 30);
console.log(""/*TODO*/, "should be", true); // true = hasError
/**
 * core
 */

"use strict";

var number1 = "";
var number2 = "";
var display = "";
var operation = "";


/**
 * UI
 */
function writeOutput(output){
    document.getElementById("output").innerHTML = output;
}

function writeInput(input){
    document.getElementById("input").innerHTML = input;
}

function buttonClearHandler(){
    number1 = "";
    number2 = "";
    display = "";
    operation = "";
    writeInput("");
    writeOutput("");
}

function buttonNumClickHandler(){
    
    let content = this.value;
    
    if(operation === ""){
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
   
    let content = this.value;

    if(operation === "" && number1 !== ""){
        operation = content;
        display += content;
        writeInput(display);
    }
}

function buttonCommandHandler(){
    if(operation === "/" && parseFloat(number2, 10) === 0){
        buttonClearHandler();
        writeOutput("Divsion by Zero not allowed!");
    }else{
        var result = "";
        if(operation === "+"){
            result = parseFloat(number1, 10) + parseFloat(number2, 10);
        }else if(operation === "-"){
            result = parseFloat(number1, 10) - parseFloat(number2, 10);
        }else if(operation === "*"){
            result = parseFloat(number1, 10) * parseFloat(number2, 10);
        }else if(operation === "/"){
            result = parseFloat(number1, 10) / parseFloat(number2, 10);
        }else{
            writeOutput("ERROR");
        }
    
        number1 = result;
        number2 = "";
        display = result;
        operation = "";
        writeInput(result);
        writeOutput(result);
    }   
}

$(document).on("ready", function() {
    $("#output").text("Welcome");
    $(".number").on("click", buttonNumClickHandler);
    $(".operator").on("click", buttonOpClickHandler);
    $(".command").on("click", buttonCommandHandler);
    $("#key-c").on("click", buttonClearHandler);
 });







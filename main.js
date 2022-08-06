//--------------------------------------------------------------|
//----------             KaruzG on GitHub             ----------|
//--------------------------------------------------------------|



//----------------------------var-------------------------------|
var num1 = "";
var num2 = "";
var operator = null;
var result = null;
var secondNumberTrigger = false; // When a operator is clicked, this will set True, to num2 hold the second number.
//--------------------------------------------------------------|



//---------------------------funct------------------------------|
function addChar(num){                                      // Funct when a number is clicked
    if (secondNumberTrigger == false && result == null) {   //  · With no result because if before a calculation you use minus would make anything negative
        num1 = num1 + num.toString();
        document.getElementById("resultInput").value = num1;
    } else {
        num2 = num2 + num.toString();
        document.getElementById("resultInput").value = num2;
    }
};

function remove(){  // Resets all
    num1 = "";
    num2 = "";
    secondNumberTrigger = false;
    operator = null;
    result = null;
    document.getElementById("resultInput").value = num1;
};

function addOperator(operatorChosen){
    operator = operatorChosen;
    if (result == null) {
        secondNumberTrigger = true;
        document.getElementById("resultInput").value = "";
    }
};

function equal() {              // If = pressed, if there is no second number, the operation will be made with the new number and the old result.
    console.log(operator)       // If there is no second number either old result, will display the first number
    if (num1 == "" && result != null) {
        num1 = result;
    } else if (num2 == "" && result == null){
        num2 = "0";
    }

    function calculation() {     // Depending on the operator, will do the calculation
        if (operator == "plus") {
            return parseInt(num1) + parseInt(num2);
        } else if (operator == "minus") {
            return parseInt(num1) - parseInt(num2);
        } else if (operator == "multiply") {
            return parseInt(num1) * parseInt(num2);
        }
    }

    result = calculation()  // I store the result, then show te result and reset the numbers
    document.getElementById("resultInput").value = calculation();
    num1 = "";
    num2 = "";
    secondNumberTrigger = false;
};
//--------------------------------------------------------------|
//--------------------------------------------------------------|
//----------             KaruzG on GitHub             ----------|
//--------------------------------------------------------------|

console.log("main.js loaded!");

var num1 = "";
var num2 = "";
var secondNumberTrigger = false; // When a operator is clicked, this will set True, to num2 hold the second number.

function addChar(num){  // Func when a number is clicked
    num1 = num1 + num.toString();
    console.log(num);
    console.log(num1);
    document.getElementById("resultInput").value = num1;
};

function remove(){  // Resets all
    num1 = "";
    num2 = "";
    secondNumberTrigger = false;
    document.getElementById("resultInput").value = num1
};
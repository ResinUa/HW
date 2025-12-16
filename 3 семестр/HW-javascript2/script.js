console.log("hello, world!");

console.log("через кнопки реально важко");

// document.querySelector('.sigmabutton').addEventListener('click', () => {
//     var Xreg = prompt('enter the first number');
//     var Yreg = prompt('enter the second number');
//     var operator = prompt('what action would you like to do');
//     if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
//         alert('ur stupid lmao');
//         var [Xreg, Yreg, operator] = undefined;
//     }
//     if (operator == "+") {
//         alert(+Xreg + +Yreg);
//         var [Xreg, Yreg, operator] = undefined;
//     }
//     if (operator == "-") {
//         alert(+Xreg - +Yreg);
//         var [Xreg, Yreg, operator] = undefined;
//     }
//     if (operator == "*") {
//         alert(+Xreg * +Yreg);
//         var [Xreg, Yreg, operator] = undefined;
//     }
//     if (operator == "/") {
//         alert(+Xreg / +Yreg);
//         var [Xreg, Yreg, operator] = undefined;
//     }
// });

var digit1 = "1";
var digit2 = "2";
var digit3 = "3";
var digit4 = "4";
var digit5 = "5";
var digit6 = "6";
var digit7 = "7";
var digit8 = "8";
var digit9 = "9";
var digit0 = "0";

var opPlus = false;
var opMin = false;
var opMult = false;
var opDiv = false;

var calculation = undefined;
var Xreg = undefined;
var Yreg = undefined;

document.getElementById('calc-plus').addEventListener('click', () => {
    var opPlus = true;
});

document.getElementById('calc-minus').addEventListener('click', () => {
    var opMin = true;
});

document.getElementById('calc-multip').addEventListener('click', () => {
    var opMult = true;
});

document.getElementById('calc-divis').addEventListener('click', () => {
    var opDiv = true;
});

document.getElementById('calc-reset').addEventListener('click', () => {
    var calculation = undefined;
});

document.getElementById('cd-1').addEventListener('click', () => {
    if (opPlus = true) {
    Xreg += digit1;
    }
    if (opPlus = true && Xreg != undefined) {
        Yreg += digit1;
    }
    
    if (opMin = true) {
    Xreg -= digit1;
    }
    if (opMin = true && Xreg != undefined) {
        Yreg -= digit1;
    }
    
    if (opDiv = true) {
    Xreg /= digit1;
    }
    if (opDiv = true && Xreg != undefined) {
        Yreg /= digit1;
    }
    
    if (opMult = true) {
    Xreg *= digit1;
    }
    if (opMult = true && Xreg != undefined) {
        Yreg += digit1;
    }
    
    console.log(Xreg);
    console.log(Yreg);
});


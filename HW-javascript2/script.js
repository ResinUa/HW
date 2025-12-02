console.log("hello, world!");

console.log("через кнопки реально важко");

document.querySelector('.sigmabutton').addEventListener('click', () => {
    var Xreg = prompt('enter the first number');
    var Yreg = prompt('enter the second number');
    var operator = prompt('what action would you like to do');
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert('ur stupid lmao');
        var [Xreg, Yreg, operator] = undefined;
    }
    if (operator == "+") {
        alert((+Xreg + +Yreg));
        var [Xreg, Yreg, operator] = undefined;
    }
    if (operator == "-") {
        alert(+Xreg - +Yreg);
        var [Xreg, Yreg, operator] = undefined;
    }
    if (operator == "*") {
        alert(+Xreg * +Yreg);
        var [Xreg, Yreg, operator] = undefined;
    }
    if (operator == "/") {
        alert(+Xreg / +Yreg);
        var [Xreg, Yreg, operator] = undefined;
    }
});
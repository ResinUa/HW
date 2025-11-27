const thing1 = document.querySelector(".thing1");
const thing2 = document.querySelector(".thing2");

thing2.addEventListener("mousedown", () => {
  thing1.style.backgroundColor = "cyan";
});

thing2.addEventListener("mouseup", () => {
  thing1.style.backgroundColor = "yellow";
});

const helloworldagain = "hello world! again";
console.log(helloworldagain);

console.warn("I`m warning you for the last time...");

console.error("You`ve messed up!");
//-------------------------------------------------------------------

const alert1 = document.getElementById("alert");

alert1.addEventListener("click", () => {
  alert("are you sure?");
});

//-------------------------------------------------------------------

const bum_button = document.getElementById("bum");

bum_button.addEventListener("click", () => {
  var year = prompt("in which year javascript was founded?");
  console.log(year);
  if (year == "1995") {
    alert("you`re right!");
  } else {
    alert("you`re wrong!");
  }
});

//-------------------------------------------------------------------

const yourage = document.getElementById("yourage");

yourage.addEventListener("click", () => {
  var age = prompt("what year you were born in?");
  var year = "2025";
  alert("you are " + (year - age) + " years old!");
});

const what = document.querySelector("#youragequestion");

what.addEventListener("click", () => {
  var yage = prompt("what`s your age");
  if (yage < 18) {
    alert("hi kiddo!");
  }
  if (yage > 18) {
    alert("greetings!");
  }
});

//------------------------------------------------------------

var myname = "brick";
console.log(myname);

var myage = 15;
console.log(myage);

var birthyear = 2011;
console.log(birthyear);

// var 名前 = prompt('お名前');
// console.log(名前);

//-----------------------------------------------------------

const bumjr = document.getElementById("bumjr");

bumjr.addEventListener("click", () => {
  var 名前 = prompt("お名前");
  console.log(名前);
});

//--------------------------дз------------------------------

const square = document.querySelector(".square"); //я використовую 2 різних способи по пріколу
const circle = document.getElementById("circle");

square.addEventListener("click", () => {
  var a = prompt("side of your square?");
  alert("the perimeter of your square equals " + a * 4);
});

circle.addEventListener("click", () => {
  var r = prompt("radius of your circle?");
  alert("area of your circle equals " + 3.14 * r * r);
});

//або ж Math.PI*r**2

//----------------l2----------------------------------

const lesson2 = document.getElementById("omglesson2");
const stupid = document.getElementById("itsgettingstupid");
const variables = document.getElementById("variables");
const lesson2ig = document.getElementById("omglesson2-2");
const aaa = document.getElementById("aaa");

console.log("привіт, я вчу javascript!");
console.info("very important info!");
console.warn("warning!");
console.error("error error!");

stupid.addEventListener("click", () => {
  alert("ласкаво просимо!");
  var nameidk = prompt("як тебе звати");
  alert("привіт " + nameidk);
  var ageidk = prompt("what`s your age");
  alert("you are " + ageidk + " years old!");
  var num1 = prompt("first number");
  var num2 = prompt("second number");
  alert("sum is " + (+num1 + +num2));
});

variables.addEventListener("click", () => {
  var years = prompt("which year you were born in");
  alert("you are " + (2025 - years) + " years old!");
  var nameagain = "bob";
  alert(nameagain);
  var nameagain = prompt("enter the new name");
  alert(nameagain);
});

lesson2.addEventListener("click", () => {
  var num3 = prompt("num");
  var num4 = prompt("num");
  var num5 = prompt("num");
  alert("the average is " + (+num3 + +num4 + +num5) / 3);
});

lesson2ig.addEventListener("click", () => {
  var minute = prompt("enter minutes");
  alert("it`s " + minute * 60 + " seconds!");
  var hour = prompt("enter hours");
  alert("it`s " + hour * 60 + " minutes!");
  var km = prompt("enter kilometers");
  alert("it`s " + km * 1000 + " meters!");
  var a = prompt("side a");
  var b = prompt("side b");
  alert("the perimeter is " + 2 * (+a + +b));
  var recta = prompt("side a");
  var rectb = prompt("side b");
  alert("the area of your rectangle is " + recta * rectb);
});

aaa.addEventListener("click", () => {
  var temperature = prompt("temperature in celsius");
  alert("the temperature is " + (+temperature * 1.8 + 32));
});

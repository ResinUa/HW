const thing1 = document.querySelector('.thing1');
const thing2 = document.querySelector('.thing2');

thing2.addEventListener("mousedown", () => {
   thing1.style.backgroundColor = "cyan";
});

thing2.addEventListener("mouseup", () => {
   thing1.style.backgroundColor = "yellow";
});

const helloworldagain = "hello world! again";
console.log(helloworldagain);

console.warn('I`m warning you for the last time...');

console.error('You`ve messed up!');
//-------------------------------------------------------------------

const alert1 = document.getElementById('alert');

alert1.addEventListener('click', () => {
    alert("are you sure?");
});

//-------------------------------------------------------------------

const bum_button = document.getElementById('bum');

bum_button.addEventListener('click', () => {
    var year = prompt('in which year javascript was founded?');
    console.log(year);
    if (year == '1995') {
        alert('you`re right!');
    } else {
        alert('you`re wrong!')
    }
});

//-------------------------------------------------------------------

const yourage = document.getElementById('yourage');

yourage.addEventListener('click', () => {
    var age = prompt('what year you were born in?');
    var year = '2025';
    alert("you are " + (year - age) + " years old!");
});

const what = document.querySelector('#youragequestion');

what.addEventListener('click', () => {
    var yage = prompt('what`s your age');
    if (yage < 18) {
        alert('hi kiddo!');
    }
    if (yage > 18) {
        alert('greetings!');
    }
});

//------------------------------------------------------------

var myname = 'brick';
console.log(myname);

var myage = 15;
console.log(myage);

var birthyear = 2011;
console.log(birthyear);

// var 名前 = prompt('お名前');
// console.log(名前);

//-----------------------------------------------------------

const bumjr = document.getElementById('bumjr');

bumjr.addEventListener('click', () => {
    var 名前 = prompt('お名前');
    console.log(名前);
});

//--------------------------дз------------------------------

const square = document.querySelector('.square'); //я використовую 2 різних способи по пріколу
const circle = document.getElementById('circle');

square.addEventListener('click', () => {
    var a = prompt('side of your square?');
    alert('the perimeter of your square equals ' + a*4);
});

circle.addEventListener('click', () => {
    var r = prompt('radius of your circle?');
    alert('area of your circle equals ' + 3.14*r*r);
});

//або ж Math.PI*r**2

//entry things

const welcome = document.getElementById("modalwelcomebg");
const modalinput = document.getElementById("modalinput");
const namething = document.getElementById("namething");
const modalthxopen = document.getElementById("modalthxopen");
const modalwelcome = document.getElementById("modalwelcome");
const modalthx = document.getElementById("modalthx");
const modalthxclose = document.getElementById("modalthxclose");

var user = undefined;

modalinput.addEventListener("keyup", (el) => {
  user = el.target.value;
});

modalthxopen.addEventListener("click", () => {
  if (user == undefined) {
    return;
  }
  modalwelcome.style.display = "none";
  modalthx.style.display = "flex";
});

modalthxclose.addEventListener("click", () => {
  if (user == "tung tung tung sahur") {
    document.getElementById("html").style.display = "none";
  }
  namething.textContent = "Вітаємо, " + user;
  welcome.style.display = "none";
  modalthx.style.display = "none";
});

//header things

//navbar interactive thing

const navinterthing = document.getElementById("navinterthing");
const headermodal = document.getElementById("headermodal");
const headermodalbtn = document.querySelectorAll("#headermodal");

var navinterbool = false;

navinterthing.addEventListener("click", () => {
  if (navinterbool == false) {
    headermodal.style.display = "flex";
    navinterbool = true;
  } else {
    headermodal.style.display = "none";
    navinterbool = false;
  }
});

//s1

const inputs1 = document.getElementById("inputs1");
const buttons1 = document.getElementById("buttons1");
const things1 = document.getElementById("things1");

var inputeds1 = undefined;

inputs1.addEventListener("keyup", (el) => {
  inputeds1 = el.target.value;
});

buttons1.addEventListener("click", () => {
  if ((inputeds1 % 4 == 0 && inputeds1 % 100 !== 0) || inputeds1 % 400 == 0) {
    things1.textContent = "Ви народилися у високосний рік!";
    things1.style.color = "green";
  } else if (inputeds1 < 0) {
    document.getElementById("html").style.display = "none";
  } else {
    things1.textContent = "Ви не народилися у високосний рік!";
    things1.style.color = "red";
  }
});

//s2

const s2input = document.getElementById("s2input");
const s2button = document.getElementById("s2button");
const s2thing = document.getElementById("s2thing");

var s2guess = undefined;
var s2computer = undefined;

s2input.addEventListener("keyup", (el) => {
  s2guess = el.target.value;
  console.log(s2guess);
});

s2button.addEventListener("click", () => {
  s2computer = Math.round(Math.random() * 100);
  if (s2guess == s2computer) {
    s2thing.textContent = "Вітаю, ви вгадали число! " + "(" + s2computer + ")";
    s2thing.style.color = "green";
  } else {
    s2thing.textContent = "Ви не вгадали число! " + "(" + s2computer + ")";
    s2thing.style.color = "red";
  }
});

//s3

const rock = document.getElementById("s3rock");
const scissors = document.getElementById("s3scissors");
const paper = document.getElementById("s3paper");

const s3thing = document.getElementById("s3thing");

const s3pcomputer = document.querySelectorAll(".s3text p")[1];
const s3pyou = document.querySelectorAll(".s3text p")[2];

const s3ihateyou = document.getElementById('s3whydoyouexist');

var s3computercount = 0;
var s3youcount = 0;

var s3computer = undefined; //1 = rock, 2 = scissors, 3 = paper

rock.addEventListener("click", () => {
  s3computer = Math.round(Math.random() * 3);
  console.log(s3computer);
  if (s3computer == 1) {
    s3thing.textContent = "Нічия!";
    s3thing.style.color = "black";
  } else if (s3computer == 2) {
    s3thing.textContent = "Ви виграли раунд!";
    s3thing.style.color = "green";
    s3youcount++;
    s3pyou.textContent = "Ви - " + s3youcount;
  } else if (s3computer == 3) {
    s3thing.textContent = "Ви програли раунд";
    s3thing.style.color = "red";
    s3computercount++;
    s3pcomputer.textContent = "Комп’ютер - " + s3computercount;
  }
});

scissors.addEventListener("click", () => {
  s3computer = Math.round(Math.random() * 3);
  console.log(s3computer);
  if (s3computer == 2) {
    s3thing.textContent = "Нічия!";
    s3thing.style.color = "black";
  } else if (s3computer == 3) {
    s3thing.textContent = "Ви виграли раунд!";
    s3thing.style.color = "green";
    s3youcount++;
    s3pyou.textContent = "Ви - " + s3youcount;
  } else if (s3computer == 1) {
    s3thing.textContent = "Ви програли раунд";
    s3thing.style.color = "red";
    s3computercount++;
    s3pcomputer.textContent = "Комп’ютер - " + s3computercount;
  }
});

paper.addEventListener("click", () => {
  s3computer = Math.round(Math.random() * 3);
  console.log(s3computer);
  if (s3computer == 3) {
    s3thing.textContent = "Нічия!";
    s3thing.style.color = "black";
  } else if (s3computer == 1) {
    s3thing.textContent = "Ви виграли раунд!";
    s3thing.style.color = "green";
    s3youcount++;
    s3pyou.textContent = "Ви - " + s3youcount;
  } else if (s3computer == 2) {
    s3thing.textContent = "Ви програли раунд";
    s3thing.style.color = "red";
    s3computercount++;
    s3pcomputer.textContent = "Комп’ютер - " + s3computercount;
  }
});

s3ihateyou.addEventListener('click', () => {
  s3thing.style.color = 'black';
  if (s3computer == undefined) {
    s3thing.textContent = 'bruh';
  }
  else if (s3computer == 1) {
    s3thing.textContent = 'Камінь';
  }
  else if (s3computer == 2) {
    s3thing.textContent = 'Ножиці';
  }
  else if (s3computer == 3) {
    s3thing.textContent = 'Папір';
  }
});

//s4

const s4input = document.getElementById('s4input');
const s4input2 = document.getElementById('s4input2');
const s4result = document.getElementById('s4result');

const s4addition = document.getElementById('s4addition');
const s4multiplication = document.getElementById('s4multiplication');
const s4substraction = document.getElementById('s4substraction');
const s4division = document.getElementById('s4division');
const s4equals = document.getElementById('s4equals');

var s4operator = undefined;
var s4xreg = undefined;
var s4yreg = undefined;

s4input.addEventListener('keyup', (el) => {
    s4xreg = el.target.value;
});

s4input2.addEventListener('keyup', (el) => {
  s4yreg = el.target.value;
});

s4addition.addEventListener('click', () => {
  s4operator = s4addition.textContent;
});

s4multiplication.addEventListener('click', () => {
  s4operator = s4multiplication.textContent;
});

s4substraction.addEventListener('click', () => {
  s4operator = s4substraction.textContent;
});

s4division.addEventListener('click', () => {
  s4operator = s4division.textContent;
});

s4equals.addEventListener('click', () => {
  console.log(s4xreg, s4yreg, s4operator);
    if (s4xreg == undefined || s4yreg == undefined || s4operator == undefined) {
    s4result.textContent = 'you think you`re so funny';
  }
  else if (s4operator == '+') {
    s4result.textContent = +s4xreg + +s4yreg;
  }
  else if (s4operator == '*') {;
    s4result.textContent = s4xreg * s4yreg;
  }
  else if (s4operator == '-') {;
    s4result.textContent = s4xreg - s4yreg;
  }
  else if (s4operator == '/') {
    s4result.textContent = s4xreg / s4yreg;
  }
});

//theme

const themebtn = document.getElementById("theme");

var bravosix = "light";

themebtn.addEventListener("click", () => {
  if (bravosix == "light") {
    themebtn.style.animation = "bravo-six-going-dark 0.25s forwards";
    themebtn.textContent = "☾";
    bravosix = "brr skibidi dop dop dop dop yes yes";

    document.getElementsByClassName('mainthing').style.background = 'gray';
  } else {
    themebtn.style.animation = "bravo-six-going-light 0.25s forwards";
    themebtn.textContent = "☼";
    bravosix = "light";

    document.getElementById('mainmiddle').style.background = 'white';
  }
});

//------------------------------S1-events----------------------------------
// document.querySelector(".otcthing").addEventListener("click", () => {
//    https://youtu.be/dQw4w9WgXcQ
// });
//-------------------------------------------------------------------------
document.getElementById("headerlogin").addEventListener("mousedown", () => {
  document.getElementById("headerlogin").style.scale = "0.975";
});

document.getElementById("headerlogin").addEventListener("mouseup", () => {
  document.getElementById("headerlogin").style.scale = "1";
});

document.getElementById("headerbuy").addEventListener("mousedown", () => {
  document.getElementById("headerbuy").style.scale = "0.975";
});

document.getElementById("headerbuy").addEventListener("mouseup", () => {
  document.getElementById("headerbuy").style.scale = "1";
});

//log in
const password = document.getElementById("password");
const mail = document.getElementById("mail");
const incpass = document.getElementById("incpass");
const wrongmail = document.getElementById("wrongmail");

const modalbg = document.querySelector(".modalbg");
const btnlogin = document.getElementById("headerlogin");
const btnloginmodal = document.getElementById("btnlogin");

btnlogin.addEventListener("click", () => {
  modalbg.style.display = "flex";
});

var passwordinput = undefined;
var mailinput = undefined;

password.addEventListener("keyup", (el) => {
  passwordinput = el.target.value;
});

mail.addEventListener("keyup", (el) => {
  mailinput = el.target.value;
});

//shopping basket
const shopb = document.querySelector(".shoppingbasket");
const shopbtn = document.getElementById("headerbuy");
const sbp = document.getElementById("nothinghere");
const nesb = document.querySelector(".notemptysb");
const pay = document.getElementById("paynorder");
const thx = document.getElementById("thx");

var isactive = false;
var isproduct = false;
var importantthing = false;

pay.addEventListener("click", () => {
  nesb.style.display = "none";
  thx.style.display = "block";
  importantthing = true;
});

shopbtn.addEventListener("click", () => {
  if (isactive == false) {
    shopb.style.animation = "superanim 0.25s forwards";
    isactive = true;
  } else {
    shopb.style.animation = "superanimBackwards 0.25s forwards";
    isactive = false;
  }
  if (isproduct == true) {
    sbp.style.display = "none";
    nesb.style.display = "flex";
    shopb.style.height = "300px";
  } else {
    sbp.style.display = "block";
    nesb.style.display = "none";
    shopb.style.height = "100px";
  }
});

shopb.addEventListener("click", () => {
  if (importantthing == false) {
    shopb.style.animation = "superanimBackwards 0.25s forwards";
    isactive = false;
  } else {
    return;
    importantthing = false;
  }
});

document.getElementById("funnybtn").addEventListener("click", () => {
  if (isproduct == false) {
    isproduct = true;
  } else {
    isproduct = false;
  }
});
//theme change
const themebtn = document.querySelector(".theme");
var themething = true;
var memecounter = 0;

themebtn.onclick = () => {
  if (themething == true) {
    document.body.style.background = "black";
    themething = false;
    themebtn.textContent = "✨";
  } else {
    document.body.style.background =
      "linear-gradient(245.71deg, #1e0c00 4.96%, #1f0700 33.7%, #170a00 68.41%, #1e0d00 96.42%) ";
    themething = true;
    themebtn.textContent = "🌙";
  }
  memecounter++;
  if (memecounter >= 5) {
    document.getElementById("logo").textContent = "bro stop pls";
  }
  if (memecounter >= 10) {
    document.getElementById("logo").textContent = "seriously";
  }
  if (memecounter >= 15) {
    document.getElementById("logo").textContent =
      "why do I have to deal with you";
  }
  if (memecounter == 20) {
    document.getElementById("logo").textContent = "y";
  }
  if (memecounter == 21) {
    document.getElementById("logo").textContent = "yo";
  }
  if (memecounter == 22) {
    document.getElementById("logo").textContent = "you";
  }
  if (memecounter == 23) {
    document.getElementById("logo").textContent = "you`";
  }
  if (memecounter == 24) {
    document.getElementById("logo").textContent = "you`r";
  }
  if (memecounter == 25) {
    document.getElementById("logo").textContent = "you`re";
  }
  if (memecounter == 26) {
    document.getElementById("logo").textContent = "you`re ";
  }
  if (memecounter == 27) {
    document.getElementById("logo").textContent = "you`re a";
  }
  if (memecounter == 28) {
    document.getElementById("logo").textContent = "you`re ad";
  }
  if (memecounter == 29) {
    document.getElementById("logo").textContent = "you`re ado";
  }
  if (memecounter == 30) {
    document.getElementById("logo").textContent = "you`re adop";
  }
  if (memecounter == 31) {
    document.getElementById("logo").textContent = "you`re adopt";
  }
  if (memecounter == 32) {
    document.getElementById("logo").textContent = "you`re adopte";
  }
  if (memecounter == 33) {
    document.getElementById("logo").textContent = "you`re adopted";
  }
  if (memecounter == 34) {
    themebtn.style.display = "none";
    document.getElementById("logo").textContent = "pizzashop";
  }
};

//megafunctions

function modalactioncomplete() {
  if (
    passwordinput == "1234qwerty!" &&
    mailinput == "matveylubitmuzhikov@gmail.com"
  ) {
    [modalbg, btnlogin].forEach((el) => (el.style.display = "none"));
  } else if (
    passwordinput !== "1234qwerty!" &&
    mailinput == "matveylubitmuzhikov@gmail.com"
  ) {
    incpass.style.display = "block";
  } else if (
    passwordinput == "1234qwerty!" &&
    mailinput !== "matveylubitmuzhikov@gmail.com"
  ) {
    wrongmail.style.display = "block";
  }
}

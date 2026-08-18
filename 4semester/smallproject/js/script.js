// yarik modal&header
let modalbool = false;

const smopen = document.getElementById("smopen");
const smclose = document.getElementById("smclose");

const searchmodal = document.getElementById("searchmodal");

smopen.addEventListener("click", () => {
  if (modalbool === true) {
    return;
  }
  searchmodal.style.display = "flex";
  modalbool = true;
});

smclose.addEventListener("click", () => {
  searchmodal.style.display = "none";
  modalbool = false;
});

const lmopen = document.getElementById("lmopen");
const lmclose = document.getElementById("lmclose");

const loginmodal = document.getElementById("loginmodal");

lmopen.addEventListener("click", () => {
  if (modalbool === true) {
    return;
  }
  loginmodal.style.display = "flex";
  modalbool = true;
});

lmclose.addEventListener("click", () => {
  loginmodal.style.display = "none";
  modalbool = false;
});

const bmopen = document.getElementById("bmopen");
const bmclose = document.getElementById("bmclose");

const bagmodal = document.getElementById("bagmodal");

bmopen.addEventListener("click", () => {
  if (modalbool === true) {
    return;
  }
  bagmodal.style.display = "flex";
  modalbool = true;
});

bmclose.addEventListener("click", () => {
  bagmodal.style.display = "none";
  modalbool = false;
});

const ah = document.getElementById("ah");
const hm = document.getElementById("homemodal");

ah.addEventListener("mouseover", () => {
  hm.style.animation = "hmappear 0.25s forwards";
});

const hlpmbtn = document.getElementById("hlpmbtn");
const helpmemodal = document.getElementById("helpmemodal");
const modal2 = document.getElementById("modal2");
const closebtn2 = document.getElementById("closebtn2");

let helpmemodaltoggle = false;

hlpmbtn.addEventListener("click", () => {
  if (helpmemodaltoggle == false) {
    helpmemodal.style.display = "block";
    modal2.style.display = "block";
    helpmemodaltoggle = true;
  } else {
    helpmemodal.style.display = "none";
    modal2.style.display = "none";
    helpmemodaltoggle = false;
  }
});

closebtn2.addEventListener("click", () => {
  helpmemodal.style.display = "none";
  modal2.style.display = "none";
  helpmemodaltoggle = false;
});

const am = document.getElementById("adaptivemenu");
const ab = document.getElementById("adaptiveburger");
let amtoggle = false;

ab.addEventListener("click", () => {
  if (amtoggle == false) {
    ab.textContent = "x";
    am.style.display = "flex";
    amtoggle = true;
    console.log(amtoggle);
  } else {
    ab.textContent = "☰";
    am.style.display = "none";
    amtoggle = false;
  }
});

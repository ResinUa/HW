const l = document.querySelector("#l");
const r = document.querySelector("#r");
const img1 = document.querySelector("#slide1");
const img2 = document.querySelector("#slide2");
const img3 = document.querySelector("#slide3");

const img11 = document.querySelector("#img11");
const img22 = document.querySelector("#img12");
const img33 = document.querySelector("#img13");

var whichimg = 1;
l.addEventListener("click", () => {
  if (whichimg == 2) {
    img2.style.display = "none";
    img1.style.display = "block";
  }
  if (whichimg == 3) {
    img3.style.display = "none";
    img2.style.display = "block";
  }

  if (whichimg == 1) {
    return;
  } else {
    whichimg -= 1;
  }
});

r.addEventListener("click", () => {
  if (whichimg == 2) {
    img1.style.display = "none";
    img2.style.display = "block";
  }
  if (whichimg == 3) {
    img2.style.display = "none";
    img3.style.display = "block";
  }

  if (whichimg == 3) {
    return;
  } else {
    whichimg += 1;
  }
});

document.addEventListener("keypress", (sigma) => {
  if (sigma.key === "Enter") {
    console.log("bruh");
  }
});

// active1 = false;
// active2 = false;
// active3 = false;
// document.addEventListener('keypress', (bob) => {
//   if (bob.key === '1' && active1 == false) {
//     img11.style.display = 'block';
//     active1 = true;
//   } else {
//     img11.style.display = 'none';
//     active1 = false;
//   }
//     if (bob.key === '2') {
//     img22.style.display = 'block';
//   }
//     if (bob.key === '3') {
//     img33.style.display = 'block';
//   }
// });

// var thing1 = undefined;
// var thing2 = undefined;
// var thing3 = undefined;
// document.addEventListener('keydown', (bob) => {
//   if (thing1 !== undefined || thing3 !== undefined || thing2 === undefined) {
//     thing2 = bob.key;
//     console.log(thing2);
//   }
//   if (thing2 !== undefined || thing3 !== undefined || thing1 === undefined) {
//     thing1 = bob.key;
//     console.log(thing1);
//   }
//   if (thing1 !== undefined || thing2 !== undefined || thing3 === undefined) {
//     thing3 = bob.key;
//     console.log(thing3);
//   }
//   if (thing1 !== undefined && thing2 !== undefined && thing3 !== undefined) {
//     if (thing3 == '+') {
//       alert(String(thing1) + String(thing3) + String(thing2) + '=' + +thing1 + +thing2);
//     }
//     if (thing3 == '-') {
//       alert(String(thing1) + String(thing3) + String(thing2) + '=' + +thing1 - +thing2);
//     }
//     if (thing3 == '*') {
//       alert(String(thing1) + String(thing3) + String(thing2) + '=' + +thing1 * +thing2);
//     }
//     if (thing3 == '/') {
//       alert(String(thing1) + String(thing3) + String(thing2) + '=' + +thing1 / +thing2);
//     }
//   }
// });

const box = document.getElementById("box");

thing1 = 0;
thing2 = 0;

var bob1 = 0;
var bob2 = 0;
document.addEventListener("keypress", (bob) => {
  if (bob.key === "w") {
    bob1 += thing1 - 100;
    box.style.top = bob1 + "px";
  }
  if (bob.key === "a") {
    bob2 += thing2 - 100;
    box.style.left = bob2 + "px";
  }
  if (bob.key === "s") {
    bob1 += thing1 + 100;
    box.style.top = bob1 + "px";
  }
  if (bob.key === "d") {
    bob2 += thing1 + 100;
    box.style.left = bob2 + 'px';
  }
  console.log(bob1, bob2);
});

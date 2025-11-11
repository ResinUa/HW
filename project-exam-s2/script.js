const s1button = document.querySelector(".s1button");
const s12button = document.querySelector(".s12button");

const s10btn1 = document.querySelector(".s10btn-1");
const s10btn2 = document.querySelector(".s10btn-2");
const s10btn3 = document.querySelector(".s10btn-3");
const s10btn4 = document.querySelector(".s10btn-4");

const s10thing1 = document.querySelector(".s10mc1");
const s10thing2 = document.querySelector(".s10mc2");
const s10thing3 = document.querySelector(".s10mc3");
const s10thing4 = document.querySelector(".s10mc4");

const s11b1 = document.querySelector("#s11b1");
const s11b2 = document.querySelector("#s11b2");
const s11b3 = document.querySelector("#s11b3");
const s11b4 = document.querySelector("#s11b4");

const s11p1 = document.querySelector("#s11p1");
const s11p2 = document.querySelector("#s11p2");
const s11p3 = document.querySelector("#s11p3");
const s11p4 = document.querySelector("#s11p4");

const s12b1 = document.querySelector("#s12b1");
const s12b2 = document.querySelector("#s12b2");
const s12img1 = document.querySelector("#s12img1");
const s12img2 = document.querySelector("#s12img2");

const fbutton = document.querySelector("#footer_button")

//---------------------------------s1&12button-----------------------------------------//

s1button.addEventListener("mousedown", () => {
  s1button.style.backgroundColor = "#B5302D";
});

s1button.addEventListener("mouseup", () => {
  s1button.style.backgroundColor = "#DF3D3A";
});

s12button.addEventListener("mousedown", () => {
  s12button.style.backgroundColor = "#B5302D";
});

s12button.addEventListener("mouseup", () => {
  s12button.style.backgroundColor = "#DF3D3A";
});

//---------------------------------s10thing1----------------------------------------------//

s10btn1.addEventListener("click", () => {
  [s10thing2, s10thing3, s10thing4].forEach(el => el.style.display = "none");
  s10thing1.style.display = "flex";
  [s10btn2, s10btn3, s10btn4].forEach(el => el.style.color = "#B5302D");
  s10btn1.style.color = "#DF3D3A";
});

//---------------------------------s10thing2----------------------------------------------//

s10btn2.addEventListener("click", () => {
  [s10thing1, s10thing3, s10thing4].forEach(el => el.style.display = "none");
  s10thing2.style.display = "flex";
  [s10btn1, s10btn3, s10btn4].forEach(el => el.style.color = "#B5302D");
  s10btn2.style.color = "#DF3D3A";
});

//---------------------------------s10thing3----------------------------------------------//

s10btn3.addEventListener("click", () => {
  [s10thing2, s10thing1, s10thing4].forEach(el => el.style.display = "none");
  s10thing3.style.display = "flex";
  [s10btn2, s10btn1, s10btn4].forEach(el => el.style.color = "#B5302D");
  s10btn3.style.color = "#DF3D3A";
});

//---------------------------------s10thing4----------------------------------------------//

s10btn4.addEventListener("click", () => {
  [s10thing2, s10thing3, s10thing1].forEach(el => el.style.display = "none");
  s10thing4.style.display = "flex";
  [s10btn2, s10btn3, s10btn1].forEach(el => el.style.color = "#B5302D");
  s10btn4.style.color = "#DF3D3A";
});

//---------------------------------s11buttons----------------------------------------------//
s11b1.addEventListener("click", () => {
  if (s11p1.style.display === "none") {
    s11p1.style.display = "grid";
  } else {
    s11p1.style.display = "none";
  }
});

s11b2.addEventListener("click", () => {
  if (s11p2.style.display === "none") {
    s11p2.style.display = "grid";
  } else {
    s11p2.style.display = "none";
  }
});

s11b3.addEventListener("click", () => {
  if (s11p3.style.display === "none") {
    s11p3.style.display = "grid";
  } else {
    s11p3.style.display = "none";
  }
});

s11b4.addEventListener("click", () => {
  if (s11p4.style.display === "none") {
    s11p4.style.display = "grid";
  } else {
    s11p4.style.display = "none";
  }
});

//---------------------------------s12buttons----------------------------------------------//

s12b1.addEventListener("click", () => {
  s12b1.style.border = "2px solid #DF3D3A";
  s12b2.style.border = "none";
  s12img1.style.opacity = "1";
  s12img2.style.opacity = "0";
});

s12b2.addEventListener("click", () => {
  s12b2.style.border = "2px solid #DF3D3A";
  s12b1.style.border = "none";
  s12img2.style.opacity = "1";
  s12img1.style.opacity = "0";
});

//---------------------------------footer button----------------------------------------------//

fbutton.addEventListener("mousedown", () => {
  fbutton.style.border = "1px solid rgba($color: #fff, $alpha: 0.8)";
  fbutton.style.color = "#B5302D";
});

fbutton.addEventListener("mouseup", () => {
  fbutton.style.border = "1px solid #DF3D3A";
  fbutton.style.Color = "rgba($color: #fff, $alpha: 0.9)";
});
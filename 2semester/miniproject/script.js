const backdrop1 = document.querySelector(".backdrop1");
const backdrop2 = document.querySelector(".backdrop2");

const open1 = document.querySelector(".btn-open1");
const close1 = document.querySelector(".btn-close1");
const open2 = document.querySelector(".btn-open2");
const close2 = document.querySelector(".btn-close2");

const is_hidden = document.querySelector(".is-hidden");

const noscrollforyou = () => {
  document.body.style.overflow = "hidden";
};

const scroll = () => {
  document.body.style.overflow = "auto";
};

open1.addEventListener("click", () => {
  backdrop1.classList.remove("is-hidden");
  noscrollforyou();
  backdrop1.style.zIndex = "3";
  is_hidden.style.zIndex = "2";
  is_hidden.style.height = "100vh";
  backdrop1.style.height = "100vh";
  backdrop2.style.height = "100vh";
});

close1.addEventListener("click", () => {
  backdrop1.classList.add("is-hidden");
  scroll();
  backdrop1.style.zIndex = "-1";
  is_hidden.style.height = "0px";
  backdrop1.style.height = "0px";
  backdrop2.style.height = "0px";
});

open2.addEventListener("click", () => {
  backdrop2.classList.remove("is-hidden");
  backdrop1.classList.add("is-hidden");
  noscrollforyou();
  backdrop2.style.zIndex = "3";
  backdrop1.style.zIndex = "-1";
});

close2.addEventListener("click", () => {
  backdrop2.classList.add("is-hidden");
  scroll();
  backdrop2.style.zIndex = "-1";
  is_hidden.style.height = "0px";
  backdrop1.style.height = "0px";
  backdrop2.style.height = "0px";
});

const backdrop1 = document.querySelector(".backdrop");
const backdrop2 = document.querySelector(".backdrop-second");
const backdrop3 = document.querySelector(".backdrop-third");

const open1 = document.querySelector(".btn-open");
const close1 = document.querySelector(".btn-close");
const open2 = document.querySelector(".btn-open-second");
const close2 = document.querySelector(".btn-close-both");
const open3 = document.querySelector(".btn-open-third");
const close3 = document.querySelector(".btn-close-third");

const noscrollforyou = () => {
  document.body.style.overflow = "hidden";
};

const scroll = () => {
  document.body.style.overflow = "auto";
};

open1.addEventListener("click", () => {
  backdrop1.classList.remove("is-hidden");
  noscrollforyou();
  backdrop1.style.zIndex = "15";
});

close1.addEventListener("click", () => {
  backdrop1.classList.add("is-hidden");
  scroll();
  backdrop1.style.zIndex = "-1";
});

open2.addEventListener("click", () => {
  backdrop2.classList.remove("is-hidden");
  backdrop1.classList.add("is-hidden");
  backdrop1.style.zIndex = "-1";
  backdrop2.style.zIndex = "5";
});

close2.addEventListener("click", () => {
  backdrop2.classList.add("is-hidden");
  backdrop1.style.zIndex = "-1";
  backdrop2.style.zIndex = "-1";
  scroll();
});

open3.addEventListener("click", () => {
  backdrop3.classList.remove("is-hidden-second");
  noscrollforyou();
  backdrop3.style.zIndex = "2";
});

close3.addEventListener("click", () => {
  backdrop3.classList.add("is-hidden-second");
  backdrop3.style.zIndex = "-1";
  scroll();
});

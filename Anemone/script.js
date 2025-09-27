const backdrop1 = document.querySelector('.backdrop');
const backdrop2 = document.querySelector('.backdrop-second');
const backdrop3 = document.querySelector('.backdrop-third');

const open1 = document.querySelector('.btn-open');
const close1 = document.querySelector('.btn-close');
const open2 = document.querySelector('.btn-open-second');
const close2 = document.querySelector('.btn-close-both');
const open3 = document.querySelector('.btn-open-third');
const close3 = document.querySelector('.btn-close-third');

const noscrollforyou = () => {
    document.body.style.overflow = 'hidden';
};

const scroll = () => {
    document.body.style.overflow = 'auto';
}

open1.addEventListener('click', () => {
    backdrop1.classList.remove('is-hidden');
    noscrollforyou();
});

close1.addEventListener('click', () => {
    backdrop1.classList.add('is-hidden');
    scroll();
});

open2.addEventListener('click', () => {
    backdrop2.classList.remove('is-hidden');
    backdrop1.classList.add('is-hidden');
    backdrop1.style.zIndex = '1';
});

close2.addEventListener('click', () => {
    backdrop2.classList.add('is-hidden');
    backdrop1.style.zIndex = '3';
    scroll();
});

open3.addEventListener('click', () => {
    backdrop3.classList.remove('is-hidden-second');
    noscrollforyou();
});

close3.addEventListener('click', () => {
    backdrop3.classList.add('is-hidden-second');
    scroll();
});
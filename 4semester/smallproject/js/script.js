// yarik modal&header
let modalbool = false;

const smopen = document.getElementById('smopen');
const smclose = document.getElementById('smclose');

const searchmodal = document.getElementById('searchmodal');

smopen.addEventListener('click', () => {
    if (modalbool === true) {
        return;
    }
    searchmodal.style.display = 'flex';
    modalbool = true;
});

smclose.addEventListener('click', () => {
    searchmodal.style.display = 'none';
    modalbool = false;
});

 const lmopen = document.getElementById('lmopen');
 const lmclose = document.getElementById('lmclose');

 const loginmodal = document.getElementById('loginmodal');

lmopen.addEventListener('click', () => {
    if (modalbool === true) {
        return;
    }
    loginmodal.style.display = 'flex';
    modalbool = true;
});

lmclose.addEventListener('click', () => {
    loginmodal.style.display = 'none';
    modalbool = false;
});

 const bmopen = document.getElementById('bmopen');
 const bmclose = document.getElementById('bmclose');

 const bagmodal = document.getElementById('bagmodal');

bmopen.addEventListener('click', () => {
    if (modalbool === true) {
        return;
    }
    bagmodal.style.display = 'flex';
    modalbool = true;
});

bmclose.addEventListener('click', () => {
    bagmodal.style.display = 'none';
    modalbool = false;
});
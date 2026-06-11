//entry things
const welcome = document.getElementById('modalwelcomebg');
const modalinput = document.getElementById('modalinput');
const namething = document.getElementById('namething');
const modalthxopen = document.getElementById('modalthxopen');
const modalwelcome = document.getElementById('modalwelcome');
const modalthx = document.getElementById('modalthx');
const modalthxclose = document.getElementById('modalthxclose');

var user = undefined;

modalinput.addEventListener('keyup', (el) => {
    user = el.target.value;
});

modalthxopen.addEventListener('click', () => {
    if (user == undefined) {
        return;
    }
    modalwelcome.style.display = 'none';
    modalthx.style.display = 'flex';
});

modalthxclose.addEventListener('click', () => {
        if (user == 'tung tung tung sahur') {
            document.getElementById('html').style.display = 'none';
        }
        namething.textContent = 'Вітаємо, ' + user;
        welcome.style.display = 'none';
        modalthx.style.display = 'none';
})
//header things
//navbar interactive thing
const navinterthing = document.getElementById('navinterthing');
const headermodal = document.getElementById('headermodal');
const headermodalbtn = document.querySelectorAll('#headermodal');

var navinterbool = false;

navinterthing.addEventListener('click', () => {
    if (navinterbool == false) {
        headermodal.style.display = 'flex';
        navinterbool = true;
    } else {
        headermodal.style.display = 'none';
        navinterbool = false;
    }
});
//theme
const themebtn = document.getElementById('theme');

var bravosix = 'light';

themebtn.addEventListener('click', () => {
    if (bravosix == 'light') {
        themebtn.style.animation = 'bravo-six-going-dark 0.25s forwards';
        themebtn.textContent = '☾';
        bravosix = 'brr skibidi dop dop dop dop yes yes';
    } else {
        themebtn.style.animation = 'bravo-six-going-light 0.25s forwards';
        themebtn.textContent = '☼';
        bravosix = 'light';
    }
});
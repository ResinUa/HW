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
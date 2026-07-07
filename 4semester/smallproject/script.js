import JustValidate from 'just-validate';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import swal from 'sweetalert';

const smopen = document.getElementById('smopen');
const smclose = document.getElementById('smclose');

const searchmodal = document.getElementById('searchmodal');

smopen.addEventListener('click', () => {
    searchmodal.style.display = 'flex';
});

smclose.addEventListener('click', () => {
    searchmodal.style.display = 'none';
});
const refs = {
  open1: document.querySelector('.btn-open'),
  close1: document.querySelector('.btn-close'),
  bd1: document.querySelector('.backdrop'),

  open2: document.querySelector('.btn-open-second'),
  close2: document.querySelector('.btn-close-second'),
  bd2: document.querySelector('.backdrop-second'),

  body: document.body,
};

function openModal(el) {
  el.classList.remove('is-hidden');
  refs.body.style.overflow = 'hidden';
}

function closeModal(el) {
  el.classList.add('is-hidden');
  if (refs.bd1.classList.contains('is-hidden') && refs.bd2.classList.contains('is-hidden')) {
    refs.body.style.overflow = '';
  }
}

refs.open1.addEventListener('click', () => openModal(refs.bd1));
refs.close1.addEventListener('click', () => closeModal(refs.bd1));

refs.open2.addEventListener('click', (e) => {
  e.stopPropagation();
  openModal(refs.bd2);
});
refs.close2.addEventListener('click', () => closeModal(refs.bd2));

[refs.bd1, refs.bd2].forEach((bd) => {
  bd.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal(bd);
  });
});

refs.close2.addEventListener('click', () => {
  closeModal(refs.bd1);
  closeModal(refs.bd2);
});
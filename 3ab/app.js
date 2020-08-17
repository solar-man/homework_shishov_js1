'use strict';

let modalWindow = document.querySelector('.wrap');
let modalWindowClose = document.querySelector('span');
let modalWindowBtn = document.querySelector('button');

modalWindowBtn.addEventListener('click', function () {
    modalWindow.classList.remove('hidden', 'puffOut');
    modalWindow.classList.add('magictime', 'puffIn');
});

modalWindowClose.addEventListener('click', function () {
    modalWindow.classList.remove('puffIn');
    modalWindow.classList.add('magictime', 'puffOut');
    setTimeout(() => {
        modalWindow.classList.add('hidden');
    }, 1000);
});
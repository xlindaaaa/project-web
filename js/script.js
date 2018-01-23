/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var button = document.querySelector('.like');

var klik = function () {
    button.classList.toggle('likerood');
};

button.addEventListener('click', klik);

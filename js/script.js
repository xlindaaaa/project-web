/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*like knop*/
var button = document.querySelector(".like");
var favoriet = document.querySelector(".favorieten");

var klik = function () {
    button.classList.toggle("likerood");
    favoriet.classList.toggle("favorieten-tekst");
};

button.addEventListener("click", klik);

/*download knop
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_3*/


function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            window.location.assign("favorieten2.html");
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

}

function up() {
    let img = document.getElementById("img");
    img.style.top = parseInt(img.style.top) - 5 + 'px';
}
function down() {
    var img = document.getElementById("img");
    img.style.top = parseInt(img.style.top) + 5 + 'px';
}
function left() {
    var img = document.getElementById("img");
    img.style.left = parseInt(img.style.left) - 5 + 'px';
}
function right() {
    var img = document.getElementById("img");
    img.style.left = parseInt(img.style.left) + 5 + 'px';

}
function a(e) {
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            up();
            break;
        case 40:
            down();
            break;
    }
}
function x() {
    window.addEventListener('keydown', a);
}
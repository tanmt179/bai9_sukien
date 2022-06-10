let img=null;
img=document.getElementById('img');
function a(){
    img.style.position = 'relative';
    img.style.left = '0px';
}
function moveright(){
    img.style.left= parseInt(img.style.left) + 10+ 'px'
}
window.onload=a;
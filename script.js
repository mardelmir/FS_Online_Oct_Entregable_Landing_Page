const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click',function () {
    nav.classList.add('visible');
})

cerrar.addEventListener('click',function () {
    nav.classList.remove('visible');
})
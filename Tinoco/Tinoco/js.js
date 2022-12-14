/*function redirect()
    {
    window.location.href="https://sistemas.cruzperez.com/ctinoco/Tinoco/agregarResp.html",param;
    }*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

$('#table-container-breakpoint').basictable({
    containerBreakpoint: 485,
});
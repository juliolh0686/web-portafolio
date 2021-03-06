const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click",()=>{
   navMenu.classList.toggle("nav-menu_visible");

   if(navMenu.classList.contains("nav-menu_visible")){
       navToggle.setAttribute("aria-label","Cerrar Menú");
   }else{
       navToggle.setAttribute("aria-label","Abrir Menú");
   }
})

//Inmovilizar header

// Detectamos cuando el usuario desplace la pantalla
window.onscroll = function () {
    // Obtenemos la posicion del scroll en pantalla
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    const header = document.querySelector('.header');

    // Realizamos alguna accion cuando el scroll este diferente a la posicion 0
    if(scroll > 0) {
        header.classList.add('menu_flotante');
    } else {
        header.classList.remove('menu_flotante');
    }
}


//Formulario
let formulario = document.getElementById('form_contacto');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let datos = new FormData(formulario);

    alert(datos);

    peticion = {
        method: 'POST',
        body: datos,
    }

    fetch ('../../php/envio_correo.php',peticion)
        .then(respuesta => respuesta.json())
        .then(respuesta => {

        }).catch(error => console.log('error',error));

});
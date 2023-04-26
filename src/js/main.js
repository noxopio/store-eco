'use strict'



const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const gallery = document.querySelector('.gallery-img')
const punto = document.querySelectorAll('.punto')
const eco = document.querySelector('#eco');

window.onload = (event) => {
    setTimeout(() => {
        eco.classList.add('eco');  
        
        eco.innerText = 'ECO-STORE';
        overlay.addEventListener('click', of)
        function of() {
            overlay.style.display = "none";
            body.classList.remove("hidden");


        };


    },400);
};



// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al gallery
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click', () => {

        // Guardar la posición de ese PUNTO
        let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.3;

        // MOVEMOS el grand
        gallery.style.transform = `translateX(${operacion}%)`

        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})


/* Funcion menu desplegable, Cuando hago CLICK .button, .nav TOGGLE 'activo' */

const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

/* Funcion cambiar imagen al deslizar el mouse por encima  */

window.addEventListener('load', iniciar, false);

function iniciar() {
    var imagen = document.getElementById('imagen'), original = imagen.src;
    
    imagen.addEventListener('mouseover', function(){
        this.src = "img/imagen2.jpg";
    }, false);

    imagen.addEventListener('mouseout', function(){
        this.src = original;
    }, false);
}

/* crear habilidades html  */

let habilidades = [
    {
        nombre: "Proactiva",
        img: "img/proactivo.svg"
    },
    {
        nombre: "Adaptabilidad",
        img: "img/adaptabilidad.svg"
    },
    {
        nombre: "Iniciativa",
        img: "img/iniciativa.svg"
    },
    {
        nombre: "Resolucion de Problemas",
        img: "img/resolucion.svg"
    },
    {
        nombre: "Trabajo en Equipo",
        img: "img/trabajo.svg"
    }
];

function crearHTMLHabilidad(habilidad) {
    let nombreHabilidad = document.createElement("h3");
    nombreHabilidad.innerText = habilidad.nombre;

    let imagenHabilidad = document.createElement("img");
    imagenHabilidad.src = habilidad.img;

    let listItem = document.createElement("li");
    listItem.appendChild(nombreHabilidad);
    listItem.appendChild(imagenHabilidad);

    return listItem;
}

const listaHabilidades = document.querySelector('#habilidad-list');

habilidades.forEach(function(habilidad) {
    let habilidadListItem = crearHTMLHabilidad(habilidad);
    listaHabilidades.appendChild(habilidadListItem);
});


/* mostrar habilidades cuando se hace click en el boton */

const button2 = document.querySelector('.button2');
const habilidadesDiv = document.querySelector('.div-habilidades');

button2.addEventListener('click', function() {
    if (habilidadesDiv.style.display === 'none')
    {habilidadesDiv.style.display = 'flex';} 

    else {
        habilidadesDiv.style.display = 'none';}
});


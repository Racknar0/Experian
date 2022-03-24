/************** ( 'SELECTORES' ) **************/

const formulario = document.querySelector('#formulario');

const nombreInput = document.querySelector('#nombre');
const apellidosInput = document.querySelector('#apellidos');
const documentoInput = document.querySelector('#documento');
const numDocumentoInput = document.querySelector('#numDocumento');
const emailInput = document.querySelector('#email');
const numCelularInput = document.querySelector('#numCelular');
const fechaNacimientoInput = document.querySelector('#fechaNacimiento');

/* const seleccionGenero = document.querySelectorAll('input[name="radio"]') */

const InputgeneroMen = document.querySelector('#InputgeneroMen');
const InputgeneroMenWomen = document.querySelector('#InputgeneroMenWomen');

/* selectores toggle flags */
const desplegar = document.querySelector('#dDown');
const colombia = document.querySelector('#col');
const chile = document.querySelector('#chi');

/* selectores inputs genero */
const inputGeneroHombre = document.querySelector('#inputGeneroHombre');
const inputGeneroMujer = document.querySelector('#inputGeneroMujer');

const user = {
    nombre: '',
    apellidos: '',
    documento: '',
    numDocumento: '',
    email: '',
    numCelular: '',
    fechaNacimiento: '',
};

/************** ( 'LISTENERS' ) **************/

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom cargado');
    obtenerPlatillos()
})

/* listener desplegar flags */
desplegar.addEventListener('click', desplegarList);

/* listeners inputs genero */
inputGeneroMujer.addEventListener('click', () => {
    inputGeneroMujer.classList.add('inputGeneroActive');
    inputGeneroHombre.classList.remove('inputGeneroActive');
});

inputGeneroHombre.addEventListener('click', () => {
    inputGeneroMujer.classList.remove('inputGeneroActive');
    inputGeneroHombre.classList.add('inputGeneroActive');
});

formulario.addEventListener('submit', enviandoInfo);

/************** ( 'FUNCIONES' ) **************/



function obtenerPlatillos() {
    const url = 'https://api.npoint.io/543934aeb0c7ebbf2c4f';

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => llenarForm(resultado))
        .catch((error) => console.log(error));
}


/* funciones flags */
function desplegarList() {
    chile.classList.remove('hidden');
    colombia.addEventListener('click', ocultarChile);
    chile.addEventListener('click', ocultarColombia);
}

function ocultarChile() {
    chile.classList.toggle('hiddens');
}

function ocultarColombia() {
    colombia.classList.toggle('hidden');
}

/* funcion Sbumit */

function enviandoInfo(e) {
    e.preventDefault();

    if (!document.querySelector('input[name="radio"]:checked')) {
        alert('selecciona algun genero');
        return;
    } else {
        const generoInput = document.querySelector('input[name="radio"]:checked').value;
        user.genero = generoInput;
    }

    /* ASIGNAR VALORES AL OBJETO */
    user.nombre = nombreInput.value;
    user.apellidos = apellidosInput.value;
    user.documento = documentoInput.value;
    user.numDocumento = numDocumentoInput.value;
    user.email = emailInput.value;
    user.numCelular = numCelularInput.value;
    user.fechaNacimiento = fechaNacimientoInput.value;

    console.log(user);
}

/* extraer con destructuring los valores de la API */
function llenarForm({nombre, apellidos, documento ,numDocumento, email, numCelular, fechaNacimiento, genero }) {
    nombreInput.value = nombre;
    apellidosInput.value = apellidos;
    documentoInput.value = documento;
    numDocumentoInput.value = numDocumento;
    emailInput.value = email;
    numCelularInput.value = numCelular;
    fechaNacimientoInput.value = fechaNacimiento;
    console.log(genero);

    if ( genero === 'hombre') {
        console.log('es hombre');
        document.querySelector('#InputgeneroMen').checked = true;
    } else {
        console.log('es mujer');
        document.querySelector('#InputgeneroMenWomen').checked = true;
    }
}
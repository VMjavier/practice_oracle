let amigos = [];

// Obtener referencias a los elementos del DOM
const inputNombreAmigo = document.getElementById('amigo');
const botonAgregarAmigo = document.getElementById('agregarAmigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputNombreAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre. No puede estar vacío.');
        return;
    }

    amigos.push(nombre);
    inputNombreAmigo.value = '';

    // Mostrar los nombres en pantalla
    mostrarAmigos();
}

// Función para mostrar los nombres en pantalla
function mostrarAmigos() {
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const elemento = document.createElement('li'); // Usar <li> para la lista
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });
}

function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSeleccionado = amigos[indiceAleatorio];

    if(amigos.length === 0) {
        alert('No hay amigos para sortear en la lista!!');
        return;
    }

    listaAmigos.style.display = 'none';
    //botonAgregarAmigo.style.display = 'none';

    resultado.textContent = `El amigo secreto es: ${nombreSeleccionado}`;

}

// Asignar el evento click al botón para agregar un amigo
botonAgregarAmigo.addEventListener('click', agregarAmigo);
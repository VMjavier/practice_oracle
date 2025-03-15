let amigos = [];

// Obtener referencias a los elementos del DOM
const inputNombreAmigo = document.getElementById('amigo');
const botonAgregarAmigo = document.getElementById('agregarAmigo');
const listaAmigos = document.getElementById('listaAmigos');

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

// Asignar el evento click al botón para agregar un amigo
botonAgregarAmigo.addEventListener('click', agregarAmigo);
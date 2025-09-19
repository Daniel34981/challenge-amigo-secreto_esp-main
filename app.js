// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array que guardará los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios en blanco

    // 2. Validar la entrada
    if (nombre === "") {
    alert("⚠️ Por favor, inserte un nombre.");
    return;
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombre);

    // Mostrar la lista actualizada en pantalla
    mostrarLista();

    // 4. Limpiar el campo de entrada
    input.value = "";

    console.log(amigos); // solo para verificar en consola por ahora
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    // 1. Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un nuevo <li> para cada amigo
    let item = document.createElement("li");
    item.textContent = amigos[i];

    // Agregar <li> a la lista
    lista.appendChild(item);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
    alert("⚠️ No hay amigos en la lista para sortear.");
    return;
    }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}


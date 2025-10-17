// script.js - Gestión de lista dinámica

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos del DOM
    const lista = document.getElementById('lista-items');
    const inputTexto = document.getElementById('nuevo-item-texto');
    const botonAgregar = document.getElementById('agregar');
    const botonEliminar = document.getElementById('eliminar');
    
    // 1. AL HACER CLIC EN EL BOTÓN "AGREGAR"
    botonAgregar.addEventListener('click', function() {
        // Leer el valor del campo de texto
        const texto = inputTexto.value;
        
        // Validar que el campo no esté vacío
        if (texto.trim() === '') {
            alert('Por favor, escribe algo en el campo de texto');
            return;
        }
        
        // Crear un nuevo elemento <li> con el texto introducido
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;
        
        // Añadir el nuevo <li> al final de la lista <ul>
        lista.appendChild(nuevoItem);
        
        // Limpiar el campo de texto después de añadir el elemento
        inputTexto.value = '';
    });
    
    // 2. AL HACER CLIC EN EL BOTÓN "ELIMINAR"
    botonEliminar.addEventListener('click', function() {
        // Verificar si la lista está vacía
        if (lista.children.length === 0) {
            // Si la lista está vacía, no hacer nada
            return;
        }
        
        // Quitar el último <li> de la lista
        const ultimoItem = lista.lastElementChild;
        lista.removeChild(ultimoItem);
    });
});

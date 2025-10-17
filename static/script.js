
        // Esperar a que el DOM esté completamente cargado
        document.addEventListener('DOMContentLoaded', function() {
            // Obtener referencia al botón
            const boton = document.getElementById('cambiarTexto');
            
            // Agregar evento click al botón
            boton.addEventListener('click', function() {
                // 1. Modificar el título (por id)
                const titulo = document.getElementById('titulo');
                titulo.textContent = '¡PAGINA INTERACTIVA!';
                
                // . Modificar el párrafo (por clase)
                /*const descripciones = document.getElementsByClassName('descripcion');
                if (descripciones.length > 0) {
                    descripciones[0].textContent = 'Este texto fue cambiado dinámicamente usando JavaScript.';
                }*/
                //. Usar document.querySelector para seleccionar el párrafo por su clase
                const parrafo = document.querySelector('.descripcion');
                
                // Añadir un borde de 1px sólido mediante la propiedad style
                parrafo.style.border = '1px solid black';
                // . Cambiar el texto del botón
                boton.textContent = '¡Cambios Aplicados!';
                
                // . Agregar contenido dinámico al div vacío
                const contenidoDinamico = document.getElementById('contenido-dinamico');
                contenidoDinamico.innerHTML = `
                    <h3>Contenido Generado Dinámicamente</h3>
                    <p>Este contenido fue agregado usando JavaScript</p>
                    <ul>
                        <li>Elemento de lista 1</li>
                        <li>Elemento de lista 2</li>
                        <li>Elemento de lista 3</li>
                    </ul>
                `;
            });
        });

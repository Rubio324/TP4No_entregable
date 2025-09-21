package main

import (
	/*"fmt"*/
	"net/http"
	/*"strings"*/)

func main() {
	// 1. Define el contenido HTML AAAAAAAAAAAAAAAAAAAAA
	htmlContent := "./static"
	fileServer := http.FileServer(http.Dir(htmlContent))
	// 2. Registra un manejador (handler) para la ruta raíz "/"
	http.Handle("/", fileServer)

	// 2. Registra un manejador (handler) para la ruta raíz "/"
	/*http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		//  http.ResponseWriter Para escribir la respuesta HTTP
		// *http.Request: Contiene información de la solicitud
		// 3. Establece la cabecera Content-Type
		// 4. Muestra el formulario cuando la solicitud es GET
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprint(w, htmlContent)

	})*/

	http.HandleFunc("/contacto", contacto)

	// 5. Define el puerto y muestra un mensajew.Header().Set("Content-Type", "text/html; charset=utf-8")
	iniciarServidor()

}

// 1. Parsear los datos del formulario (¡Crucial!) //resuelto con FORMVALUE
/*if err := r.ParseForm(); err != nil {
	http.Error(w, "Error al parsear", http.StatusBadRequest)
	return
}*/

//para mostrar esta informacion del servidor debo abrir otra terminal
//curl -v http://localhost:8080

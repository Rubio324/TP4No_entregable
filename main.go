package main

import (
	/*"fmt"*/
	"net/http"
	/*"strings"*/)

func main() {
	// 1. Define el contenido HTML
	htmlContent := "./static"
	fileServer := http.FileServer(http.Dir(htmlContent))
	// 2. Registra un manejador (handler) para la ruta raíz "/"
	http.Handle("/", fileServer)

	//http.HandleFunc("/contacto", contacto)

	// 5. Define el puerto y muestra un mensajew.Header().Set("Content-Type", "text/html; charset=utf-8")
	iniciarServidor()

}

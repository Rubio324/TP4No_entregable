package main

import (
	/*"fmt"*/
	"net/http"
	/*"strings"*/)

func main() {
	// Manejo automatico Content-Type para archivos estàticos
	htmlContent := "./static"
	fileServer := http.FileServer(http.Dir(htmlContent))
	// Registra un manejador (handler) para la ruta raíz "/"
	http.Handle("/", fileServer)

	// Define el puerto e inicia el servidor
	iniciarServidor()
}

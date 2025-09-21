package main

import (
	"fmt"
	"net/http"
	"strings"
)

func contacto(w http.ResponseWriter, r *http.Request) {
	//muestra bien el html
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	// Solo permitir POST
	if r.Method == http.MethodGet {
		http.Error(w, "Método no permitido. Use POST.", http.StatusMethodNotAllowed)
		return
	}
	// Obtener valores
	// Validar campos
	nombre := strings.TrimSpace(r.FormValue("usuario"))
	email := strings.TrimSpace(r.FormValue("email"))

	if nombre == "" || email == "" {
		// Mostrar error al usuario
		fmt.Fprintf(w, `<!DOCTYPE html>
            <html>
            <head><title>Error</title></head>
            <body>
                <h1 style="color: red;">Error</h1>
                <p>Todos los campos son obligatorios</p>
                <a href="/">Volver al formulario</a>
            </body>
            </html>`)
		return
	}

	// Mostrar resultados
	fmt.Fprintf(w, `<h1>Datos recibidos</h1>
		<p><strong>Nombre:</strong> %s</p>
		<p><strong>Email:</strong> %s</p>
		<a href="/">Volver al formulario</a>`, nombre, email)
}

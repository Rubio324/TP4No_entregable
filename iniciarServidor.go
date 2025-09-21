package main

import (
	"fmt"
	"net/http"
)

func iniciarServidor() {
	port := ":8080"
	fmt.Printf("Servidor escuchando en http://localhost%s\n", port)
	// 6. Inicia el servidor HTTP
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Printf("Error al iniciar el servidor: %s\n", err)
	}

}

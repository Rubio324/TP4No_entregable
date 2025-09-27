

generador-preguntas/
├── 📄 main.go                    # Punto de entrada del servidor Go
├── 🔧 iniciar_servidor.go        # Configuración y inicio del servidor
├── 📦 go.mod                     # Configuración de módulos de Go
└── 📁 static/                    # Frontend de la aplicación
    ├── 🏠 index.html             # Interfaz principal de usuario
    ├── 🎨 estilos.css            # Estilos y diseño responsive
    └── ⚡ script.js              # Lógica de la aplicación

🚀 Ejecución

Descargar el proyecto
-- git clone <url-del-repositorio>
-- cd generador-preguntas

Inicializar módulos de Go (si es necesario) ESTO NO SE SI VA
--go mod init generador-preguntas
--go mod tidy

Ejecutar el servidor
--go run main.go iniciar_servidor.go

Abrir la aplicación
--Navega a http://localhost:8080 en tu navegador
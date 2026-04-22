🚀 Guía de Despliegue - Sanyser Web
Este proyecto utiliza Vite y se despliega automáticamente en Hostinger a través de Git. El repositorio está dividido en el código fuente (main) y los archivos de producción (deploy).

🛠 Estructura de Trabajo
Rama main: Contiene todo el código fuente, componentes y lógica.

Rama deploy: Contiene solo los archivos compilados de la carpeta dist. Es la que lee Hostinger.

💻 Flujo de Trabajo Diario
Cuando termines de hacer cambios en el sitio, ejecuta estos pasos en orden desde la raíz del proyecto:

1. Guardar cambios en el código fuente
Bash
git add .
git commit -m "Descripción clara del cambio (ej: fix: margen en botones)"
git push origin main
2. Generar y subir la versión para producción
Bash
# Compilar el proyecto
npm run build --prefix sanyser-landing

# Enviar la carpeta dist a la rama de despliegue
git subtree push --prefix sanyser-landing/dist origin deploy
🌐 Actualización en el Servidor (Hostinger)
Si configuraste el Webhook: No tienes que hacer nada. En cuanto el paso anterior termine, Hostinger detectará el cambio y actualizará sanyser.com.ar en segundos.

Si es manual: Entra al panel de Hostinger -> Avanzado -> GIT y haz clic en el botón "Desplegar" (Deploy) sobre la rama deploy.

⚠️ Notas importantes
Carpeta dist: Está en el .gitignore de la rama main para no ensuciar el repo, pero el comando subtree se encarga de extraerla para el despliegue.

Directorio en Hostinger: La configuración debe apuntar a la rama deploy y el "Directorio de instalación" debe quedar vacío (raíz de public_html).
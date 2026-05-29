# Guía de instalación con Vite + Sass

1. Instalar Node ultima version LTS
2. npm create vite@latest sass-vite-template
3. cd sass-vite-template, meternos a la carpeta
4. npm i, instalar las dependencias
5. npm i sass, descargar sass
6. npm i sass --save-dev, para instalar sass y guardarlo en el package.json
7. Crear fichero de configuración vite.config.js para conseguir que los enlaces de los archivos sean relativos.

"import { defineConfig } from "vite";

export default defineConfig({
base: "./",
});
"

8. npm run build

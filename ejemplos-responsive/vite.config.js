import { defineConfig } from "vite";
import path from "path"; // Necesitamos importar path

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      // Esto crea un atajo: donde pongas @sass, Vite buscará en tu carpeta 'sass'
      "@sass": path.resolve(__dirname, "./sass"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Esto es opcional, pero muy útil:
        // Permite que Sass busque en 'sass' sin tener que poner rutas relativas
        includePaths: [path.resolve(__dirname, "./sass")],
      },
    },
  },
});

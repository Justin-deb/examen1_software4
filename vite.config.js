import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // No definas 'root' como 'html' aquí, deja la raíz por defecto
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // El index de la raíz
        pagina: resolve(__dirname, "html/pagina.html"), // Tu página de examen
      },
    },
  },
});

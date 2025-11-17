import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === "development";

    console.log(`Construyendo la librería en modo: ${mode}`);

    return {
        plugins: [
            react({
                babel: {
                    plugins: [["babel-plugin-react-compiler"]],
                },
            }),
        ],
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode),
        },
        build: {
            outDir: "../webroot/js/custom-web-components",
            emptyOutDir: true,
            // Desactivamos la minificación si estamos en modo desarrollo
            minify: !isDev,

            lib: {
                // El punto de entrada a nuestra librería
                // (el archivo que registra los web components)
                entry: path.resolve(__dirname, "src/mainLib.tsx"),

                // El nombre que tendría en un build UMD/IIFE
                name: "CustomReactWebComponentsLib",

                // El formato de módulo. 'es' (ES Module) es perfecto
                // para cargarlo con <script type="module"> en CakePHP.
                formats: ["es"],

                // 6. ¡Lo más importante!
                // Esto fuerza el nombre del archivo de salida.
                fileName: (format) =>
                    `react-lib-bundle.${format}.js`,
            },
        },
    };
});

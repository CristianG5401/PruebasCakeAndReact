import r2wc from "@r2wc/react-to-web-component";

import HelloWidget from "./HelloWidget.jsx";

// Envolvemos el componente React
const WcHello = r2wc(HelloWidget, {
    props: {
        name: "string",
    },
});

// Registro de la etiqueta HTML personalizada
customElements.define("hello-widget", WcHello);

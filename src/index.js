// el index.js es un archivo de configuración
// si no para hacer cambios en componentes aparte

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  //funcion que recibe 2 parametros el jsx y el selector de etiqueta que queremos cargar
  // el jsx es js mezclado con html
  <App />, //primer parametro
  document.querySelector("#root") //segundo parametro
);

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// Arrays con las palabras
let pronoun = ["el", "vuestro"];
let adj = ["perfecto", "enorme"];
let noun = ["saltador", "cazador"];

// Selección del elemento de la lista en el HTML
let domainList = document.getElementById("domain-list");

// Bucles anidados para generar combinaciones
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      // Concatenación de strings para formar el dominio
      let domain = pronoun[i] + adj[j] + noun[k] + ".com";

      // Creación de un elemento de lista
      let listItem = document.createElement("li");

      // Establecer el contenido del elemento de lista
      listItem.textContent = domain;

      // Añadir el elemento de lista al elemento ul
      domainList.appendChild(listItem);
    }
  }
}

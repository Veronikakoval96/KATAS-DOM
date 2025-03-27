const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const div = document.querySelector("div")
const lista = document.createElement("ul")
div.appendChild(lista)
for( let i = 0; i < places.length; i++){
    let elem = document.createElement("li")
    elem.innerText = places[i]
    lista.appendChild(elem)
}
//1.1
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  let lista = document.createElement("ul")
  document.body.appendChild(lista)

  for ( let i = 0; i < albums.length; i++){
    let elem = document.createElement("li")
    elem.innerText = albums[i]
    lista.appendChild(elem)
  }
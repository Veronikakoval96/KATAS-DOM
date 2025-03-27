//1.1
const elem = document.createElement("div")
document.body.appendChild(elem)

//1.2
const body = document.querySelector("body")
body.insertAdjacentHTML("beforeend", "<div><p></p></div>")

//1.3
const elem2 = document.createElement("div")
elem2.classList.add("ide")
document.body.appendChild(elem2)

    for( let i = 0; i < 6; i++ ){
        const pe = document.createElement("p")
        elem2.appendChild(pe)
    }

//1.4
const text = document.createElement("p")
text.innerText = ("Hola Mundo")
document.body.appendChild(text)

//1.5
const añadir = document.querySelector(".fn-insert-here")
añadir.innerText = ("Wuba Lubba dub dub")

//1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul")
document.body.appendChild(lista)
for(let i = 0; i < apps.length; i++){
    const li = document.createElement("li");
    li.innerText= apps[i]
    lista.appendChild(li)
}

//1.7
const eliminar = document.querySelectorAll(".fn-remove-me")
for (let i = 0; i < eliminar.length; i ++){
    eliminar[i].remove();
}

//1.8
const div2= document.querySelectorAll("div")[1]

const insertar = document.createElement("p")
insertar.innerText= ("Voy en Medio!")
body.insertBefore(insertar, div2)

//1.9

const insert = document.querySelectorAll(".fn-insert-here")
for (let i = 0; i < insert.length; i++){
    const dentro = document.createElement("p")
    dentro.innerText = ("Voy dentro!")
    insert[i].appendChild(dentro)
}


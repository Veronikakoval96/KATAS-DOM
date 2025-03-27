//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = document.createElement("ul")

for( let i = 0; i< countries.length; i++){
    const content = document.createElement("li")
    content.innerText= countries[i]
    lista.appendChild(content)
}

document.body.appendChild(lista)

//1.2
const eliminar = document.querySelector(".fn-remove-me")
eliminar.remove()

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const lista2 = document.createElement("ul")
for( let i= 0; i < cars.length; i++){
const nuevo = document.createElement("li")
nuevo.innerText = cars[i]
lista2.appendChild(nuevo)
}
const div = document.querySelector(`[data-function="printHere"]`)
div.appendChild(lista2)

//1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for( let i = 0; i < countries2.length; i++){

    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const img = document.createElement("img")
    h4.innerText = countries2[i].title
    img.src = countries2[i].imgUrl
    div.appendChild(h4)
    div.appendChild(img)
    document.body.appendChild(div)
}

//1.5

const button = document.createElement("button")
button.innerText = "Eliminar"
button.onclick = function (){
   const todos = document.querySelectorAll("div") 
   todos[todos.length-1].remove()
}
document.body.appendChild(button)

//1.6
    
for (let i = 0; i <nuevoDiv.length; i++){
    const button2 = document.createElement("button")
    button2.innerText = "Eliminar"
    button2.onclick = function (){
        div.remove()
        
    }
    div.appendChild(button2)
    
}

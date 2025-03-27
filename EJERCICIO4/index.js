//1.1
let button = document.querySelector("#btnToClick")
button.onclick = function (event){
    console.log(event)
}

//1.2
let enfoque = document.querySelector(".focus")
enfoque.addEventListener("focus", function(){
    enfoque.value = "Hola Hola"
    console.log(enfoque.value)
})

let input = document.querySelector(".value")
input.addEventListener("input", function (){
    console.log(input.value)
})
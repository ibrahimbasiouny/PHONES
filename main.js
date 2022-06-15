let img = document.querySelector('.img')
let  container = document.querySelector('.container')
let paragraphs =document.querySelector ('.paragraph')

function phones(phone){
  img.src = phone;
}
function colors (color){
  container.style.background = color;
}
function informations(information){
  paragraphs.innerHTML = information;
}

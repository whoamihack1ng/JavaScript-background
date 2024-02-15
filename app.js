const red = document.querySelector('#red')
const green = document.querySelector('#green')
const tomato = document.querySelector('#tomato')
const box = document.querySelector('#body')

red.addEventListener('click',function(){
    box.classList.toggle('red')
})
green.addEventListener('click',function(){
    box.classList.toggle('green')
})
tomato.addEventListener('click',function(){
    box.classList.toggle('tomato')
})
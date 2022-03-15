let burger =document.querySelector('.burger-container')
let nav=document.querySelector('.nav-list')
let navItem=document.querySelectorAll('.nav-item')

burger.addEventListener('click',()=>{
    burger.classList.toggle('burger-open')
    burger.classList.toggle('burger-container')
    nav.classList.toggle('nav-burger')
})

navItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        nav.classList.toggle('nav-burger')
        burger.classList.toggle('burger-open')
        burger.classList.toggle('burger-container')
    })
})
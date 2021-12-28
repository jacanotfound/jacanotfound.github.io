let button = document.querySelector('.button');
let dropmenu = document.querySelector('.dropmenu');

button.addEventListener("click",()=>{
    dropmenu.classList.toggle('dropmenu--active');
    button.classList.toggle('button--active');
});
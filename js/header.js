const toggleBtn = document.querySelector('.header__toggleBtn');
const nav = document.querySelector('.header__nav');
const contact = document.querySelector('.header__contact');


function btnHandler(){
    nav.classList.toggle('active');
    contact.classList.toggle('active');    
}

toggleBtn.addEventListener('click', btnHandler);
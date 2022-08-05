const target = document.querySelector("#dynamic");
const string = "I want to be a Front-end Developer";
const split = string.split("");

const toggleBtn = document.querySelector('.header__toggleBtn');
const nav = document.querySelector('.header__nav');
const contact = document.querySelector('.header__contact');

function reset(){
    target.textContent = "";
    const resplit = string.split("");
    dynamic(resplit);
}

function dynamic(arr){
    if(arr.length > 0){
        target.textContent += arr.shift();
        setTimeout(function(){
            dynamic(arr)}, 80)
    } else {
        setTimeout(reset, 3000);
    }
}
dynamic(split);


function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500)

function btnHandler(){
    nav.classList.toggle('active');
    contact.classList.toggle('active');    
}

toggleBtn.addEventListener('click', btnHandler);
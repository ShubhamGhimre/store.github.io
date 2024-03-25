const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
const mobile = document.getElementById("mobile")


if(bar){
    
    bar.addEventListener('click', ()=>{
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        navbar.classList.remove('active');
    })
}
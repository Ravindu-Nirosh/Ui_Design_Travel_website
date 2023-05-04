const preloader =document.querySelector("[data-preloader]");

window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
});

// add eventlistner on multipul elements

const addEventOnElement =function(elemenst,eventType,callback){
    for(let i=0;i<elemenst.length;i++){
        elemenst[i].addEventListener(eventType,callback);
    }
}

// navbar toggle for mobile

const navbar=document.querySelector("[data-navbar]");
const navTogller=document.querySelectorAll("[data-nav-toggler]");
const overly=document.querySelector("[data-overly]");


const toggleNav=function(){
    navbar.classList.toggle("active");
    overly.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement(navTogller,"click",toggleNav);

// header active
const header=document.querySelector('[data-header]')

window.addEventListener('scroll',()=>{
    // if(window.scrollY>30){
    //     header.classList.add('active')
    // }else{
    //     header.classList.remove('active')
    // }
    // shorter way to do this is

    header.classList[window.scrollY>100? "add":"remove"]("active");
})
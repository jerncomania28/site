const menuBtn = document.querySelector('.menu-bar');
const menuBurger = document.querySelector('.menu-bar_burger');
const nav = document.querySelector('nav');
const navList = document.querySelector('.menu');

// console.log(menuBtn , menuBurger,menu);


menuBtn.addEventListener('click',showMenu);


let show = false ;


function showMenu(){
    if(!show){
        menuBurger.classList.add('open');
        nav.classList.add('open');

        show = true;
    }else{
        menuBurger.classList.remove('open');
        nav.classList.remove('open');

        show=false;
    }

}



document.addEventListener('scroll',()=>{
    document.documentElement.dataset.scrollY= window.scrollY;
})

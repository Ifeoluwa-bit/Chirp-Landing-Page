let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.nav-bar');


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

window.onscroll = () =>{
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
}


 
/*
if(window.scrollY > 150){
    header.classList.add('active')
} else{
    header.classList.remove('active')
}*/
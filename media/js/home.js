function openNav(){
    let menu = document.querySelector('.navBar');
        menu.style.translate = "0vw 0vh";
}
function closeNav(){
    let menu = document.querySelector('.navBar');
        menu.style.translate = "-31vw 0vh";
}
function goToHome(){
    slideOutContainer();
    switchPage('home.html');
}
function goToAbout(){
    slideOutContainer();
    switchPage('aboutus.html');
}
function goToMedia(){
    slideOutContainer();
    switchPage('media.html');    
}
function loadPage(){
    let navigation = document.querySelector('#navDiv');
    let nav = document.querySelector('nav');
    let container = document.querySelector('.containerClass');
    setTimeout(function(){
        nav.style.boxShadow = "2em 0 2em grey";
        container.style.translate = "none";
        container.style.opacity = "1";

    },500)
    navigation.style.opacity = 1;
}
function slideOutContainer(){
    let container = document.querySelector('.containerClass');
    let navigation = document.querySelector('#navDiv');
    navigation.style.opacity =0;
    container.style.translate = "-20vw 0";
    container.style.opacity = "0";
}
function switchPage(args){
    setTimeout(function(){
        window.location.href = args;
    },1200)
}
console.log(screen.width);
console.log(screen.height);
setTimeout(function(){

},100);

function onReadyState(){
        let loadingDoc = document.querySelector(".mainSection");   
    setTimeout(function(){
        loadingDoc.style.opacity = 1;
        setTimeout(function () {
            let sloganSection = document.querySelector('.sloganSection');
            sloganSection.classList.add('slideDown');
          },500)
    },1000);
}
function goToHomePage(){
    let mainSection = document.querySelector(".mainSection div");   
    let subSec = document.querySelector(".subSection");   
    let footerSec = document.querySelector(".footerSection");   
    subSec.style.display="block";
    footerSec.style.display="block";
    mainSection.style.opacity =0;
    setTimeout(function(){
        mainSection.style.visibility = "hidden";
        let screenSection = document.querySelector('.screenSection');
        screenSection.style.gridTemplateRows = "13vh 87vh 15vh";
        screenSection.style.overflowY = "visible";
        setTimeout(function(){window.location.href = 'home.html';},1200)
    },500)
}
`use strict`

let openIcon = document.querySelector('ion-icon[name=menu-outline]')
let closeIcon = document.querySelector('ion-icon[name=close-outline]')
let header = document.querySelector('header.header')

function addMobileNavListener(){
    
    openIcon.addEventListener("click", ()=>header.classList.add('open-nav'))
    closeIcon.addEventListener("click", ()=>header.classList.remove('open-nav'))
}


addMobileNavListener()
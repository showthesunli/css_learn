`use strict`
function addOpenActionToOpenMenu(){
    let openIcon = document.querySelector('ion-icon[name=menu-outline]')
    let header = document.querySelector('header.header')
    openIcon.addEventListener("click", ()=>header.classList.add('open-nav'))
}

function addCloseActionToCloseMenu(){
    let openIcon = document.querySelector('ion-icon[name=close-outline]')
    let header = document.querySelector('header.header')
    openIcon.addEventListener("click", ()=>header.classList.remove('open-nav'))
}

addOpenActionToOpenMenu()
addCloseActionToCloseMenu()
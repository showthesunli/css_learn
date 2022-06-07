`use strict`

let header = document.querySelector('header.header')

function addMobileNavListener(){
    
    header.addEventListener("click", ()=>{
        header.classList.toggle('open-nav')
    })
}


addMobileNavListener()
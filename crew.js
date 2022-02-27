const btn = document.querySelector('.btnm')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const profile = document.querySelector('.profile')
const nome = document.querySelector('.name')
const description = document.querySelector('.description')
const img = document.querySelector('.imagemI')
const body = document.querySelector('body')
const butoes =document.querySelector('.buttons')
btn.addEventListener('click', function () {
    btn.style.backgroundColor = 'white'
    profile.innerHTML = 'COMMANDER'
    nome.innerHTML = 'DOUGLAS HURLEY'
    description.innerHTML = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.png')
    img.style.width = '400px'
butoes.style.marginTop = '-280px'
img.style.marginTop = '10px'
     
})
btn2.addEventListener('click', function () {
    btn.style.backgroundColor = 'transparent'
    profile.innerHTML = 'MISSION SPECIALIST'
    nome.innerHTML = 'MARK SHUTTLEWORTH'
    description.innerHTML = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.png')
    img.style.width = '400px'
   let vn = document.documentElement.clientWidth
     if(vn<=425){
      profile.style.marginLeft = '-480px'
nome.style.marginLeft = '-500px'
nome.style.fontSize = '30px'
description.style.fontSize = '15px'
img.style.maxWidth = '160px'
butoes.style.marginTop = '-280px'

     }   
    
})
btn3.addEventListener('click', function () {
    btn.style.backgroundColor = 'transparent'
    profile.innerHTML = 'PILOT'
    nome.innerHTML = 'VICTOR GLOVER'
    description.innerHTML = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-victor-glover.png')
    img.style.width = '500px'
    let vn = document.documentElement.clientWidth
    if(vn<=425){
      butoes.style.marginTop = '-320px'
profile.style.marginTop = '-520px'
     }   
   
})
btn4.addEventListener('click', function () {
    btn.style.backgroundColor = 'transparent'
    profile.innerHTML = 'FLIGHT ENGINEER'
    nome.innerHTML = 'ANOUSHEH ANSARI'
    description.innerHTML = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png')
    img.style.width = '500px'
    let vn = document.documentElement.clientWidth
    if(vn<=425){
       

     }   
    
})
const menu = document.querySelector('.menu-img')

let i = 0
menu.addEventListener('click', function (e) {
    i++
    if (i % 2 != 0) {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-close.svg")
    } else {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg")

    }

})
const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const menu = document.querySelector('.menu-img')

let i = 0
menu.addEventListener('click', function (e) {
    i++
    if (i % 2 != 0) {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-close.svg")
    } else {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-Hamburger.svg")

    }

})
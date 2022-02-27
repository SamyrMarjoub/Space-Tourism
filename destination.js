const moon = document.querySelector('.idf')
const mars = document.querySelector('.idf2')
const europa = document.querySelector('.idf3')
const titan = document.querySelector('.idf4')
const img = document.querySelector('.lua')
const title = document.querySelector('.moon-title')
const txt = document.querySelector('.moon-txt')
const infoavg = document.querySelector('.infoavg')
const infoest = document.querySelector('.infoest')
const resulavg = document.querySelector('.avg-result')
const resultest = document.querySelector('.est-result')
const mooninfo = document.querySelector('.moon-info')
const menu = document.querySelector(".menu-img")
let i = 0
menu.addEventListener('click', function (e) {
    i++
    if (i % 2 != 0) {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-close.svg")
    } else {
        menu.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/icon-Hamburger.svg")

    }

})
moon.addEventListener('click', function () {
    mooninfo.style.opacity = '0'
    img.style.opacity = '0'
    setTimeout(function () {
        mooninfo.style.transition = 'all 0.5s'
        mooninfo.style.opacity = '1'
        img.style.transition = 'all 0.5s'
        img.style.opacity = '1'
        img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-moon.png")
        title.innerHTML = 'MOON'
        txt.innerHTML = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
        resulavg.innerHTML = '384,400 KM'
        resultest.innerHTML = '3 DAYS'
        title.style.marginLeft = '50px'

    }, 500)
})
mars.addEventListener('click', function () {
    mooninfo.style.opacity = '0'
    img.style.opacity = '0'
    setTimeout(function () {
        mooninfo.style.transition = 'all 0.5s'
        mooninfo.style.opacity = '1'
        img.style.transition = 'all 0.5s'
        img.style.opacity = '1'
        img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-mars.png")
        title.innerHTML = 'MARS'
        txt.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
        resulavg.innerHTML = '225 MIL. KM'
        resultest.innerHTML = '9 MONTHS'
        title.style.marginLeft = '50px'

    }, 500)
})
europa.addEventListener('click', function () {
    mooninfo.style.opacity = '0'
    img.style.opacity = '0'
    setTimeout(function () {
        mooninfo.style.transition = 'all 0.5s'
        mooninfo.style.opacity = '1'
        img.style.transition = 'all 0.5s'
        img.style.opacity = '1'
        img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-europa.png")
        title.innerHTML = 'EUROPA'
        txt.innerHTML = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
        resulavg.innerHTML = '628 MIL. KM'
        resultest.innerHTML = '3 YEARS'
        title.style.marginLeft = '50px'
    }, 500)
})
titan.addEventListener('click', function () {
    mooninfo.style.opacity = '0'
    img.style.opacity = '0'
    setTimeout(function () {
        mooninfo.style.transition = 'all 0.5s'
        mooninfo.style.opacity = '1'
        img.style.transition = 'all 0.5s'
        img.style.opacity = '1'
        img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-titan.png")
        title.innerHTML = 'TITAN'
        txt.innerHTML = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
        resulavg.innerHTML = '1.6 BIL. KM'
        resultest.innerHTML = '7 YEARS'
        title.style.marginLeft = '50px'

    }, 500)

})

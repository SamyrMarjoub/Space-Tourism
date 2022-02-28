const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const title = document.querySelector('.titlee')
const subtitle = document.querySelector('.subtitle')
const paragraph = document.querySelector('.paragraph')
const img = document.querySelector('.imgg')
const list = document.querySelector('.list')
const ullist = document.querySelector('.ul-list1')
const ullist2 = document.querySelector('.ul-list2')
const ullist3 = document.querySelector('.ul-list3')
const menuimg = document.querySelector('.menu-img')
let vn = document.documentElement.clientWidth
if (vn < 1000) {
    img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg')
    list.classList.add('list-inline')
    ullist.classList.add('list-inline-item')
    ullist2.classList.add('list-inline-item')
    ullist3.classList.add('list-inline-item')
  
} else {
    ullist.classList.remove('list-inline-item')
    ullist2.classList.remove('list-inline-item')
    ullist3.classList.remove('list-inline-item')
    
}
btn1.addEventListener('click', function () {
    img.style.opacity = '0'
    title.style.opacity = '0'
    paragraph.style.opacity = '0'
    btn1.style.backgroundColor = 'white'
    btn1.style.color = 'black'
    btn1.style.transition = 'all 1s'
    if (vn > 1000) {
        setTimeout(function () {
            title.innerHTML = 'LAUNCH VEHICLE'
            paragraph.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg')
            img.style.transition = 'all 0.5s'
            img.style.opacity = '1'
            title.style.transition = 'all 0.5s'
            title.style.opacity = '1'
            paragraph.style.transition = 'all 0.5s'
            paragraph.style.opacity = '1'
            console.log('Apertado')

        }, 500)
    } else {
        img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg')
        img.style.transition = 'all 0.5s'
        img.style.opacity = '1'
        title.style.transition = 'all 0.5s'
        title.style.opacity = '1'
        paragraph.style.transition = 'all 0.5s'
        paragraph.style.opacity = '1'
        title.innerHTML = ' LAUNCH VEHICLE'
        paragraph.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond.Our WEB - X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  
    }
    if(vn<500){
        title.style.marginLeft = '-50px'
        title.style.transition = 'none'
    }

})
btn2.addEventListener('click', function () {
    img.style.opacity = '0'
    title.style.opacity = '0'
    paragraph.style.opacity = '0'
    btn1.style.backgroundColor = 'transparent'
    btn1.style.color = 'white'
    btn2.style.transition = 'all 1s'
    if (vn > 1000) {
        setTimeout(function () {
            img.style.opacity = '1'
            paragraph.style.opacity = '1'
            title.style.opacity = '1'
            title.style.transition = '0.5s all'
            title.innerHTML = 'SPACEPORT'
            paragraph.style.transition = '0.5 all'
            paragraph.innerHTML = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
            img.style.transition = '0.5 all'
            img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg')
        }, 500)
    } else {
        img.setAttribute('src', './space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg')
        img.style.opacity = '1'
        paragraph.style.opacity = '1'
        title.style.opacity = '1'
        title.style.transition = '0.5s all'
        title.innerHTML = 'SPACEPORT'
        paragraph.style.transition = '0.5 all'
        paragraph.innerHTML = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
        img.style.transition = '0.5 all'
    }
    if(vn<500){
        title.style.marginLeft = '20px'
        title.style.transition = 'none'

    }
})
btn3.addEventListener('click', function () {
    btn1.style.backgroundColor = 'transparent'
    btn1.style.color = 'white'
    img.style.opacity = '0'
    title.style.opacity = '0'
    paragraph.style.opacity = '0'
    btn3.style.transition = 'all 0.5s'
    if (vn > 1000) {
        setTimeout(function () {
            img.style.opacity = '1'
            paragraph.style.opacity = '1'
            title.style.opacity = '1'
            title.style.transition = '0.5s all'
            title.innerHTML = 'SPACE CAPSULE'
            paragraph.style.transition = '0.5 all'
            paragraph.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            img.style.transition = '0.5 all'
            img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg")
        }, 500)
    } else {
        img.style.opacity = '1'
        paragraph.style.opacity = '1'
        title.style.opacity = '1'
        title.style.transition = '0.5s all'
        title.innerHTML = 'SPACE CAPSULE'
        paragraph.style.transition = '0.5 all'
        paragraph.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        img.style.transition = '0.5 all'
        img.setAttribute('src', "./space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg")
    }
    if(vn<500){
        title.style.marginLeft = '-50px'
        title.style.transition = 'none'
    }
})


if(vn<500){
    document.body.style.zoom = '35%'
    img.style.marginLeft = '-950px'
    img.style.width = '1000px'
    menuimg.style.marginLeft = '300px'
}
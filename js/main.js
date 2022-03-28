"use strict"
let navWidth = $('.innerBox').innerWidth();
$('.nav-container').animate({ left: `-${navWidth}px` }, 0)
$('.navbar-open').click(function () {
    let navLeft = $('.nav-container').css('left')
    if (navLeft == '0px') {
        $('.nav-container').animate({ left: `-${navWidth}px` }, 500)
    } else {
        $('.nav-container').animate({ left: `0px` })
    }
})



$('.fas').click(function () {
    $('.nav-container').animate({ left: `-${navWidth}px` }, 500)
})




// ---------------- occordion -----------------------
$('.occordion-container p:nth(0)').css('display', 'block')
$('.occordion-container h3').click(function () {
    $(this).next().slideToggle(500)
    $('.occordion-container p').not($(this).next()).slideUp(500)
})




//------------- go to clicked page -------------------
$("a[href^='#']").click(function (e) {
    let navTarget = $(e.target).attr('href')
    let sectionPosition = $(navTarget).offset().top
    $('html,body').animate({ scrollTop: sectionPosition },500)
})




// -----------  Count Time  ------------------
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime()
let conuter = setInterval(_ => {
    let date = new Date().getTime(),
        myDate = countDownDate - date,
        days = Math.floor(myDate / (1000 * 60 * 60 * 24)),
        hours = Math.floor(myDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes = Math.floor(myDate % (1000 * 60 * 60) / (1000 * 60)),
        seconds = Math.floor(myDate % (1000 * 60) / (1000))
    $('#days').text(`${days} D`)
    $('#hours').text(`0-${hours} H`)
    $('#minutes').text(`0-${minutes} M`)
    $('#seconds').text(`0-${seconds} S`)
    if (myDate < 0) {
        clearInterval(conuter)
    }
}, 1000)



//--------------- textArea maxLenght-----------
let textAreaChars = document.querySelector('#textAreaChars'),
    textArea = document.querySelector('textarea'),
    maxLenght = textArea.getAttribute('maxlength');
    textAreaChars.innerHTML = maxLenght
    
textArea.addEventListener('input', function () {
    textAreaChars.innerHTML = maxLenght - this.value.length
    if (textAreaChars.innerHTML == 0) {
        textAreaChars.innerHTML = `your available character finished`
    }
})

// document.addEventListener('keydown', function (e) {

//     if(e.key == 'F12'){
//         e.preventDefault()
//     }
// })
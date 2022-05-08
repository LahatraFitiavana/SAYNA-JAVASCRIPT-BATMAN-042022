let menu = document.querySelectorAll('.menu');
let buttons = document.querySelectorAll('button');
let yellows = document.querySelectorAll('.yellow');
let images = document.querySelectorAll('.image');



menu.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold';
        item.style.textDecoration = 'underline';
        item.style.color = 'white';
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal';
        item.style.textDecoration = 'none';
    });

})

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.opacity = '1';

    });

    button.addEventListener('mouseout', () => {
        button.style.opacity = '0.7';
    });

})

yellows.forEach((yellow)=>{
    yellow.addEventListener('mouseover', () => {
        yellow.style.filter = "hue-rotate(5deg) grayscale(100%) sepia(1000000%) saturate(1000000%) contrast(1)";
    
    });
    
    yellow.addEventListener('mouseout', () => {
        yellow.style.filter = "hue-rotate(0deg) grayscale(100%) sepia(100%) saturate(100%) contrast(1)";
    
    });
})


$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 95) $('.media').css('top', scroll + 'px');
    });

    $('.to-top').on('click', function () {
        window.scrollTo(0, 0);
    });

    $('.to-bottom').on('click', function () {
        window.scrollTo(0, 4968);
    });

    $('.title').fadeIn(3500);
    $('.arrow').animate({
        left: '42%'
    }, 2500);
    $('.title').animate({
        left: '0%'
    }, 2500);
    
    $(document).ready(function () {
        $('.description').animate({
            left: '15%'
        }, 2500);
    });
})
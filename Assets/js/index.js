
let menu=document.querySelectorAll('.menu');
let buttons=document.querySelectorAll('button');
let yellow=document.querySelector('.yellow');

console.log(yellow);


menu.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.style.fontWeight='bold';
        item.style.textDecoration='underline';
        item.style.color='white';
    });

    item.addEventListener('mouseout',()=>{
        item.style.fontWeight='normal';
        item.style.textDecoration='none';
    });

})

buttons.forEach((button)=>{
    button.addEventListener('mouseover',()=>{
        button.style.opacity='1';

    });

    button.addEventListener('mouseout',()=>{
        button.style.opacity='0.7';
    });

})

yellow.addEventListener('mouseover',()=>{
    yellow.style.filter="hue-rotate(5deg) grayscale(100%) sepia(90%) saturate(500%) contrast(0.7)";
    
})

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll=$(window).scrollTop();
        if(scroll>95) $('.media').css('top',scroll+'px');
    });

    $('.to-top').on('click',function(){
        window.scrollTo(0,0);
    });

    $('.to-bottom').on('click',function(){
        window.scrollTo(0,4968);
    });

    $('.title').fadeIn(3500);
    $('.arrow').animate({left:'42%'},2500);
    $('.title').animate({left:'0%'},2500);
    $(document).ready(function(){
        $('.description').animate({left:'30%'},2500);
    });
    $('.batman-img').animate({width:'27%'},3500);
    $('.bathome').animate({width:'100%'},3500);

})
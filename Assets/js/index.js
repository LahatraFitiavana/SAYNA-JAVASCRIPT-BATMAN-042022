let menu = document.querySelectorAll('.menu');
let buttons = document.querySelectorAll('button');
let yellows = document.querySelectorAll('.yellow');
let images = document.querySelectorAll('.image');
let toLeft = document.querySelector('#to-left');
let toRight = document.querySelector('#to-right');
let modal=document.querySelector('#modal');
let confirmer=document.querySelector('#confirmer');


let index = 0;
let sources1 = [`<iframe width="100%" height="300px" src="https://www.youtube.com/embed/jXrFsn9pcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, `<iframe width="100%" height="300px" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, `<iframe width="100%" height="300px" src="https://www.youtube.com/embed/OiqPQ7L_C00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]
let sources2 = [`<iframe width="100%" height="500px" src="https://www.youtube.com/embed/jXrFsn9pcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/OiqPQ7L_C00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]

/*
let ratio=0.1;
const options={
    root:null,
    rootMargin:'0px',
    threshold:ratio
}


const handleIntersect=(entries,observer)=>{
    entries.forEach(function(entry){
        if(entry.intersectRatio>ratio){
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    })
}

const observer=new IntersectionObserver(handleIntersect,options);
observer.observe(document.querySelectorAll('.article'));
*/

let slides=['Batslider1.png','Batslider2.png','Batslider3.png','Batslider4.png','Batslider5.png','Batslider6.png','Batslider7.png','Batslider8.png','Batslider9.png','Batslider10.png'];
let i=0;


function slide(){
    document.querySelector('#slide').src='./Assets/Illustrations/Home/'+slides[i];
    if(i<slides.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slide()",2000);
}

window.onload=slide;


confirmer.onclick=()=>{
    modal.style.display='block';
    setTimeout(()=>{
        modal.style.display='none';
        },3000);
}

toLeft.onclick = () => {
    if (index > 0) {
        index--;
    } else {
        index = sources1.length - 1;
    }
    document.querySelectorAll('.media-slider')[0].innerHTML=sources1[index];
    document.querySelectorAll('.media-slider')[1].innerHTML=sources2[index];
}

toRight.onclick = () => {
    if (index<sources1.length-1) {
        index++;
    } else {
        index = 0;
    }
     document.querySelectorAll('.media-slider')[0].innerHTML=sources1[index];
     document.querySelectorAll('.media-slider')[1].innerHTML=sources2[index];

}


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


images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.querySelector('.desc').style.opacity = '1';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.querySelector('.desc').style.opacity = '0';
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
    $('.c-title').animate({
        left: '30%'
    }, 2500);
    $(document).ready(function () {
        $('.description').animate({
            left: '30%'
        }, 2500);
    });
    $('.image').animate({
        width: '27%'
    }, 3500);
    $('.batman-img').animate({
        width: '100%'
    }, 3500);
    $('#bathome').animate({
        width: '75%'
    }, 3500);
})
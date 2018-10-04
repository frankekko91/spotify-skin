// When document is ready 

$(document).ready(function() {
    $('.slider').on('beforeChange', function(e) {
        console.log(e);
    })
    //Init slider
    $('.slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        /* autoplay:true,
        autoplaySpeed:2000, */
        adaptiveHight:true,
        responsive: [{
            breakpoint:720,
            settings : {
                slidesToShow:1,
                dots:false,
            }
        }],
        dots:true,
        prevArrow : '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/></svg>',
        nextArrow : '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><path fill="none" d="M0 0h24v24H0z"/></svg>',
    });
});
$(document).on('keyup',function() {
    if(event.key === 'ArrowRight'){
    $('.slider').slick('slickNext');
    }
    if(event.key === 'ArrowLeft'){
        $('.slider').slick('slickPrev');
        }
})
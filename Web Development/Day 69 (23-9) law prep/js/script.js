$('#mentorsCarousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    center:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        350:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1200:{
            items:6
        }
    }
})
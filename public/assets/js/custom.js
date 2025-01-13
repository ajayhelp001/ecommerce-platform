$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});



// * Number Choose 
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// * tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// * Client Slider
$('.clients').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1200,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// * blogs Slider
$('.blogs').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// * Our-Client Slider
$('.ourClient').owlCarousel({
    loop:true,
    margin:0,
    animateOut: 'fadeOut',
    stagePadding:0,
    smartSpeed:450,
    animateIn: 'flipInX',
    nav:false,
    lazyLoad:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// * Review Img Slider
$('.reviewsImg').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    lazyLoad:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    responsive:{
        0:{
            items:3
        },
        576:{
            items:5
        },
        1000:{
            items:5
        }
    }
})


// ** Product Details Page Slider
$('.p_details').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    lazyLoad:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// ** Glight Box
var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});

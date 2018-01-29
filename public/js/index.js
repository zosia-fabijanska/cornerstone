//Google Maps API
function initMap() {
    var northcote = { lat: -37.778, lng: 145.010 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: northcote,
    });
    var marker = new google.maps.Marker({
        position: northcote,
        map: map
    });
}


//Element cache
const $body = $('html, body');

const slowScrollTo = (section) => {
    $body.animate({
        scrollTop: $(section).offset().top
    }, 800);
}
//Event Handlers
$(".scroll-icon").click(() => {
    $body.animate({
        scrollTop: $("#menu-section").offset().top
    }, 800);
});

$("#to-gallery").click(() => {
    slowScrollTo('#gallery')
});

$("#to-contact").click(() => {
    slowScrollTo('#location')
});

$("#to-location").click(() => {
    slowScrollTo('#location')
});



//Fade In Scroll
$(document).ready(() => {

    /* Every time the window is scrolled ... */
    $(window).scroll(() => {
        /* Check the location of each desired element */
        $('.fade-in').each((i) => {
            const bottom_of_object = $('.fade-in').position().top + $('.fade-in').outerHeight();
            const bottom_of_window = $(this).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $('.fade-in').animate({ 'opacity': '1' }, 600);
            }
        });
        
        const wScroll = $(this).scrollTop();
        $('.corner-logo').css({
            'transform':'translate(0px, '+ wScroll /5 +'%)'
        })
    });
});

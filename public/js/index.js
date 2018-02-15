//Google Maps API
function initMap() {
    var northcote = { lat: -37.778, lng: 145.01 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: northcote
    });
    var marker = new google.maps.Marker({
        position: northcote,
        map: map
    });
}


$(document).ready(() => {
    
    //Element cache
    const $body = $("html, body");
    const $fadeIn = $('.fade-in');
    const $fadeInText = $('.fade-in-text');
    
    const slowScrollTo = section => {
        $body.animate(
            {
                scrollTop: $(section).offset().top
            },
            800
        );
    };

    // Set Event Handlers
    $(".scroll-icon").click(() => {
        slowScrollTo("#menu-section");
    });
    
    $("#to-gallery").click(() => {
        slowScrollTo("#gallery");
    });
    
    $("#to-contact").click(() => {
        slowScrollTo("#location");
    });
    
    $("#to-location").click(() => {
        slowScrollTo("#location");
    });

    //Fade In Scroll
    // Set hidden elements
    $fadeIn.css({
        opacity: 0
    })
    $fadeInText.css({
        opacity:0
    })
    
    /* Every time the window is scrolled ... */
    $(window).scroll(() => {
        /* Check the location of each desired element */
        const bottom_of_object = $fadeIn.offset().top + ($fadeIn.outerHeight() / 2);
        const bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
            $fadeIn.animate({ opacity: "1" }, 900);
            $fadeInText.animate({opacity:"1"}, 1200);
        };
        
        const wScroll = $(this).scrollTop();
        $(".corner-logo-lg").css({
            transform: "translate(0px, " + wScroll / 5 + "%)"
        });
    });
});

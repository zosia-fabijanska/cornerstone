$(document).ready(() => {

    //Cache the body element
    const $body = $("html, body");

    //Function to scroll to page sections
    const slowScrollTo = section => {
        $body.animate(
            {
                scrollTop: $(section).offset().top
            },
            800,
        );
    };

    // Set Event Handlers
    
    $("#to-gallery").click(() => {
        event.preventDefault();
        slowScrollTo("#gallery");
    });
    
    $("#to-aboutus").click(() => {
        event.preventDefault();
        slowScrollTo("#about-us");
    });

    //Scroll Reveal

    window.sr = ScrollReveal();

    sr.reveal('.scroll-reveal', {
        distance: '100px',
        duration: 800,
        delay: 300,
        scale: 1,
    });
});
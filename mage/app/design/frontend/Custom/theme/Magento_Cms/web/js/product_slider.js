define(['jquery',
        'jquery/ui',
        'slick'], //aqui definimos as bibliotecas do js que vamos precisar
function($) {
    $(document).ready(function() {
        $('.custom-product-slider .slider-items').slick({
            dots: false, // Mostrar pontos
            arrows: true, // Mostrar setas
            infinite: true, // loop
            slidesToShow: 4, // Numero de produtos apresentados
            slidesToScroll: 1, // Numero de produtos scroll a serem apresentados
            responsive: [ // Aqui delimitamos o responsivo e o numero de produtos apresentados
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });
});
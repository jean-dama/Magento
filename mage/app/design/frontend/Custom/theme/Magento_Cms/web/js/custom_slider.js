define(['jquery',
        'jquery/ui',
        'slick'], //aqui definimos as bibliotecas do js que vamos precisar
function($) {
  $(document).ready(function() {
      $(".slick-slider").slick({
          dots: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
      });
  });
});
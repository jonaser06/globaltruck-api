$(document).ready(function(){
  var banner = {
    padre: $('.info'),
    numeroSlides : $('.info').children('.slide').length,
    position : 1
  }
  banner.padre.children('.slide').first().css({
    'left' : 0
  });

  var altobanner = function(){
    var alto = banner.padre.children('.active').outerHeight();
    banner.padre.animate({
      'height' : alto + 'px'
    });
    $('.slide').animate({
      'height' : alto + 'px'
    });
    //console.log(alto);
  }

  altobanner();
  $(window).resize(function(){
    altobanner();
  });

  /**btn next */
  $('#banner-next').click(function(e){

    e.preventDefault();

    if(banner.position < banner.numeroSlides){

      banner.padre.children().not('.active').css({
        'left' : '100%'
      });

      $('#banner .active').removeClass('active').next().addClass('active').animate({
        'left' : 0
      });
      $('#banner .active').prev().animate({
        'left' : '-100%'
      });
      banner.position = banner.position + 1;
    }else{
      $('#banner .active').animate({
        'left' : '-100%'
      });

      banner.padre.children().not('.active').css({
        'left' : '100%'
      });

      $('#banner .active').removeClass('active');
      banner.padre.children('.slide').first().addClass('active').animate({
        'left' : 0
      });
      banner.position = 1;
    }

  });

  /**btn next */
  $('#banner-prev').click(function(e){

    e.preventDefault();

    if(banner.position > 1){

      banner.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#banner .active').animate({
        'left' : '100%'
      });

      $('#banner .active').removeClass('active').prev().addClass('active').animate({
        'left' : 0
      });
      
      banner.position = banner.position - 1;
    }else{
      banner.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#banner .active').animate({
        'left' : '100%'
      });
      $('#banner .active').removeClass('active');
      banner.padre.children('.slide').last().addClass('active').animate({
        'left' : 0
      });
      banner.position = banner.numeroSlides;
    }

  });

  var posicion = 0;
  $('#category-next').click(function(e){
    e.preventDefault();
    if(posicion > -255){
      posicion = posicion - 255;
      $('.container-item').animate({
        'left' : posicion+'px'
      });
    }
  });

  $('#category-prev').click(function(e){
    e.preventDefault();
    if(posicion < 0){
      posicion = posicion + 255;
      $('.container-item').animate({
        'left' : posicion+'px'
      });
    }
  });
  

});
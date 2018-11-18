$(document).ready(function(){
  var banner = {
    padre: $('#banner'),
    numeroSlides : $('#banner').children('.slide').length,
    position : 1
  }
  banner.padre.children('.slide').first().css({
    'left' : 0
  });
  
  var altobanner = function(){
    var alto = banner.padre.children('.slide').outerHeight();
    banner.padre.css({
      'height' : alto + 'px'
    });
    console.log(alto);
  }
  altobanner();
  $(window).resize(function(){
    altobanner();
  });
//  console.log(banner.numeroSlides);

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

});
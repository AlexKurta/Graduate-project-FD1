// Мобильное меню
$(document).ready(function() {
  $('.menu-small').click(function() {                   
    $('.mobile-menu li').fadeToggle(500);          
  });
});

// Слайдер для main.html
$(document).ready(function() {
  $(".slider > div:gt(0)").hide();
  setInterval(function() {
    $('.slider > div:first')
      .fadeOut(500) 
      .next()
      .fadeIn(1000) 
      .end()
      .appendTo('.slider');
  }, 3000); 
});

// Высота слайдера
$(document).ready(function(){  
  var sliderHeight = $('.slider div img').width();
  $('.slider').height(sliderHeight);

  $(window).resize(function() {    
    var sliderHeight = $('.slider div img').width();
    $('.slider').height(sliderHeight);
  })
});

// Окно с параллаксом
$('.parallax-window').parallax({imageSrc: 'images/avtoservis2-2700x1228.jpg'});

// Аккордион для services.html
$(document).ready(function() {
  $('.tab').click(function() {
    var id = $(this).attr('data-id');
    $(id).slideToggle();
  });
});

// Функция для рассчета прокрутки
function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
};

// Попап для partners.html
$(document).ready(function() {
  $('.article img').click(function() {
    var src = $(this).attr('src');
    var idp = $(this).attr('data-id');
    var whatHeight = $('body').height();
    var whatTop = 30 + getBodyScrollTop() + 'px';    
    $('.popup').css({'top': whatTop});
    $('.background').height(whatHeight);
    $('.info').html($(idp).text()); 
    $('.picture').html("<img src='"+ src +"'>");
    $('.background').show();
    $('.popup').fadeIn(400);    
  });
});

// Скрытие попапа по крестику
$(document).ready(function() {
  $('.close').click(function() {
    $('.background').hide();
    $('.popup').hide();
  });
});

// Скрытие попапа по клику вокруг
$(document).ready(function() {
  $('.background').click(function() {
    $(this).hide();
    $('.popup').hide();
  });
});

// Кнопка вверх
$(document).ready(function() {
  $('.up').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });
  $('.up').click(function () {
    $('html, body').animate({scrollTop:0}, 1000);
  });
});

// Кнопка вниз
$(document).ready(function() {  
  $(window).scroll(function(){
    var screenHeight = document.documentElement.clientHeight;
    if ($(this).scrollTop() < ($(document).height() - screenHeight - 200)) {
      $('.down').fadeIn();
    } else {
      $('.down').fadeOut();
    }
  });
  $('.down').click(function () {
    $('html, body').animate({scrollTop:$(document).height()}, 1000);
  });
});
// Проверка формы "Имя"
$(document).ready(function(){
    $('#a2').click(function(){        
        if ($('#name').val() == '') {
            $('#name').addClass('error');
            $('#name + .error-text').show();
        } else {
            $('#name').removeClass('error');            
            $('#name + .error-text').hide();
        }
    });
});
// Проверка формы "E-mail"
$(document).ready(function(){
    $('#a2').click(function(){        
        if ($('#email').val() == '') {
            $('#email').addClass('error');
            $('#email + .error-text').show();
        } else {
            $('#email').removeClass('error');            
            $('#email + .error-text').hide();
        }
    });
});
// Проверка формы "Телефон"
$(document).ready(function(){
    $('#a2').click(function(){        
        if ($('#tel').val() == '') {
            $('#tel').addClass('error');            
            $('#tel + .error-text').show();
        } else {
            $('#tel').removeClass('error');            
            $('#tel + .error-text').hide();
        }
    });
});
// Проверка формы "Ваше сообщение"
$(document).ready(function(){
    $('#a2').click(function(){        
        if ($('#texta').val() == '') {
            $('#texta').addClass('error');
            $('#texta + .error-text').show();
        } else {            
            $('#texta').removeClass('error');
            $('#texta + .error-text').hide();
        }
    });
});
// Попап для maintenance.html
$(document).ready(function() {
  $('.video img').click(function() {    
    var idVideo = $(this).attr('data-id');        
    var whatHeight = $('body').height();
    var whatTop = 30 + getBodyScrollTop() + 'px';    
    $('.popup').css({'top': whatTop});
    $('.background').height(whatHeight);     
    $('.picture').html($(idVideo).html());
    $('.picture iframe').show();
    $('.background').show();
    $('.popup').fadeIn(400);    
  });
});

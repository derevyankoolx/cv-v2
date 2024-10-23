window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 71, 171, 0.7)'; // полупрозрачный цвет
    } else {
        header.style.backgroundColor = '#0047AB'; // исходный цвет
    }
};

const phrases = ["Веб розробник"]; // Массив с фразами
let currentPhraseIndex = 0; // Индекс текущей фразы
let currentCharIndex = 0; // Индекс текущего символа
let typing = true; // Состояние печати

const typingEffect = document.querySelector('.main__box-subtitle'); // Элемент для текста
const cursor = document.querySelector('.cursor'); // Элемент для курсора

function type() {
    if (typing) {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typingEffect.textContent += phrases[currentPhraseIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(type, 100); // Задержка между символами при печати
        } else {
            typing = false;
            setTimeout(deleteText, 1000); // Задержка перед стиранием
        }
    }
}

function deleteText() {
    if (!typing) {
        if (currentCharIndex > 0) {
            typingEffect.textContent = typingEffect.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(deleteText, 50); // Задержка между символами при стирании
        } else {
            typing = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Переход к следующей фразе
            setTimeout(type, 500); // Задержка перед началом печати новой фразы
        }
    }
}

// Начинаем с первой фразы
type();
var limits = 15.0;

$(".card").mousemove(function (e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; // x позиция внутри элемента.
  var y = e.clientY - rect.top; // y позиция внутри элемента.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = (offsetX) * (limits * 2) - limits;
  var rotateX = (offsetY) * (limits * 2) - limits;

  $(this).css({
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  var glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".card").mouseleave(function () {
  // Возвращаем карточку в исходное положение
  $(this).css({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  });

  // Опционально, сбрасываем позицию блика или других эффектов
  $(".glare").css("left", "100%");
});


// Общие настройки для всех слайдеров
const swiperConfig = {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 3000,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    autoplay: {
      delay: 2600,
      pauseOnMouseEnter: true
    }
  };
  

  new Swiper(".swiper", swiperConfig);
  
  new Swiper(".swiper1", {
    ...swiperConfig, 
    autoplay: {
      ...swiperConfig.autoplay, 
      reverseDirection: true 
    }
  });
  
  new Swiper(".swiper2", swiperConfig);
  
  new Swiper(".swiper3", {
    ...swiperConfig, 
    autoplay: {
      ...swiperConfig.autoplay, 
      reverseDirection: true 
    }
  });


  
  $(document).ready(function() {


    $('#slider2').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        infinite: true,
        pauseOnHover: true,
        rtl: true // Прокрутка вправо
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


      
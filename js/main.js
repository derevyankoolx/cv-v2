window.onscroll = function() {
    const header = document.querySelector('header');
    const wave = document.querySelector('.main__bg g use:nth-child(4)');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 71, 171, 0.7)'; // Полупрозрачный хедер
        wave.style.fill = 'rgba(0, 71, 171, 0.7)'; // Полупрозрачная волна
        wave.style.backgroundFilter = 'blur(3px)';
    } else {
        header.style.backgroundColor = '#0047AB'; // Исходный цвет хедера
        wave.style.fill = '#0047AB'; // Исходный цвет волны
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

// Инициализация Swiper
function initializeSwiper(selector, additionalConfig = {}) {
    return new Swiper(selector, { ...swiperConfig, ...additionalConfig });
}

// Инициализация всех Swiper
initializeSwiper(".swiper");
initializeSwiper(".swiper1", { autoplay: { ...swiperConfig.autoplay, reverseDirection: true } });
initializeSwiper(".swiper2");
initializeSwiper(".swiper3", { autoplay: { ...swiperConfig.autoplay, reverseDirection: true } });

// Функция для инициализации всех слайдеров
function initializeSliders() {
    // Инициализация Slick слайдеров
    if (!$('#slider2').hasClass('slick-initialized')) {
        $('#slider2').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            arrows: true,
            dots: false,
            infinite: true,
            rtl: true // Прокрутка вправо
        });
    }
    
    if (!$('.slick').hasClass('slick-initialized')) {
        $('.slick').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            arrows: false,
            dots: false,
            infinite: true,
            rtl: false
        });
    }

    // Инициализация Splide
    new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        autoplay: true,
        interval: 7000,
        arrows: false,
        pagination: false,
        speed: 1000,
        gap: '10px',
    }).mount();
}

function openTab(tabId) {

    // Убираем активный класс со всех вкладок
    document.querySelectorAll('.tabcontent').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.tablinks').forEach(function(button) {
        button.classList.remove('active');
    });

    // Добавляем активный класс к выбранной вкладке
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Добавляем активный класс к кнопке, соответствующей выбранной вкладке
    const activeButton = document.querySelector(`.tablinks[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


$(document).ready(function() {
    // Обработчик клика по вкладкам с делегированием событий
    document.querySelector('.technologies__tabs').addEventListener('click', function(e) {
        if (e.target.classList.contains('tablinks')) {
            openTab(e.target.dataset.tab); // Используем атрибут data-tab для идентификации вкладки
        }
    });


    // Автоматически открываем первую вкладку при загрузке страницы
    document.querySelector(".tablinks").click(); // Открыть первую вкладку

    // Инициализация слайдеров при первой загрузке страницы
    initializeSliders();
});

// Функция для переключения видимости одного элемента
function toggleJobDetails(job) {
    const isExpanded = job.dataset.expanded === "true";
    job.dataset.expanded = !isExpanded;
    job.querySelector('.job-details').style.display = isExpanded ? 'none' : 'block';
    job.querySelector('.job-toggle').textContent = isExpanded ? '▼' : '▲';
}

// Функция для переключения видимости одного элемента с плавной анимацией
function toggleJobDetails(job) {
    const details = job.querySelector('.job-details');
    const isExpanded = job.dataset.expanded === "true";

    if (isExpanded) {
        // Закрываем элемент
        details.style.height = `${details.scrollHeight}px`;
        setTimeout(() => {
            details.style.height = "0";
        }, 10);
    } else {
        // Открываем элемент
        details.style.height = `${details.scrollHeight}px`;
        details.addEventListener('transitionend', function setAutoHeight() {
            details.style.height = 'auto';
            details.removeEventListener('transitionend', setAutoHeight);
        });
    }

    job.dataset.expanded = !isExpanded;
}

// Переключение всех элементов
function toggleAllJobs() {
    const jobs = document.querySelectorAll('.job');
    const anyExpanded = Array.from(jobs).some(job => job.dataset.expanded === "true");
    const toggleButton = document.querySelector('.toggle-all');

    // Переключаем класс active для кнопки
    toggleButton.classList.toggle('active', !anyExpanded);

    jobs.forEach(job => {
        const details = job.querySelector('.job-details');
        job.dataset.expanded = !anyExpanded;

        if (!anyExpanded) {
            // Открываем все элементы
            details.style.height = `${details.scrollHeight}px`;
            details.addEventListener('transitionend', function setAutoHeight() {
                details.style.height = 'auto';
                details.removeEventListener('transitionend', setAutoHeight);
            });
        } else {
            // Закрываем все элементы
            details.style.height = `${details.scrollHeight}px`;
            setTimeout(() => {
                details.style.height = "0";
            }, 10);
        }
    });
}


// Добавляем обработчики событий на заголовки работ и на кнопку
document.querySelectorAll('.job-header').forEach(header => {
    header.addEventListener('click', () => {
        const job = header.parentElement;
        toggleJobDetails(job);
    });
});

document.querySelector('.toggle-all').addEventListener('click', toggleAllJobs);






$('.portfolio').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});
    
$('.portfolio').each(function(){
  $('#navi').append('<div class="circle"></div>');
});
  
$('.circle').each(function(index)
{
    $(this).attr('id', 'circle' + (index + 1));
});   
   
$('.portfolio').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio").fadeIn("fast");
    $(this).find('.ombra').fadeOut();
    $("#navi div").removeClass("activenav");
}
else{
	var indexi = $("#maincontent .portfolio").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find('.ombra').fadeIn();
    $("#circle" + indexi).addClass('activenav'); 
}
});	






var cnt=0, texts=[];
var $fclick = false;


$(".imawhat").each(function() {
  texts[cnt++]=$(this).text();
});

function fadeText() {
  if (cnt>=texts.length) { cnt=0; }
  $('.ima').html(texts[cnt++]);
  $('.ima')
    .fadeIn('fast').animate({opacity: 1.0}, 5000).fadeOut('fast',
     function() {
       return fadeText();
     }
  );
}

function toggleForm() {
  if ($fclick === true) {
    $(".contact, .head, .arm").toggleClass("active inactive");
  } else {
    $(".contact, .head, .arm").addClass("active");
    $fclick = true;
  }
}

$(".contactme, .arrow, .closer, .submit").on("click", toggleForm);

fadeText();


var $formIsOpen = false;

function toggleForm() {
  if (!$formIsOpen) {
    // Открываем форму
    $(".contact, .head, .arm").addClass("active").removeClass("inactive");
    $formIsOpen = true;
  } else {
    // Закрываем форму
    $(".contact, .head, .arm").removeClass("active").addClass("inactive");
    $formIsOpen = false;
  }
}

// Привязываем клик к элементам для открытия и закрытия формы
$(".contactme, .arrow").on("click", function() {
  if (!$formIsOpen) {
    toggleForm();
  }
});

// Привязываем клик к кнопке закрытия формы
$(".closer").on("click", function() {
  if ($formIsOpen) {
    toggleForm();
  }
});


$("#contactForm").on("submit", function(e) {
    e.preventDefault();

    var token = "8039113348:AAFLSyrVcXd0dZ97xKZ-R68SIgtk7pvmycY"; // Вставьте ваш токен
    var chat_id = "380077098"; // Вставьте ваш Chat ID
    var message = "Имя: " + $("input[name='name']").val() + "\n" +
                  "Email: " + $("input[name='email']").val() + "\n" +
                  "Сообщение: " + $("textarea[name='message']").val();

    $.ajax({
        url: "https://api.telegram.org/bot" + token + "/sendMessage",
        type: "POST",
        data: {
            chat_id: chat_id,
            text: message
        },
        success: function(response) {
            toggleForm(); // Закрываем форму
            $(".abouttype").append('<p class="thank-you">Спасибо за ваше сообщение!</p>');
        },
        error: function() {
            alert("Ошибка при отправке сообщения в Telegram.");
        }
    });
});


const switchInput = document.querySelector('.switch__input');
const body = document.body;

// Проверяем, есть ли сохраненная тема в localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    switchInput.checked = true; // Устанавливаем переключатель в состояние "включен"
}

// Изменяем тему при переключении
switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Сохраняем тему в localStorage
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Сохраняем тему в localStorage
    }
});


jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 11500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
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
    console.log(`Opening tab: ${tabId}`); // Проверка, вызывается ли функция

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
        console.log(`Active button: ${activeButton}`); // Проверка, была ли найдена кнопка
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


// Добавляем переключение состояния



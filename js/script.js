window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //Таймер
  const countTimer = (year, month, day) => {
    const timerHour = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    if (day <= new Date().getDate()) day = new Date().getDate() + 1;
    const getTimeRemaining = () => {
      let dateStop = new Date(year, month, day).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

      return {
        timeRemaining,
        hours,
        minutes,
        seconds,
      };
    };

    const addZero = (num) => (num < 10 ? '0' + num : num);

    const updateClock = () => {
      let timer = getTimeRemaining();
      timerHour.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);

      if (timer.timeRemaining <= 0) {
        // timerHour.textContent = '00'
        // timerMinutes.textContent = '00'
        // timerSeconds.textContent = '00'
        // clearInterval(startTimer)
        day = new Date().getDate() + 1;
      }
    };
    setInterval(updateClock, 1000);
  };
  countTimer(2021, 6, 9);

  //Меню
  const toogleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      arrowDown = document.querySelector('.arrow-down');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    const scrollAnim = (item) => {
      const blockID = item.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    menu.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('close-btn')) handlerMenu();
      else {
        target = target.closest('li');
        if (target) {
          e.preventDefault();
          scrollAnim(e.target);
          handlerMenu();
        }
      }
    });

    btnMenu.addEventListener('click', handlerMenu);
    arrowDown.addEventListener('click', (e) => {
      e.preventDefault();
      scrollAnim(e.target.parentElement);
    });
  };
  toogleMenu();

  //Pop up
  const tooglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      popUpBtn = document.querySelectorAll('.popup-btn');
    let animIterator = null,
      anim = 0;

    const animPopUp = () => {
      animIterator = requestAnimationFrame(animPopUp);
      anim += 0.05;
      if (anim <= 1) popUpContent.style.opacity = `${anim}`;
      else {
        cancelAnimationFrame(animIterator);
        anim = 0;
      }
    };

    popUpBtn.forEach((item) =>
      item.addEventListener('click', () => {
        popUp.style.display = `block`;
        if (screen.width > 768) animPopUp();
      })
    );

    popUp.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('popup-close'))
        popUp.style.display = 'none';
      else {
        target = target.closest('.popup-content');
        if (!target) popUp.style.display = 'none';
      }
    });
  };
  tooglePopUp();

  //Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      tabContent.forEach((_, i) => {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      });
    };

    tabHeader.addEventListener('click', (e) => {
      let target = e.target;

      target = target.closest('.service-header-tab');

      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          item === target && toggleTabContent(i);
        });
      }
    });
  };
  tabs();

  //Слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      slideUl = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
      dot,
      interval;

    const addDots = () => {
      [...slide].map((_, i) => {
        const newDot = document.createElement('li');
        newDot.classList.add('dot');
        i === 0 && newDot.classList.add('dot-active');
        slideUl.appendChild(newDot);
      });
      dot = document.querySelectorAll('.dot');
    };
    addDots();

    const checkCurrentSlide = () => {
      if (currentSlide >= slide.length) currentSlide = 0;
      else if (currentSlide < 0) currentSlide = slide.length - 1;
    };

    const toggleSlide = (items, i, strClass) =>
      items.forEach((elem, str) => elem[i].classList.toggle(strClass[str]));

    const autoPlaySlide = () => {
      toggleSlide([slide, dot], currentSlide, [
        'portfolio-item-active',
        'dot-active',
      ]);
      currentSlide++;
      checkCurrentSlide();
      toggleSlide([slide, dot], currentSlide, [
        'portfolio-item-active',
        'dot-active',
      ]);
    };

    const startSlide = (timer = 3000) => {
      interval = setInterval(autoPlaySlide, timer);
    };

    const stopSlide = (e) => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if (target.matches('.portfolio-btn, .dot')) {
        stopSlide();
        toggleSlide([slide, dot], currentSlide, [
          'portfolio-item-active',
          'dot-active',
        ]);

        if (target.matches('#arrow-right')) {
          currentSlide++;
          checkCurrentSlide();
        } else if (target.matches('#arrow-left')) {
          currentSlide--;
          checkCurrentSlide();
        } else if (target.matches('.dot')) {
          [...dot].map((item, i) => {
            if (item === target) currentSlide = i;
          });
        }

        toggleSlide([slide, dot], currentSlide, [
          'portfolio-item-active',
          'dot-active',
        ]);
      }
    });
    startSlide();
  };
  slider();
});

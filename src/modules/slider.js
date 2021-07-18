//Слайдер
const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
    slideUl = document.querySelector('.portfolio-dots'),
    slider = document.querySelector('.portfolio-content');

  let currentSlide = 0,
    dot,
    animIterator;

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
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
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
    animIterator = setInterval(autoPlaySlide, timer);
  };

  const stopSlide = (e) => {
    clearInterval(animIterator);
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

export default slider;

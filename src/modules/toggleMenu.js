//Меню
const toggleMenu = () => {
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

  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('close-btn')) {
      handlerMenu();
    }
    if (
      target.closest('a') !== null &&
      target.getAttribute('href') !== '#close' &&
      target.closest('menu') !== null
    ) {
      e.preventDefault();
      scrollAnim(e.target);
      handlerMenu();
    }
    if (target.closest('menu') === null && target.closest('.menu') === null) {
      menu.classList.remove('active-menu');
    }
  });

  btnMenu.addEventListener('click', handlerMenu);
  arrowDown.addEventListener('click', (e) => {
    e.preventDefault();
    scrollAnim(e.target.parentElement);
  });
};

export default toggleMenu;

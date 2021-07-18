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

  menu.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('close-btn')) {
      handlerMenu();
    } else {
      if (target.closest('li') !== null) {
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

export default toggleMenu;

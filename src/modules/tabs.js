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
    const target = e.target;

    if (
      target
        .closest('.service-header-tab')
        .classList.contains('service-header-tab')
    ) {
      tab.forEach((item, i) => {
        item === target.closest('.service-header-tab') && toggleTabContent(i);
      });
    }
  });
};

export default tabs;

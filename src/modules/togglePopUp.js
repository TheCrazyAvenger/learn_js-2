//Pop up
const togglePopUp = () => {
  const popUp = document.querySelector('.popup'),
    popUpContent = document.querySelector('.popup-content'),
    popUpBtn = document.querySelectorAll('.popup-btn');
  let animIterator,
    anim = 0;

  const animPopUp = () => {
    animIterator = requestAnimationFrame(animPopUp);
    anim += 0.05;
    if (anim <= 1) {
      popUpContent.style.opacity = `${anim}`;
    } else {
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

    if (target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
    } else {
      if (target.closest('.popup-content') === null)
        popUp.style.display = 'none';
    }
  });
};

export default togglePopUp;

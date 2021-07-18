//Команда
const ourTeam = () => {
  const command = document.querySelector('.command');

  command.addEventListener('mouseover', (e) => {
    if (e.target.matches('.command__photo')) {
      e.target.dataset.temp = e.target.src;
      e.target.src = e.target.dataset.img;
    }
  });
  command.addEventListener('mouseout', (e) => {
    if (e.target.matches('.command__photo')) {
      e.target.src = e.target.dataset.temp;
      e.target.removeAttribute('data-temp');
    }
  });
};

export default ourTeam;

//send ajax-form
const sendForm = () => {
  const statusMessage = document.createElement('div');
  statusMessage.style.color = 'white';

  const clearInputs = (inputs) => {
    inputs.forEach((item) => {
      item.value = '';
    });
  };

  const postData = (formData) => {
    return fetch('../server.php', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
      credentials: 'include',
    });
  };

  const getData = (currForm) => {
    currForm.appendChild(statusMessage);
    statusMessage.textContent = 'Загрузка...';
    const formData = new FormData(currForm);

    postData(formData)
      .then((responce) => {
        if (responce.status !== 200) {
          throw new Error('Status network not 200');
        }
        console.log(responce.body);
        statusMessage.textContent = 'Спасибо! Мы скоро с вами свяжемся';
      })
      .catch(() => {
        statusMessage.textContent = 'Что-то пошло не так :(';
      });
  };
  document.addEventListener('submit', (e) => {
    if (e.target.closest('form') !== null) {
      e.preventDefault();
      const formInputs = e.target.closest('form').querySelectorAll('input');
      getData(e.target.closest('form'));
      clearInputs(formInputs);
    }
  });
};

export default sendForm;

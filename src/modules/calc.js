//Калькулятор
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    calcCheckbox = document.getElementById('calc-checkbox'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1,
      count = 0,
      animIterator;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) countValue += (calcCount.value - 1) / 10;

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue)
      total = price * squareValue * typeValue * countValue * dayValue;

    if (calcCheckbox.checked) {
      animIterator = setInterval(() => {
        if (count < total) {
          count++;
          totalValue.textContent = count;
        } else {
          clearInterval(animIterator);
          count = 0;
        }
      });
    } else {
      totalValue.textContent = Math.floor(total);
    }
  };

  calcBlock.addEventListener('input', (e) => {
    const target = e.target;

    if (target.matches('select, input')) {
      countSum();
    }
  });
};

export default calc;

let resultNode;
let buttonNode;

function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

  function displayErrorMsg(message) {
    const display = `<p>${message}</p>`;
    resultNode.innerHTML = display;
  }

window.onload = function () {
  resultNode = document.querySelector('.j-result');
  buttonNode = document.querySelector('.j-btn-request');
  buttonNode.addEventListener('click', () => {
    const inputPage = Number(document.querySelector('.input-page').value);
    const inputLimit = Number(document.querySelector('.input-limit').value);

    if ((!Number.isInteger(inputPage) || inputPage<1 || inputPage>10) && (!Number.isInteger(inputLimit) || inputLimit<1 || inputLimit>10)) {
      displayErrorMsg("Номер страницы и лимит вне диапазона от 1 до 10");
    } else if (!Number.isInteger(inputPage) || inputPage<1 || inputPage>10) {
      displayErrorMsg("Номер страницы вне диапазона от 1 до 10");
    } else if (!Number.isInteger(inputLimit) || inputLimit<1 || inputLimit>10) {
      displayErrorMsg("Лимит вне диапазона от 1 до 10");
    } else {

      fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((data) => {
      displayResult(data);
      const dataString = JSON.stringify(data);
      localStorage.setItem('myImages', dataString);
    })
    .catch(() => { console.log('error'); });
    }

  });

  const lsData = localStorage.getItem('myImages');
  if (lsData) {
    displayResult(JSON.parse(lsData));
  }

  // Часть со считыванием из localStorage сделана неправильно. Функция displayResult должна вызываться только в случае, если в localStorage есть данные с ключом myImages. Если открыть страницу в первый раз с пустым localStorage, код выдает ошибку. 
};
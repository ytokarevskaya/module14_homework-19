  let resultNode;
  let buttonNode;

  window.onload = function() {
    resultNode = document.querySelector('.j-result');
    buttonNode = document.querySelector('.j-btn-request');
    buttonNode.addEventListener('click', () => {
      const inputWidth = Number(document.querySelector('.j-input-width').value);
      const inputHeight = Number(document.querySelector('.j-input-height').value);
      if (!Number.isInteger(inputWidth) || !Number.isInteger(inputHeight)) {
        displayErrorMsg("Убедитесь, что вы ввели целое число");
      } else if ((inputWidth<100 || inputWidth>300) || (inputHeight<100 || inputHeight>300)) {
        displayErrorMsg("Вероятно, одно из чисел меньше 100 или больше 300");
      } else {
        fetch(`https://picsum.photos/${inputWidth}/${inputHeight}`)
      .then((response) => {

        displayResult(response.url);
      })
      .catch(() => { console.log('Произошла ошибка'); });
      }

    });
  };



    function displayResult(url) {
      const cardBlock = `
        <div class="card">
          <img src="${url}" />
        </div>
      `;
    resultNode.innerHTML = cardBlock;
  }

  function displayErrorMsg(message) {
    const display = `<p>${message}</p>`;
    resultNode.innerHTML = display;
  }
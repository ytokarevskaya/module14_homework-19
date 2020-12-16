'use strict'

let button = document.querySelector('button'),
    input = document.querySelector('input'),
    resultDiv = document.querySelector('.result');

button.addEventListener('click', (event) => {
    event.preventDefault();
    let number = input.value;

    if (number < 1 || number > 10) {
        resultDiv.textContent = 'Число вне диапазона от 1 до 10'
        input.value = '';
    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${number}`, displayRes);
        input.value = '';
    }
});

function useRequest(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            let result = JSON.parse(xhr.response);

            cb(result);
        }
    };

    xhr.onerror = function() {
        console.log('Произошла ошибка. Статус ответа: ', xhr.status);
    };

    xhr.send();
}

function displayRes(data) {
    let cards = '';

    data.forEach(item => {
        let card = `
      <div class="card">
        <img src="${item.download_url}" class="card-image" alt="img"/>
        <p>${item.author}</p> 
      </div>`;
        cards = cards + card;
    });

    resultDiv.innerHTML = cards;
}
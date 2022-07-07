"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const subNum = document.querySelector(".homework_btn"),
    requestUrl = "https://picsum.photos/v2/list/?limit=",
    resultNode = document.querySelector(".result");

  //функция для получения данных с сервера и обработки
  function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = () => {
      if (xhr.status != 200) {
        console.log("Статус ответа: ", xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
        console.log(result);
      }
    };
    xhr.onprogress = function (event) {
      console.log(`Загружено ${event.loaded} из ${event.total}`);
    };
    xhr.onerror = () => {
      console.log("Ошибка! Статус ответа: ", xhr.status);
    };
    xhr.send();
  }

  //функция для рендеринга
  function displayResult(apiData) {
    let cards = "";

    apiData.forEach((item) => {
      const cardBlock = `
      <div class = 'card'>
      <img src = '${item.download_url}'
      class = 'card-image'/>
      <p> ${item.author}<p/>
      </div>
`;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }

  // обработчик для вывода данных по клику
  subNum.addEventListener("click", () => {
    const value = document.querySelector("input").value;
    if (value >= 1 && value <= 10) {
      useRequest(requestUrl + value, displayResult);
    } else {
      resultNode.innerHTML = "число вне диапазона от 1 до 10";
    }
  });
});

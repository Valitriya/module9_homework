"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const subNum = document.querySelector(".homework_btn"),
    resultNode = document.querySelector(".result");

// функция для запроса данных с сервера и обработки 
  const useRequest = (valueNum, valueLim) => {
    fetch(`https://picsum.photos/v2/list?page=${valueNum}&limit=${valueLim}`)
      .then((response) => response.json())
      .then((data) => displayResult(data));
  };

// создание карточек для рендеринга
  function displayResult(apiData) {
    let cards = "";
    apiData.forEach((item) => {
      const cardBlock = `
            <div class='card'>
                <img src=${item.download_url} class="card-image"/>
                <p>${item.author}</p>
            </div>
`;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }

// обработчик для вывода данных с проверками условий 
  subNum.addEventListener("click", () => {
    const value = document.querySelectorAll("input");
    resultNode.textContent = "";
    if (
      !(value[0].value <= 10 && value[0].value >= 1) &&
      !(value[1].value <= 10 && value[1].value >= 1)
    ) {
      resultNode.textContent =
        "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (
      typeof value[1].value != "number" &&
      !(value[1].value <= 10 && value[1].value >= 1)
    ) {
      resultNode.textContent = "Лимит страницы вне диапазона от 1 до 10";
    } else if (
      typeof value[0].value != "number" &&
      !(value[0].value <= 10 && value[0].value >= 1)
    ) {
      resultNode.textContent = "Номер страницы вне диапазона от 1 до 10";
    } else {
      useRequest(value[0].value, value[1].value);
    }
  });
});

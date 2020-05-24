//---метод прогрузки страницы дом-дерево
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  function useElement(dateA, dateB, dateC) {
    dateA = document.querySelectorAll(".info-header-tab");
    //   console.log(tab);
    dateB = document.querySelector(".info-header");
    //   console.log(info);
    dateC = document.querySelectorAll(".info-tabcontent");
    //   console.log(tabContent);

    // функция скрытия табКонтента
    function hideTabContent(a) {
      for (let i = a; i < dateC.length; i++) {
        dateC[i].classList.remove("show"); // метод удаление класса show скрытия его страницы
        dateC[i].classList.add("hide"); // добавление класса hide - скрыть
      }
    }

    hideTabContent(1); // Скрытие с первого элемента использование аргумента (а)

    // функция которая будет показывать табКонтент
    function showTabContent(b) {
      //проверка скрыт ли этот элемент
      if (dateC[b].classList.contains("hide")) {
        dateC[b].classList.remove("hide"); // удаление класса hide скрыть
        dateC[b].classList.add("show"); // добавление класса show показать
      }
    }

    //Делигирование обработчика событий клика на определенном элементе с проверкой
    dateB.addEventListener("click", function (event) {
      let target = event.target;
      if (target && target.classList.contains("info-header-tab")) {
        for (let i = 0; i < dateA.length; i++) {
          if (target == dateA[i]) {
            hideTabContent(0); // скрытие всех табов
            showTabContent(i); // открытие того конткента который соответствует нажатому табу
            break;
          }
        }
      }
    });
  }
  useElement();
});

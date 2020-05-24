//---метод прогрузки страницы дом-дерево
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab");
  //   console.log(tab);
  let info = document.querySelector(".info-header");
  //   console.log(info);
  let tabContent = document.querySelectorAll(".info-tabcontent");
  //   console.log(tabContent);

  // функция скрытия табКонтента
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show"); // метод удаление класса show скрытия его страницы
      tabContent[i].classList.add("hide"); // добавление класса hide - скрыть
    }
  }

  hideTabContent(1); // Скрытие с первого элемента использование аргумента (а)

  // функция которая будет показывать табКонтент
  function showTabContent(b) {
    //проверка скрыт ли этот элемент
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide"); // удаление класса hide скрыть
      tabContent[b].classList.add("show"); // добавление класса show показать
    }
  }

  //Делигирование обработчика событий клика на определенном элементе с проверкой
  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0); // скрытие всех табов
          showTabContent(i); // открытие того элемента на который кликнули
          break;
        }
      }
    }
  });
});

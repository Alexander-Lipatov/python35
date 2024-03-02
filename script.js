let manyElem = document.querySelectorAll(".item");
let manyArea = document.querySelectorAll(".area");

let dragElem;

// manyElem.forEach((elem) => {
//   let prevDisplay = elem.style.display;
//   elem.addEventListener("dragstart", (e) => {
//     console.log("dragstart");
//     dragElem = elem;
//     setTimeout(() => {
//       elem.style.display = "none";
//     }, 0);
//   });
//   elem.addEventListener("dragend", (e) => {
//     console.log("dragend");
//     elem.style.display = prevDisplay;
//   });
//   elem.addEventListener("drag", (e) => {});
// });

// manyArea.forEach((area) => {
//   area.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });
//   area.addEventListener("dragenter", (e) => {
//     console.log("dragenter");
//   });
//   area.addEventListener("dragleave", (e) => {
//     console.log("dragleave");
//   });
//   area.addEventListener("drop", (e) => {
//     const target = e.target.closest('.area')
//     // console.log(target)
//     target.appendChild(dragElem);
//   });
// });

manyElem.forEach((elem) => {
  elem.onmousedown = function(event) { // (1) отследить нажатие

    // (2) подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(elem);
    // и установим абсолютно спозиционированный мяч под курсор
  
    moveAt(event.pageX, event.pageY);
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
      elem.style.left = pageX - elem.offsetWidth / 2 + 'px';
      elem.style.top = pageY - elem.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) положить мяч, удалить более ненужные обработчики событий
    elem.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      elem.onmouseup = null;
    };
  
  };
});

ball.onmousedown = function (event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // переносит мяч на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + "px";
    ball.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // передвигаем мяч при событии mousemove
  document.addEventListener("mousemove", onMouseMove);

  // отпустить мяч, удалить ненужные обработчики
  ball.onmouseup = function () {
    console.log("up");
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };
};

// manyElem.forEach((elem) => {
//   let displayStyle
//   elem.addEventListener("dragstart", function (e) {
//     console.log("dragstart");

//     globalElem = elem; // Записываю стартовый елемент в глобальную переменную
//     displayStyle = e.target.style.display
//     setTimeout(() => (e.target.style.display = "none"), 0); // Скрываем элемент в момент перетаскивания
//   });

//   elem.addEventListener("dragend", function (e) {
//     console.log("dragend");

//     elem.style.display = displayStyle; // возвращаем элемент в

//     var ghostElem = document.querySelector(".ghost");
//     if (ghostElem) {
//       ghostElem.parentNode.removeChild(ghostElem);
//     }
//   });
// });

// manyArea.forEach((area) => {
//   area.addEventListener("dragover", function (event) {
//     console.log("dragover");
//     event.preventDefault();
//   });
//   area.addEventListener("dragenter", (e) => {
//     console.log("dragenter");
//     e.target.classList.add("hover");
//   });
//   area.addEventListener("dragleave", function (e) {
//     console.log("dragleave");
//     e.target.classList.remove("hover");
//   });
//   area.addEventListener("drop", (e) => {
//     console.log("drop");
//     e.target.classList.remove("hover");
//     e.target.appendChild(globalElem);
//     globalElem.style.display = "flex";
//   });
// });

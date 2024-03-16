let data = [
  {
    title: "Корзина",
    products: ['Яблоки', 'Бананы', 'Арбуз', 'Манка', 'Рис', 'Помидоры', 'Огурцы',],
  },
  {
    title: "Овощи",
    products: [],
  },
  {
    title: "Фрукты",
    products: [],
  },
  {
    title: "Крупа",
    products: [],
  },
];


let screenX
let screenY
let windowScreenX
let windowScreenY

document.addEventListener('mousemove', e=>{
  screenX = e.screenX
  screenY = e.screenY
  windowScreenY = innerHeight
  windowScreenX = innerWidth

  console.log(screenX, screenY);
  console.log(windowScreenX, windowScreenY);


  var isOutsideWindow = (screenX < 0 || screenY < 0 || screenX > windowScreenX || screenY > windowScreenY);
})



let draggableItems = document.querySelectorAll(".item");
let dropAreas = document.querySelectorAll(".area");

draggableItems.forEach((items) => {
  items.onmousedown = function (event) {
    let currentDropArea = null;
    let initialDropArea = event.target.closest(".area");
    let shiftX = event.clientX - items.getBoundingClientRect().left;
    let shiftY = event.clientY - items.getBoundingClientRect().top;

    items.style.position = "absolute";
    items.style.zIndex = 1000;
    items.style.width = "230px";
    items.style.textAlign = "center";
    items.style.background = "white";
8    
    // document.body.insertAdjacentElement("afterbegin", items);

    moveItemAt(event.pageX, event.pageY);

    

    function moveItemAt(pageX, pageY) {
      items.style.left = pageX - shiftX + "px";
      items.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveItemAt(event.pageX, event.pageY);

      items.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      items.hidden = false;

      let areaBelow = elemBelow.closest(".area");

      if (areaBelow && !areaBelow.contains(items)) {
        initialDropArea.appendChild(items);
      }

      if (currentDropArea != areaBelow) {
        if (currentDropArea) {
          console.log("выходим");
          leaveDropArea(currentDropArea);
        }

        currentDropArea = areaBelow;
        if (currentDropArea) {
          console.log("входим");
          enterDropArea(currentDropArea);
        }
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    items.onmouseup = function (e) {
      document.removeEventListener("mousemove", onMouseMove);
      items.removeAttribute("style");
      if (currentDropArea) {
        currentDropArea.appendChild(items);
        currentDropArea.style.background = "white";
      }
      items.onmouseup = null;
    };
  };

  function enterDropArea(elem) {
    elem.style.background = "pink";
  }

  function leaveDropArea(elem) {
    elem.style.background = "";
  }

  items.ondragstart = function () {
    return false;
  };
});

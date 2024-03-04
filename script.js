let manyElem = document.querySelectorAll(".item");
let manyArea = document.querySelectorAll(".area");

let dragElem;

let currentDroppable = null;

manyElem.forEach((elem) => {
  elem.onmousedown = function (event) {
    let areaBuf 
    let shiftX = event.clientX - elem.getBoundingClientRect().left;
    let shiftY = event.clientY - elem.getBoundingClientRect().top;

    elem.style.position = "absolute";
    elem.style.zIndex = 1000;
    elem.style.width = "230px";
    elem.style.textAlign = 'center'
    elem.style.background = 'white'
    document.body.append(elem);


    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      elem.style.left = pageX - shiftX + "px";
      elem.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      elem.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      elem.hidden = false;

      if (!area) return;

      let areaBelow = elemBelow.closest(".area");
      // console.log('droppableBelow', droppableBelow);

      if (currentDroppable != areaBelow) {
        if (currentDroppable) {
          // null если мы были не над droppable до этого события
          // (например, над пустым пространством)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // null если мы не над droppable сейчас, во время этого события
          // (например, только что покинули droppable)
          areaBuf = currentDroppable
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    elem.onmouseup = function (e) {
      document.removeEventListener("mousemove", onMouseMove);
      elem.removeAttribute('style')
      console.log(areaBuf);
      areaBuf.appendChild(elem)
      areaBuf.style.background = 'white'
      elem.onmouseup = null;
    };
  };

  function enterDroppable(elem) {
    elem.style.background = "pink";
  }

  function leaveDroppable(elem) {
    elem.style.background = "";
  }

  elem.ondragstart = function () {
    return false;
  };
});

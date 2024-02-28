const box = document.querySelectorAll(".box");
const drop = document.querySelectorAll(".drop");

console.log(box);
console.log(drop);


box.forEach(item =>{
  item.addEventListener('dragstart', e =>{
    console.log(e);
  });
})

drop.forEach(item =>{
  item.addEventListener('dragenter', e =>{
    console.log(e);
  });
})




// box.addEventListener("mousedown", (e) => {
//   box.style.position = "absolute";
//   box.style.zIndex = 1000;

//   document.body.append(box);
//   console.log(e.pageX);
//   console.log(e.pageY);
//   moveAt(e.pageX, e.pageY);

//   function moveAt(pageX, pageY) {
//     box.style.left = pageX - box.offsetWidth / 2 + "px";
//     box.style.top = pageY - box.offsetHeight / 2 + "px";
//   }
//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   box.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//     box.onmouseup = null;
//   };
// });

// box.addEventListener("dragstart", (e) => {
//   console.log("dragstart", e);
//   console.dir(box);
//   box.style.zIndex = '-1'
//   e.dataTransfer.setData("text/plain", box.outerHTML);
// });
// box.addEventListener("drag", (e) => {
//   // console.log("drag", e);
// });
// box.addEventListener("dragend", (e) => {
//   console.log("dragend", e);

//   box.style.transition = "all 3s";
// });

// drop.addEventListener("dragenter", (e) => {
//   console.log("dragenter", e);
// });
// drop.addEventListener("dragleave", (e) => {
//   console.log("dragleave", e);
// });
// drop.addEventListener("dragover", (e) => {
//   e.preventDefault()
//   // console.log("dragover", e);
// });
// drop.addEventListener("drop", (e) => {
//   var data = e.dataTransfer.getData("text/plain");

//   // Вставляем данные в область бросания
//   drop.innerHTML = data;
// });

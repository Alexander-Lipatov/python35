// Задание
// Создать объект, описывающий прямоугольник (хранит коор-
// динаты левой верхней и правой нижней точек), и написать следу-
// ющие функции для работы с таким объектом.
// 1
// Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).
// 2
// Функция принимает объект-прямоугольник и возвращает
// его ширину.
// 3
// Функция принимает объект-прямоугольник и возвращает
// его высоту.
// 4
// Функция принимает объект-прямоугольник и возвращает
// его площадь.
// 5
// Функция принимает объект-прямоугольник и возвращает
// его периметр.
// 6
// Функция изменения ширины прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// ширину.
// 7
// Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
// 8
// Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
// 9
// Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 10 Функция смещения прямоугольника по оси Y. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 11 Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значе-
// ния: сдвиг по оси X и сдвиг по оси Y.
// 12 Функция для проверки, находится ли точка внутри пря-
// моугольника. Она принимает объект-прямоугольник и
// координаты точки.


const obj = {
  A: { x: -5, y: 5 },
  B: {},
  C: { x: 4, y: -2 },
  D: {},
}

function createRectangle(objRactangle) {
  objRactangle.B.x = objRactangle.C.x
  objRactangle.B.y = objRactangle.A.y
  objRactangle.D.x = objRactangle.A.x
  objRactangle.D.y = objRactangle.C.y
  return objRactangle
}


function locationRectanglePoints(objRactangle) {
  console.log("Прямоугольник:");
  console.log(`Точка А: (${objRactangle.A.x}, ${objRactangle.A.y})`);
  console.log(`Точка B: (${objRactangle.B.x}, ${objRactangle.B.y})`);
  console.log(`Точка C: (${objRactangle.C.x}, ${objRactangle.C.y})`);
  console.log(`Точка D: (${objRactangle.D.x}, ${objRactangle.D.y})`);
  return objRactangle
}

function ractWidth(objRactangle) {
  let res = Math.abs(objRactangle.A.x) + Math.abs(objRactangle.B.x)
  return res
}

function ractHeight(objRactangle) {
  let res = Math.abs(objRactangle.A.y) + Math.abs(objRactangle.D.y)
  return res
}

function ractSquare(objRactangle) {
  let res = ractHeight(objRactangle) * ractWidth(objRactangle)
  return res
}
function ractPerimeter(objRactangle) {
  let res = ractHeight(objRactangle) * 2 + ractWidth(objRactangle) * 2
  return res
}
function ractChangeWidth(objRactangle, width=0) {
  let res = ractWidth(objRactangle) - +width
  return res
}
function ractChangeHeight(objRactangle, height=0) {
  let res = +ractHeight(objRactangle) - +height
  return res
}


let ract = createRectangle(obj)

console.log(locationRectanglePoints(ract));
console.log(ractWidth(ract));
console.log(ractHeight(ract));
console.log(ractSquare(ract));
console.log(ractPerimeter(ract));
console.log(ractChangeWidth(ract, 3));
console.log(ractChangeHeight(ract, 4));

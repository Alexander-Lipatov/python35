// Задание 1
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  canvas = this.createCanvas();
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    this._radius = newRadius;
    return this._radius;
  }
  get diameter() {
    return 2 * this._radius;
  }
  area() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  circumference() {
    return 2 * Math.PI * this._radius;
  }
  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "circle";
    canvas.width = 300;
    canvas.height = 300;
    document.body.insertAdjacentElement("afterbegin", canvas);
    return canvas;
  }
  paintCircle() {
    let context = this.canvas.getContext("2d");
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    context.beginPath();
    context.arc(centerX, centerY, this.radius, 0, this.diameter, false);
    context.fillStyle = "#ecf110";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
  }
  returnInfoCircle() {
    const ulElement = this.canvas.insertAdjacentElement(
      "afterend",
      document.createElement("ul")
    );
    const liRadius = document.createElement("li");
    const liDiameter = document.createElement("li");
    const liArea = document.createElement("li");
    const liCircumference = document.createElement("li");

    liRadius.textContent = `Radius: ${this.radius}px`;
    liDiameter.textContent = `Diameter: ${this.diameter}px`;
    liArea.textContent = `Area: ${this.area().toFixed(0)}px`;
    liCircumference.textContent = `Circumference: ${this.circumference().toFixed(
      0
    )}px`;

    ulElement.appendChild(liRadius);
    ulElement.appendChild(liDiameter);
    ulElement.appendChild(liArea);
    ulElement.appendChild(liCircumference);
  }
}

const circle = new Circle(140);
circle.radius = 100;
circle.paintCircle();
circle.returnInfoCircle();

// ___________________ЗАДАНИЕ 2_________________________

// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец теку- щего элемента;
// ■ метод для добавления вложенного элемента в начало те-кущего элемента;
// ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.

class HtmlElement {
  constructor(tagName, isClosing = false, content = "") {
    this._tagName = tagName;
    this._isClosing = isClosing;
    this._content = content;
    this._attributes = [];
    this._styles = [];
    this._children = []
  }
  styleObj(name, value) {
    return { name, value };
  }

  getHtml(){
    const el = document.createElement(this._tagName)
    document.body.appendChild(el)
  }
}

const divWrapper = new HtmlElement('div', false, 'blablabla')
divWrapper.getHtml()
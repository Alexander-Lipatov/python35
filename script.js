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
  constructor(
    tagName,
    content = "",
    options = {
      selfClosingTag: false,
    }
  ) {
    this._tagName = tagName;
    this._isClosing = options.selfClosingTag;
    this._content = content;
    this._attributes = [];
    this._styles = [];
    this._children = [];
    this._options = options;
  }
  setAtribute(name, value) {
    return this._attributes.push({ name, value });
  }
  addStyle(name, value) {
    return this._styles.push({ name, value });
  }
  styles() {
    return this._styles.map((el) => el.name + ":" + el.value).join(";");
  }

  prepend(child) {
    this._children.shift(child);
  }
  append(child) {
    this._children.push(child);
  }

  getHtml() {
    let html = "";
    if (this._isClosing) {
      html += `<${this._tagName} value="${this._content}" ${this._attributes
        .map((el) => el.name + '="' + el.value + '"')
        .join(" ")} />`;
    } else {
      html += `<${this._tagName} ${this._attributes
        .map((el) => el.name + '="' + el.value + '"')
        .join(" ")}>
      ${this._content}
      ${this._children.map((el) => el.getHtml()).join("\n")}
      </${this._tagName}>`;
    }
    return html;
  }
}

// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде стро-
// ки.

class CssClass {
  #styles;
  #className;
  constructor(className) {
    this.#className = className;
    this.#styles = [];
  }

  addStyle(name, value) {
    return this.#styles.push({ name, value });
  }

  #applyStyle() {
    const style = this.#styles
      .map((el) => el.name + ":" + el.value + ";")
      .join("");
    console.log(style);
    return style;
  }

  getCss() {
    const cssCode = `.${this.#className}{${this.#applyStyle()}}\n`;
    return cssCode;
  }
}

class HtmlBlock {
  #classArray;
  #rootEl;
  constructor(classArray, rootHtmlElement) {
    this.#classArray = classArray;
    this.#rootEl = rootHtmlElement;
  }

  #addClassToStyle() {
    if (!document.querySelector("style")) {
      document.body.insertAdjacentHTML("afterbegin", `<style></style>`);
    }
    const styleTag = document.querySelector("style");
    this.#classArray.forEach((cssEl) => {
      const codeInStyle = styleTag.textContent;
      const updateStyle = codeInStyle + cssEl.getCss();
      styleTag.textContent = updateStyle;
    });
  }

  #addBlockToHtml() {
    document.body.insertAdjacentHTML("beforeend", this.#rootEl.getHtml());
  }

  getCode() {
    this.#addClassToStyle();
    this.#addBlockToHtml();
  }
}

// ____________ CLASS BLOCK ____________

const wrapClass = new CssClass("wrap");
wrapClass.addStyle("display", "flex");

const blockClass = new CssClass("block");
blockClass.addStyle("width", "300px");
blockClass.addStyle("margin", "auto");

const imgClass = new CssClass("img");
imgClass.addStyle("width", "100%");

const textClass = new CssClass("text");
textClass.addStyle("text-align", "justify");

// ____________ ELEMENT BLOCK ____________

const mainBox = new HtmlElement("div");
mainBox.setAtribute("id", "wrapper");
mainBox.setAtribute("class", "wrap");

const div = new HtmlElement("div");
div.setAtribute("class", "block");

const h3 = new HtmlElement("h3", "Whath is Lorem Ipsum?");

const img = new HtmlElement("img", "", { selfClosingTag: true });
img.setAtribute("src", "./img.jpg");
img.setAtribute("class", "img");
img.setAtribute("alt", "pageImage");

const p = new HtmlElement(
  "p",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur sed eligendi rerum, est, quasi tempore, quaerat assumenda dolores tenetur architecto odit quia impedit. Eius ipsam fugit, culpa sunt id libero nam. Unde iure, quis debitis quas numquam necessitatibus minima aperiam voluptatum totam, quod in. Suscipit reprehenderit dolore veniam accusamus architecto doloribus sint eum iure corporis consectetur nostrum expedita illum laborum porro facilis, vitae possimus quae sapiente vel neque recusandae, illo aut vero odio. Ea laborum vero amet! Ut id esse facere doloribus nisi corporis fuga? Sint quidem laudantium inventore debitis necessitatibus repellendus temporibus impedit. Saepe, aliquid eos. Aliquam, rem."
);
p.setAtribute("class", "text");

const a = new HtmlElement('a', 'More...')
a.setAtribute('href', 'https://www.lipsum.com/')
a.setAtribute('target', '_blank')

mainBox.append(div);
mainBox.append(div);
mainBox.append(div);
mainBox.append(div);
div.append(h3);
div.append(img);
div.append(p);
div.append(a);

const html = new HtmlBlock([wrapClass, blockClass, imgClass, textClass], mainBox);
html.getCode();




// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

function createStyle() {
  return [
    { color: "red" },
    { "font-size": "50px" },
    { "text-align": "center" },
    { "text-decoration": "solid" },
  ];
}

function printTextWithStyles(stylesArray, text) {
    console.log(Object.entries(stylesArray[0]));
  const styleString = stylesArray
    .map(
      (style) =>
        `${Object.entries(style)
          .map(([key, value]) => `${key}: ${value};`)
          .join(" ")}`
    )
    .join(" ");
  document.write(`<p style="${styleString}">${text}</p>`);
}

const stylesArray = createStyle();
printTextWithStyles(stylesArray, "Hello world!");

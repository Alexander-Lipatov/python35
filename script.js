// Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

class MyProduct {
  constructor(list = []) {
    this._list = list;
  }
  // Вывод продуктов в виде массива
  printProduct() {
    const sortedList = this._list.sort((item) => {
      item.isBuy ? 1 : -1;
    });
    return sortedList;
  }
  // Добавление продукта
  addProduct(title, qty, isBuy = false) {
    const isFindProduct = this._list.find((item) => {
      if (item.title === title) {
        item.qty += qty;
        return true;
      }
    });
    if (!isFindProduct) {
      this._list.push({ title, qty, isBuy });
    }
  }

  // Покупка продукта по имени
  bayProduct(title) {
    const idxProduct = this._list.findIndex((product) => product.title == title);
    this._list[idxProduct].isBuy = true;
    return { ...this._list };
  }
}



const titleInputEl = document.getElementById('title-prod')
const qtyInputEl = document.getElementById('title-prod')
const titleInputEl = document.getElementById('title-prod')

const myProduct = new MyProduct();
myProduct.addProduct("phone", 1);
myProduct.addProduct("phone", 1);
myProduct.bayProduct("phone");
console.log(myProduct.printProduct());





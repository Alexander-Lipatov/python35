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

function createProductList() {
  return [];
}

function productItem(title, qty, isBuy = false) {
  return {
    title,
    qty,
    isBuy,
  };
}

function printSortList(productList) {
  productList.sort((a) => (a.isBuy ? 1 : -1));
  return productList;
}

function addProduct(list, ...ProductItem) {
  const isFindProduct = list.find((item) => {
    if (item.title === ProductItem[0].title) {
      item.qty += ProductItem[0].qty;
      return true;
    }
  });
  if (!isFindProduct) {
    list.push(...ProductItem);
  }
}

function bayProduct(list, title) {
  const idxProduct = list.findIndex((product) => product.title == title);
  list[idxProduct].isBuy = true;
  return { ...list };
}

const list = createProductList();
addProduct(list, productItem("apple", 5));
addProduct(list, productItem("car", 1));
bayProduct(list, "car");
bayProduct(list, "apple");
console.log(printSortList(list));
console.log(list);

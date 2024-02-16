const monologue = "To be, or not to be, that is the question...";
const author = 'William Shakespeare, from "Hamlet"';
let index = 0;
const p = document.getElementById("monologue");

function printText() {
  if (index < monologue.length) {
    if (monologue.charAt(index) === " ") {
      p.innerText += " \0";
    }
    p.innerText += monologue.charAt(index);
    index++;
    setTimeout(() => {
      printText();
    }, Math.floor(Math.random() * 100) + 200);
  } else {
    p.innerText += "\n" + author;
  }
}

printText();

const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;

function addZeroToTime(number) {
  return number < 10 ? "0" + number : number;
}

function updateCountdown() {
  let now = new Date();
  let nextYear = new Date(now.getFullYear() + 1, 0, 0);
  let defference = nextYear - now;

  let d = Math.floor(defference / oneDay);
  let h = Math.floor((defference % oneDay) / oneHour);
  let m = Math.floor((defference % oneHour) / oneMinute);
  let s = Math.floor((defference % oneMinute) / 1000);

  days.innerText = addZeroToTime(d);
  hours.innerText = addZeroToTime(h);
  minutes.innerText = addZeroToTime(m);
  seconds.innerText = addZeroToTime(s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

class ListOfThings {
  constructor(list = []) {
    this.values = list;
  }
  printList() {
    const task3Element = document.getElementById("task3");
    const ulElement = document.createElement("ul");
    task3Element.appendChild(ulElement);

    const sortThing = this.values.sort();
    sortThing.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.textContent = item;
      ulElement.appendChild(liElement);
    });
  }
  add(item) {
    this.values.push(item);
  }
}

const list = ["tomato", "kiwi", "potato", "apple"];
const listObj = new ListOfThings(list);
listObj.printList();
listObj.add("banana");
listObj.printList();
listObj.values = ["C#", "HTML", "JAVA", "Python"];
listObj.printList();

class MyButton {
  task4 = document.getElementById("task4");
  constructor(text, ...btnClass) {
    this.btnText = text;
    this.btnClass = btnClass;
  }

  get value() {
    return this.text;
  }

  set value(newText) {
    this.btnText = newText;
  }
  show() {
    const btn = document.createElement("button");
    btn.className = this.btnClass;
    btn.innerHTML = this.btnText;
    btn.type = "button";

    this.task4.appendChild(btn);
  }
}

class colorButton extends MyButton {
  constructor(text, btnClass, colorClass) {
    super(text, btnClass);
    this.colorClass = colorClass;
  }
  show() {
    super.show();
    const buttons = document.querySelectorAll(`.${this.btnClass[0]}`)
    buttons.forEach((el)=>{
      if(el.innerText === this.btnText){
        el.className +=  ` ${this.colorClass}`;
      }
    })
  }
}

const btn1 = new MyButton("Button_1", "btn-aquamarine");
const btn2 = new MyButton("Button_2", "btn");
const btn3 = new MyButton("Button_3", "btn-cadetblue");

btn1.show();
btn2.show();


btn3.value = 'blablabla'
btn3.show();

const btn4 = new colorButton("Button_4", "btn-danger", "white-text");
btn4.show();

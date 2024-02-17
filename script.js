
'use strict'
function sumTo(n) {
  return n == 1 ? n : n + sumTo(n - 1);
}
console.log(sumTo(100));

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

const cache = {};

function fibo(n) {
  console.log(cache);
  if (cache[n]) return cache[n];

  if (n == 1 || n == 2) {
    return 1;
  } else {
    let res = fibo(n - 1) + fibo(n - 2);
    cache[n] = res;
    return res;
  }
}

console.log(fibo(5));

// 1 1 2 3 5 8 13 21

let obj = {
  get propName() {
    console.log("get");
    return "Hello World!";
  },
  set propName(value) {
    console.log("set on value", value);
    return value;
  },
};

console.log(obj.propName);
let o = (obj.propName = 123);
console.log(o);

const body = document.getElementById("body");

body.addEventListener('click', (e)=>{
  console.log(this);
  console.log(e.target);
},)




// tagName


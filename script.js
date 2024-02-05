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

function fibo(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}
console.log(fibo(8));

// 1 1 2 3 5 8 13 21

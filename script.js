let str = "JaVa123 ScrRipT";

let newStr = str
  .split(" ")
  .map((item) => {
    let newAr = item.split("").map((item) => {
      if (item === item.toLowerCase()) {
        item = item.toUpperCase();
      } else if (item === item.toUpperCase()) {
        item = item.toLowerCase();
      }
      return item;
    });
    return newAr.join("");
  })
  .join(" ");

console.log(str);
console.log(newStr);

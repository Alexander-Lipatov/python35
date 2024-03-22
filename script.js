let position = 1;
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const items = document.querySelectorAll(".item");
const itemsWrap= document.querySelector('.itemsWrap')

if (position >= items.length-1) btnNext.disabled = true;
if (position == 0) btnPrev.disabled = true;
itemsWrap.style.transform = `translateX(-${position * 100}%)`;

btnPrev.addEventListener("click", (e) => {
  position--;
  itemsWrap.style.transform = `translateX(-${position * 100}%)`;
  console.log(position);
  if (position == 0) {
    btnPrev.disabled = true;
  } else {
    btnNext.disabled = false;
  }
});

btnNext.addEventListener("click", (e) => {
  position++;
  itemsWrap.style.transform = `translateX(-${position * 100}%)`;
  console.log(position);
  if (position >= items.length-1) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
});
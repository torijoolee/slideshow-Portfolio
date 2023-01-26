const containElem = document.querySelector(".container");
const sliderCon = document.querySelector(".slider-container");
const liElems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIdx = 0;
let topHeight;

function liSlideHeight() {
  for (let i = 0; i < liElems.length; i++) {
    topHeight = liElems[i].offsetHeight;
    console.log(topHeight);
  }
  containElem.style.height = `${topHeight}px`;
  sliderCon.style.height = `${topHeight}px`;
}
liSlideHeight();

for (let i = 0; i < liElems.length; i++) {
  liElems[i].style.left = `${i * 100}%`;
}

function moveToSlide(idx) {
  sliderCon.style.left = `${idx * -100}%`;
  sliderCon.classList.add("animated");
  currentIdx = idx;
}

function nextHandle() {
  moveToSlide(currentIdx + 1);
  if (currentIdx + 1 > liElems.length) {
    moveToSlide(0);
  }
}
function prevhandle() {
  moveToSlide(currentIdx - 1);
  if (currentIdx < 0) {
    moveToSlide(liElems.length - 1);
  }
}
nextBtn.addEventListener("click", nextHandle);
prevBtn.addEventListener("click", prevhandle);

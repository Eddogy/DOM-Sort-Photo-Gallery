"use strict";
//----------------------------------------------------------
const buttonShow = document.getElementById("button-show");
const myGallery = document.getElementById("gallery");
buttonShow.addEventListener("click", show);
const buttonHide = document.getElementById("button-hide");
buttonHide.addEventListener("click", hide);
const buttonSort = document.getElementById("button-sort");
buttonSort.addEventListener("click", sort);
//----------------------------------------------------------
function show() {
  if (myGallery.style.display !== "none") {
    myGallery.style.display = "flex";
    buttonHide.style.display = "block";
    buttonShow.style.display = "none";
    buttonSort.style.display = "block";
  } else {
    myGallery.style.display = "flex";
    buttonHide.style.display = "block";
    buttonShow.style.display = "none";
    buttonSort.style.display = "block";
  }
}
//-----------------------------------------------------------
function hide() {
  if (myGallery.style.display === "flex") {
    myGallery.style.display = "none";
    buttonHide.style.display = "none";
    buttonShow.style.display = "block";
    buttonSort.style.display = "none";
  } else {
    myGallery.style.display = "none";
    buttonHide.style.display = "none";
    buttonShow.style.display = "block";
    buttonSort.style.display = "none";
  }
}
//-----------------------------------------------------------
function sort() {
  let array = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg",
    "img/img-6.jpg",
    "img/img-7.jpg",
    "img/img-8.jpg",
  ];

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let shuffled_images = shuffle(array);
  for (let i = 0; i < array.length; i++) {
    document.getElementById("img" + (i + 1)).src = shuffled_images[i];
  }
}
//-----------------------------------------------------------
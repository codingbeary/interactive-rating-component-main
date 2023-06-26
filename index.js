// rating

let ratingBackgroundElements =
  document.getElementsByClassName("rating-background");

for (let i = 0; i < ratingBackgroundElements.length; i++) {
  ratingBackgroundElements[i].addEventListener("click", changeColor);
}

function changeColor() {
  for (let i = 0; i < ratingBackgroundElements.length; i++) {
    ratingBackgroundElements[i].classList.remove("changedColor");
  }
  this.classList.add("changedColor");
}

let button = document.getElementById("btn");

button.addEventListener("click", thankYouNote);

function thankYouNote() {
  alert("hello");
}

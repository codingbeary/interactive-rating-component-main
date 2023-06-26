// rating

let ratingBackgroundElements =
  document.getElementsByClassName("rating-background");

let selectedRating = null;

for (let i = 0; i < ratingBackgroundElements.length; i++) {
  ratingBackgroundElements[i].addEventListener("click", selectRating);
}

function selectRating() {
  for (let i = 0; i < ratingBackgroundElements.length; i++) {
    ratingBackgroundElements[i].classList.remove("changedColor");
  }
  this.classList.add("changedColor");

  selectedRating = parseInt(this.getAttribute("data-rating"));
}

let button = document.getElementById("btn");

button.addEventListener("click", updateContent);

function updateContent() {
  if (selectedRating !== null) {
    let mainContent = document.getElementById("mainContent");
    mainContent.classList.add("hidden");

    let thankYouContent = document.getElementById("thankYouContent");
    thankYouContent.classList.remove("hidden");

    let chosenRating = document.getElementById("chosenRating");
    chosenRating.innerHTML = selectedRating;
  } else {
    alert("Select a rating.");
  }
}

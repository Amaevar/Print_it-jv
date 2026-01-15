const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let currentIndex = 0;


function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
  });
}

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  dots[index].classList.add("dot_selected");
}

function updateSlide(index) {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerText.innerHTML = slides[index].tagLine;

  updateDots(index);
}


arrowRight.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlide(currentIndex);
});

arrowLeft.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  updateSlide(currentIndex);
});

createDots();
updateSlide(currentIndex);
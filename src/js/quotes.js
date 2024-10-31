const container = document.querySelector(".home");

const quotes = [
  {
    id: 1,
    img: "src/images/quotes/quote-mj.jpeg",
    quote:
      "some people want it to happen, some wish it would happen, others make it happen",
    author: {
      name: "Michael Jordan",
      number: "23",
      color: "#D83737",
      position: {
        bottom: "-.5rem",
        right: "20rem",
      },
    },
  },
  {
    id: 2,
    img: "src/images/quotes/quote-sc.jpeg",
    quote:
      "It's not about what you have or don't have. It's about what you make of what you've got",
    author: {
      name: "Stephen Curry",
      number: "30",
      color: "#FFC72B",
      position: {
        bottom: 0,
        right: 0,
      },
    },
  },
];

quotes.forEach((quote) => {
  container.innerHTML += `
      <div class="home__container" id="quote-${quote.id}">
        <div class="home__component">
            <div class="home__img" style="background-image: url(${quote.img})"></div>
            <div class="home__text">
                <h2 class="home__quote">
                    ${quote.quote}
                </h2>
                <div class="home__author" style="bottom: ${quote.author.position.bottom}; right: ${quote.author.position.right}">
                    <span class="home__name">
                        ${quote.author.name}
                    </span>
                    <span class="home__number" style="background-color: ${quote.author.color}; color: #FFF">
                        /${quote.author.number}
                    </span>
                </div>
        </div>
      </div>
    `;
});

let currentSlide = 0;
const slideInterval = 10000;

function showSlide(index) {
  const slides = document.querySelectorAll(".home__container");

  slides.forEach((slide, i) => {
    slide.classList.remove("current");
    if (i === index) {
      slide.classList.add("current");
    }
  });
}

function moveSlide(direction = 1) {
  const slides = document.querySelectorAll(".home__container");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  console.log(currentSlide);

  showSlide(currentSlide);
}

function autoSlide() {
  setInterval(() => {
    moveSlide();
  }, slideInterval);
}

showSlide(currentSlide);
autoSlide();

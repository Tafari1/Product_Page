let typed = new Typed(".auto-type", {
  strings: [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              voluptas quia pariatur dolorum voluptate obcaecati ipsam rerum
              eius debitis. Expedita architecto est reprehenderit dolorem optio
              quibusdam ab animi provident eaque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fuga voluptas quia pariatur dolorum
              voluptate obcaecati ipsam rerum eius debitis. Expedita architecto
              est reprehenderit dolorem optio quibusdam ab animi provident
              eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              `,
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

let typed2 = new Typed(".auto-type2", {
  strings: ["Product"],
  typeSpeed: 100,
});

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

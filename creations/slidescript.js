let index = 0;
const slides = document.querySelectorAll(".slides");

function changeSlide(n) {
    slides[index].style.display = "none";
    index = (index + n + slides.length) % slides.length;
    slides[index].style.display = "block";
}

changeSlide(0);
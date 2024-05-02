const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializedSlide();
document.addEventListener("DOMContentLoaded" , initializedSlide);

function initializedSlide () {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displayslide");
        intervalId = setInterval(nextslide , 3000);
    }
}

function showSlide (index) {

    if(index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    })

    slides[slideIndex].classList.add("displayslide");
}

function prevslide () {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextslide () {
    slideIndex++;
    showSlide(slideIndex);
}
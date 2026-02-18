const track = document.querySelector(".video-track");
const slides = Array.from(document.querySelectorAll(".video-slide"));
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let index = 0;

function updateSlider() {
    const offset = index * 100;
    track.style.transform = `translateX(-${offset}%)`;

    // Optional: disable buttons at ends
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;

    prevBtn.style.opacity = prevBtn.disabled ? "0.4" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? "0.4" : "1";
}

prevBtn.addEventListener("click", () => {
    if (index > 0) index--;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    if (index < slides.length - 1) index++;
    updateSlider();
});

// Initialize
updateSlider();

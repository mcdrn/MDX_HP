let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
    const slider = document.querySelector('.slider');
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// 次のスライド
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// 前のスライド
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// 自動スライド
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);





document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slider.children.length - 1;
        } else if (index >= slider.children.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        const translateValue = -slideIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    setInterval(nextSlide, 10000); // Change slide every 3 seconds

    document.querySelector('.slider-container').addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });

    document.querySelector('.slider-container').addEventListener('mouseout', function () {
        intervalId = setInterval(nextSlide, 3000);
    });
});
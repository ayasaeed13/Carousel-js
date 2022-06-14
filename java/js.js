var imgList = Array.from(document.querySelectorAll(".item img"));
var sliderContainer = document.getElementById("lightslidercontainer");
var closeBtn = document.querySelector(".closeicon");
var lightItem = document.getElementById("lightitem");
var nextBtn = document.querySelector("#nextbtn");
var prevBtn = document.querySelector("#prevbtn");
var img = document.getElementById("img");
var currentIndex; var imgSrc; 

for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute("src");
        sliderContainer.classList.replace("d-none", "d-flex");
        lightItem.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgList.indexOf(e.target);
    })
}

function nextSlide() {
    currentIndex++;

    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }

    var imgSrc = imgList[currentIndex].getAttribute("src");
    lightItem.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1
    }

    var imgSrc = imgList[currentIndex].getAttribute("src");
    lightItem.style.backgroundImage = `url(${imgSrc})`;
}
function closeSlider() {
    sliderContainer.classList.replace("d-flex", "d-none");
}

closeBtn.addEventListener("click", closeSlider);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keyup", function (e) {

    if (sliderContainer.classList.contains("d-flex")) {
        if (e.key == "ArrowRight") {
            nextSlide();
        }
        if (e.key == "ArrowLeft") {
            prevSlide();
        }
        if (e.key == "Escape") {
            closeSlider();
        }
    }
})







// required when i click every where except slider close slider
// required swipe left and right in responsive
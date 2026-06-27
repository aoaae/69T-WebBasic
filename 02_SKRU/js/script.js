// เมนูมือถือ
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Slider ข่าวสาร
const slides = [
    "images/slide1.jpg",
    "images/slide2.png",
    "images/slide3.png"
];

let index = 0;
const slideImg = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % slides.length;
    slideImg.src = slides[index];
}, 4000);

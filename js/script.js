async function loadQuote() {
    try {
        const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/today')}`
        );
        const wrapped = await response.json();
        const data = JSON.parse(wrapped.contents);

        const quote = data[0]; // return array with one quote
        document.getElementById("quote-text").textContent = `"${quote.q}" — ${quote.a}`;
    } catch (error) {
        console.log("Quote API error:", error);
        document.getElementById("quote-text").textContent = "Couldn't load quote today 😔";
    }
}


loadQuote();


// ===== Slideshow =====
const slides = [
    "images/slide1.png",
    "images/slide2.png",
    "images/slide3.png"
];

let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    const slideImg = document.getElementById("slide");
    if (slideImg) {
        slideImg.src = slides[currentSlide];
    }
}, 3000); //3
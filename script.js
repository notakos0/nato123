window.addEventListener("load", () => {
    const fadeElement = document.querySelector(".fade");
    setTimeout(() => {
        fadeElement.classList.add("hidden");
    }, 1500);
});

const slideloadElements = document.querySelectorAll(".slideload");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

slideloadElements.forEach(el => observer.observe(el));

document.querySelectorAll(".card-con").forEach(cardCon => {
    cardCon.addEventListener("click", () => {
        cardCon.classList.toggle("clicked");
    });
});

// Az új animációk hozzáadása
const slideElements = document.querySelectorAll(".rightslide, .leftslide");  // Jobb és bal slide elemek

slideElements.forEach(el => {
    observer.observe(el);  // Az új animációk is figyelés alatt
});

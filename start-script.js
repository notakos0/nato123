document.getElementById("redirect-btn").addEventListener("click", () => {
    const fadeElement = document.querySelector(".fade");

    fadeElement.classList.add("active");

    setTimeout(() => {
        window.location.href = "main.html";
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



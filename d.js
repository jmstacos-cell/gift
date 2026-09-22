function enterRoom() {
    document.getElementById("room").scrollIntoView({
        behavior: "smooth"
    });
}

function openLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

function goHome() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}


/* LETTER SCROLL ANIMATION */

const paragraphs = document.querySelectorAll(".letter p");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
});


/* SMALL PARALLAX EFFECT */

window.addEventListener("scroll", () => {

    const moon = document.querySelector(".moon");

    if (!moon) return;

    const scrollPosition = window.scrollY;

    moon.style.transform =
        `translateY(${scrollPosition * 0.04}px)`;

});
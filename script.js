const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".header__nav-list");

if (hamburger && nav) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent closing immediately
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    //click inside menu → don't close
    nav.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    //click outside → close menu
    document.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
}

const text = [
    "フロントエンドエンジニア",
    "レスポンシブなWebサイト制作",
    "React・PHPを学習中"
];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.getElementById("typing-text").textContent = currentText.substring(0, j);

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// back to top button
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const items = document.querySelectorAll(".stagger");

window.addEventListener("scroll", () => {
    items.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 150); // delay
        }
    });
});

const zooms = document.querySelectorAll(".zoom");

window.addEventListener("scroll", () => {
    zooms.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }
});

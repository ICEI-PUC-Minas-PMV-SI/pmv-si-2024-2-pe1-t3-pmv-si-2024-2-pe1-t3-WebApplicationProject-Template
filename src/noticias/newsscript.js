const allNewsPages = [
    "/src/noticias/noticiaquente.html",
    "/src/noticias/noticia1.html",
    "/src/noticias/noticia2.html",
    "/src/noticias/noticia3.html",
    "/src/noticias/noticia4.html",
    "/src/noticias/noticia5.html",
    "/src/noticias/noticia6.html",
    "/src/noticias/noticia7.html",
    "/src/noticias/noticia8.html",
    "/src/noticias/noticia9.html",
    "/src/noticias/noticia10.html",
    "/src/noticias/noticia11.html",
    "/src/noticias/noticia12.html",
    "/src/noticias/noticia13.html",
    "/src/noticias/noticia14.html",
    "/src/noticias/noticia15.html",
    "/src/noticias/noticia16.html",
    "/src/noticias/noticia17.html",
    "/src/noticias/noticia18.html",
    "/src/noticias/noticia19.html",
    "/src/noticias/noticia20.html",
];

const allowedTypes = {
    estudante: [
        "/src/noticias/noticiaquente.html",
        "/src/noticias/noticia19.html",
        "/src/noticias/noticia17.html",
        "/src/noticias/noticia7.html",
        "/src/noticias/noticia20.html",
        "/src/noticias/noticia18.html",
        "/src/noticias/noticia16.html",
    ],
    iniciante: [
        "/src/noticias/noticiaquente.html",
        "/src/noticias/noticia12.html",
        "/src/noticias/noticia14.html",
        "/src/noticias/noticia15.html",
        "/src/noticias/noticia13.html",
        "/src/noticias/noticia3.html",
        "/src/noticias/noticia11.html",
    ],
    intermediario: [
        "/src/noticias/noticiaquente.html",
        "/src/noticias/noticia9.html",
        "/src/noticias/noticia10.html",
        "/src/noticias/noticia8.html",
        "/src/noticias/noticia6.html",
    ],
    avancado: [
        "/src/noticias/noticiaquente.html",
        "/src/noticias/noticia4.html",
        "/src/noticias/noticia1.html",
        "/src/noticias/noticia5.html",
        "/src/noticias/noticia2.html",
    ],
};

function getFilteredNewsPages() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const investorType = userData?.investidorType || "default";

    if (!userData || !userData.logged) {
        return allNewsPages;
    }

    return allowedTypes[investorType] || allNewsPages;
}

const newsPages = getFilteredNewsPages();

const currentPage = window.location.pathname;
let currentIndex = newsPages.indexOf(currentPage);

const prevBtn = document.getElementById("prev-news");
const nextBtn = document.getElementById("next-news");

function goToPreviousNews() {
    if (currentIndex > 0) {
        window.location.href = newsPages[currentIndex - 1];
    }
}

function goToNextNews() {
    if (currentIndex < newsPages.length - 1) {
        window.location.href = newsPages[currentIndex + 1];
    }
}

if (prevBtn) prevBtn.addEventListener("click", goToPreviousNews);
if (nextBtn) nextBtn.addEventListener("click", goToNextNews);

function setButtonTitles() {
    if (prevBtn && currentIndex > 0) {
        fetch(newsPages[currentIndex - 1])
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const title = doc.querySelector(".titleAsset")?.innerText || "Notícia Anterior";
                prevBtn.setAttribute("data-title", title);
            });
    }

    if (nextBtn && currentIndex < newsPages.length - 1) {
        fetch(newsPages[currentIndex + 1])
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const title = doc.querySelector(".titleAsset")?.innerText || "Próxima Notícia";
                nextBtn.setAttribute("data-title", title);
            });
    }

    if (prevBtn && currentIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = "0.5";
    }
    if (nextBtn && currentIndex === newsPages.length - 1) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.5";
    }
}

setButtonTitles();
const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.append(mainDiv);
let page = 0;

const getCatsPhotos = async (page = 0) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`);
    const catsPhotos = await response.json();
    mainDiv.innerHTML = "";
    const headline = document.createElement("h3");
    headline.innerText = `Showing picture from the API call to https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`
    mainDiv.append(headline);
    displayPageOptions();
    displayCats(catsPhotos);
}

getCatsPhotos()

const displayCats = (catsPhotos) => {
    catsPhotos.forEach(element => {
        const pictureDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = element.url;
        pictureDiv.append(img);
        mainDiv.append(pictureDiv);
    });
}

const displayPageOptions = () => {
    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pagesDiv");
    const pageNumber = parseInt(page);
    for(let i = 3; i >= 1; i--) {
        if (pageNumber - i > -1) {
            pagesDiv.append(createPageSelection(pageNumber - i));
        }
    }
    pagesDiv.append(createPageSelection(pageNumber, false));
    for(let i = 1; i <= 3; i++) {
        if (parseInt(pageNumber) + i < 10) {
            pagesDiv.append(createPageSelection(pageNumber + i));
        }
    }
    mainDiv.append(pagesDiv);
}

const createPageSelection = (index, clickable = true) => {
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("pageDiv");
    const pageButton = document.createElement("button");
    pageButton.classList.add("pageButton");
    pageButton.innerText = index;
    if (clickable) {
        pageButton.classList.add("hover");
        pageButton.addEventListener("click", function(event) {
            page = pageButton.innerText;
            getCatsPhotos(pageButton.innerText);
        })
    } else {
        pageButton.classList.add("currentPage");
    }
    pageDiv.append(pageButton);
    return pageDiv;
}

// document.addEventListener("keypress", function(event) {
//     if (!event.code.includes("Digit")) {
//         return;
//     }
//     getCatsPhotos(event.key);
// })
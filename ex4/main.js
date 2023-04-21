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
    catsPhotos.forEach(element => {3
        const pictureDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = element.url;
        pictureDiv.append(img);
        mainDiv.append(pictureDiv);
    });
}

getCatsPhotos()

document.addEventListener("keypress", function(event) {
    if (!event.code.includes("Digit")) {
        return;
    }
    getCatsPhotos(event.key);
})
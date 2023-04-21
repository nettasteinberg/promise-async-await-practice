const body = document.querySelector("body");
const mainDiv = document.createElement("div");
const catBreeds = {};
const catBreedSelect = document.createElement("select");

const getCatBreeds = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/breeds");
    const catBreedsData = await response.json();
    console.log(catBreedsData);
    catBreedsData.forEach(cat => {
        catBreeds[cat.name] = cat.id;
    })
    createDropDown()
    catBreedSelect.addEventListener("change", async function(event) {
        
        const breedName = event.target.value;
        const breedId = catBreeds[breedName];
        response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
        const breedData = await response.json();
        console.log(breedData);
        img.src = breedData[0].url;
    })
}

getCatBreeds();

const selectBreed = document.createElement("p");
selectBreed.innerHTML = "Select a cat breed ";

selectBreed.append(catBreedSelect);
mainDiv.append(selectBreed);
const img = document.createElement("img");
body.append(mainDiv, img);

const createDropDown = () => {
    const breedOptionDefault = document.createElement("option");
    breedOptionDefault.innerText = "--- Choose cat breed ---";
    catBreedSelect.append(breedOptionDefault);
    Object.keys(catBreeds).forEach(breedName => {
        const breedOption = document.createElement("option");
        breedOption.innerText = breedName;
        catBreedSelect.append(breedOption);
    })
}


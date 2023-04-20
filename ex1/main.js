const body = document.querySelector("body");

const getRandomUserData = async () => {
    try{
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        console.log(data.results[0]);
        const randomUser = data.results[0];
        displayUser(randomUser);
        userDetails(randomUser);
    } catch(err){
        console.log(err);
    }
}

const button = document.createElement("button");
button.innerText = "Display Random User";
button.style.marginBottom = "1rem";
button.addEventListener("click", function(event) {
    getRandomUserData();
})
body.append(button);

const displayUser = (user) => {
    const userDiv = document.createElement("div");
    addUserPicture(userDiv, user.picture.large);
}

const addUserPicture = (div, picture) => {
    const img = document.createElement("img");
    img.src = picture;
    div.append(img);
    body.append(div);
}

const userDetails = (user) => {
    const userDiv = document.createElement("div");
    const userName = document.createElement("p");
    userName.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
    const userLocation = document.createElement("p");
    userLocation.innerText = `Location: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`
    const userEmail = document.createElement("p");
    userEmail.innerText = `Email: ${user.email}`
    userDiv.append(userName, userLocation, userEmail);
    body.append(userDiv);
}
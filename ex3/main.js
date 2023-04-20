const body = document.querySelector("body");
const headline = document.createElement("h2");
headline.innerText = "Users List";
body.append(headline);

const getUsersData = async () => {
    try {
        const list = document.createElement("ul");
        for (let page = 1; page <= 2; page++) {
            const response = await fetch(`https://reqres.in/api/users?page=${[page]}`);
            const usersData = await response.json();
            for (let j = 0; j <= 5; j++) {
                const userData = usersData.data[j];
                const li = document.createElement("li");

                const name = document.createElement("p");
                name.innerText = `Name: ${userData.first_name} ${userData.last_name}`;
                const email = document.createElement("p");
                email.innerText = `Email: ${userData.email}`;
                const img = document.createElement("img");
                img.src = `${userData.avatar}`;
                li.append(name, email, img);
                list.append(li);
            }
        }
        body.append(list);
    } catch (err) {
        console.log(err);
    }
}

getUsersData();
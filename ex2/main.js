const body = document.querySelector("body");
const headline = document.createElement("h2");
headline.innerText = "ToDo list";

body.append(headline);

const getToDosData = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todosData = await response.json();
        console.log(todosData[0]);
        const ul = document.createElement("ul");
        todosData.forEach(todo => {
            // const title = todo.title;
            const isDone = todo.completed;
            const li = document.createElement("li");
            li.innerText = todo.title;
            if (todo.completed) {
                li.style.textDecoration = "line-through";
            }
            ul.append(li);
        });
        body.append(ul);
    } catch (error) {
        console.log(error.message);
    }
}

getToDosData();
Exercise 1:
Use the following address to display a user by clicking a button: https://randomuser.me/api/.
Design the user data as you see fit.

Exercise 2:
Use a "fetch" call to https://jsonplaceholder.typicode.com/todos and build a list of li elements with all the todos items.
For each todo item that is done, display it with a strikethrough.
Implement the code with async/await

Exercise 3:
Display the list of users taken from https://reqres.in/api/users with fetch.
Each item in the list will be displayed on the page with the following details: first name, last name, email and avatar (picture).

Exercise 4:
Display all the cat photos you get from https://api.thecatapi.com/v1/images/search?limit=10.
Add the option to move between pages by clicking on the numbers 1-9, and make the appropriate call with the added 'page' parameter. For example, with page no. 3, the call will be: https://api.thecatapi.com/v1/images/search?limit=10&page=3.
* When working with query parameters, it is recommended to use URLSearchParams.

Exercise 5:
Create a select DropDown that will display a list of cat breeds, taken from https://api.thecatapi.com/v1/breeds.
Use id and name of each breed.
When a breed is selected, use its id to call https://api.thecatapi.com/v1/images/search?breed_ids=breed-id (replace breed-id with the id of the selected breed) and display a picture of a cat from that breed.

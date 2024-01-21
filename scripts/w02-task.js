/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Christopher Gómez Dallar";
let currentYear = new Date().getFullYear();
let profilePicture = "images/my_picture.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const pictureElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
pictureElement.src = profilePicture;
pictureElement.alt = ` Profile image of ${fullName}`;

/* Step 5 - Array */
const favoriteFoods = ["lasagna", "hamburger", "pasta bologna", "brownie"];
const singleFood = "pizza";

favoriteFoods.push(singleFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;

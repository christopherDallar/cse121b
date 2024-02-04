/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Christopher Dallar",
  photo: "images/my_picture.jpeg",
  favoriteFoods: ["lasagna", "boloñesa", "hamburger"],
  hobbies: ["programming", "watch Series and movies", "dance"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Cabudare, VE",
  length: "11 year",
});

myProfile.placesLived.push({
  place: "Barquisimeto, VE",
  length: "12 year",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.photo;

/* Favorite Foods List*/
// document.querySelector("#favorite-foods").innerHTML += myProfile.favoriteFoods
//   .map((food) => `<li>${food}</li>`)
//   .join(" ");
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;

  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;

  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((pLived) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");

  dt.textContent = pLived.place;
  dd.textContent = pLived.length;

  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});

/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json",
  );

  const data = await response.json();

  templeList = data;

  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
  reset();

  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "utah":
      temples = templeList.filter((tmp) => tmp.location.includes("Utah"));

      displayTemples(temples);

      break;
    case "notutah":
      temples = templeList.filter((tmp) => !tmp.location.includes("Utah"));

      displayTemples(temples);

      break;
    case "older":
      temples = templeList.filter((tmp) => {
        tmp.location.includes("Utah");
        const date = new Date(1950, 0, 1);
        const dedicatedYear = tmp.dedicated.split(",")[0];

        return dedicatedYear < date.getFullYear();
      });

      displayTemples(temples);

      break;
    case "all":
      displayTemples(temples);

      break;
  }
};

getTemples();

/* Event Listener */

document
  .getElementById("filtered")
  .addEventListener("change", () => filterTemples(templeList));

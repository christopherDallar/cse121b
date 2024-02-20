/* Library Inventory : Final Project */

document.querySelector("#year").textContent = new Date().getFullYear();

/* Declare and initialize global variables */
const booksContainerEl = document.getElementById("books");
let booksDataList = [];
let booksList = [];
const categories = ["Novel", "Comedy", "Fairy Tale", "History"];

/*  displayCategoryFilterOptions  Function */

const displayCategoryFilterOptions = () => {
  const filterEl = document.getElementById("searchFilter");

  categories.forEach((category) => {
    const option = document.createElement("option");

    option.value = category;
    option.textContent = category;

    filterEl.appendChild(option);
  });
};

/*  displayBooks  Function */

const displayBooks = (books) => {
  books.forEach((book) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const button = document.createElement("button");

    h3.textContent = book.title;
    span.textContent = `Author: ${book.author}`;
    a.href = book.link;
    a.target = `_blank`;
    button.textContent = `Read More`;

    p.textContent = `Category: ${book.category}`;

    a.appendChild(button);

    article.appendChild(h3);
    article.appendChild(span);
    article.appendChild(p);
    article.appendChild(a);

    booksContainerEl.appendChild(article);
  });
};

/* async getBooks Function using fetch()*/

const getBooks = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/7fd24340-2c7d-4064-ba40-9b5e56f1991b",
  );

  const data = await response.json();

  booksDataList = data;
  booksList = data;

  displayBooks(booksList);
};

/* reset Function */

const reset = () => {
  booksList = booksDataList;
  booksContainerEl.innerHTML = "";
};

/* normalizeText Function */

const normalizeText = (text) => text.trim().toLowerCase();

/* filterBooksCategory Function */

const filterBooks = (booksList) => {
  const filterValue = document.getElementById("searchFilter").value;

  if (!(filterValue !== "" && filterValue !== "all")) return booksList;

  booksList = booksList.filter((book) => book.category.includes(filterValue));

  return booksList;
};

/* searcher Function */

const searchBooks = (booksList) => {
  const value = normalizeText(document.getElementById("searcherInput").value);

  if (value === "") return booksList;

  booksList = booksList.filter((book) => {
    bTitle = normalizeText(book.title);
    bAuthor = normalizeText(book.author);

    return bTitle.includes(value) || bAuthor.includes(value);
  });

  return booksList;
};

const onChangeInputValue = (booksList) => {
  reset();

  booksList = searchBooks(booksList);
  booksList = filterBooks(booksList);

  displayBooks(booksList);
};

/* Initialized functions */
displayCategoryFilterOptions();
getBooks();

/* Event Listener */

document
  .getElementById("searchFilter")
  .addEventListener("change", () => onChangeInputValue(booksList));

document
  .getElementById("searcherInput")
  .addEventListener("keyup", () => onChangeInputValue(booksList));

import { getMoviesByCategory, searchMovie } from "./getHandler.js";
document.querySelector(".right-btn").addEventListener("click", (e) => {
  document.querySelector(".movie-list").scrollLeft += 280;
});
document.querySelector(".left-btn").addEventListener("click", (e) => {
  document.querySelector(".movie-list").scrollLeft -= 280;
});
const navItems = document.querySelectorAll(".nav-item");
const categories = document.querySelectorAll(".category-item");
const heading = document.querySelector(".heading");
const pageContent = document.querySelector(".page-content");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    navItems.forEach((navItem) => {
      navItem.className = "nav-item";
    });
    e.target.classList.add("active-nav-item");
  });
});
categories.forEach((item) => {
  item.addEventListener("click", async (e) => {
    e.preventDefault();
    categories.forEach((cat) => {
      cat.className = "category-item";
    });
    e.target.classList.add("active-category");
    const newMoviesHtml = await getMoviesByCategory(e.target.textContent);
    const newElement = document.createElement("div");
    newElement.innerHTML = newMoviesHtml;
    pageContent.removeChild(pageContent.lastElementChild);
    pageContent.appendChild(newElement.firstChild);
    heading.textContent = `${e.target.textContent} Movies`;
  });
});

const searchField = document.getElementById("search-field");
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchField.value;
  const searchResultHtml = await searchMovie(searchTerm);

  const newElement = document.createElement("div");
  newElement.innerHTML = searchResultHtml;
  pageContent.removeChild(pageContent.lastElementChild);
  pageContent.appendChild(newElement.firstChild);
  heading.textContent = `Search Results For '${searchTerm}'`;
});

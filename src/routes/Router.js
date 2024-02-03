const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getAllMovies,
  getMoviesByCategory,
  searchMovie,
} = require("../data/dataStorage");

router.get("/", (req, res) => {
  getAllCategories((categories) => {
    getAllMovies((movies) => {
      console.log(movies);
      res.render("homepage", { categories: categories, movies: movies });
    });
  });
});
router.get("/categories/:category", (req, res) => {
  const category = req.params.category;
  getMoviesByCategory(category, (movies) => {
    console.log(movies);
    res.render("components/searchResults", { movies: movies });
  });
});
router.get("/search/:term", (req, res) => {
  const term = req.params.term.toUpperCase();
  searchMovie(term, (results) => {
    console.log(results);
    res.render("components/searchResults", { movies: results });
  });
});

module.exports = router;

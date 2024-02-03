const mysql = require("mysql");
const dbconfig = require("./../../config/dbconfig.json");

function getAllCategories(callback) {
  try {
    const connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
      if (err) {
        throw err;
      }
      console.log("Connected to Database");
    });
    connection.query("SELECT name FROM CATEGORY", (err, rows, col) => {
      if (err) {
        throw err;
      }
      const result = [];
      for (let row of rows) {
        result.push(row.name);
      }
      return callback(result);
    });
    connection.end();
  } catch (e) {
    console.log(e.message);
  }
}
function getAllMovies(callback) {
  try {
    const connection = mysql.createConnection(dbconfig);
    connection.connect(() => {
      console.log("Connected to Database");
    });
    connection.query(
      "SELECT * FROM nicer_but_slower_film_list LIMIT 50",
      (err, rows, col) => {
        if (err) {
          throw err;
        }
        return callback(rows);
      }
    );
    connection.end();
  } catch (e) {
    console.log(e.message);
  }
}
function getMoviesByCategory(category, callback) {
  try {
    const connection = mysql.createConnection(dbconfig);
    connection.connect(() => {
      console.log("Connected to Database");
    });
    connection.query(
      "SELECT * FROM nicer_but_slower_film_list WHERE category = ? LIMIT 50",
      [category],
      (err, rows, col) => {
        if (err) {
          throw err;
        }
        return callback(rows);
      }
    );
    connection.end();
  } catch (e) {
    console.log(e.message);
  }
}
function searchMovie(term, callback) {
  try {
    const connection = mysql.createConnection(dbconfig);
    connection.connect(() => {
      console.log("Connected to Database");
    });
    connection.query(
      "SELECT * FROM nicer_but_slower_film_list WHERE title LIKE ? limit 50",
      [`%${term}%`],
      (err, rows, col) => {
        if (err) {
          throw err;
        }
        return callback(rows);
      }
    );
    connection.end();
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  getAllCategories,
  getAllMovies,
  getMoviesByCategory,
  searchMovie,
};

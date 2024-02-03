const express = require("express");
const { LHOST, LPORT } = require("../config/config.json");
const router = require("./routes/Router");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(router);
app.use(express.static(__dirname + "/views/static"));

app.listen(LPORT, LHOST, () => {
  console.log("Listening on port " + LPORT);
});

require("dotenv").config(); // .config is specific to dotenv (loads .env file)

const express = require("express"); // REQUIRE - import dependency
// express allows us to make http requests
const app = express(); // starting up the express dependency
const workout = require("./controllers/workoutcontroller");
const user = require("./controllers/usercontroller");

const sequelize = require("./db");
sequelize.sync(); // sync all models to database

app.use(express.json()); // method that recognizes incoming object as javascript object
// express.json (posting/update a database)
app.use(require("./middleware/headers"));

app.listen(process.env.PORT, () =>
  console.log(`process is listening on ${process.env.PORT}`)
);
// listen tells app what port to listen on
// writing an annoymous arrow function to console log the message

// -environment files- allow us to set up environment variables.
// simplify the code we write

// app.use(express.static(__dirname + "/public"));
// console.log(__dirname);

// app.get("/", (req, res) => res.render("index")); // with express, can create endpoints
// // request to server and response (render our index.html file)

app.use("/user", user);
app.use(require("./middleware/validate_session"));
app.use("/workout", workout);

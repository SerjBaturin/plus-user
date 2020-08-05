const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");

dotenv.config();

mongoose.connect(process.env.CONNECT, {
  dbName: "plususer",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  }),
);

app.use(express.static("../client"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
// Axios requests readable middleware
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  User.find()
    .then((d) => res.send(d))
    .catch((err) => err);
});

app.post("/users/add", (req, res) => {
  const name = req.body.name;
  const sirname = req.body.sirname;
  const email = req.body.email;

  const user = new User({ name, sirname, email });
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid);
});

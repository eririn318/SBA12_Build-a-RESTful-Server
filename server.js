const express = require("express");
const morgan = require("morgan");

//Set up all variables in the .env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

// // look at .env file
// console.log(process.env.NODE_ENV)

//====Middlewares=====

app.use(morgan("dev")); //logger
app.use(express.json()); //body parser

//======Routes======
// request /user --> will send to /routes/userRouter
app.use("/api/user", require("./routes/userRouter"));
app.use("/api/movies", require("./routes/movieRouter"));

//Use this route to setup the API documentation
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});


//receiving the request data from responding back to front end
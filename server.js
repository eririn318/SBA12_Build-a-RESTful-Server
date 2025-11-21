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

// resouces
// https://www.omdbapi.com/
// https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkaGRkZGQCAw8QDxYCHwBnZGRkZAIFDxYCHgdWaXNpYmxlaGQCBw8WAh8BZxYCAgcPD2QWAh4Fc3R5bGUFGWJhY2tncm91bmQtY29sb3I6I0ZGRkYwMDtkAgIPFgIfAWhkAgMPFgIfAWcWAgIBDw8WAh4EVGV4dAUYQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQuZGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQtwYXRyZW9uQWNjdAUIZnJlZUFjY3T47fNlnpLzDMfkAdiOz4TMFrx0kn81dkFuJOZ6YyuVug%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAhsK%2FsRuWgl37XkNLhdXXAXmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYphdL1XrNEjnC%2FKjNya%2Bmqh8hRPnM5dWgso2y7bj7kVNLSFbtYIt24Lw6ktxrd5Z67%2F4LFSTzFfbXTFN5VgQX9Nbzfg78Z8BXhXifTCAVkevd1MIKlIMz0EohPh7bQpMPkNZeuDbCI%2B3M80Cad8rJ1hN&at=freeAcct&Email2=eririn75%40hotmail.com&FirstName=eriko&LastName=kan&TextArea1=sba12&Button1=Submit
// https://www.omdbapi.com/?i=tt3896198&apikey=3e49d81e
const express = require('express');

const app = express();

app.get("/hello", (req, res) => {
  res.json({ "message": "Hello, world!" });   //array, object, string
})

const PORT = 5001
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

// GET, POST, PUT, DELETE
// http://localhost:5001

//Authentication - singin, signup
//Movies
//Users
//Watchlist
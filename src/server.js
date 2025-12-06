import express from 'express';

// Import Routes
import movieRoutes from './routes/movieRoutes.js';


const app = express();

//API Routes
app.use("/movies", movieRoutes);  

// Setup Server
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
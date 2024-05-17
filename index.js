const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")

  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

// membuat schema database
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});

// membuat model database menggunakan schema yang telah dibuat diatas
const Movie = mongoose.model("Movie", movieSchema);

// membuat data menggunakan model movie yang telah dibuat diatas
const movie = new Movie({
  title: "Black Phanter",
  year: 2018,
  score: 7.8,
  director: "Ryan Cougler",
});

// menyimpan data dari movie
movie.save();

console.log(movie);

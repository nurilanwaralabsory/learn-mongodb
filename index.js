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
  genre: String,
  director: String,
  rating: Number,
});

// membuat model database menggunakan schema yang telah dibuat diatas
const Movie = mongoose.model("Movie", movieSchema);

Movie.deleteMany({ year: 2019 })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

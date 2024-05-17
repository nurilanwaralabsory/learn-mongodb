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

// Movie.updateOne({ title: "Parasite" }, { rating: 5 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Movie.findByIdAndUpdate(
  "6646fd0815b1154940a442a3",
  { rating: 10 },
  { new: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

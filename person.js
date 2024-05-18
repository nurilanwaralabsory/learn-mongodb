const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")

  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

personSchema.pre("save", function () {
  this.firstName = "Luna";
  this.lastName = "Lovegood";
  console.log("persiapan menyimpan data");
});

personSchema.post("save", function () {
  console.log("data berhasil disimpan");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Harry",
  lastName: "Potter",
});

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

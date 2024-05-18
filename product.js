const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")

  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const tshirt = new Product({
  name: "T Shirt Raglan",
  price: 50000,
});

tshirt
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  richDescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  // images: [
  //   {
  //     type: String,
  //   },
  // ],
  brand: {
    type: String,
  },
  price: {
    type: String,
    default: 0,
  },
  countInStock: {
     type: String,
    // required: true,
    // min: 0,
    // max: 255,
  },
  rating: {
    type: String,
    
  },
  numReviews: {
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productSchema.set("toJSON", {
  virtuals: true,
});

exports.Product = mongoose.model("Product", productSchema);

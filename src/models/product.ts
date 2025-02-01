import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Name"],
    },
    photos: [
      {
        public_id: {
          type: String,
          required: [true, "Please enter Public ID"],
        },
        url: {
          type: String,
          required: [true, "Please enter URL"],
        },
        idx: {
          type: Number,
          default: -1,
        }
      },
    ],

    price: {
      type: Number,
      required: [true, "Please enter Price"],
    },
    sellingPrice: {
      type: Number,
      required: [true, "Please enter Selling Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter Stock"],
    },
    category: {
      type: String,
      required: [true, "Please enter Category"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please enter Description"],
    },

    ratings: {
      type: Number,
      default: 0,
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
      trim: true,
      enum: ["men", "women", "couples"], // Restricting gender values
    },

    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", schema);

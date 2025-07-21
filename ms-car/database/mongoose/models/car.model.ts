import mongoose, { Schema } from "mongoose";

const CarSchema = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
    auto: true
  },
  brand: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  horsePower: {
    type: Number,
    required: true
  }
});

export const CarModel = mongoose.model("Car", CarSchema, "car");

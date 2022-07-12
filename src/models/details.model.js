import mongoose from "mongoose";
const { Schema, model } = mongoose;
const DetailSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String },
  uid: { type: String, required: true },
});
export const Detail = model("details", DetailSchema);

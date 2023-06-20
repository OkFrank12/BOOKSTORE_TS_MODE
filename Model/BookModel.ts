import mongoose from "mongoose";
import { iBooks } from "../Utils/Interface";

interface books extends iBooks, mongoose.Document {}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  authorName: {
    type: String,
    unique: true,
  },
  details: {
    type: String,
  },
  isbn: {
    type: String,
  },
  price: {
    type: Number,
  },
  authorEmail: {
    type: String,
    unique: true,
  },
});

const bookModel = mongoose.model<books>("Book-Store", bookSchema);

export default bookModel;

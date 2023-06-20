import express, { Router } from "express";
import {
  getAllBooks,
  getSingleBook,
  newBooks,
} from "../Controller/BooksController";

const router: Router = express.Router();

router.route("/getallbooks").get(getAllBooks);
router.route("/getsinglebooks").get(getSingleBook);
router.route("/createbooks").post(newBooks);

export default router;

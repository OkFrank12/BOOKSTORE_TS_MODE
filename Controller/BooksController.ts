import express, { Request, Response } from "express";
import bookModel from "../Model/BookModel";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const getBooks = await bookModel.find();
    if (getBooks.length > 0) {
      return res.status(200).json({
        message: "Got books successfully",
        data: getBooks,
      });
    } else {
      return res.status(200).json({
        message: "No Books found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in getting a book: getAllBooks",
    });
  }
};

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    const singleBook = await bookModel.findById(req.params.bookId);
    return res.status(200).json({
      message: "Gotten single books successfully",
      data: singleBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in getting a single book: getsingleBook",
      data: error,
    });
  }
};

export const newBooks = async (req: Request, res: Response) => {
  try {
    const { title, authorName, details, isbn, price, authorEmail } = req.body;
    const getAuthorIndex = await authorName.charAt(0).toUppercase();
    const getIsbn = await `${getAuthorIndex}_${Math.floor(
      Math.random() * 1000
    )}_${Math.floor(Math.random() * 1000)}`;

    const createBook = await bookModel.create({
      title,
      authorName,
      details,
      isbn: getIsbn,
      price,
      authorEmail,
    });
    return res.status(201).json({
      message: "Created book successfully",
      data: createBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occures in creating book: newBooks",
    });
  }
};

export const updateBooks = async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
    const update = await bookModel.findByIdAndUpdate(
      req.params.bookId,
      {
        title,
        price,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Updated Books successfully",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while updating books",
    });
  }
};

export const deleteBooks = async (req: Request, res: Response) => {
  try {
    const deleting = await bookModel.findByIdAndDelete(req.params.bookId);
    return res.status(201).json({
      message: "Deleted Books successfully",
      data: deleting,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while deleting books",
    });
  }
};

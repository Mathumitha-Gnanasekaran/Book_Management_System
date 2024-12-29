const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { authenticateToken, authorizeRole } = require("../middlewares/authMiddleware");
const { validateBook } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", authenticateToken, authorizeRole("admin"), validateBook, addBook);
router.put("/books/:id", authenticateToken, authorizeRole("admin"), updateBook);
router.delete("/books/:id", authenticateToken, authorizeRole("admin"), deleteBook);

module.exports = router;

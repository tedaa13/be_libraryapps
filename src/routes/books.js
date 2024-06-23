const express = require('express');
const BookController = require('../controller/books.js');
const router = express.Router();

//CREATE - POST
router.post('/', BookController.createNewBook);
//READ - GET
router.get('/', BookController.getAllBooks);
router.get('/trx/available', BookController.getAllBooksActive);
//UPDATE - PATCH
router.patch('/:id', BookController.updateBook);
//DELETE - DELETE
router.delete('/:id', BookController.deleteBook);

module.exports = router;
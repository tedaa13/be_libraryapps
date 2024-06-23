const express = require('express');
const TransactionController = require('../controller/transactions.js');
const router = express.Router();

router.get('/', TransactionController.getAllTransaction);
router.post('/', TransactionController.createTransaction);

module.exports = router;
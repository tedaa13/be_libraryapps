const express = require('express');
const UserController = require('../controller/users.js');
const router = express.Router();

//CREATE - POST
router.post('/', UserController.createNewUser);
//READ - GET
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getDetailUser);
router.get('/trx/active', UserController.getAllUsersActive);
//UPDATE - PATCH
router.post('/:id', UserController.updateUser);
//DELETE - DELETE
router.delete('/:id', UserController.deleteUser);

module.exports = router;
const express = require('express');
const LocationController = require('../controller/locations.js');
const router = express.Router();

//CREATE - POST
router.post('/', LocationController.createNewLocations);
//READ - GET
router.get('/', LocationController.getAllLocations);
//UPDATE - PATCH
router.patch('/:id', LocationController.updateLocations);
//DELETE - DELETE
router.delete('/:id', LocationController.deleteLocations);

module.exports = router;
const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/jwtCheck');
const {
  savePhoto,
  getAllSavedPhotos,
  deletePhoto,
} = require('../controllers/favorites');

// api/v1/photos/favorites
router.post('/photos/favorites', jwtCheck, savePhoto);

// api/v1/photos/favorites
router.get('/photos/favorites', jwtCheck, getAllSavedPhotos);

// api/v1/photos/favorites
router.delete('/photos/favorites/:id', jwtCheck, deletePhoto);

module.exports = router;

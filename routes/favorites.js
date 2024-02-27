import { Router } from 'express';

import {
  savePhoto,
  getAllSavedPhotos,
  deletePhoto,
} from '../controllers/favorites.js';

const router = Router();
// api/v1/photos/favorites
router.post('/', savePhoto);

// api/v1/photos/favorites
router.get('/', getAllSavedPhotos);

// api/v1/photos/favorites
router.delete('/:id', deletePhoto);

export default router;

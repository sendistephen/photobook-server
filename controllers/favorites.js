import Favorites from '../model/Favorites.js';

export async function savePhoto(req, res) {
  try {
    let foundPhoto = await Favorites.findOne({ id: req.body.id });

    if (foundPhoto) {
      return res.status(400).json({ error: 'Photo exists already' });
    }
    const newFavoritePhoto = new Favorites({
      id: req.body.id,
      description: req.body.description,
      alt_description: req.body.alt_description,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      urls: req.body.urls,
      user: req.body.user,
      user_id: req.user.sub,
    });
    const savedPhoto = await newFavoritePhoto.save();
    return res.json({ success: true, photo: savedPhoto });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An internal server error occurred.' });
  }
}

export async function getAllSavedPhotos(req, res) {
  const data = await Favorites.find({ user_id: req.user.sub });
  if (!data) {
    return res.status(400).json({ msg: 'No data found' });
  }
  return res.json(data);
}
// remove favorite photo
export async function deletePhoto(req, res) {
  const foundPhoto = await Favorites.findOneAndRemove({
    id: req.params.id,
    user_id: req.user.sub,
  });
  if (!foundPhoto) {
    return res.status(400).json({ msg: 'Resource not found!' });
  }
  return res.json({ id: foundPhoto.id });
}

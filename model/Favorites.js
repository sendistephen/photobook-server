import { Schema, model } from 'mongoose';

const favoritesSchema = new Schema({
  id: String,
  description: String,
  alt_description: String,
  created_at: Date,
  updated_at: Date,
  urls: {
    raw: String,
    full: String,
    regular: String,
    small: String,
    thumb: String,
  },
  user: {
    username: String,
    profile_image: {
      medium: String,
    },
  },
  user_id: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default model('favorites', favoritesSchema);

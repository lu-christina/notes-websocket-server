import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  content: String,
  x: Number,
  y: Number,
  z: Number,
  width: Number,
  height: Number,
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;

import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const note = new Note();
  note.title = fields.title;
  note.content = fields.content;
  note.x = fields.x;
  note.y = fields.y;
  note.z = fields.z;
  note.width = fields.width;
  note.height = fields.height;
  return note.save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};

const fs = require('fs');

const fetchNotes = () => {

  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}
// const note1 = {
//   title: "note1",
//   body: "this is note1"
// }
//
// const note2 = {
//   title: "note2",
//   body: "this is note2"
// }
//
// const notes = [note1, note2];
// saveNotes(notes);
// console.log(typeof fetchNoteså());
const addNote = (title, body) => {
  const note = {
    title,
    body
    // title: title,
    // body: body
  }

  const notes = fetchNotes();
  if (notes.every(n => n.title != note.title)){
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    return false;
  }

}

module.exports = {
  addNote
}

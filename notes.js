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

const listNotes = () => {
  const notes = fetchNotes();
  console.log("Title                    Body");
  notes.forEach((note) => {
    let space = " ".repeat(25 - note.title.length);
    console.log(note.title + space + note.body);
  })
}

const readNote = (title) => {
  const notes = fetchNotes();
  let i = notes.findIndex(note => note.title === title);
  if (i === -1) {
    console.log("A note with this title does not exist.");
  } else {
    let space = " ".repeat(25-notes[i].title.length);
    console.log(notes[i].title + space + notes[i].body);
  }
}

const removeNote = (title) => {
  const notes = fetchNotes();
  let i = notes.findIndex(note => note.title === title);
  if (i === -1) {
    console.log("A note with this title does not exist.");
  } else {
    notes.splice(i, 1);
    saveNotes(notes);
    console.log("Note removed.");
  }
}





module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote
}

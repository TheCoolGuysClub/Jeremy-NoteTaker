//list just type list
//read and remove you reference by title
const yargs = require('yargs');
const argv = yargs
.command("add", "Adds a new note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  },
  body: {
    describe: "Body of note",
    alias: "b",
    demandOption: true,
  }
})
.command("remove", "Remove a note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  }
})
.command("list", "List all notes")
.command("read", "read a note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  }
})
.help()
.argv;
// console.log(argv);
const notes = require("./notes.js");



// console.log(argv);
const command = argv._[0];
// console.log(command);
if (command === "add") {
  const title = argv.title;
  const body = argv.body;
  const noteAdded = notes.addNote(title, body);
  if (noteAdded) {
    console.log("Your note was added");
  } else {
    console.log("this note already exists");
  }
} else if (command === "remove") {
  const title = argv.title;
  notes.removeNote(title);
  console.log();
} else if (command === "read") {
  const title = argv.title;
  notes.readNote(title);
  console.log();
} else if (command === "list") {
  notes.listNotes();
  console.log();
}

// switch (command) {
//   case "add":
//     console.log("Add function chosen");
//     break;
//   case "add":
//     console.log("Add function chosen");
//     break;
//   case "add":
//     console.log("Add function chosen");
//     break;
//   case "add":
//     console.log("Add function chosen");
//     break;
//
// }

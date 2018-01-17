//list just type list
//read and remove you reference by title

const argv = require("yargs").argv;
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
  console.log("Remove function chosen");
} else if (command === "read") {
  console.log("read function chosen");
} else if (command === "list") {
  console.log("list function chosen");
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

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
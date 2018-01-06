console.log('starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try{
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){}

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting the note', title);
};

const remove = (title) => {
    console.log('removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
};
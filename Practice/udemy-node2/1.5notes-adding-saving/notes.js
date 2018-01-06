console.log('starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
console.log('starting notes.js');
const fs = require('fs');

///////////////grab existing file//////////////////////////
const fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};////////////////////////////////////////////////////////

///////////////write to notes-data///////////////////////
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};///////////////////////////////////////////////////////

///////////////////add the note//////////////////////////////
const addNote = (title, body) => {
    let notes = fetchNotes();
    var note = {
        title,
        body
    };

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};//////////////////////////////////////////////////////////////

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting the note', title);
};

/////////////remove note////////////////////
const removeNote = (title) => {
    let notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};////////////////////////////////////////////////

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
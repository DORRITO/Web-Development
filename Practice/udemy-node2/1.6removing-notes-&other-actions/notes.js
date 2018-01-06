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
    return fetchNotes();
};

const getNote = (title) => {
    let notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

/////////////remove note////////////////////
const removeNote = (title) => {
    let notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};////////////////////////////////////////////////

const logNote = (note) => {
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
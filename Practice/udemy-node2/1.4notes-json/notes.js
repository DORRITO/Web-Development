console.log('starting notes.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
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
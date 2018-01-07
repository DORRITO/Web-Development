const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
    .command('add', 'add a new note', {
        title: {
            describe: "title of note",
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'the body of note',
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;
    
const command = argv._[0];
if(command === 'add'){
   let note = notes.addNote(argv.title, argv.body);
   if(note){
       console.log('note created!');
       notes.logNote(note);
   }else{
       console.log('note not created');
   }
} else if (command === 'list'){
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    let note = notes.getNote(argv.title);
    if(note){
        console.log("note read");
        notes.logNote(note);
    }else{console.log('no notes found')};
} else if(command === 'remove'){
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else{
    console.log('command not recognized');
}
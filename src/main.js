const noteElement = document.getElementById('note');
const notes = ['d', 'e', 'f', 'g', 'a', 'b', 'c', 'd1', 'e1', 'f1', 'g1'];
let previousNote = getRandomNote(notes);
let note = getRandomNote(notes);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}

function getRandomNote(notes) {
  return notes[getRandomInt(0,notes.length)];
}	

export default function ShowNote() {
  while (previousNote === note) {
    note = getRandomNote(notes);
  }
  noteElement.className = 'quarter-note ' + note;
  previousNote = note;
}


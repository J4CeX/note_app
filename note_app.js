import {notes, setNotes, getNotes, removeNote} from './notes.js';

const noteList = document.getElementById('list');

const displayList = () => {
  noteList.innerHTML = '';
  getNotes();
  notes.forEach((value) => {
    const li = document.createElement('li');
    li.classList.add('list-title');
    li.setAttribute('id', value.id);
    li.setAttribute('noteId', value.id);
    li.innerText = value.title;
    li.addEventListener('click', () => {
      console.log(value.id);
    });
    
    const span = document.createElement('span');
    span.classList.add('remove-button');
    span.setAttribute('removeButtonId', value.id);
    span.innerText = 'X';
    span.addEventListener('click', () => {
      removeNote(value.id);
      noteList.removeChild(li);
      setNotes();
    });

    noteList.appendChild(li);

    document.getElementById(value.id).appendChild(span);
    setNotes();
  });
}

displayList();

const submitButtonListener = () => {
  const inputNote = document.querySelector('input');
  let newNote = {
    id: notes[notes.length - 1].id + 1,
    title: inputNote.value,
    content: ''
  }
  notes.push(newNote);
  setNotes();
  displayList();
};

const createButton = document.getElementById('create-button');

createButton.addEventListener('click', () => {
  displayList();
  const li = document.createElement('li');
  const input = document.createElement('input');
  const button = document.createElement('button');
  input.setAttribute('type', 'text');
  button.setAttribute('id', 'submit')
  button.textContent = 'Submit';
  li.appendChild(input);
  li.appendChild(button);
  noteList.appendChild(li);
  noteList.app
  document.querySelector('input').focus();

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    if(input.value.trim() != '') {
      submitButtonListener();
    }
  });
  window.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && input.value.trim() != '') {
      submitButtonListener();
    }
  })
});
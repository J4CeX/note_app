import {notes, setNotes, getNotes} from './notes.js';

const noteList = document.getElementById('list');

const displayList = () => {
  noteList.innerHTML = '';
  getNotes();
  notes.forEach((value) => {
    const li = document.createElement('li');
    li.classList.add('list-title');
    li.setAttribute('id', value.id);

    li.addEventListener('click', () => {
      console.log(value.id);
    });
    
    li.innerText = value.title;
    noteList.appendChild(li);
  });
}

displayList();

const createButton = document.getElementById('create-button');

createButton.addEventListener('click', () => {
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
    const inputNote = document.querySelector('input');
    let newNote = {
      id: notes[notes.length - 1].id + 1,
      title: inputNote.value,
      content: ''
    }
    notes.push(newNote);
    setNotes();
    displayList();
  });
});
import {notes, setNotes, getNotes, removeNote} from './notes.js';

const noteList = document.getElementById('list');

const displayList = () => {
  noteList.innerHTML = '';
  getNotes();
  notes.forEach((value) => {
    const li = document.createElement('li');
    const title = document.createElement('p');
    title.classList.add('list-title');
    title.setAttribute('id', value.id);
    title.setAttribute('noteId', value.id);
    title.innerText = value.title;
    title.addEventListener('click', () => {
      displayNote(value.id);
    });
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('removeButtonId', value.id);
    removeButton.innerHTML = `<img src="cross-mark.png" height="40px" width="40px">`;
    removeButton.addEventListener('click', () => {
      removeNote(value.id);
      noteList.removeChild(li);
      setNotes();
      displayList();
    });

    noteList.appendChild(li);

    li.appendChild(title);
    li.appendChild(removeButton);

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
  document.querySelector('input').focus();

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    if(input.value.trim() != '') {
      submitButtonListener();
    } else {
      displayList();
    }
  });
  window.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && input.value.trim() != '') {
      submitButtonListener();
    } else if(event.key === 'Enter' && input.value.trim() == '') {
      displayList();
    } else {
      
    }
  })
});

const listContainer = document.getElementById('list-container');
const noteContainer = document.getElementById('note-container');

const displayNote = (noteId) => {
  listContainer.classList.add('hidden');
  noteContainer.classList.remove('hidden');

  let noteContent;

  notes.forEach((note) => {
    if(note.id === noteId) {
      noteContent = note.content;
    }
  });

  const textArea = document.createElement('textarea');
  textArea.value = noteContent;
  noteContainer.appendChild(textArea);

  const returnButton = document.getElementById('return-button');

  createButton.classList.add('hidden');
  returnButton.classList.remove('hidden');

  returnButton.addEventListener('click', () => {
    notes.forEach((note) => {
      if(note.id === noteId) {
        note.content = textArea.value;
      }
    });

    listContainer.classList.remove('hidden');
    noteContainer.classList.add('hidden');

    createButton.classList.remove('hidden');
    returnButton.classList.add('hidden');

    setNotes();
  });
}
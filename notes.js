export let notes = [
  {
    id: 1,
    title: 'Shop list',
    content: '- butter\n- bread\n- ham'
  },
  {
    id: 2,
    title: 'Projects done',
    content: '- calculator\n- quiz app\n- rock paper scissors\n- stop watch\n- tic tac toe\n- to do list'
  }
]

export const getNotes = () => {
  notes = JSON.parse(localStorage.getItem('notes'));
} 

export const setNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
}
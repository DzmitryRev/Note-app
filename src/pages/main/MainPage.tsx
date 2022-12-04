import React from 'react';
import Note from '../../components/note/Note';
import NoteStorage from '../../storage/NoteStorage';

const notes = [
  {
    id: 1,
    title: 'Hello',
    description:
      'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world ',
  },
  {
    id: 2,
    title: 'Hellowrrrr',
    description: 'sd world',
  },
  {
    id: 3,
    title: 'Worldddd',
    description: 'sd world',
  },
];

export default function MainPage() {
  return (
    <div>
      {notes.map((item) => (
        <Note key={item.id} title={item.title} description={item.description} id={item.id} />
      ))}
      <button
        onClick={() => {
          NoteStorage.addNote({
            id: 2,
            title: 'Worldddd',
            description: 'sd world',
            tags: ['aaa'],
          });
          NoteStorage.addNote({
            id: 3,
            title: 'Worldddd',
            description: 'sd world',
            tags: ['aaa', 'bbb'],
          });
        }}
        type="button"
      >
        test
      </button>
      <button
        type="button"
        onClick={() => {
          NoteStorage.removeNote(3);
        }}
      >
        remove note 3
      </button>
      <button
        type="button"
        onClick={() => {
          NoteStorage.updateNote({
            id: 2,
            title: 'updated',
            description: 'spadatend',
            tags: ['ccc'],
          });
        }}
      >
        update note 2
      </button>
    </div>
  );
}

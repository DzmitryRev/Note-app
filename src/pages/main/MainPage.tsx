import React from 'react';
import Note from '../../components/note/Note';

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
    </div>
  );
}

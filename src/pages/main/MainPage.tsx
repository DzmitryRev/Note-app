import React from 'react';
import Note from '../../components/note/Note';
import { INote } from '../../models/NoteModel';

interface IMainPageProps {
  notes: INote[];
  removeNote: (noteId: number) => void;
}

export default function MainPage({ notes, removeNote }: IMainPageProps) {
  return (
    <div>
      {notes
        && notes.map((item) => (
          <Note
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
            tags={item.tags}
            removeNote={(noteId: number) => {
              removeNote(noteId);
            }}
          />
        ))}
    </div>
  );
}

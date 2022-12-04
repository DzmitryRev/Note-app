import React from 'react';
import ButtonLink from '../../components/link/Link';
import Note from '../../components/note/Note';
import { INote } from '../../models/NoteModel';
import './mainpage.scss';

interface IMainPageProps {
  notes: INote[];
  removeNote: (noteId: number) => void;
}

export default function MainPage({ notes, removeNote }: IMainPageProps) {
  return (
    <div>
      <div className="add-note-container">
        <ButtonLink to="/new">add new note</ButtonLink>
      </div>
      {notes
        && notes.map((item) => (
          <Note
            key={item.id}
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

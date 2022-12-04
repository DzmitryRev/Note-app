import React, { useEffect, useState } from 'react';
import Note from '../../components/note/Note';
import { INoteStorage } from '../../models/NoteModel';
import NoteStorage from '../../storage/NoteStorage';

export default function MainPage() {
  const [notes, setNotes] = useState<INoteStorage | null>();
  useEffect(() => {
    setNotes(NoteStorage.getNotes());
  }, []);
  return (
    <div>
      {notes
        && notes.notes.map((item) => (
          <Note
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
            tags={item.tags}
          />
        ))}
    </div>
  );
}

/* eslint-disable linebreak-style */

import { INote } from '../../models/NoteModel';

export function filter(notes: INote[], tags: string[]) {
  if (!tags.length) return notes;
  const filtredNotes = notes.filter((note) => {
    const available = note.tags.filter((item) => tags.includes(item));
    if (!available.length) {
      return false;
    }
    return true;
  });
  return filtredNotes;
}

import { INote, INoteStorage } from '../models/NoteModel';

export default class NoteStorage {
  static storageName: string = 'note-storage';

  static updateTags(storage: INoteStorage) {
    return storage.tags.filter((tag) => {
      const available = storage.notes.filter((note) => note.tags.includes(tag));
      if (!available.length) {
        return false;
      }
      return true;
    });
  }

  static getNotes(): INoteStorage | null {
    const jsonNotes = localStorage.getItem(this.storageName);
    if (!jsonNotes) {
      return null;
    }
    const notes: INoteStorage = JSON.parse(jsonNotes);
    return notes;
  }

  static addNote(note: INote): void {
    if (!localStorage.getItem(this.storageName)) {
      const newStorage: INoteStorage = {
        tags: [],
        notes: [],
      };
      localStorage.setItem(this.storageName, JSON.stringify(newStorage));
    }
    const notes: INoteStorage = JSON.parse(localStorage.getItem(this.storageName) || '');
    notes.notes.push(note);
    note.tags.forEach((tag) => {
      if (!notes.tags.includes(tag)) {
        notes.tags.push(tag);
      }
    });
    localStorage.setItem(this.storageName, JSON.stringify(notes));
  }

  static removeNote(noteId: string): void {
    if (!localStorage.getItem(this.storageName)) return;
    const notes: INoteStorage = JSON.parse(localStorage.getItem(this.storageName) || '');
    const removedNote = notes.notes.find((item) => item.id === noteId);
    if (!removedNote) return;
    const newStorage: INoteStorage = {
      notes: notes.notes.filter((item) => item.id !== noteId),
      tags: notes.tags,
    };
    newStorage.tags = this.updateTags(newStorage);
    localStorage.setItem(this.storageName, JSON.stringify(newStorage));
  }

  static updateNote(note: INote): void {
    const { id, description, tags } = note;
    if (!localStorage.getItem(this.storageName)) return;
    const notes: INoteStorage = JSON.parse(localStorage.getItem(this.storageName) || '');
    const newStorage: INoteStorage = {
      notes: notes.notes.map((item) => {
        if (item.id === id) {
          return {
            id,
            description,
            tags,
          };
        }
        return item;
      }),
      tags: notes.tags,
    };
    newStorage.tags = this.updateTags(newStorage);
    tags.forEach((tag) => {
      if (!newStorage.tags.includes(tag)) {
        newStorage.tags.push(tag);
      }
    });
    localStorage.setItem(this.storageName, JSON.stringify(newStorage));
  }
}

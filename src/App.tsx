import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { INoteStorage } from './models/NoteModel';
import MainPage from './pages/main/MainPage';
import NotePage from './pages/note/NotePage';
import NoteStorage from './storage/NoteStorage';

function App() {
  const [noteStorage, setNoteStorage] = useState<INoteStorage | null>();
  useEffect(() => {
    setNoteStorage(NoteStorage.getNotes());
  }, []);
  const removeNote = (noteId: number) => {
    NoteStorage.removeNote(noteId);
    setNoteStorage(NoteStorage.getNotes());
  };
  return (
    <div>
      <Header tags={noteStorage?.tags || []} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={(
              <MainPage
                notes={noteStorage?.notes || []}
                removeNote={(noteId: number) => {
                  removeNote(noteId);
                }}
              />
            )}
          />
          <Route path="/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

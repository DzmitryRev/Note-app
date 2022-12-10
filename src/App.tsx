import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { INoteStorage } from './models/NoteModel';
import MainPage from './pages/main/MainPage';
import NotePage from './pages/note/NotePage';
import { filter } from './services/filter/filter';
import NoteStorage from './storage/NoteStorage';

function App() {
  const [noteStorage, setNoteStorage] = useState<INoteStorage | null>();
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const loadStorage = () => {
    setNoteStorage(NoteStorage.getNotes());
  };
  useEffect(() => {
    loadStorage();
  }, []);
  const removeNote = (noteId: string) => {
    NoteStorage.removeNote(noteId);
    loadStorage();
  };
  return (
    <div>
      <Header
        tags={noteStorage?.tags || []}
        selectedNotes={selectedNotes}
        setSelectedNotes={(value: string[]) => {
          setSelectedNotes(value);
        }}
      />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={(
              <MainPage
                notes={filter(noteStorage?.notes || [], selectedNotes)}
                removeNote={(noteId: string) => {
                  removeNote(noteId);
                }}
              />
            )}
          />
          <Route path="/:id" element={<NotePage loadStorage={loadStorage} />} />
          <Route path="/new" element={<NotePage loadStorage={loadStorage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/button/Button';
import Editor from '../../components/editor/Editor';
import ButtonLink from '../../components/link/Link';
import { getTags } from '../../services/editor/editor';
import NoteStorage from '../../storage/NoteStorage';

import './notepage.scss';

interface INotePageProps {
  loadStorage: () => void;
}

export default function NotePage({ loadStorage }: INotePageProps) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditMode = location.pathname !== '/new';

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isEditMode && id) {
      const editedNote = NoteStorage.getNotes()?.notes.find((note) => note.id === id);
      if (editedNote) {
        setInputValue(editedNote.description);
      }
    }
  }, []);

  return (
    <div className="form">
      <div className="form__title-container">
        <ButtonLink to="/">back</ButtonLink>
        <h2 className="form__title">{isEditMode ? 'Edit note' : 'Add new note'}</h2>
      </div>
      <Editor value={inputValue} setValue={setInputValue} />
      <div>
        <Button
          onClick={() => {
            if (isEditMode && id) {
              const newNote = {
                id,
                description: inputValue,
                tags: [...getTags(inputValue)],
              };
              NoteStorage.updateNote(newNote);
              loadStorage();
              navigate('/');
            } else {
              NoteStorage.addNote({
                id: uuidv4(),
                description: inputValue,
                tags: [...getTags(inputValue)],
              });
              loadStorage();
              navigate('/');
            }
          }}
          disabled={!inputValue}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

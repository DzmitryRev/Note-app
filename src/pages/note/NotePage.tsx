/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/button/Button';
import ButtonLink from '../../components/link/Link';
import { getTags, replaceTag } from '../../services/replace/replace';
import { setSelection } from '../../services/selection/selection';
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

  const [inputValue, setInputValue] = React.useState('');
  const titleRef = React.useRef<HTMLDivElement>();

  useEffect(() => {
    if (isEditMode && id) {
      const editedNote = NoteStorage.getNotes()?.notes.find((note) => note.id === id);
      if (editedNote) {
        setInputValue(editedNote.description);
      }
    }
  }, []);

  useEffect(() => {
    setSelection(titleRef);
  }, [inputValue]);

  return (
    <div className="form">
      <div className="form__title-container">
        <ButtonLink to="/">back</ButtonLink>
        <h2 className="form__title">{isEditMode ? 'Edit note' : 'Add new note'}</h2>
      </div>
      <div
        className="form__description-input"
        ref={titleRef as React.RefObject<HTMLDivElement>}
        contentEditable
        onInput={(e) => {
          setInputValue(e.currentTarget.innerText);
        }}
        dangerouslySetInnerHTML={{ __html: replaceTag(inputValue).join(' ') }}
      />
      <div>
        <Button
          onClick={() => {
            if (isEditMode && id) {
              NoteStorage.updateNote({
                id: uuidv4(),
                description: inputValue,
                tags: [...getTags(inputValue)],
              });
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

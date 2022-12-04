import React from 'react';
import Button from '../button/Button';
import ButtonLink from '../link/Link';
import Tag from '../tag/Tag';
import './note.scss';

interface INoteProps {
  id: number;
  description: string;
  tags: string[];
  removeNote: (noteId: number) => void;
}

export default function Note({
  description, tags, id, removeNote,
}: INoteProps) {
  return (
    <article className="note">
      <p className="note__description">{description}</p>
      <div className="note__tags-container">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <footer className="note__footer">
        <ButtonLink to={`/${id}`}>open</ButtonLink>
        <Button
          onClick={() => {
            removeNote(id);
          }}
        >
          remove
        </Button>
      </footer>
    </article>
  );
}

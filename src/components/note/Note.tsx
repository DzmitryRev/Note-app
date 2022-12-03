/* eslint-disable linebreak-style */

import React from 'react';
import Button from '../button/Button';
import ButtonLink from '../link/Link';
import './note.scss';

interface INoteProps {
  id: number;
  title: string;
  description: string;
}

export default function Note({ title, description, id }: INoteProps) {
  return (
    <article className="note">
      <h2 className="note__title">{title}</h2>
      <p className="note__description">{description}</p>
      <footer className="note__footer">
        <ButtonLink to={`/${id}`}>open</ButtonLink>
        <Button>remove</Button>
      </footer>
    </article>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';
import './button.scss';

interface IButtonProps extends React.ComponentProps<'button'> {}

export default function Button({ children, ...attributes }: PropsWithChildren<IButtonProps>) {
  return (
    <button className="button" {...attributes} type="button">
      {children}
    </button>
  );
}

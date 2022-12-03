import React, { PropsWithChildren } from 'react';
import './button.scss';

export default function Button({ children }: PropsWithChildren<React.ComponentProps<'button'>>) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

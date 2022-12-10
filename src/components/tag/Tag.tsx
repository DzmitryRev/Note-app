import React, { PropsWithChildren } from 'react';
import './tag.scss';

interface ITagProps extends React.ComponentProps<'span'> {
  isSelected?: boolean;
}

export default function Tag({
  children, isSelected = false,
  ...attributes
}: PropsWithChildren<ITagProps>) {
  return (
    <span className={`tag ${isSelected ? 'selected' : ''}`} {...attributes}>
      {children}
    </span>
  );
}

Tag.defaultProps = {
  isSelected: false,
};

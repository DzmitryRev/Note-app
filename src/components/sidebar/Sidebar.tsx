/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Button from '../button/Button';
import Tag from '../tag/Tag';
import './sidebar.scss';

interface ISidebarProps {
  isOpen: boolean;
  tags: string[];
}

export default function Sidebar({ isOpen, tags }: ISidebarProps) {
  const [selectedNote, setSelectedNote] = useState<string[]>([]);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {tags.map((tag) => (
        <Tag
          onClick={() => {
            if (selectedNote.includes(tag)) {
              setSelectedNote(selectedNote.filter((item) => item !== tag));
            } else {
              setSelectedNote([...selectedNote, tag]);
            }
          }}
          isSelected={selectedNote.includes(tag)}
        >
          {tag}
        </Tag>
      ))}
      <div className="sidebar__clean-button-container">
        <Button
          onClick={() => {
            setSelectedNote([]);
          }}
        >
          clean
        </Button>
      </div>
    </aside>
  );
}

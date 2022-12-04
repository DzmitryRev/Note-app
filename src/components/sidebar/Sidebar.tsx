/* eslint-disable linebreak-style */
import React from 'react';
import Button from '../button/Button';
import Tag from '../tag/Tag';
import './sidebar.scss';

interface ISidebarProps {
  isOpen: boolean;
  tags: string[];
  selectedNotes: string[];
  setSelectedNotes: (value: string[]) => void;
}

export default function Sidebar({
  isOpen, tags, selectedNotes, setSelectedNotes,
}: ISidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          onClick={() => {
            if (selectedNotes.includes(tag)) {
              setSelectedNotes(selectedNotes.filter((item) => item !== tag));
            } else {
              setSelectedNotes([...selectedNotes, tag]);
            }
          }}
          isSelected={selectedNotes.includes(tag)}
        >
          {tag}
        </Tag>
      ))}
      <div className="sidebar__clean-button-container">
        <Button
          onClick={() => {
            setSelectedNotes([]);
          }}
        >
          clean
        </Button>
      </div>
    </aside>
  );
}

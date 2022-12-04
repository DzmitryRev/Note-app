/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import NoteStorage from '../../storage/NoteStorage';
import Button from '../button/Button';
import Tag from '../tag/Tag';
import './sidebar.scss';

interface ISidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: ISidebarProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedNote, setSelectedNote] = useState<string[]>([]);
  useEffect(() => {
    const tagsInStorage = NoteStorage.getNotes();
    setTags(tagsInStorage?.tags || []);
  }, []);
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

import React, { useState } from 'react';
import Burger from '../burger/Burger';
import Button from '../button/Button';
import Sidebar from '../sidebar/Sidebar';
import './header.scss';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className="header">
        <Button
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <Burger />
        </Button>
      </header>
      <Sidebar
        isOpen={isSidebarOpen}
      />
    </>
  );
}

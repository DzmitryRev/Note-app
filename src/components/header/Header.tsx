import React from 'react';
import Burger from '../burger/Burger';
import Button from '../button/Button';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <Button>
        <Burger />
      </Button>
    </header>
  );
}

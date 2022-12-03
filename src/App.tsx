import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/main/MainPage';
import NotePage from './pages/note/NotePage';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

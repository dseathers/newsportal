// src/App.js
import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <NewsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

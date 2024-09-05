import React from 'react';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Row from './components/Row.js';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
    </div>
  );
}

export default App;
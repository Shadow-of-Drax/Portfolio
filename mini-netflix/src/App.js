import React from 'react';
import Navbar from './components/navbar.js';
import Banner from './components/banner.js';
import Row from './components/Row.js';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="80's" />
      <Row title="90's" />
    </div>
  );
}

export default App;
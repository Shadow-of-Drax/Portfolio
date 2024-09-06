import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Banner from './components/banner/banner.js';
import Row from './components/row/Row.js';
import Footer from './components/footer/footer.js';
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
      <Footer />
    </div>
  );
}

export default App;
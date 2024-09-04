import React from 'react';
import Navbar from './components';
import Banner from './components';
import Row from './components';


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
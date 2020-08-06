import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import { Global, css, jsx } from '@emotion/core'

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
    </>
  );
}

export default App;
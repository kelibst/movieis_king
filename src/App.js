import React from 'react';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/header/Header';
import Movies from './components/layouts/Movies/Movies';


function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;

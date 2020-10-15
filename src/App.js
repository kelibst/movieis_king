import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/header/Header';
import Movies from './components/layouts/Movies/Movies';
import detailsPage from './components/pages/detailsPage';
import filterPage from './components/pages/filterPage';

const App = () => (
  <BrowserRouter>
    
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/findby" component={filterPage} />
          <Route path="/movie/:movie_id" component={detailsPage} />
        
        </Switch>
        <Footer />
      </div>
    
  </BrowserRouter>
);

export default App;

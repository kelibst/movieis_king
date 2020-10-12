import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/header/Header';
import Movies from './components/layouts/Movies/Movies';
import detailsPage from './components/pages/detailsPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="App">
        <Header />
        <Route exact path="/" component={Movies} />
        <Route path="/movie/:movie_id" component={detailsPage} />
        <Footer />
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;

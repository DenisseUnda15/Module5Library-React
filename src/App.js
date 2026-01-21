import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import { Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom';


function App() {
  return (
    <Router>
     <div className="App">
       <Nav />
       <Route path="/" exact component={Home} />
       <Route path="/books" render={() => <Books books={books} />} />
       <Route path="/books/1" render={()=> <BookInfo books={books} />} />
       <Footer />
    </div>
    </Router>
  );
}

export default App;

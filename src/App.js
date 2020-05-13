import React, { Fragment } from 'react';
// Wouter
import { Route } from "wouter";
// Components 
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
     
      <Navbar />

      <Route path="/" component={MessageList} />
      <Route path="/new-message" component={MessageForm} />

    </Fragment>
  );
}

export default App;

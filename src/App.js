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

      <main className="container vm-3">

        <Route path="/" component={MessageList} />
        <Route path="/new-message" component={MessageForm} />

      </main>

    </Fragment>
  );
}

export default App;

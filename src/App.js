import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="body">
      <Header />
      <container className="list-container">
        <PendingList />
        <CompletedList />
      </container>
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <div>
      <h1>2-Do</h1>
      <p>A simple to-do app</p>
    </div>
  )
}

const PendingList = () => {
  return (
    <div className='list-div'>
      <h3>2-Do's</h3>

    </div>
  )
}

const CompletedList = () => {
  return (
    <div className='list-div'>
      <h3>Completed 2-Do's</h3>
    </div>
  )
}

const input = () => {
  return (
    
  )
}
import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import wolf from './wolf.png';
// import PostsProvider from './contexts/PostsProvider';

function App() {
  return (
    <div className="App">
      <Input />
      <div id="logo">
        <img src={wolf} alt="wolf"/>
      </div>
      <Output />
    </div>
  );
}

export default App;

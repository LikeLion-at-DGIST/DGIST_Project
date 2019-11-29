import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}>같이 택시 탈사람?</h1>
        <div className={'post'}>
          When?  
          <textarea></textarea>
          <button className={'submit'} >select</button>
        </div>
        <div className={'post'}>
          Where? 
          <textarea></textarea>
          <button className={'submit'}>select</button>
        </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="initialForm">
      <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
      <div className='group'>
        <div className='welcome'>Welcome to OMG</div>
        <form className='form'>
          <div className='nameForm'>
          <input className='firstName' placeholder='First Name'/>
          <input className='lastName' placeholder='Last Name'/>
          </div>
          <input className='phone' placeholder='Phone'/>
          <input className='email' placeholder='Email'/>
          <button className='createAccountButton'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;

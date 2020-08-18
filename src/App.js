import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


typeYourName () {
    alert('Имя');
}
  render() {
    return (
      <div className="initialForm">
        <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
        <div className='group'>
          <div className='welcome'>Welcome to OMG</div>
          <form className='form'>
            <div className='nameForm'>
              <div className='nameInputForm'>
                <input onChange={this.typeYourName} required id='firstName' type='text' className='firstName'/>
                <label className='labelName' htmlFor='firstName'>First Name</label>
              </div>
              <div className='surnameInputForm'>
                <input required type='text' className='lastName' id='lastName'/>
                <label className='labelSurname' htmlFor='lastName'>Last Name</label>
              </div>
            </div>
            <div className='telInputForm'>
              <input required type='tel' className='phone' id='phone' pattern='2[0-9]{3}-[0-9]{3}'/>
              <label className='labelTel' htmlFor='phone'>Phone</label>
            </div>
            <div className='emailInputForm'>
              <input required type='email' className='email' id='email'/>
              <label className='labelEmail' htmlFor='email'>Email</label>
            </div>
            <button type='submit' className='createAccountButton'>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

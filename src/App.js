import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isInputClicked: false}

  }




  render() {
   const typeYourName = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.setState({isInputClicked: true});
        this.textInput1.style = 'font-size: 14px; top: 6px';
        this.textLabel1.style = 'font-size: 10px; top: 4px';
      }
    };
    const typeYourSurname = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.setState({isInputClicked: true});
        this.textInput2.style = 'font-size: 14px; top: 6px';
        this.textLabel2.style = 'font-size: 10px; top: 4px';
      }

    };

    const typeYourPhone = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.setState({isInputClicked: true});
        this.textInput3.style = 'font-size: 14px; top: 6px';
        this.textLabel3.style = 'font-size: 10px; top: 4px';
      }

    };
    const typeYourEmail = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.setState({isInputClicked: true});
        this.textInput4.style = 'font-size: 14px; top: 6px';
        this.textLabel4.style = 'font-size: 10px; top: 4px';
      }

    };
    // let focusName = document.querySelector('#firstName');
    // let focusLabel = document.querySelector('labelName');
    // focusName.addEventListener('click', function() {
    //   focusName.focus();
    //   focusLabel.focus();
    // });
    return (


        <div className="initialForm">

        <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
        <div className='group'>
          <div className='welcome'>Welcome to OMG</div>
          <form className='form'>
            <div className='nameForm'>
              <div className='nameInputForm'>
                <input onChange={(event) => typeYourName(event)} required id='firstName' type='text' className='firstName' ref={(input) => { this.textInput1 = input; }}/>
                <label className='labelName' htmlFor='firstName' ref={(label) => { this.textLabel1 = label; }}>First Name</label>
              </div>
              <div className='surnameInputForm'>
                <input onChange={(event) => typeYourSurname(event)} required type='text' className='lastName' id='lastName' ref={(input) => { this.textInput2 = input; }}/>
                <label ref={(label) => { this.textLabel2 = label; }} className='labelSurname' htmlFor='lastName'>Last Name</label>
              </div>
            </div>
            <div className='telInputForm'>
              <input onChange={(event) => typeYourPhone(event)} required ref={(input) => { this.textInput3 = input; }}type='tel' className='phone' id='phone' pattern='2[0-9]{3}-[0-9]{3}'/>
              <label ref={(label) => { this.textLabel3 = label; }} className='labelTel' htmlFor='phone'>Phone</label>
            </div>
            <div className='emailInputForm'>
              <input onChange={(event) => typeYourEmail(event)} ref={(input) => { this.textInput4 = input; }} required type='email' className='email' id='email'/>
              <label className='labelEmail' htmlFor='email' ref={(label) => { this.textLabel4 = label; }}>Email</label>
            </div>
            <button type='submit' className='createAccountButton'>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

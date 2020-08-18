import React, {Component} from 'react';
import './App.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisableForm: true,
      isValidFirstName: false,
      isValidLastName: false,
      isValidPhone: false,
      isValidEmail: false,
    }
  }

render() {

  const updateIsDisableFormValue = () => {

    const {isValidFirstName, isValidLastName, isValidPhone, isValidEmail} = this.state;

    if (isValidFirstName && isValidLastName && isValidPhone && isValidEmail) {
        this.setState({isDisableForm: false})
      } else {
        this.setState({isDisableForm: true});
      }
    };

    const typeFirstName = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.textInput1.style = 'font-size: 14px; top: 6px';
        this.textLabel1.style = 'font-size: 10px; top: 4px';
      }

      if (event.target.value.length > 0) {
        this.setState({isValidFirstName: true}, updateIsDisableFormValue);
      } else {
        this.setState({isValidFirstName: false}, updateIsDisableFormValue);
        this.textInput1.style = 'border: red 1px solid';
      }
    };

    const typeLastName = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.textInput2.style = 'font-size: 14px; top: 6px';
        this.textLabel2.style = 'font-size: 10px; top: 4px';
      }

      if (event.target.value.length > 0) {
        this.setState({isValidLastName: true}, updateIsDisableFormValue);
      } else {
        this.setState({isValidLastName: false}, updateIsDisableFormValue);
        this.textInput2.style = 'border: red 1px solid';
      }
    };

    const typePhone = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.textInput3.style = 'font-size: 12px; top: 6px';
        this.textLabel3.style = 'font-size: 9px; top: 3px';
      }

      const phoneRegex = '^[+]{1}[4]{2}[(]{1}[0-9]{4}[)]{1}[0-9]{6}$';
      if (event.target.value.match(phoneRegex)) {
        this.setState({isValidPhone: true}, updateIsDisableFormValue)
      } else {
        this.setState({isValidPhone: false}, updateIsDisableFormValue);
        this.textInput3.style = 'border: red 1px solid';
      }
    };

    const typeEmail = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {
        this.textInput4.style = 'font-size: 14px; top: 6px';
        this.textLabel4.style = 'font-size: 10px; top: 4px';
      }

      const emailRegex = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
      if (event.target.value.match(emailRegex)) {
        this.setState({isValidEmail: true}, updateIsDisableFormValue)

      } else {
        this.setState({isValidEmail: false}, updateIsDisableFormValue);
        this.textInput4.style = 'border: red 1px solid';
      }
    };

    return (
      <form className='form'>
        <div className='nameForm'>
          <div className='nameInputForm'>
            <input onChange={(event) => typeFirstName(event)} id='firstName' type='text' className='firstName' ref={(input) => { this.textInput1 = input; }}/>
            <label className='labelName' htmlFor='firstName' ref={(label) => { this.textLabel1 = label; }}>First Name</label>
          </div>
          <div className='surnameInputForm'>
            <input onChange={(event) => typeLastName(event)} type='text' className='lastName' id='lastName' ref={(input) => { this.textInput2 = input; }}/>
            <label ref={(label) => { this.textLabel2 = label; }} className='labelSurname' htmlFor='lastName'>Last Name</label>
          </div>
        </div>
        <div className='telInputForm'>
          <input onChange={(event) => typePhone(event)} ref={(input) => { this.textInput3 = input; }} type='tel' className='phone' id='phone'/>
          <label ref={(label) => { this.textLabel3 = label; }} className='labelTel' htmlFor='phone'>Phone</label>
        </div>
        <div className='emailInputForm'>
          <input onChange={(event) => typeEmail(event)} ref={(input) => { this.textInput4 = input; }} type='email' className='email' id='email'/>
          <label className='labelEmail' htmlFor='email' ref={(label) => { this.textLabel4 = label; }}>Email</label>
        </div>
        <button disabled={this.state.isDisableForm } type='submit' className={this.state.isDisableForm ? 'buttonDisabled' : 'buttonActive'} >Create Account</button>
      </form>
    );
  }
}

export default RegistrationForm;

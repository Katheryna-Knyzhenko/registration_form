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
    const typeFirstName = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {

        this.textLabel1.style = 'font-size: 10px; top: 4px';
      }

      if (event.target.value.length > 0) {
        this.setState({isValidFirstName: true}, updateIsDisableFormValue);
      } else {
        this.setState({isValidFirstName: false}, updateIsDisableFormValue);
      }
    };

    const typeLastName = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {

        this.textLabel2.style = 'font-size: 10px; top: 4px';
      }

      if (event.target.value.length > 0) {
        this.setState({isValidLastName: true}, updateIsDisableFormValue);
      } else {
        this.setState({isValidLastName: false}, updateIsDisableFormValue);
      }
    };

    const typePhone = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {

        this.textLabel3.style = 'font-size: 10px; top: 4px';
      }

      const phoneRegex = '^[+]{1}[4]{2}[(]{1}[0-9]{4}[)]{1}[0-9]{6}$';
      if (event.target.value.match(phoneRegex)) {
        this.setState({isValidPhone: true}, updateIsDisableFormValue)
      } else {
        this.setState({isValidPhone: false}, updateIsDisableFormValue);
      }
    };

    const typeEmail = (event) => {
      if (event.target.value !== 0 || event.target.value !== '') {

        this.textLabel4.style = 'font-size: 10px; top: 4px';
      }

      const emailRegex = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
      if (event.target.value.match(emailRegex)) {
        this.setState({isValidEmail: true}, updateIsDisableFormValue)
      } else {
        this.setState({isValidEmail: false}, updateIsDisableFormValue);
      }
    };

    const updateIsDisableFormValue = () => {
      const {isValidFirstName, isValidLastName, isValidPhone, isValidEmail} = this.state;
      if (isValidFirstName && isValidLastName && isValidPhone && isValidEmail) {
        this.setState({isDisableForm: false})
      } else {
        this.setState({isDisableForm: true});
      }
    };

    return (
      <form className='form'>
        <div className='nameForm'>
          <div className='nameInputForm'>
            <input onChange={(event) => typeFirstName(event)} id='firstName' type='text' className='firstName'/>
            <label className='labelName' htmlFor='firstName' ref={(label) => { this.textLabel1 = label; }}>First Name</label>
          </div>
          <div className='surnameInputForm'>
            <input onChange={(event) => typeLastName(event)} type='text' className='lastName' id='lastName'/>
            <label ref={(label) => { this.textLabel2 = label; }} className='labelSurname' htmlFor='lastName'>Last Name</label>
          </div>
        </div>
        <div className='telInputForm'>
          <input onChange={(event) => typePhone(event)} type='tel' className='phone' id='phone'/>
          <label ref={(label) => { this.textLabel3 = label; }} className='labelTel' htmlFor='phone'>Phone</label>
        </div>
        <div className='emailInputForm'>
          <input onChange={(event) => typeEmail(event)} type='email' className='email' id='email'/>
          <label className='labelEmail' htmlFor='email' ref={(label) => { this.textLabel4 = label; }}>Email</label>
        </div>
        <button disabled={this.state.isDisableForm } type='submit' className='createAccountButton'>Create Account</button>
      </form>
    );
  }
}

export default RegistrationForm;

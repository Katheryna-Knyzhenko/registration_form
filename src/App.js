import React, {Component} from 'react';
import './App.css';
import RegistrationForm from "./RegistrationForm";
import Success from "./Success";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
      isDisableForm: true,
    }
  }




  render() {
    return (
        <div className="initialForm">
        <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
        <div className='group'>
          {!this.state.isSuccess ? <RegistrationForm isDisableForm = {this.state.isDisableForm} isSuccess = {this.props.isSuccess}/>
          : <Success isDisableForm = {this.state.isDisableForm} isSuccess = {this.state.isSuccess}/>}
        </div>
      </div>
    );
  }
}

export default App;

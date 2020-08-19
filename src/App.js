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
    const ifSuccess = () => {
      this.setState({isSuccess: !this.state.isSuccess})
    };
    return (
        <div className="initialForm">
        <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
          {!this.state.isSuccess ? <RegistrationForm ifSuccess = {ifSuccess} isDisableForm = {this.state.isDisableForm} isSuccess = {this.props.isSuccess}/>
          : <Success isDisableForm = {this.state.isDisableForm} isSuccess = {this.state.isSuccess}/>}
      </div>
    );
  }
}

export default App;

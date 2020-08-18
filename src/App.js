import React, {Component} from 'react';
import './App.css';
import RegistrationForm from "./RegistrationForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render() {
    return (
        <div className="initialForm">

        <div className='logo'><img alt='logo' src={require('./pictures/logo.png')}/></div>
        <div className='group'>
          <div className='welcome'>Welcome to OMG</div>
          <RegistrationForm/>
        </div>
      </div>
    );
  }
}

export default App;

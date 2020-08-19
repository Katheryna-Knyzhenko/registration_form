import React, {Component} from 'react';
import './Success.css';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
return (
  <div className='wrapper'>
    <div className='circle'><img alt='vector1' src={require('./pictures/Vector (1).png')}/></div>
    <div className='tag'><img alt='vector2' src={require('./pictures/Vector.png')}/></div>
    <span>Thank you!</span>
  </div>
)
  }
  }
export default Success;
import React from 'react';
import Para from './Para';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      flag:false
    };
  }
   handleClick= ()=> {
    this.setState({flag:true});
  }
  render() {
    return (
      <div id='main'>
      {/* Do not remove this main div!! */}
      <button id="click" onClick={this.handleClick}>click me</button>
      {this.state.flag?<Para/>:''}
      </div>
    );
  }
}

export default App;

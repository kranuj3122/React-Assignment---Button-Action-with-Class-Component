import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }
  handleClick = () => {
    this.setState({ flag: true });
  }
  render() {
    return (
      <div id='main'>
      { /* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>click me</button>
        {this.state.flag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    );
  }
}

export default App;

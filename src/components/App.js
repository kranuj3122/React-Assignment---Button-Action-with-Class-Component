import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state={
		    para:''
	    }
	};
	const handleClick=()=>{
		this.setState({para:`<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>})
	}

    render() {
    	return(
    		<div id="main">
			<button id='click' onClick={this.handleClick}>click me</button>
		{this.state.para}
    		</div>
    	);
    }
}


export default App;


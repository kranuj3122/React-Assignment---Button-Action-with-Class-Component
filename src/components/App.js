import React from 'react';
class App extends React.Component {
    constructor(props) {
		super(props);
		this.show = this.show.bind(this);
		this.state={
			showMessage:false,
		};
	};

	show(){
		this.setState({showMessage:true,});
	}
   
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.show}>clickToRender</button>
				{this.state.showMessage && <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    		</div>
    	);
    }
}
export default App;

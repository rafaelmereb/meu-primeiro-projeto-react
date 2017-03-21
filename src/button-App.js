import React from 'react';

class Button extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {texto : props.texto}
	}
	
	onClick = (event) => {
		event.preventDefault()
		console.log("BOTÃO CLICKADO!")
	} 
	
	render() {
		return (
			<div>
				<button type="button" onClick={this.onClick}>
					{this.state.texto}
				</button>
			</div>
		);
	}
}

export default Button;
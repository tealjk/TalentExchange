import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
	handleSubmit(event) {
		alert("Thank you.");
	}
  
	onPressName() {
		alert("Adding new Name row.");
		
		this.render(
  <App />,
  document.getElementById('root')
);
	}
 //Comments
	render() {
		return (
		<div className="App">
		<div className="App-header">
        <h1>Booz Allen Hamilton</h1>
        </div>
			<form onSubmit={this.handleSubmit}>
				<div id="name" >
				<button  onClick={this.onPressName} type="button" className="Title">Name +</button>
				<input className="Collect" type="text" name="firstName" placeholder="First Name" />
				<input className="Collect" type="text" name="middleName" placeholder="Middle Name"/>
				<input className="Collect" type="text" name="lastName" placeholder="Last Name"/>
				</div>
				<div id="email">
				<button type="button" className="Title">Email +</button>		
				<input className="Collect" type="email" name="email" placeholder="Primary Email"/>
				</div>
				<div id="phone">
				<button type="button" className="Title">Phone +</button>
				<input className="Collect" type="tel" name="homePhone" placeholder="Primary Phone"/>
				</div>
				<div id="other">
				<button type="button" className="Title">Other +</button>
				</div>
				<input className="Button" type="submit" value="Submit"/>
			</form>
		</div>
    );
  }
}

export default App;

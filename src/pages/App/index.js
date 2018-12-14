import React, { Component } from 'react';
import { Header } from '../../components/index.js';
import logo from './logo.svg';
import './index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default App;

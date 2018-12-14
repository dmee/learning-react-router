import React, { Component } from 'react';
import { Header } from '../../components/index.js';

class NotMatched extends Component {
	render() {
		return (
			<div className="404">
				<Header />
				<h1>404</h1>
			</div>
		);
	}
}

export default NotMatched;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="App">
				<Link to="/" replace>
					首页
				</Link>
				<Link to="/about" replace>
					关于
				</Link>
				<Link to="/404" replace>
					404
				</Link>
			</div>
		);
	}
}

export default Header;

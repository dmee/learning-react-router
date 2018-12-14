import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages/App/index.js';
import About from './pages/About/index.js';
import NotMatched from './pages/404/index.js';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
	<Router>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/about" component={About} />
			<Route path="*" component={NotMatched} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();

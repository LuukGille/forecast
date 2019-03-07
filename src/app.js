import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import style from './main.scss';

class App extends Component {
	render() {
		return (
			<Navigation />
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
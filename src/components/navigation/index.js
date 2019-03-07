import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/home';
import Contact from '../../views/contact';
import style from './nav.scss';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav className="nav">
						<ul className="nav__items">
							<Link to={'/'}><div className="nav__logo"></div></Link>
							<Link to={'/contact'}><button className="nav__button" >Contact</button></Link>
						</ul>
					</nav>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Navigation;
import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
	render() {
		return (
			<div className="account">
				<form className="login">
					<input className="username" type="text" name="username" placeholder="username"/>
					<input className="password" type="password" name="password" placeholder="password"/>
					<button className="btn">LOGIN</button>
				</form>
				<form className="signup">
					<button className="btn">SIGNUP</button>
				</form>
			</div>
		);
	}
}

export default Account;

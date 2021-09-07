import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import logo from '../../resources/images/logo.png';

const Header = () => {
	return (
		<div>
			<Container className="header">
				<img src={logo} alt="" />
				<h2>Header</h2>
			</Container>
		</div>
	);
};

export default Header;

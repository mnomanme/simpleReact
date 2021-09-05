import React from 'react';
import Nayok from './Nayok';

const Layout = () => {
	const nayoks = ['Sohel', 'Salman', 'Bapparaj'];
	return (
		<div>
			<Nayok name={nayoks[0]} movie="Pirates of Carabian"></Nayok>
			<Nayok name="Shakib" age="5"></Nayok>
			<Nayok name={nayoks[2]} age="20"></Nayok>
		</div>
	);
};

export default Layout;

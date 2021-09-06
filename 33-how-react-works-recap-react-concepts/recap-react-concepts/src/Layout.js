import React from 'react';
import MovieCounter from './MovieCounter';
import Nayok from './Nayok';

const Layout = () => {
	const nayoks = ['Sohel', 'Salman', 'Bapparaj'];
	return (
		<div>
			<section className="text-center">
				<MovieCounter></MovieCounter>
			</section>
			<section>
				<Nayok name={nayoks[0]} movie="Pirates of Carabian"></Nayok>
				<Nayok name="Shakib" age="5"></Nayok>
				<Nayok name={nayoks[2]} age="20"></Nayok>
			</section>
		</div>
	);
};

export default Layout;

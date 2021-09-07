import React from 'react';
import DuplicateUsers from './DuplicateUsers';
import Friends from './Friends';
import MovieCounter from './MovieCounter';
import Nayok from './Nayok';
import RandomUser from './RandomUser';

const Layout = () => {
	const nayoks = ['Sohel', 'Salman', 'Bapparaj', 'Omar Sunny', 'Alamgir'];
	return (
		<div>
			<section className="text-center">
				<RandomUser />
				<MovieCounter></MovieCounter>
			</section>
			<section>
				<Nayok name={nayoks[0]} movie="Pirates of Carabian"></Nayok>
				<Nayok name="Shakib" age="5"></Nayok>
				<Nayok name={nayoks[2]} age="20"></Nayok>
			</section>
			<section className="text-center ">
				<Friends></Friends>
				<DuplicateUsers />
			</section>
		</div>
	);
};

export default Layout;

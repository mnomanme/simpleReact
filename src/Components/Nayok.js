import React from 'react';

const Nayok = (props) => {
	const nayoksStyle = {
		border: '3px solid purple',
	};

	const { name, movie, age } = props;

	return (
		<section style={nayoksStyle} className="mt-4 text-center m-2 p-4">
			<h2>Hello {name} Nayak</h2>
			<h4>
				I have done {movie} movies in {age || 50} years
			</h4>
		</section>
	);
};

export default Nayok;

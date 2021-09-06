import React, { useState } from 'react';

const MovieCounter = () => {
	// const result = ['abc', 'def'];
	// const [first, second] = ['abc', 'def'];
	// const firstOne = result[0];
	// const secondOne = result[1];

	// console.log(result, first, second, firstOne, secondOne);

	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<div>
			<button className="btn btn-info">Add Movie</button>
			<h5>Number of Movies: {count} </h5>
		</div>
	);
};

export default MovieCounter;

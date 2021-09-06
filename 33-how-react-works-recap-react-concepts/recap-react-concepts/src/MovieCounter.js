import React, { useState } from 'react';
import MovieDisplay from './MovieDisplay';

const MovieCounter = () => {
	// const result = ['abc', 'def'];
	// const [first, second] = ['abc', 'def'];
	// const firstOne = result[0];
	// const secondOne = result[1];

	// console.log(result, first, second, firstOne, secondOne);
	const [count, setCount] = useState(0);

	const handleAddMovie = () => {
		return setCount(count + 1);
	};
	const handleRemoveMovie = () => {
		if (count === 0) {
			return;
		} else {
			setCount(count - 1);
		}
	};

	return (
		<div>
			<button onClick={handleRemoveMovie} className="btn btn-danger m-2">
				Remove Movie
			</button>
			<button onClick={handleAddMovie} className="btn btn-info m-2">
				Add Movie
			</button>

			<h5>Number of Movies: {count} </h5>
			<MovieDisplay movies={count + 3}></MovieDisplay>
			<MovieDisplay movies={count + 5}></MovieDisplay>
			<MovieDisplay movies={count + 10}></MovieDisplay>
		</div>
	);
};

export default MovieCounter;

import React from 'react';

const MovieDisplay = (props) => {
	const { movies } = props;
	return (
		<div>
			<h4>Movies I have acted: {movies} </h4>
		</div>
	);
};

export default MovieDisplay;

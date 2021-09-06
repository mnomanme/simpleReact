import React from 'react';

const Books = () => {
	const books = [
		{ id: 101, name: 'Math' },
		{ id: 201, name: 'Data Structure' },
		{ id: '301', name: 'Theory of Computation' },
	];

	const bookStyles = {
		border: '3px solid goldenrod',
		margin: '10px',
		borderRadius: '5px',
		backgroundColor: 'gray',
	};

	return (
		<div style={bookStyles}>
			<h2>Hello Books</h2>
			{books.map((bk) => {
				const { id, name } = bk;
				return (
					<>
						<h5 style={{ color: 'gold' }}>Book Name: {name}</h5>
						<h6>Book Id: {id}</h6>
					</>
				);
			})}
		</div>
	);
};

export default Books;

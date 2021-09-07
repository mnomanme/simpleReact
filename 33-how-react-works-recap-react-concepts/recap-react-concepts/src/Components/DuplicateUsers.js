import React, { useEffect, useState } from 'react';

const DuplicateUsers = () => {
	return (
		<div>
			<ShowUser></ShowUser>
		</div>
	);
};

const ShowUser = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		const url = `https://randomuser.me/api/?results=5`;
		// fetch(url)
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data));

		async function fetchData() {
			try {
				const res = await fetch(url);
				const data = await res.json();
				// console.log(data.results);
				setState(data.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	const stateStyle = {
		backgroundColor: 'lightgray',
		border: '3px solid crimson',
		borderRadius: '10px',
		margin: '10px',
	};

	return (
		<section style={stateStyle}>
			<h2 style={{ color: 'green' }}>Random User</h2>
			{state.map((user) => (
				<section key={user.cell}>
					<h3>
						Hello {user.name.title} {user.name.first} {user.name.last}
					</h3>
					<h5>Email me: {user.email}</h5>
				</section>
			))}
		</section>
	);
};

export default DuplicateUsers;

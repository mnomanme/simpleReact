import React, { useEffect, useState } from 'react';

const RandomUser = () => {
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
				console.log(data.results);
				setState(data.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			{state.map((user) => {
				const { title, first, last } = user.name;
				const { email } = user;

				return (
					<>
						<ShowUser name={title + ' ' + first + ' ' + last} email={email}></ShowUser>
					</>
				);
			})}
		</div>
	);
};

const ShowUser = (props) => {
	const stateStyle = {
		backgroundColor: 'lightgray',
		border: '3px solid crimson',
		borderRadius: '10px',
		margin: '10px',
	};
	const { name, email } = props;
	return (
		<section style={stateStyle}>
			<h2>Hello {name}</h2>
			<h5>Email me: {email}</h5>
		</section>
	);
};

export default RandomUser;

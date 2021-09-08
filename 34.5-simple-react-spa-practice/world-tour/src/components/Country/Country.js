import React, { useEffect, useState } from 'react';

const Country = () => {
	return (
		<div>
			<CountryState></CountryState>
		</div>
	);
};

const CountryState = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/all`;

		// load data
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setCountries(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<section>
			<h2>Country Load: {countries.length}</h2>;
		</section>
	);
};

export default Country;
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
				// console.log(data);
				setCountries(data);
				// for (const country of data) {
				// 	const result = country;
				// 	console.log(result);
				// }
				// data.forEach((country) => console.log(country.name));
				// const names = data.map((country) => country.name);
				// console.log(names);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<section>
			<h2>Country Load: {countries.length}</h2>

			<div>
				{countries.map((country) => {
					const { name, alpha3Code } = country;
					return (
						<section key={alpha3Code}>
							<small>
								<strong>{name}</strong>
							</small>
						</section>
					);
				})}
			</div>
		</section>
	);
};

export default Country;

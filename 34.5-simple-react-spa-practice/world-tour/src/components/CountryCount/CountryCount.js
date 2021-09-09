import React from 'react';

const CountryCount = (props) => {
	// console.log('new', props.country);
	const addCountry = props.country;
	console.log('add', addCountry);

	// let totalPopulation = 0;

	// for (const country of addCountry) {
	// 	const total = country;
	// 	totalPopulation = totalPopulation + total.population;
	// 	console.log(totalPopulation);
	// }

	const totalPopulation = addCountry.reduce((count, country) => count + country.population, 0);

	return (
		<div>
			<h2>Country Count: {addCountry.length} </h2>
			<p>Total Population :{totalPopulation}</p>
		</div>
	);
};

export default CountryCount;

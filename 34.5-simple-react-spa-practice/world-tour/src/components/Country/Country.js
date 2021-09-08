import React from 'react';
import CountryState from '../CountryState/CountryState';
import './Country.css';

const Country = () => {
	const handleCountryAdd = (country) => console.log('add country', country);

	return (
		<div>
			<CountryState handleCountryAdd={handleCountryAdd} />
		</div>
	);
};

export default Country;

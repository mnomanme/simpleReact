import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container, Row } from 'react-bootstrap';

const CountryState = (props) => {
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

	const handleCountryAdd = props.handleCountryAdd;

	return (
		<Container>
			<h2>Country Load: {countries.length}</h2>
			<Row xs={1} md={2} className="g-4 ">
				{countries.map((country) => {
					const { name, flag, alpha3Code, population, region, capital } = country;
					const { nativeName } = country.languages[0];
					// console.log(name);
					return (
						<CardGroup className="cardGroup" key={alpha3Code}>
							<Card className="cardHover">
								<Card.Img variant="top" src={flag} />
								<Card.Body>
									<Card.Title>{name}</Card.Title>

									<Card>
										<small>Population: {population}</small>
										<small>Region: {region}</small>
										<small>Capital: {capital}</small>
										<small>Language: {nativeName}</small>
									</Card>
								</Card.Body>
								<Button onClick={() => handleCountryAdd(name)} className="btn btn-info">
									Add Country
								</Button>
							</Card>
						</CardGroup>
					);
				})}
			</Row>
		</Container>
	);
};
export default CountryState;

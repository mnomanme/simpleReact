import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import './Country.css';

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
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Container>
			<h2>Country Load: {countries.length}</h2>
			<Row xs={1} md={2} className="g-4 ">
				{countries.map((country) => {
					const { name, flag, alpha3Code } = country;
					// console.log(name);
					return (
						<CardGroup className="cardGroup" key={alpha3Code}>
							<Card className="cardHover">
								<Card.Img variant="top" src={flag} />
								<Card.Body>
									<Card.Title>{name}</Card.Title>
									<Card.Text>This is a wider card</Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
					);
				})}
			</Row>
		</Container>
	);
};

export default Country;

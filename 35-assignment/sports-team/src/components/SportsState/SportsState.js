import React, { useState } from 'react';
import SportsData from '../../resources/FakeSportsData/SportsData';
import { Card, CardGroup, Row, Button } from 'react-bootstrap';

const SportsState = () => {
	// console.log(SportsData);

	return (
		<>
			<section className="bg-warning">
				<h2>Sports State</h2>
			</section>
			<TeamData />
		</>
	);
};

const TeamData = () => {
	const teamSports = SportsData;
	console.log(teamSports);

	const [team, setTeam] = useState(teamSports);

	const [player, setPlayer] = useState([]);

	const handleAddPlayer = (addPlayer) => {
		console.log('add player', addPlayer);
		const newPlayer = [...player, addPlayer];
		setPlayer(newPlayer);
	};

	return (
		<section>
			<div className="bg-danger text-center">
				<h2>Team Load: {teamSports.length}</h2>
				<h4>Add Team: {player.length}</h4>
			</div>
			<Row xs={1} md={2} className="g-4 ">
				{team.map((t) => {
					const { first_name, last_name, playerPhoto, id } = t;
					return (
						<CardGroup key={id}>
							<Card>
								<Card.Img variant="top" src={playerPhoto} style={{ height: '400px' }} />
								<Card.Body>
									<Card.Title>
										{first_name}
										{last_name}
									</Card.Title>
									<Card.Text>This is a wider card with supporting text below </Card.Text>
								</Card.Body>
								<Button onClick={() => handleAddPlayer(first_name)} variant="info">
									Add Player
								</Button>
							</Card>
						</CardGroup>
					);
				})}
			</Row>
		</section>
	);
};

export default SportsState;

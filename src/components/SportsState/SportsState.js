import React, { useState, useEffect } from 'react';
import SportsData from '../../resources/FakeSportsData/SportsData';
import { Card, CardGroup, Row, Button } from 'react-bootstrap';
import SportsTeamCount from '../SportsTeamCount/SportsTeamCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faIdBadge } from '@fortawesome/free-solid-svg-icons';

const SportsState = () => {
	// console.log(SportsData);

	return (
		<>
			<TeamData />
		</>
	);
};

const TeamData = () => {
	// const teamSports = SportsData;
	// console.log(teamSports);

	const [team, setTeam] = useState([]);
	const [player, setPlayer] = useState([]);

	useEffect(() => {
		setTeam(SportsData);
	}, []);

	const handleAddPlayer = (addPlayer) => {
		// console.log('add player', addPlayer);
		const newPlayer = [...player, addPlayer];
		setPlayer(newPlayer);
	};

	return (
		<section>
			<div className="bg-info text-center">
				<h2>Total Sports Team: {SportsData.length}</h2>
				<h4>Add Team: {player.length}</h4>
				<SportsTeamCount player={player} />
			</div>
			<Row xs={1} md={2} className="g-4 ">
				{team.map((player) => {
					const { first_name, last_name, playerPhoto, id, position, dateOfBirth, salary } = player;
					return (
						<CardGroup key={id}>
							<Card>
								<Card.Img variant="top" src={playerPhoto} style={{ height: '400px' }} />
								<Card.Body className="text-center">
									<Card.Title>
										{first_name}
										{last_name} {`	`}
										<FontAwesomeIcon icon={faCertificate} />
									</Card.Title>
									<Card>
										<small>Position: {position} </small>
										<small>Date of Birth: {dateOfBirth} </small>
										<small>
											Salary: {`$`}
											{salary}
											{` `}
											{`million`}
										</small>
									</Card>
								</Card.Body>
								<Button onClick={() => handleAddPlayer(player)} variant="info">
									<FontAwesomeIcon icon={faIdBadge} /> Add Player
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

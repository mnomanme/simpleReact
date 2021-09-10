import React, { useState } from 'react';
import SportsData from '../../resources/FakeSportsData/SportsData';

const SportsState = () => {
	// console.log(SportsData);

	return (
		<div>
			<h2>Sports State</h2>
			<TeamData />
		</div>
	);
};

const TeamData = () => {
	const teamSports = SportsData;
	console.log(teamSports);

	const [team, setTeam] = useState(teamSports);

	return (
		<section>
			{team.map((t) => {
				const { first_name, last_name, playerPhoto } = t;
				return (
					<>
						<div>
							<img src={playerPhoto} alt="" style={{ height: '100px' }} />
						</div>
						<li>
							{first_name}
							{last_name}
						</li>
					</>
				);
			})}
		</section>
	);
};

export default SportsState;

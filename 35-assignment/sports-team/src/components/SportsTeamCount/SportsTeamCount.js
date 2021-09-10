import React from 'react';

const SportsTeamCount = (props) => {
	// console.log(props);
	const addPlayer = props.player;
	// console.log(addPlayer);
	const playerTotalSalary = addPlayer.reduce((salary, team) => salary + team.salary, 0);

	return (
		<div>
			{addPlayer.map((team) => {
				console.log('name', team);
				const { first_name, last_name, salary, id } = team;
				return (
					<section key={id}>
						<h5>
							Name: {first_name} {}
							{last_name} Demand: {`$`}
							{salary} {`million`}
						</h5>
					</section>
				);
			})}
			<h4>
				Total Player Salary:{`$`}
				{playerTotalSalary} {`million`}
			</h4>
		</div>
	);
};

export default SportsTeamCount;

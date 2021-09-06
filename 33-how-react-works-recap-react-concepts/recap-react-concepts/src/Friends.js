import React from 'react';

const Friends = () => {
	const friends = ['Noman', 'Faruque', 'Shabi', 'Sezan', 'Mehe', 'Akhtar'];
	return (
		<div>
			{friends.map((fr) => {
				return <h6 style={{ backgroundColor: 'aqua', margin: '10px' }}>My friend name is: {fr}</h6>;
			})}
		</div>
	);
};

export default Friends;

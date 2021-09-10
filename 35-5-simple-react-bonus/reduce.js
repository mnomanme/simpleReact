// 35_5-1 Explain reduce of an array with examples

const number = [21, 32, 55, 90, 32, 12, 34, 77];

number.map((num) => num * 2);
number.filter((num) => num > 20);
number.find((num) => num < 50);

const total = number.reduce((sum, num) => {
	console.log(sum, num);
	return sum + num;
}, 0);

console.log(total);

const friends = [
	{ name: 'Munia', money: 100 },
	{ name: 'Shabi', money: 200 },
	{ name: 'Nahabi', money: 40 },
	{ name: 'Rahabi', money: 500 },
	{ name: 'Shabia', money: 600 },
];

const totalFriendsMoney = friends.reduce((sum, friend) => {
	console.log(sum, friend);
	const { money } = friend;
	return sum + money;
}, 0);

console.log(totalFriendsMoney);

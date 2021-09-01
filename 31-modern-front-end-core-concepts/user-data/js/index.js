const userContainer = document.getElementById('userDiv');
const url = `https://jsonplaceholder.typicode.com/users`;

const loadUserData = async () => {
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data);
	showUserNames(data);
};
loadUserData();

const showUserNames = (user) => {
	let lists = '';

	user.forEach((usersData) => {
		// console.log(usersData);
		let { name, email } = usersData;
		let { street, suite, city } = usersData.address;
		lists =
			lists +
			`
            <div class='user'> 

            <h3> ${name}</h3>
            <p>Email: ${email}</p>
            <p> Street: ${street}. Suite: ${suite}. City: ${city}</p>

            </div>`;
		userContainer.innerHTML = lists;
	});
	// console.log(lists);
};

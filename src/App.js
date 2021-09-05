import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

const App = () => {
	const person = {
		name: 'Mohammad Noman',
		job: 'student',
	};

	const subject = {
		sub: 'Data Structure',
		price: 559,
	};

	const { name, job } = person;
	const { sub, price } = subject;

	const style = {
		color: 'lightblue',
		backgroundColor: 'crimson',
		padding: '5px',
		boxShadow: '5px 5px 10px gray',
	};

	const friends = ['Faruque', 'Noman', 'Zarin', 'Sezan', 'Sabi', 'Naeem'];
	const subjects = ['HSC', 'CSE', 'Bangla', 'CSE-101', 'BBA', 'CSE-241'];
	const products = [
		{ pname: 'Photoshop', price: '$90.99' },
		{ pname: 'Illustrator', price: '$60.56' },
		{ pname: 'PDF Reader', price: '$15.55' },
	];
	const books = [
		{ bname: 'Math', location: 'Mirpur-10' },
		{ bname: 'Chemistry', location: 'Bangla Bazar' },
		{ bname: 'Astrophysics', location: 'Nilkhet' },
	];

	friends.forEach((fr) => {
		console.log(fr);
	});

	const booksName = books.map((book) => book);
	console.log(booksName);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<h1>React Core Concepts</h1>
				<Counter />
				<Users />

				<br />

				<p>First Part</p>
				<h5 className="" style={style}>
					{name + ' ' + job}
				</h5>
				<h6 style={{ backgroundColor: 'lightsalmon', padding: '5px' }}>Book: {sub + ' ' + price}</h6>
				<p>Sum: {(10 + 20) * 40 - 500}</p>
				<button className="btn btn-danger">Test Button</button>

				<br />

				<p>Second Part</p>
				<Person nayok="Kabila " nayika="Rokeya"></Person>
				<Person nayok="Shuvo " nayika="Riya"></Person>
				<Person nayok="Habu" nayika="Rehena"></Person>
				<Person nayok="Pasha" nayika="Kahimpur"></Person>
				<Friends friend={friends[0]} subject={subjects[0]}></Friends>
				<Friends friend={friends[1]} subject={subjects[1]}></Friends>
				<Friends friend={friends[2]} subject={subjects[2]}></Friends>
				<ThatsMe myName="Mohammad Noman" job="Bekar"></ThatsMe>
				<ThatsMe myName="Mohammad Faruque" job="Gamer"></ThatsMe>

				<br />

				<ul>
					{friends.map((fr) => {
						return <li>{fr}</li>;
					})}
					<li>{friends[0]}</li>
				</ul>

				<br />

				<p>Third Part</p>
				<Products product={products[0]}></Products>
				<Products product={products[1]}></Products>
				<Products product={products[2]}></Products>

				<br />
				<p>Fourth Part</p>

				{books.map((bk) => {
					return <Books book={bk}></Books>;
				})}

				<ul>
					{books.map((bk) => {
						return (
							<li>
								Name: {bk.bname} Location: {bk.location}
							</li>
						);
					})}
				</ul>
			</header>
		</div>
	);
};

const Counter = () => {
	const [count, setCount] = useState(5);
	const handleIncrease = () => {
		const newCount = count + 1;
		setCount(newCount);
		setCount(count + 1);
	};

	const handleDecrease = () => {
		// const newCount = count - 1;
		if (count === 0) {
			return;
		} else {
			setCount(count - 1);
		}
	};

	return (
		<section>
			<h1 style={{ color: 'green' }}>Count :{count}</h1>
			<button onClick={handleDecrease} className="btn btn-info m-2">
				Decrease
			</button>
			<button onClick={handleIncrease} className="btn btn-info m-2">
				Increase
			</button>
		</section>
	);
};

const Users = () => {
	const [users, setUsers] = useState(0);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<section>
			<h3>Dynamic Users: {users.length}</h3>
			{console.log(users)}
			{users.map((user) => {
				return <li>{user.name}</li>;
			})}
		</section>
	);
};

const Person = (props) => {
	// console.log(props);

	const personStyle = {
		color: 'magenta',
		border: '4px solid yellow',
		borderRadius: '10px',
		margin: '10px',
		padding: '10px',
		width: '600px',
		backgroundColor: 'cornflowerblue',
		boxShadow: '5px 5px 10px tomato',
	};

	const { nayok, nayika } = props;

	return (
		<div>
			<div style={personStyle}>
				<h2>What's The Dude Name: {nayok} </h2>
				<h4>Heroine of The Year: {nayika}</h4>
			</div>
		</div>
	);
};

const Friends = (props) => {
	// console.log(props);

	const style = {
		color: 'gold',
		border: '4px solid green',
		borderRadius: '10px',
		margin: '10px',
		padding: '10px',
		width: '600px',
		backgroundColor: 'lightcoral',
		boxShadow: '5px 5px 10px white',
	};

	const { friend, subject } = props;

	return (
		<div style={style}>
			<h3>My Friend: {friend}</h3>
			<h5>Subject :{subject}</h5>
		</div>
	);
};

const ThatsMe = (props) => {
	const { myName, job } = props;

	return (
		<section style={{ border: '2px solid green', margin: '10px', padding: '10px', width: '400px' }}>
			<h4>My Name: {myName}</h4>
			<h6>My Profession: {job}</h6>
		</section>
	);
};

const Products = (props) => {
	const productStyle = {
		border: '2px solid gray',
		borderRadius: '10px',
		backgroundColor: 'lightgray',
		height: '200px',
		width: '200px',
		margin: '10px',
		marginTop: '10px',
		padding: '10px',
	};
	// console.log(props);

	const { pname, price } = props.product;

	return (
		<div style={productStyle}>
			<h3 className="mt-3"> {pname} </h3>
			<h6 className="mt-4">{price}</h6>
			<button className=" mt-4 btn-sm btn-outline-warning">Buy Now</button>
		</div>
	);
};

const Books = (props) => {
	const bookStyle = {
		border: '2px solid gray',
		borderRadius: '10px',
		backgroundColor: 'lightsalmon',
		height: '200px',
		width: '200px',
		margin: '10px',
		marginTop: '10px',
		padding: '10px',
	};

	const { bname, location } = props.book;

	return (
		<section style={bookStyle}>
			<h4>{bname}</h4>
			<h6>{location}</h6>
		</section>
	);
};

export default App;

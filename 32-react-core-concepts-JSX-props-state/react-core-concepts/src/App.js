import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>React Core Concepts</h1>
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
			</header>
		</div>
	);
};

const Person = (props) => {
	console.log(props);
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
	console.log(props);
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

export default App;

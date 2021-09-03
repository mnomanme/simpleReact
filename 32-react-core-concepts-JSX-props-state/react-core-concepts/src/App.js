import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>React Core Concepts</h1>
				<h5 className="" style={style}>
					{name + ' ' + job}
				</h5>
				<h6 style={{ backgroundColor: 'lightsalmon', padding: '5px' }}>Book: {sub + ' ' + price}</h6>
				<p>Sum: {(10 + 20) * 40 - 500}</p>
				<button className="btn btn-danger">Test Button</button>
			</header>
		</div>
	);
}

export default App;

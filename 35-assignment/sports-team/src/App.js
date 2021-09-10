import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Layout from './components/Layout/Layout';

const App = () => {
	return (
		<Container>
			<section className="App bg-info">
				<h2>Hello Sports Team</h2>
			</section>
			<Layout />
		</Container>
	);
};

export default App;

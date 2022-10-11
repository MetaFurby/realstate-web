import '../styles/index.scss';
import Recipes from './Recipes';
import houseImg from '../assets/house-1.png';
import './App.scss';

const App = () => {
	return (
		<>
			<section className="house" />
			<main>
				<section>
					<h1 className="text-9xl">hi react</h1>
				</section>
				<img src={houseImg} alt="houseImg" width="250" />
			</main>
			<Recipes />
		</>
	);
};
export default App;

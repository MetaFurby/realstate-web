import '../styles/index.scss';
import houseImg from '../assets/house-1.png';
import Header from './shared/Header';

const App = () => {
	return (
		<>
			<Header />
			<section className="house" />
			<main>
				<section>
					<h1 className="text-9xl">hi react</h1>
				</section>
				<img src={houseImg} alt="houseImg" width="250" />
			</main>
		</>
	);
};
export default App;

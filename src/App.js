import './css/style.css';
import Footer from './components/Footer.js';
import Panel from './components/Panel.js';
import { Logo, Menu } from './components/Header.js';

// import img1 from './img/.Blizzards.jpg';



function App() {
	return (
		<div className="App">
			{/*전체 레이아웃*/}
			<figure>
				<Logo />
				<Menu />

				<section>
					<Panel />
				</section>

				<Footer />
			</figure>

		</div>
	);
}

export default App;

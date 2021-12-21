import './css/style.css';
import Footer from './components/Footer.js';
import Panel from './components/Panel.js';
import { Logo, Menu } from './components/Header.js';

// import img1 from './img/.Blizzards.jpg';

const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers']
const name1 = "DAVID";
const path = process.env.PUBLIC_URL;

function App() {
	return (
		<div className="App">
			{/*전체 레이아웃*/}
			<figure>
				<Logo />
				<Menu />

				<section>
					{
						arr.map((data,index) => {
							return <Panel key={index} path={path} data={data} />
						})
					}
				</section>

				<Footer />
			</figure>

		</div>
	);
}

export default App;

import Card from './components/card/Card';
import Cards from './components/cards/Cards';

const App = () => {
	return (
		<Cards>
			<Card
				icon='sedan'
				title='SEDANS'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				color='orange'
				position='first'
			/>
			<Card
				icon='suv'
				title='SUVS'
				text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				color='blue'
				position='middle'
			/>
			<Card
				icon='luxury'
				title='LUXURY'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				color='green'
				position='last'
			/>
		</Cards>
	);
};

export default App;

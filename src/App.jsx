import Card from './components/card/Card';
import Container from './components/container/Container';

const App = () => {
	return (
		<>
			<Container>
			<Card
                    icon="/images/icon-sedans.svg"
                    title="Sedans"
                    text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
                    bgcolor="#e28625"
                    buttonText="Learn More"
                />
                <Card
                    icon="/images/icon-suvs.svg"
                    title="Suvs"
                    text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
                    bgcolor="#006971"
                    buttonText="Learn More"
                />
                <Card
                    icon="/images/icon-luxury.svg"
                    title="Luxury"
                    text="Cruise in the best bar brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
                    bgcolor="#004140"
                    buttonText="Learn More"
                />
			</Container>
		</>
	);
};

export default App;
import Card from "../card/Card";
import { StyledContainer } from "./container.styles";

const Container = () => (
	<StyledContainer>
		<Card
                    icon="/images/icon-sedans.svg"
                    title="Sedans"
                    text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
                    color="#e28625"
                />
                <Card
                    icon="/images/icon-suvs.svg"
                    title="Suvs"
                    text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
                    color="#006971"
                />
                <Card
                    icon="/images/icon-luxury.svg"
                    title="Luxury"
                    text="Cruise in the best bar brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
                    color="#004140"
                />
	</StyledContainer>
    
);

export default Container;
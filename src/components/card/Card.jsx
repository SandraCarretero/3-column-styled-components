import {
	StyledButton,
	StyledCard,
	StyledImage,
	StyledText,
	StyledTitle
} from './card.styles';

const Card = ({ icon, title, text, color }) => {
	return (
		<StyledCard $color={color}>
			<StyledImage src={icon} alt='' />
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
			<StyledButton $color={color}>Learn More</StyledButton>
		</StyledCard>
	);
};

export default Card;

import {
	StyledButton,
	StyledCard,
	StyledText,
	StyledTitle
} from './card.styles';

const Card = ({ $icon, $title, $text, $bgcolor }) => {
	return (
		<StyledCard $bgcolor={$bgcolor}>
			<img src={$icon} alt='' />
			<StyledTitle>{$title}</StyledTitle>
			<StyledText>{$text}</StyledText>
			<StyledButton $bgcolor={$bgcolor}>Learn More</StyledButton>
		</StyledCard>
	);
};

export default Card;

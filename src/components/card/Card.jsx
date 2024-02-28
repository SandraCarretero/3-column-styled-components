import { StyledButton, StyledCard, StyledIcon, StyledIconContainer, StyledText, StyledTitle } from "./card.styles";


const Card = ({ icon, title, text, bgcolor, buttonText }) => {
	return (
		<StyledCard bgcolor={bgcolor}>
			<StyledIconContainer>
				<StyledIcon src={icon} alt='' />
			</StyledIconContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
			<StyledButton bgcolor={bgcolor}>{buttonText}</StyledButton>
		</StyledCard>
	);
};

export default Card;
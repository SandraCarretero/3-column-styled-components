import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 3rem;
	background-color: ${({ $color }) => $color};
	color: #fff;
	/* transform: translateZ(0); */

	@media screen and (min-width: 768px) {
		width: 307px;
	}
`;

const StyledImage = styled.img`
	width: 4rem;
`

const StyledTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
	font-family: 'Big Shoulders Display', sans-serif;
`;

const StyledText = styled.p`
	padding-right: 1.5rem;
	font-size: 0.9rem;
	letter-spacing: 0.1rem;
	line-height: 1.75;
`;

const StyledButton = styled.button`
	margin-top: auto;
	padding: 0.7rem 2rem;
	border: none;
	border-radius: 1.5rem;
	color: ${({ $color }) => $color};
	font-size: 1.2rem;

	&:hover {
		background-color: transparent;
		color: #fff;
		outline: 1px solid #fff;
		cursor: pointer;
	}
`;

export {
	StyledCard,
	StyledTitle,
	StyledImage,
	StyledText,
	StyledButton
};
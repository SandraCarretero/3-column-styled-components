import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	overflow: hidden;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { StyledContainer };

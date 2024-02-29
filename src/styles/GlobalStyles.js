import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
    box-sizing: border-box;
  }

    img{
        max-width: 100%;
        display: block
    }
    
    a{
        text-decoration: none;
        color: inherit
    }

    body {
	margin: 0;
	font-family: 'Lexend Deca', sans-serif;
	background-color: #eaeaea;
	width: 100%;
	min-height: 100vh;
	display: grid;
	place-items: center;
	padding: 1rem;
    }
`;
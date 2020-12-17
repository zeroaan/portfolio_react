import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}; 
    
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: black;
    }
    a { 
        text-decoration: none;
        color: inherit;
    }
`;

export default globalStyles;

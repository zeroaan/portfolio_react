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
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 10px;
        }
    }
    a { 
        text-decoration: none;
        color: inherit;
    }
`;

export default globalStyles;

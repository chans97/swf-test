import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: #1F1D1E;
        color: white;
        display : flex;
        justify-content: center;
    }
    #root {
        width:100%;
    }
    @media(min-width: 480px){
        #root {
            width:480px;
        }
    }
`;

export default GlobalStyles;

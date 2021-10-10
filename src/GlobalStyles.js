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
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        background-color: #1F1D1E;
        color: white;
        display : flex;
        justify-content: center;
        flex-direction: row;
    }
    #root {
        width:100%;
    }
    @media(min-width: 400px){
        #root {
            width:400px;
        }
    }
`;

export default GlobalStyles;

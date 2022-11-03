import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        border: 0;
        margin: 0;
    }

    :root {
        --bg-color: #FFFFFF;
        --primary-color: #5BD3FF;
        --secondary-color: #ADADAD;
    }

    body {
        background-color: var(--bg-color);
    }
`;

export default GlobalStyle;
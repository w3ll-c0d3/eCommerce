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

    main {
        margin-top: 2rem;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 300px;
        margin-top: 5rem;
        width: 100vw;
        background-color: var(--secondary-color);
    }

    footer a {
        text-decoration: none;
        color: var(--bg-color);
    }

    footer :active {
        color: blue;
    }
`;

export default GlobalStyle;
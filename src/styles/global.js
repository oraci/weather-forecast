import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        margin: 0;
        min-height: 100%;
        width: 100%;
        display: flex;
        flex: 1;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;

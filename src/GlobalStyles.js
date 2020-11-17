import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --background: #2F2F2F;
        --text: #FEFEFE;
        
    }

    html {
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        margin: 0;
    }
`

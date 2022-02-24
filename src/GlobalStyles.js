import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --white:#fff;
        --paleBlue:#b3d0ef;
        --lightBlue:#89b9e7;
        --blue:#2f91d3;
        --medBlue:#1c74b4;
        --darkBlue:#005996;

        --font-size-XL:2rem;
        --font-size-L:1.5rem;
        --font-size-M:1.2rem;
        --font-size-S:1rem;
        --font-size-XS:0.8rem;
    }

    *{
         box-sizing:border-box;
         font-family :'Raleway' , sans-serif;
    }

    body{
        margin:0;
        padding:0;
        h1{
            font-weight:800;
            font-size:var(--font-size-XL);
        }
        p{
            font-size:var(--font-size-S);
        }
    }
`;

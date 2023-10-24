import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    body{
     padding: 0 25px;
     background: linear-gradient(to right, #9e9e9e, #1D1D1D);
     min-height: 100vh;
     display: flex;
     flex-direction: column;
    }
 `

export default Global

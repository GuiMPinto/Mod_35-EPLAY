import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  verde: '#10AC84'
}
/*
  margin: 0 auto; // Altura vertical igual a Zero
                  // e centralize o conteúdo no centro.
*/
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

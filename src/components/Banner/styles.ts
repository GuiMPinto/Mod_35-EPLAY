import styled from 'styled-components'

// importa um elemento STYLED COMPONENT do componente TAG
import { TagContainer } from '../Tag/styles'

/*  display: block; // Evita o comportamento padrão 'inline'
                    // da imagem background-size: cover;

    background-repeat: no-repeat; // Evita o comportamento
                    // da imagem se repetir até completar
                    // a tela toda disponível

    background-size: cover; // Faz com que a imagem ocupe a
                    // imagem ocupa a largura total da tela

    ${TagContainer} // ${elemento JSX}
*/
export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
//   background-repeat: no-repeat;
//   background-size: cover;
//   font-weight: bold;
//   position: relative;

//   .container {
//     position: relative;
//     padding-top: 340px;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//     z-index: 1;
//   }

//   ${TagContainer} {
//     position: absolute;
//     top: 32px;
//   }

//   &::after {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.7);
//     content: '';
//   }
// `

// export const Title = styled.h2`
//   font-size: 36px;
//   max-width: 450px;
// `

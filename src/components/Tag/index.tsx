import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'

  /*
    children: JSX.Element
    significa que a propriedade chamada children deve receber
    exatamente um elemento React (por exemplo, um componente ou
    uma tag JSX como <div>...</div>).

    - children é uma propriedade especial que representa tudo o
      que está entre as tags de abertura e fechamento de um componente.

    - JSX.Element indica que o valor precisa ser um único elemento válido
      do React (não pode ser, por exemplo, um array de elementos ou texto simples).

  Uso correto:
  <MeuComponente>
    <div>Conteúdo</div>  // ok, é um único elemento JSX
  </MeuComponente>

  Uso incorreto (causará erro):
  <MeuComponente>
    <div>Um</div>
    <div>Dois</div> // dois elementos, não permitido
  </MeuComponente>

  Se quiser permitir múltiplos elementos como children, normalmente utilizamos
  React.ReactNode ao invés de JSX.Element:

  children: React.ReactNode
  Assim você pode passar múltiplos elementos, textos, etc.

  */
  children: string /* children recebe uma string, pois recebe os texto dentro
                      dentro da tag direto dos componentes que ela aparece
                      como Banner e etc...
                  */
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag

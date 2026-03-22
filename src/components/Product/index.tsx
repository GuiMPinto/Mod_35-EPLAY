// Cada Produto se equivale a um Card
import Tag from '../Tag'

import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        /*
          O atributo key={info} é muito importante no React quando você
          está renderizando listas de elementos, por exemplo usando .map().
          A key serve para ajudar o React a identificar quais itens mudaram,
          foram adicionados ou removidos, melhorando a performance e evitando
          bugs na renderização.

          O uso da prop key acontece normalmente quando estamos iterando
          sobre um array (neste caso, infos é um array de strings), e precisamos
          renderizar múltiplos componentes a partir dele.
        */
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product

//CSS
import { Imagem, Precos, Titulo } from './styles'

//Componentes
import Tag from '../Tag'
import Button from '../Button'

// formatador de preço
import { formataPreco } from '../../utils/formatadorDePreco'

//requisições da API
import { useGetDestaqueJogoQuery } from '../../services/api'

const Banner = () => {
  // data é do tipo Game definido em api.ts
  // getDestaqueJogo: builder.query<Game, void>
  // isLoading é booleano
  const { data: game, isLoading } = useGetDestaqueJogoQuery()

  // if evita  que a função formataPreco dentro do <span></span> de erro
  // quando o objeto game estiver indefinido (undefined).
  if (!game) {
    return <h3> Carregando ... </h3>
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De R$ <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

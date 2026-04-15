//CSS
import { Imagem, Precos, Titulo } from './styles'

//Imagens
import bannerImg from '../../assets/images/banner-homem-aranha.png'

//Componentes
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductList'
import { Game } from '../../pages/Home'

//React
import { useEffect, useState } from 'react'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  // Sempre que o Id mudar (ou seja, ao atualizar a
  // página ou navegar), ele executa o código dentro dele.
  useEffect(() => {
    // fetch: Busca na API os dados do restaurante com base no Id.
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      //setGame: atualiza o estado local com a URL da nova imagem do banner
      .then((res) => setGame(res))
  }, []) // o id esta dentro de []. É acresentado toda vez
  // a página é atualizada

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

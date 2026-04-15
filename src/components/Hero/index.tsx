// imagens
import bannerHogwarts from '../../assets/images/fundohogwarts.png'

// Componenetes
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../ProductList'

// CSS
import { BannerProdcut, InfosBanner } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <BannerProdcut style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <InfosBanner>
        <h2>{game.name}</h2>
        <p>
          {/* &&: se for true entra o escopo dentro de ( ) */}
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.discount && (
            <>Por {formataPreco(game.prices.current)} </>
          )}
        </p>
        {game.prices.discount && (
          <Button
            type="button"
            title="Adicionar Hogwarts Legacy ao Carrinho"
            variante="primario"
          >
            Adicionar ao Carrinho
          </Button>
        )}
      </InfosBanner>
    </div>
  </BannerProdcut>
)

export default Hero

import bannerHogwarts from '../../assets/images/fundohogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { BannerProdcut, InfosBanner } from './styles'

const Hero = () => (
  <BannerProdcut style={{ backgroundImage: `url(${bannerHogwarts})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>RPG</Tag>
      </div>
      <InfosBanner>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Adicionar Hogwarts Legacy ao Carrinho"
          variante="primario"
        >
          Adicionar ao Carrinho
        </Button>
      </InfosBanner>
    </div>
  </BannerProdcut>
)

export default Hero

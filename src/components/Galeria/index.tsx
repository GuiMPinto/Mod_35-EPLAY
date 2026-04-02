//componentes
import Section from '../Section'

//imagens
import aluna from '../../assets/images/menina.png'

//CSS
import { Item, Itens } from './styles'

const Galeria = () => (
  <Section background="black" title="Galeria">
    <Itens>
      <Item>
        <img src={aluna} alt={'imagem do link'} />
      </Item>
      <Item>
        <img src={aluna} alt={'imagem do link'} />
      </Item>
      <Item>
        <img src={aluna} alt={'imagem do link'} />
      </Item>
      <Item>
        <img src={aluna} alt={'imagem do link'} />
      </Item>
    </Itens>
  </Section>
)

export default Galeria

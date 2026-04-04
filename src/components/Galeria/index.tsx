//componentes
import Section from '../Section'

//imagens
import aluna from '../../assets/images/menina.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import fechar from '../../assets/images/fechar.png'

//CSS
import { Item, Itens, Action, Modal, ModalContent } from './styles'

type ItemGaleria = {
  tipo: 'imagem' | 'video'
  url: string
}

const mock: ItemGaleria[] = [
  {
    tipo: 'imagem',
    url: aluna
  },
  {
    tipo: 'imagem',
    url: aluna
  },
  {
    tipo: 'video',
    url: 'https://www.youtube.com/embed/gl8w-cMqNfI?si=L1Oss4Mp-9zmAkMj'
  }
]

/*
  Código implementado porque não é possivél o link diretamente do YouTube
  // -------------- Código --------------- Inicio//
*/
type Props = {
  defaultCover: string
  nomeJogo: string
}

const Galeria = ({ defaultCover, nomeJogo }: Props) => {
  const getMediaCover = (item: ItemGaleria) => {
    if (item.tipo === 'imagem') return item.url
    return defaultCover
  }
  // -------------- Código --------------- Final//

  const getMediaIcon = (item: ItemGaleria) => {
    if (item.tipo === 'imagem') return zoom
    return play
  }
  return (
    <>
      <Section background="black" title="Galeria">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} do ${nomeJogo}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt={nomeJogo} />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h2>{nomeJogo}</h2>
            <img src={fechar} alt="fechar Pop-Up"></img>
          </header>
          <img src={spiderman}></img>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Galeria

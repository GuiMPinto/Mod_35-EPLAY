//REACT
import { useState } from 'react'

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

interface ItemGaleria {
  tipo: 'imagem' | 'video'
  url: string
}

interface ModalState extends ItemGaleria {
  isVisible: boolean
}

const mock: ItemGaleria[] = [
  {
    tipo: 'imagem',
    url: spiderman
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

type Props = {
  defaultCover: string
  nomeJogo: string
}

const Galeria = ({ defaultCover, nomeJogo }: Props) => {
  //Use State
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    tipo: 'imagem',
    url: ''
  })

  const getMediaCover = (item: ItemGaleria) => {
    if (item.tipo === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: ItemGaleria) => {
    if (item.tipo === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      tipo: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Itens>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  tipo: media.tipo,
                  url: media.url
                })
              }}
            >
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
      {/*
        Se quiser realmente controlar a renderização do conteúdo usando a
        condição isVisible como true, deve-se condicionar o JSX, assim:

        {modal.isVisible && (
          <Modal>
            Conteúdo
          </Modal>
        )}
      */}
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h2>{nomeJogo}</h2>
            <img
              src={fechar}
              alt="fechar Pop-Up"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.tipo === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            // Código que permite ler um link de um video do Youtube
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}
export default Galeria

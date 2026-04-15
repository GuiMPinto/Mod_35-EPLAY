//REACT
import { useState } from 'react'

//componentes
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

//imagens
import aluna from '../../assets/images/menina.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import fechar from '../../assets/images/fechar.png'

//CSS
import { Item, Itens, Action, Modal, ModalContent } from './styles'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: aluna
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/gl8w-cMqNfI?si=L1Oss4Mp-9zmAkMj'
  }
]

type Props = {
  defaultCover: string
  nomeJogo: string
  items: GalleryItem[]
}

const Galeria = ({ defaultCover, nomeJogo, items }: Props) => {
  //Use State
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Itens>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
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
          {modal.type === 'image' ? (
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

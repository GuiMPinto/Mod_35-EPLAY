// useParams : um paramento antes da URL final um dado cada
// paramentro determina um produto final
import { useParams } from 'react-router-dom'

//React
import { useState, useEffect } from 'react'
import { Game } from '../Home'

//Componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Galeria from '../../components/Galeria'

// imagens
import aluna from '../../assets/images/menina.png'
import fechar from '../../assets/images/fechar.png'

// Cada id e designado para um item
const ProductPainel = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  //useEffect para chamar uma API
  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando ... </h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o Jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')} <br />
        </p>
      </Section>
      <Galeria
        defaultCover={aluna}
        nomeJogo="Rogwarts Legacy"
        items={game.media.gallery}
      />
    </>
  )
}
export default ProductPainel

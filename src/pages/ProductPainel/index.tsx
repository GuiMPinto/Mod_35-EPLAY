// useParams : um paramento antes da URL final um dado cada
// paramentro determina um produto final
import { useParams } from 'react-router-dom'

//Componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Galeria from '../../components/Galeria'

// imagens
import aluna from '../../assets/images/menina.png'

// requisições da API
import { useGetIdJogoQuery } from '../../services/api'

// Cada id e designado para um item
const ProductPainel = () => {
  const { id } = useParams()
  const { data: game } = useGetIdJogoQuery(id!)

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

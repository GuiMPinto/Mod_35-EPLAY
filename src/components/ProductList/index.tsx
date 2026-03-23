import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/games'

export type Props = {
  games: Game[]
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title} </h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

//requisições da API
import {
  useGetPromocoesJogoQuery,
  useGetEmBreveJogoQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    current?: number
    discount?: number
    old?: number
  }

  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[] //
  }
}

const Home = () => {
  //requisições
  const { data: promocoes } = useGetPromocoesJogoQuery()
  const { data: emBreve } = useGetEmBreveJogoQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" games={promocoes} />
        <ProductsList title="Em breve" background="black" games={emBreve} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home

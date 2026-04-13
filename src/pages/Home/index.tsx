import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

//React
import { useEffect, useState } from 'react'

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
  //UseState
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  //useEffect para chamar uma API
  useEffect(() => {
    // Promoções
    fetch('https://api-ebac.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    // Em Breve
    fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductsList title="Promoções" background="gray" games={promocoes} />
      <ProductsList title="Em breve" background="black" games={emBreve} />
    </>
  )
}

export default Home

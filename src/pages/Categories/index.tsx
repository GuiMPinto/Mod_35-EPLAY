// React
import { useState, useEffect } from 'react'

// Componentes
import ProductsList from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList title="Ação" background="black" games={gamesAcao} />
      <ProductsList title="Esportes" background="gray" games={gamesEsportes} />
      <ProductsList title="Luta" background="black" games={gamesLuta} />
      <ProductsList title="RPG" background="gray" games={gamesRPG} />
      <ProductsList
        title="Simulação"
        background="black"
        games={gamesSimulacao}
      />
    </>
  )
}

export default Categories

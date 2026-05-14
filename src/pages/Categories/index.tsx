// Requisições das APIs
import {
  useGetAcaoJogoQuery,
  useGetEsportesJogoQuery,
  useGetLutaJogoQuery,
  useGetRpgJogoQuery,
  useGetSimulacaoJogoQuery
} from '../../services/api'

// Componentes
import ProductsList from '../../components/ProductList'

const Categories = () => {
  const { data: acao } = useGetAcaoJogoQuery()
  const { data: esporte } = useGetEsportesJogoQuery()
  const { data: luta } = useGetLutaJogoQuery()
  const { data: rpg } = useGetRpgJogoQuery()
  const { data: simulacao } = useGetSimulacaoJogoQuery()

  if (acao && esporte && luta && rpg && simulacao) {
    return (
      <>
        <ProductsList title="Ação" background="black" games={acao} />
        <ProductsList title="Esportes" background="gray" games={esporte} />
        <ProductsList title="Luta" background="black" games={luta} />
        <ProductsList title="RPG" background="gray" games={rpg} />
        <ProductsList title="Simulação" background="black" games={simulacao} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories

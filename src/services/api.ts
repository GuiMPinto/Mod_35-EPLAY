//importando o RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

// ------- Criando uma Api ---------
/*
  createApi objeto que é a API
  baseQuery: a configuração de onde é copiado os dados.
            O endereço do servidor
  fetchBaseQuery : função que recebe um objeto
*/
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay/'
  }),
  // Requisições que partem a partir da requisição básica
  endpoints: (builder) => ({
    // query<o Tipo, o retorno>
    getDestaqueJogo: builder.query<Game, void>({
      //endereço do Banner = baseUrl + destaque
      query: () => 'destaque'
    }),
    getPromocoesJogo: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getEmBreveJogo: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getAcaoJogo: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getEsportesJogo: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulacaoJogo: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getLutaJogo: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgJogo: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    // Recebe um parametro de Game. Apenas o id
    getIdJogo: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})
// hook criado para acesar o endereço de destaque do jogo
export const {
  useGetDestaqueJogoQuery,
  useGetPromocoesJogoQuery,
  useGetEmBreveJogoQuery,
  useGetAcaoJogoQuery,
  useGetEsportesJogoQuery,
  useGetLutaJogoQuery,
  useGetRpgJogoQuery,
  useGetSimulacaoJogoQuery,
  useGetIdJogoQuery
} = api
export default api

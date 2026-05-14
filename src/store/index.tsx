// Redux toolkit
import { configureStore } from '@reduxjs/toolkit'

// API
import api from '../services/api'

//reducers
import cartReducer from './reducers/cart'

export const store = configureStore({
  // Recebe os Reducers
  reducer: {
    cart: cartReducer,
    /*
      reducerPath é uma propriedade de api
      O api.reducer é uma propriedade do objeto api criado pelo createApi do RTK Query.
      Ele é gerado automaticamente, junto com todo o setup de endpoints e cache do RTK Query.
      O api.reducer serve para armazenar e gerenciar o estado das requisições feitas com o
      RTK Query dentro do Redux.

      Resumindo: api.reducer vem da instância do createApi. Ele é necessário para que
      o RTK Query possa controlar o estado relacionado às requisições API dentro do Redux.
    */
    [api.reducerPath]: api.reducer
  },
  /*
    Middleware é uma função (ou conjunto de funções) que ficam "no meio do caminho"
    entre a requisição feita pelo cliente (por exemplo, o navegador) e a resposta
    enviada pelo servidor.

    O middleware pode ser usado para várias tarefas, como:

    Analisar dados da requisição (por exemplo, transformar JSON em objeto)
    Adicionar informações à requisição ou resposta
    Fazer autenticação e autorização
    Fazer logs de atividades
    Tratar erros

    No frontend, especialmente ao usar bibliotecas como o Redux ou RTK Query
    (que estamos vendo nesse módulo), o middleware pode interceptar ações antes
    que elas cheguem ao reducer, podendo modificar, cancelar, ou até iniciar novas
    ações, como fazer requisições para APIs.

    Resumindo: middleware serve para processar, modificar ou filtrar dados entre o
    momento em que uma requisição é feita e a resposta final, tornando a aplicação
    mais modular e flexível.
  */
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware().concat(api.middleware)
})

/*
  Retorna o tipo de dado para o RootReducer.
  'typeof': função do react que retorna o tipo da variavel.
*/
export type RootReducer = ReturnType<typeof store.getState>

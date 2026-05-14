import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

//----------- Tipo criado para receber o objeto Game -----------//
type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}
//----------- ------------------------------------- -----------//

// createSlice = um pedaço do estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  //funções que alterarão o carrinho
  reducers: {
    /*
      add: função os jogos no carrinho de compras o item adicionado ao carrinho
          também não permite um item seja adicionado mais de uma ves via clique
      no botão ADICIONAR AO CARRINHO do componente Hero.
    */
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo  já está no carrinho')
      }
    },

    // remove o item do carrinho de compras
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    //funções que abre e fecha o carrinho de compras
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer

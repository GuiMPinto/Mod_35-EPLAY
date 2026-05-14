//Componentes
import Button from '../Button'
import Tag from '../Tag'

//imagens
import starWars from '../../assets/images/star_wars.png'

//formatador de preco
import { formataPreco } from '../../utils/formatadorDePreco'

//CSS
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

// React Redux
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
// open é o estado true para vísivel
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  // Busca a função isOpen do reducer do componente cart que tem o seu valor
  // igual a falso ou verdadeiro para a exibição do carrinho de compras
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch() //dispara uma ação
  const closeCart = () => {
    dispatch(close())
  }
  // reduce: uma função que acumula os valores recebidos.
  //         Função nativa do JavaScript.
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    // is-open classe do CSS que permite o cart ser vísivel
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {/* Overlay */}
      <Overlay onClick={closeCart}></Overlay>
      {/* Barra Lateral */}
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail}></img>
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span> {formataPreco(item.prices.current)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length}(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="Clique aqui para adicionar um produto">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart

// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

// CSS
import { HeaderBar, Links, LinkItem, CartButton } from './styles'

// Imagens
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

// React Redux
import { useDispatch, useSelector } from 'react-redux'
// open é o estado true para vísivel
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch() //dispara uma ação
  const { items } = useSelector((state: RootReducer) => state.cart) // lendo os estados de Cart
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      {/* Clicar neste botão aciona o cart */}
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header

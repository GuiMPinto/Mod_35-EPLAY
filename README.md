## Mod 35 aula 1 - Faça as configurações iniciais -

O porjeto baixado já tem o Eslint e Prettier configurados
Lembrando:

Eslint : Mostra os códigos que não estão no padrão identação
         configurado no .editorcongif .

Prettier : Altera automaticamente as salvar o documento as
           configurações determinada no .editorconfig .

Instalar o NPM.

npm i


Instalar o STYLED COMPONENT mais o REACT ROUTER DOM

npm i --save styled-components react-router-dom

Nesta especifica aplicação antes de rodar a aplicação devemos
entrar com comando para aplicar as configurações do .prettiercc

npx eslint --fix

Estes comandos acima não são necessário roda-los novamente caso precise
sair da aplicação e voltar mais tarde.


Para rodar a aplicação

npm start

Usar as fontes Roboto do Google fontes. Deve copiar o código da fonte e
cola-la em public/index.html antes da tag <head></head>.

É criado um documento CSS global usando o STYLED COMPONENT.

src/styles.ts

Fazeremos a alteração no arquivo App.tsx e deletar os documentos que não
serão mais usados. Deletamos: App.css, App.test.tsx, index.css e logo.svg.

Dentro de index.tsx removermos a referência de index.css.


## Mod 35 aula 2 - Construa o cabeçalho -

Criaremos a pasta src/assets onde estarão as imagens que serão usadas na
aplicação.

O cabeçalho é um componente e os componentes na aplicação são colocados
na pasta src/components/. No caso do cabeçalho; src/components/Header/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Header, src/components/Header/styles.ts

No documento App.tsx de faz uma chamada para o componente Header


## Mod 35 aula 3 - Cria o Banner -

O Banner deste projeto é uma imagem, dentro dela de varios elementos.

Esta imagem será tratada com background-image

O Banner é um componente e os componentes na aplicação são colocados
na pasta src/components/. No caso do Banner; src/components/Banner/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Banner, src/components/Banner/styles.ts

No documento App.tsx de faz uma chamada para o componente Banner.


## Mod 35 alua 4 - Componentize - Parte I -

Varios elementeos irão se repetir em varios componentes como tags e botões.
Sendo assim iremos componentizar este componentes.

A Tag que é um elemento que é usado em outros componentes da aplicação.
A Tag será criada em src/components/Tag/index.tsx

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Tag, src/components/Tag/styles.ts

O Botão também será um elemento que será usado em outros componentes na aplicação.
O elemento Button será usado na pasta src/components/Button/index.tsx.

Também será criado um documento de estilo CSS usando o STYLED COMPONENT para
o componente Tag, src/components/Button/styles.ts


## Mod 35 alua 5 - Componentize - Parte II -

Será criado agora o Card de Produto que também como as TAGS e BOTÕES serão
usados em demais componentes.

Será criada o componente Produto em src/components/Product/index.tsx também um
documento de estilo CSS usando o STYLED COMPONENT src/components/Product/styles.ts

Como nesta aplicação tem o componete, Lista de Produtos que é um conjunto de
componentes Product agrupados em uma linha com 4 elementos.

Sendo assim seguindo o padrão é criado os documentos
src/components/ProductList/index.tsx e o src/components/ProductList/styles.ts


## Mod 35 alua 6 - Componentize - Parte III -

O componente Produto receberá uma string para cada campo de seus dados.
Dessa forma a aplicação se torna mais dinâmica.


## Mod 35 alua 7 - Construa as páginas -

Criaremos páginas. Clicando em botões irá ocorrer a mudança de página.
As mudanças ocorreram no documento App.tsx .

Será criado uma pasta uma pasta 'pages', onde as páginas da aplicação
estarão.


Página - HOME

A primeira página da aplicação será a página HOME. Então é criada o seu
correspondente componente; src/pages/Home/index.tsx. Será transferido
para este documento todo o conteúdo renderizado (o conteúdo dentro de return)
na aplicação até agora.

As chamada do conteúdo da página HOME e as demais são chamadas no documento
src/routes.tsx e este documento será chamada pelo documento src/routes.tsx

Será criada um documento src/models/games.ts , onde o componente irá ler
os dados de suas variáveis em vez se serem preenchidos no próprio componente.
Assim permitindo que este dados sejam preenchidos de forma dinâmica ao
manipular o documento games.ts.


Página - CATEGORIES

Sera criada também a página de Categorias que é uma listagem de produtos
separada por categorias.

A página CATEGORIES é criada src/pages/Categories/index.tsx


## Mod 35 alua 8 - Construa o Rodapé -

O Rodapé e o Header são os dois componentes que estarão em toda a aplicação

Criaremos para o Rodapé o seguinte documento src/components/Rodape/index.tsx
e também o seu STYLE COMPONENT, src/components/Rodape/styles.ts

O Componente Rodapé foi inserido em src/App.tsx


# Mod 36 alua 1 - Crie a página de detalhes -

Vamos criar mais uma pagina o que significa um componente dentro
de pages que será adiconado dentro do documento src/routes.tsx


# Mod 36 alua 2 - Componentize - Parte I -

# Mod 36 alua 3 - Componentize - Parte II -

É feito uma a página do produto do jogo Hogwarts. Foi usado o
mesmo esquema de fundo preto e card cinza e vice-versa.


# Mod 36 alua 4 - Crie a galeria - Parte I -

É criado a disposição para do itens que compõe o componente Galeria
que esta dentro do componente ProductPainel.


## Mod 36 alua 5 - Crie a galeria - Parte II -

Foi construida dentro da página do produto do jogo Hogwarts.
A última seção antes do rodapé. A seção de galeria.

Ajustes foram feitos para se adequar as imagens aos quadros de
cada produto o zoom para a imagem e o play para o vídeo.

Um pop-up é criado


## Mod 36 alua 6 - Crie a galeria - Parte III -

Nesta parte vai ser feita modificações do Pop-Up para que assuma
o comportamento adequado para um pop-up.

O Pop-Up pode ser um video ou imagem clicando no botão de fechar
ou fora do campo o pop-up fecha.


## Mod 36 alua 7 - Integre com a API - Parte I -

Usaremos uma API para substituir o conteúdo dentro dos componente


## Mod 36 alua 8 - Integre com a API - Parte II -

Apredemos a usar a uma estrutura condional no React e integrar Api(s)


-----------------------------------------------------------------------
# Projeto 6 Parte 3
-----------------------------------------------------------------------

Criaremos a página do carrinho de compras da loja virtual e fazer todo o
mecanismo para adicionar os produtos ao carrinho de compras e soma do
valor a ser pago.

## Mod 37 aula 1 - Configure o Redux -
É necessário instalar React-Redux e Redux ToolKit.

npm install --save @reduxjs/toolkit react-redux
Instala o React Toolkit nas dependências do documento package.json .

Sera criado a estrutura da manipulação de estados e seus dados usado na
tecnologia redux toolkit.

A pasta store onde fica o RootReducer representada pelo documento src/store/index.tsx .

src/store/index.tsx
--------------------------------------------------------------------
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

/*
  Retorna o tipo de dado para o RootReducer.
  'typeof': função do react que retorna o tipo da variavel.
*/
export type RootReducer = ReturnType<typeof store.getState>

--------------------------------------------------------------------

Ainda dentro da pasta store tem a pasta reducers que possui o documento
cart.ts que é o reducer do carrinho de compras


src/store/reducers/cart.ts
------------------------------------------------------------------------
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

//----------- Tipo criado para receber o objeto Game -----------//
type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}
//----------- ------------------------------------- -----------//

// createSlice = um pedaço do estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  //funções que alterarão o carrinho
  reducers: {
    // add: funçao que recebe o estado e ação que tem
    //      o item adicionado ao carrinho
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer

------------------------------------------------------------------------


Dentro de App.tsx é importado:
import { store } from './store'
import { Provider } from 'react-redux'

No retorno de App.tsx o Provider tem que ser colocado como o elemento pai.
Este tem a propriedade store que recebe o index.tsx de src/store/index.tsx
que é o RootRedux.


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}


## Mod 37 aula 2 - Faça requisições com o RTK Query -

Para fazer as simulações de requisição é usado o RTK Query. É criado uma
pasta sevices com o documento api.ts. Este é uma API para requisições HTTPS.

src/services/api.ts
------------------------------------------------------------------
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
    })
  })
})
// hook criado para acesar o endereço de destaque do jogo
export const { useGetDestaqueJogoQuery } = api
export default api
------------------------------------------------------------------


O documento store/index.tsx sofre algumas modificações para integrar com a API

src/store/index.tsx
---------------------------------------------------------------------
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
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware().concat(api.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
---------------------------------------------------------------------

Desta forma a requisição feita no componente Banner é alterada mudando isso:

src/components/Banner/index.tsx
----------------------------------------------------------------------------
const [game, setGame] = useState<Game>()
useEffect(() => {

    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])
  ----------------------------------------------------------------------------

Para isso:

src/components/Banner/index.tsx
----------------------------------------------------------------------------
import { useGetDestaqueJogoQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetDestaqueJogoQuery()
----------------------------------------------------------------------------

O mesmo processo vai ser criado nas requisições da Home e ProductPainel

src/pages/Home/index.tsx
--------------------------------------------------------------------------
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
--------------------------------------------------------------------------




src/components/ProductPainel
--------------------------------------------------------------
// useParams : um paramento antes da URL final um dado cada
// paramentro determina um produto final
import { useParams } from 'react-router-dom'

//Componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Galeria from '../../components/Galeria'

// imagens
import aluna from '../../assets/images/menina.png'

// requisições da API
import { useGetIdJogoQuery } from '../../services/api'

// Cada id e designado para um item
const ProductPainel = () => {
  const { id } = useParams()
  const { data: game } = useGetIdJogoQuery(id!)

  if (!game) {
    return <h3>Carregando ... </h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o Jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')} <br />
        </p>
      </Section>
      <Galeria
        defaultCover={aluna}
        nomeJogo="Rogwarts Legacy"
        items={game.media.gallery}
      />
    </>
  )
}
export default ProductPainel
--------------------------------------------------------------


## Mod 37 aula 3 - Crie o carrinho -

Será criado um componente para o carrinho de compras é será nomeado
de Cart. Com este nome o VS Code entende por padrão que se trata de
um carrinho de compras e o ícone da pasta muda para um carrinho de
compras de supermercado.

Neste componente tem um overlay; uma camada mais escura ao fundo com
transparência preta e a direita uma barra lateral com a lista dos
jogos adicionados ao carrinho.

O componente Cart aparecerá em toda aplicação sendo assim ele vai ser
incluido no documento App.tsx da seguinte maneira:

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart /> -------- Incluído ---------
      </BrowserRouter>
    </Provider>
  )
}


A implementação do componente Cart fica da seguinte maneira

src/components/Cart/index.tsx
-----------------------------------------------------------
//Componentes
import Button from '../Button'
import Tag from '../Tag'

//imagens
import starWars from '../../assets/images/star_wars.png'

//CSS
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

const Cart = () => (
  <CartContainer>
    {/* Overlay */}
    <Overlay></Overlay>
    {/* Barra Lateral */}
    <SideBar>
      <ul>
        <CartItem>
          <img src={starWars}></img>
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150.00</span>
          </div>
          <button type="button"></button>
        </CartItem>
        <CartItem>
          <img src={starWars}></img>
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150.00</span>
          </div>
          <button type="button"></button>
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button type="button" title="Clique aqui para adicionar um produto">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
-----------------------------------------------------------



src/components/Cart/styles.ts
-----------------------------------------------------------------
import styled from 'styled-components'

// Componentes
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

// Imagem
import fechar from '../../assets/images/fechar.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0px 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 32px;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 16px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.branca};
    font-weight: bold;
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
-----------------------------------------------------------------


## Mod 37 aula 3 - Adicione e remova produtos -

A forma na qual esta implementada o carrinho de compras ele aparece é
o único componente que exibido na aplicação sem uma maneira de voltar.

Para evitar isso mudaremos no seu arquivo de estilo o seu display para
o none e voltaremos para flex assim que a classe criada dentro do deste
arquivo chamada is-open é for acionada pelo reducer cart.ts através da
mudança de estado criada para alterar a classe is-open entre falso e verdadeiro.

src/components/Cart/styles.ts
----------------------------------------------
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none; ---- estado inicial ----
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex; ---- estado alterado ----
  }
`
----------------------------------------------

src/store/reducers/cart.ts
------------------------------------------------------
type CartState = {
  items: Game[]
  isOpen: boolean // + código acrescido
}

const initialState: CartState = {
  items: [],
  isOpen: false // + código acrescido
}
.
.
.
reducers: {
    // add: funçao que recebe o estado e ação que tem
    //      o item adicionado ao carrinho
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    // ------------ + códigos acrescidos
    //funções que abre e fecha o carrinho de compras
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
    // ------------ ------------
})

export const { add, open, close } = cartSlice.actions // + código acrescido
------------------------------------------------------

Em cart.ts é acrescido o estado isOpen que é lido no elemento pai do
carrinho de compras

src/components/Cart/index.tsx
---------------------------------------------------------------
// React Redux
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Cart = () => {

  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
---------------------------------------------------------------

O Comando que vai acionar o carrinho de compras será disparado no componente
Header. Sendo assim o componente Header sofrerá as seguintes alterações.

src/components/Header/index.tsx
-------------------------------------------------------------------------
// React Redux
import { useDispatch } from 'react-redux'
// open é o estado true para vísivel
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch() //dispara uma ação
  const openCart = () => {
    dispatch(open())
  }
  ....
  <CartButton onClick={openCart}>
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
-------------------------------------------------------------------------

No componente Header é acionado o carrinho de compra e no componente Cart ao
clicar no overlay do Cart para fechar o carrinho de compras.



src/components/Cart/index.ts
--------------------------------------------------------------
const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch() //dispara uma ação
  const closeCart = () => {
    dispatch(close())
  }
  return (
    // is-open classe do CSS que permite o cart ser vísivel
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {/* Overlay */}
      <Overlay onClick={closeCart}></Overlay>
--------------------------------------------------------------

Agora será adicionado um produto ao carrinho ao clicar no botão
ADICIONAR AO CARRINHO do componente Hero que está sentro do componente Produto.

src/components/Hero/index.tsx
-----------------------------------------------------------------
...
//React Redux
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => dispatch(add(game))
...

      <Button
        type="button"
        title="Adicionar Hogwarts Legacy ao Carrinho"
        variante="primario"
        onClick={addToCart} -- função adicionada ao carrinho
      >
      Adicionar ao Carrinho
      </Button>
-----------------------------------------------------------------

Agora será feita a atualização dos produtos adicionados ao Cart.
Essa implementação é feita no Header

src/components/Header/index.tsx
-----------------------------------------------------
...
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch() //dispara uma ação
  const { items } = useSelector((state: RootReducer) => state.cart) // lendo os estados de Cart
  const openCart = () => {
    dispatch(open())
  }
...
      <CartButton onClick={openCart}>
        {items.length} - produto(s) //retorna a quantidade de jogos adicionados
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
...
-----------------------------------------------------

Foi a adicionado a função do reducer do Cart, open. Agora ao adicionar
o produto ao carrinho de compras também abrirá o Cart.
Devido as seguintes alterações:

src/components/Hero/index.tsx
------------------------------------------------
...
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
...
------------------------------------------------

Agora será preenchido o carrinho de compras com base o que tem no estado
o que esta em items. Primeiramente adicionaremos o items que é a função
criada no reducer cart.ts que armazena os produtos adicionados pelo
carrinnho de compras no componente Cart. Também será feita alterações para
remover o produto do carrinho de compras

As seguintes alterações são feitas no reducer do carrinho de compras

src/store/reducers/cart.ts
------------------------------------------------------------

------------------------------------------------------------



e também no componente Cart

src/components/Cart/index.tsx
-----------------------------------------------------------------
...
// reduce: uma função que acumula os valores recebidos.
//         Função nativa do JavaScript.
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }
...
  <Prices>
    Total de {formataPreco(getTotalPrice())}{' '}
    <span>Em até 6x sem juros</span>
  </Prices>
...
-----------------------------------------------------------------

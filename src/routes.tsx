import { Route, Routes } from 'react-router-dom'

// Componentes
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPainel from './pages/ProductPainel'

// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product" element={<ProductPainel />} />
  </Routes>
)

export default Rotas

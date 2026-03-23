import { Route, Routes } from 'react-router-dom'

// Componentes
import Home from './pages/Home'
import Categories from './pages/Categories'

// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas

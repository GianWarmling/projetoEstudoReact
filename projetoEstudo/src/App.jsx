import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import CreateProduct from "./pages/CreateProduct"
import EditProduct from "./pages/EditProduct"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/create" element={<CreateProduct />}/>
          <Route path="/editar/:id" element={<EditProduct />}/>
          <Route path="/produto/:id" element={<ProductDetails />}/>
          <Route path="/carrinho" element={<Cart />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

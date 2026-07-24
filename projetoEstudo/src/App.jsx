import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import CreateProduct from "./pages/CreateProduct"
import EditProduct from "./pages/EditProduct"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderSucess from "./pages/OrderSucess"
import Orders from "./pages/Orders"
import OrderDetails from "./pages/OrderDetails"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/produto/:id" element={<ProductDetails />}/>
          <Route path="/carrinho" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/pedido-sucesso" element={<OrderSucess />}/>
          <Route path="/login" element={<Login />}/>

          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <PrivateRoute>
                <EditProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/pedidos"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
          <Route
            path="/pedidos/:id"
            element={
              <PrivateRoute>
                <OrderDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
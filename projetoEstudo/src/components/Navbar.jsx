import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navbar() {
    const {cartItems} = useContext(CartContext)
    const totalItems = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)

    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/create">Cadastrar Produto</Link>
                </li>
                <li>
                    <Link to="/carrinho">Carrinho ({totalItems})</Link>
                </li>
                <li>
                    <Link to="/pedidos">Pedidos</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;
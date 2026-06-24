import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navbar() {
    const { cartItems } = useContext(CartContext)
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
                    BLUSAS<span className="text-gray-400">.co</span>
                </Link>
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <li>
                        <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="hover:text-gray-900 transition-colors">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="hover:text-gray-900 transition-colors">Contato</Link>
                    </li>
                    <li>
                        <Link to="/create" className="hover:text-gray-900 transition-colors">Cadastrar Produto</Link>
                    </li>
                    <li>
                        <Link to="/pedidos" className="hover:text-gray-900 transition-colors">Pedidos</Link>
                    </li>
                    <li>
                        <Link
                            to="/carrinho"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                            Carrinho
                            <span className="bg-gray-900 text-white rounded-full aspect-square w-5 flex items-center justify-center text-xs leading-none shrink-0">
                                {totalItems}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
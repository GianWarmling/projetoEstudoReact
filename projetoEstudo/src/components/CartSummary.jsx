import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function CartSummary() {
    const { cartItems, clearCart } = useContext(CartContext)
    const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity
    }, 0)

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-sm ml-auto">
            <h2 className="font-semibold text-gray-900 mb-4">Resumo do Pedido</h2>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Produtos</span>
                <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3 mb-6">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
            </div>

            <Link to="/checkout">
                <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition-colors">
                    Finalizar Compra
                </button>
            </Link>

            <button
                onClick={clearCart}
                className="w-full mt-3 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
                Limpar Carrinho
            </button>
        </div>
    );
}

export default CartSummary;
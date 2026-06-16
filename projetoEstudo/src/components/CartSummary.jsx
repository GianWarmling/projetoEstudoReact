import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function CartSummary() {
    const {cartItems, clearCart} = useContext(CartContext)
    const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity
    }, 0)

    return (
        <div>
            <h2>Resumo do Pedido</h2>
            <p>
                Produtos: {cartItems.length}
            </p>
            <h3>
                Total: R$ {total.toFixed(2)}
            </h3>
            <button onClick={clearCart}>
                Limpar Carrinho
            </button>
            <Link to="/checkout">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
}

export default CartSummary;






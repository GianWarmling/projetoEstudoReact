import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartSummary from "../components/CartSummary";

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext)

    if (cartItems.length === 0) {
        return (
            <div>
                <h1>Meu Carrinho</h1>
                <p>Seu carrinho está vazio.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Meu Carrinho</h1>

            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <strong>R$ {item.price}</strong>

                    <p>
                        Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    
                    <button onClick={() => removeFromCart(item.id)}>
                        Remover Produto
                    </button>
                </div>
            ))}
            <CartSummary />
        </div>
    );
}

export default Cart;
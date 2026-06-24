import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartSummary from "../components/CartSummary";
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Meu Carrinho</h1>
                <p className="mt-2 text-gray-500">Seu carrinho está vazio.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Meu Carrinho</h1>

            <div className="bg-white border border-gray-200 rounded-xl px-6">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                        onRemove={removeFromCart}
                    />
                ))}
            </div>

            <div className="mt-8">
                <CartSummary />
            </div>
        </div>
    );
}

export default Cart;
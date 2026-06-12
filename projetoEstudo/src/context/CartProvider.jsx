import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id)
            if (itemExists) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1
                }
            ]
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)
        )
    }

    const increaseQuantity = (id) => {
        setCartItems((prevItems) => prevItems.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        )
    }

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) => prevItems.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider
            value={{ 
                cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart 
            }}
            >
            {children}
        </CartContext.Provider>
    )
}
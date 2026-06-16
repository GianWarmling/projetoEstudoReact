import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

function Checkout() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useContext(CartContext)

    const total = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            alert("Informe seu nome!")
            return
        }
        if (!email.trim()) {
            alert("Informe seu email!")
            return
        }
        if (!email.includes("@")) {
            alert("Email inválido!")
            return
        }
        if (!phone.trim()) {
            alert("Informe seu telefone!")
            return
        }
        if (!address.trim()) {
            alert("Informe seu endereço!")
            return
        }

        console.log({
            name,
            email,
            phone,
            address
        })
        alert("Pedido enviado!")
    }

    return (
        <div>
            <h1>Checkout</h1>

            <h2>Resumo do Pedido</h2>

            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>

                            <td>
                                <button onClick={() => decreaseQuantity(item.id)}>
                                    -
                                </button>
                                {item.quantity}
                                <button onClick={() => increaseQuantity(item.id)}>
                                    +
                                </button>
                            </td>

                            <td>
                                R$ {item.price.toFixed(2)}
                            </td>

                            <td>
                                R$ {(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td>
                                <button onClick={() => removeFromCart(item.id)}>
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>
                Total R$ {total.toFixed(2)}
            </h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu Nome" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="text" placeholder="Digite seu Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Endereço</label>
                    <input type="text" placeholder="Digite seu Endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit">Finalizar Pedido</button>
            </form>
        </div>
    );
}

export default Checkout;
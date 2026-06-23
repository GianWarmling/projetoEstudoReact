import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../services/orderService";

function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders().then((data) => {
            setOrders(data)
        })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    console.log(orders)

    return (
        <div>
            <h1>Pedidos</h1>

            {orders.length === 0 ? (
                <p>Nenhum pedido encontrado.</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id}>
                        <h3>Pedido #{order.id}</h3>
                        
                        <p>
                            <strong>Cliente:</strong> {order.customerName}
                        </p>

                        <p>
                            <strong>Email:</strong> {order.customerEmail}
                        </p>

                        <p>
                            <strong>Total:</strong> R$ {order.total.toFixed(2)}
                        </p>

                        <h4>Itens</h4>

                        <ul>
                            {order.items.map((item) => (
                                <li key={item.id}>
                                    Produto ID: {item.productId} |
                                    Quantidade: {item.quantity} |
                                    Valor: R$ {item.unitPrice.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <Link to={`/pedidos/${order.id}`}>Ver Detalhes</Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;
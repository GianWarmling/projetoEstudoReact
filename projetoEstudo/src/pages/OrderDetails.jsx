import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderService";

function OrderDetails() {
    const { id } = useParams()
    const [order, setOrder] = useState(null)

    useEffect(() => {
        getOrderById(id)
            .then((data) => {
                setOrder(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    if (!order) {
        return <p>Carregando pedido...</p>
    }

    return (
        <div>

            <div style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px"
            }}>
                <h1>Pedido #{id}</h1>

                <p>
                    <strong>Cliente:</strong> {order.customerName}
                </p>
                <p>
                    <strong>Email:</strong> {order.customerEmail}
                </p>
                <p>
                    <strong>Telefone:</strong> {order.customerPhone}
                </p>
                <p>
                    <strong>Endereço:</strong> {order.address}
                </p>
                <p>
                    <strong>Total:</strong> R$ {order.total.toFixed(2)}
                </p>
            </div>
            <div>
                <h2>Itens do Pedido</h2>
                
                {order.items.map((item) => (
                    <div key={item.id} style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px",
                        marginBottom: "20px"
                    }}>
                        <p>
                            <strong>Produto ID:</strong> {item.productId}
                        </p>
                        <p>
                            <strong>Quantidade:</strong> {item.quantity}
                        </p>
                        <p>
                            <strong>Valor Unitário:</strong>
                            {" "}
                            R$ {item.unitPrice.toFixed(2)}
                        </p>
                        <p>
                            <strong>Subtotal:</strong>
                            {" "}
                            R$ {(item.unitPrice * item.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}

            </div>
            <div style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px"
            }}>
                <h2>Resumo do Pedido</h2>

                <p>
                    Total de produtos:
                    {" "}
                    {order.items.reduce(
                        (acc, item) => acc + item.quantity, 0
                    )}
                </p>
                <p>
                    Total de tipos de produtos:
                    {" "}
                    {order.items.length}
                </p>
                <p>
                    Valor total:
                    {" "}
                    <strong>R$ {order.total.toFixed(2)}</strong>
                </p>
            </div>
        </div>
    );
}

export default OrderDetails;
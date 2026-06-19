import { Link, useLocation } from "react-router-dom";

function OrderSucess() {
    const location = useLocation()
    const orderId = location.state?.orderId

    return (
        <div>
            <h1>Pedido realizado com sucesso!</h1>

            <p>
                Número do pedido: <strong>#{orderId}</strong>
            </p>
            <p>Obrigado pela sua compra.</p>

            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    );
}

export default OrderSucess;
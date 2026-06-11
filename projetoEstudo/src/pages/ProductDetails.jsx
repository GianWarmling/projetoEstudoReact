import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {cartItems, addToCart} = useContext(CartContext)
    console.log(cartItems)

    const handleAddToCart = () => {
        addToCart(product)
        alert("Produto adicionado ao carrinho!")
    }

    useEffect(() => {
        getProductById(id)
        .then((data) => {
            setProduct(data)
        })
        .catch((error) => {
            console.error(error)
            alert("Erro ao buscar produto!")
        })
        .finally(() => {
            setLoading(false)
        })
    }, [id])

    if(loading){
        return <p>Carregando produto...</p>
    }

    if(!product){
        return <p>Produto não encontrado!</p>
    }

    return ( 
        <div>
            <img src={`/src/assets/${product.imageUrl}`} alt={product.name} style={{
                width: "300px",
                height: "350px",
                objectFit: "cover"
            }} />

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <strong>R$ {product.price}</strong>

            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
     );
}

export default ProductDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

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
        </div>
     );
}

export default ProductDetails;
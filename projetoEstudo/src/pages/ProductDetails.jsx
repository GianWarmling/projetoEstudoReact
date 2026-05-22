import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://localhost:7111/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)
            setLoading(false)
        })
        .catch((err) => {
            console.error(err)
            alert("Erro ao buscar produto!")
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
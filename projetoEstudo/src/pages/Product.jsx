import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) {
        return <p>Carregando produto...</p>
    }

    if (!product) {
        return <p>Produto não encontrado</p>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <strong>R$ {product.price}</strong>
        </div>
    );
}

export default Product;
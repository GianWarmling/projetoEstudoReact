import {useParams} from 'react-router-dom'

function Product() {
    const {id} = useParams()

    const product = products.find((p) => p.id === Number(id))

    if(!product) {
        return <p>Produto não encontrado</p>
    }

    return ( 
        <div>
            <h1>{product.nome}</h1>
            <p>{product.description}</p>
            <strong>R$ {product.price}</strong>
        </div>
     );
}

export default Product;
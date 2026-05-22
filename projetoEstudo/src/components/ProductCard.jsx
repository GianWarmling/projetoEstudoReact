import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
    return ( 
        <div>
            <img src={`/src/assets/${product.imageUrl}`} alt={product.name} style={{
                width: "150px",
                height: "200px",
                objectFit: "cover"
            }} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <strong>R$ {product.price}</strong>

            <Link to={`/produto/${product.id}`}>
                <button>Ver produto</button>
            </Link>

            <Link to={`/editar/${product.id}`}>
                <button>Editar</button>
            </Link>

            <button onClick={() => onDelete(product.id)}>Excluir</button>
        </div>
     );
}

export default ProductCard;
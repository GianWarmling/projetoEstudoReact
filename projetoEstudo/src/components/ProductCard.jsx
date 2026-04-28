import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return ( 
        <div>
            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <strong>R$ {product.price}</strong>

            <Link to={`/produto/${product.id}`}>
                <button>Ver produto</button>
            </Link>
        </div>
     );
}

export default ProductCard;
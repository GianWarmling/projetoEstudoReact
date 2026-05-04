import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7111/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error("Erro: ", err));
    }, []);

    return ( 
        <div>
            <h1>Bem-vinda à nossa loja</h1>

            <p>Confira nossas blusas disponíveis:</p>

            <section>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </section>
        </div>
     );
}

export default Home;
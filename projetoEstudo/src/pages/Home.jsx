import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
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
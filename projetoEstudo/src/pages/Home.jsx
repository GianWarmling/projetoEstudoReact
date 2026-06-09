import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, deleteProduct } from "../services/productService";

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?")

        if (!confirmDelete) {
            return
        }
        try {
            await deleteProduct(id)
            setProducts((prevProducts) =>
                prevProducts.filter(
                    (product) => product.id !== id
                )
            );
            alert("Produto excluído com sucesso!")
        }
        catch (error) {
            console.error(error);
            alert("Erro ao excluir produto!")
        }
    };

    if (loading) {
        return <p>Carregando produtos...</p>
    }

    return (
        <div>
            <h1>Bem-vinda à nossa loja</h1>

            <p>Confira nossas blusas disponíveis:</p>

            <section>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onDelete={handleDelete} />
                ))}
            </section>
        </div>
    );
}

export default Home;
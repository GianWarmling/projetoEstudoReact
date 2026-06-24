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
        return (
            <div className="flex items-center justify-center py-32">
                <p className="text-gray-500 text-lg">Carregando produtos...</p>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Bem-vinda à nossa loja
                </h1>
                <p className="mt-2 text-gray-500">
                    Confira nossas blusas disponíveis:
                </p>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onDelete={handleDelete} />
                ))}
            </section>
        </div>
    );
}

export default Home;
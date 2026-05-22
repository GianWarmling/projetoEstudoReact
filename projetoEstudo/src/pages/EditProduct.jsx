import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://localhost:7111/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name)
                setDescription(data.description)
                setPrice(data.price)
                setImageUrl(data.imageUrl)

                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                alert("Erro ao buscar produto!")

                setLoading(false)
            })
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateProduct = {
            id: Number(id),
            name,
            description,
            price: parseFloat(price),
            imageUrl
        }

        try {
            const response = await fetch(`https://localhost:7111/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateProduct)
            }
            )
            if(!response.ok){
                throw new Error("Erro ao atualizar produto!")
            }
            alert("Produto atualizado com sucesso!")
            navigate("/")
        }
        catch(error){
            console.error(error)
            alert("Erro o atualizar produto!")
        }
    }
    
    if(loading){
        return <p>Carregando produto..</p>
    }

    return (
        <div>
            <h1>Editar Produto</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                    <label>Descrição:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <div>
                    <label>Preço:</label>
                    <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div>
                    <label>Imagem URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </div>

                <button type="submit">Atualizar Produto</button>
            </form>
        </div>
    );
}

export default EditProduct;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthHeaders } from "../services/productService";

function CreateProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        const product = {
            name,
            description,
            price: parseFloat(price),
            imageUrl
        }

        try {
            const response = await fetch("https://localhost:7111/api/products", {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(product)
            })

            if(!response.ok) {
                throw new Error("Erro ao criar produto!")
            }

            alert("Produto criado com sucesso!")

            navigate("/")
        } 
        catch(error) {
            console.error(error)
            alert("Erro ao criar produto!")
        }
    }

    return ( 
        <div>
            <h1>Cadastrar Produto</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" value={price} step="0.01" onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </div>
     );
}

export default CreateProduct;
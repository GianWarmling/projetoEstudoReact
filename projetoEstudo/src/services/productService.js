const API_URL = "https://localhost:7111/api/products";

export async function getProducts() {
    const response = await fetch(API_URL)

    if(!response.ok) {
        throw new Error("Erro ao buscar produtos!")
    }
    return await response.json()
}

export async function getProductById(id) {
    const response = await fetch(`${API_URL}/${id}`)
    if(!response.ok) {
        throw new Error("Produto não encontrado!")
    }
    return await response.json()
}

export async function deleteProduct(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    if(!response.ok) {
        throw new Error("Erro ao excluir produto!")
    }
}
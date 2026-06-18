const API_URL = "https://localhost:7111/api/Orders"

export async function createOrder(order) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
    if(!response.ok) {
        throw new Error("Erro ao criar pedido!")
    }
    return await response.json()
}
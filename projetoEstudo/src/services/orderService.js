const API_URL = "https://localhost:7111/api/Orders"

function getAuthHeaders() {
    const token = localStorage.getItem("token")
    return {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` })
    }
}

export async function createOrder(order) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
    if (!response.ok) {
        throw new Error("Erro ao criar pedido!")
    }
    return await response.json()
}

export async function getOrders() {
    const response = await fetch(API_URL, {
        headers: getAuthHeaders()
    })

    if (!response.ok) {
        throw new Error("Erro ao buscar pedidos!")
    }
    return await response.json()
}

export async function getOrderById(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        headers: getAuthHeaders()
    })
    if (!response.ok) {
        throw new Error("Erro ao buscar pedido!")
    }
    return await response.json()
}
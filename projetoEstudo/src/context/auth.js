const API_URL = "https://localhost:7111/api/Auth"

export async function login(email, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        throw new Error("Email ou senha inválidos!")
    }

    return await response.json()
}
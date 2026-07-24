import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../context/auth"
import { useAuth } from "../context/useAuth"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login: saveToken } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")

        try {
            const data = await login(email, password)
            saveToken(data.token)
            navigate("/pedidos")
        } catch (err) {
            console.error(err)
            setError("Email ou senha inválidos!")
        }
    }

    return (
        <div>
            <h1>Login administrativo</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login
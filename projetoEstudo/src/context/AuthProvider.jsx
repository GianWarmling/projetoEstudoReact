import { useState } from "react"
import { AuthContext } from "./AuthContext"

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    )

    function saveToken(newToken) {
        localStorage.setItem("token", newToken)
        setToken(newToken)
    }

    function logout() {
        localStorage.removeItem("token")
        setToken(null)
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                isAuthenticated: !!token,
                login: saveToken,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
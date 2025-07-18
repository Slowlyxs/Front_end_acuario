import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./hooks/useAuth" // Importa el AuthProvider

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

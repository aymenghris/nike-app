import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./app"

const container = document.getElementById("root")

if (container) {
    createRoot(container).render(
        <StrictMode>
            <App />
        </StrictMode>,
    )
} else {
    throw new Error("Failed to find the root element. Check your index.html.")
}

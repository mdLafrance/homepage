import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter >
    )
}

export default App

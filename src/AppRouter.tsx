import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Streams from "./pages/Streams";
import PrivateRoute from "./components/PrivateRoute";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/streams" element={<Streams />} />

            {/* Protected Routes */}
            <Route path="/profile" element={
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            } />

            {/* Dynamic Route - Exercise 1 & 2 */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<p>404 - Pagina non trovata</p>} />
        </Routes>
    );
}
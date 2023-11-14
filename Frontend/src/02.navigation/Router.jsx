import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            
            
            
            // redirection automatique si la page n'existe pas
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;

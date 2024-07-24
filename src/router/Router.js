import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import FicheLogement from "../pages/Fiche-logement"
import Error404 from "../pages/Error-404"
import APropos from "../pages/A-propos"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Router = () => (
    <BrowserRouter>
    <Header /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<Error404 />} />        
        </Routes>
    <Footer />
    </BrowserRouter>
)

export default Router
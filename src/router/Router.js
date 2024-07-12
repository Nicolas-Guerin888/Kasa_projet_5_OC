import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/" Component={Home}/>
            <Route path="/fiche-logement" Component={FicheLogement}/>
            <Route path="/a-propos" Component={APropos} />
            <Route path="/*" Component={Error404}/>
        </Routes>
    <Footer />
    </BrowserRouter>
)

export default Router
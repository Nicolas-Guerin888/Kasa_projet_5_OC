import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import FicheLogement from "../pages/Fiche-logement"
import Error404 from "../pages/Error-404"
import APropos from "../pages/A-propos"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/fiche-logement" Component={FicheLogement}/>
            <Route path="/error-404" Component={Error404}/>
            <Route path="/a-propos" Component={APropos} />
        </Routes>
    </BrowserRouter>
)

export default Router
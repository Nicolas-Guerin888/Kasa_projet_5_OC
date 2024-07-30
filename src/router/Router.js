import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Error404 from "../pages/Error-404"
import About from "../pages/About"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HouseSheet from "../pages/HouseSheet";

const Router = () => (
    <BrowserRouter>
    <Header /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/house-sheet/:id" element={<HouseSheet />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    <Footer />
    </BrowserRouter>
)

export default Router
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ProductDetail" element={<ProductDetail/>}/>
            </Routes>
        </>
    );
}

export default App;
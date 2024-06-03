import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./components/Login.jsx";
import BottomBox from "./components/BottomBox.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/BookDetail*" element={<BookDetail/>}/>
                <Route path="/ProductDetail" element={<ProductDetail/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;
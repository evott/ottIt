import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./components/Login.jsx";
import Shopping from "./components/Shopping.jsx";

import BottomBox from "./components/BottomBox.jsx";
import ModalPopup from "./components/ModalPopup.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <ModalPopup/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/BookDetail/:id" element={<BookDetail />} />
                <Route path="/ProductDetail" element={<ProductDetail/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Shopping" element={<Shopping/>}/>


            </Routes>
        </>
    );
}

export default App;
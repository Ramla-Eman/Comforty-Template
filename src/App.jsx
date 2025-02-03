import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import FAQ from "./pages/FAQ";
import { CartProvider } from "./CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

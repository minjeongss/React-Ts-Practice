import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import DetailProduct from "./components/DetailProduct";

import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/product" element={<ProductPage />}>
          <Route path="" element={<DetailProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

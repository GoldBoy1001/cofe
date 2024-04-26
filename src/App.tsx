import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Products from "./pages/Products";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AboutCard from "./pages/AboutCard.tsx";
function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<AboutCard />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

// import { BrowserRouter, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ContainerProducts from "./components/ContainerProducts";
import DetailProduct from "./components/DetailProduct";
import IconCart from "./components/IconCart";

import MyNavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <IconCart />
        <Routes>
          <Route path="/" element={<ContainerProducts />} />
          <Route path="/Detail/:id" element={<DetailProduct />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
